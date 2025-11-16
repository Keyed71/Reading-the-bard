/**
 * Parser for Folger Shakespeare Library text format
 * Converts plain text plays into the app's data structure
 */

const fs = require('fs');
const path = require('path');

function parseFolgerPlay(fileContent) {
  const lines = fileContent.split('\n');
  const play = {
    title: '',
    acts: []
  };

  let currentAct = null;
  let currentScene = null;
  let currentSpeaker = '';
  let currentSpeech = [];
  let lineNumber = 0;

  function saveSpeech() {
    if (currentSpeech.length > 0 && currentScene) {
      currentScene.speeches.push({
        speaker: currentSpeaker,
        lines: currentSpeech.map(l => ({ ...l }))
      });
      currentSpeech = [];
    }
  }

  function isSpeakerLine(line) {
    // Speaker line: starts with uppercase letter, has two spaces before dialogue
    return /^[A-Z][A-Z\s,']+\s{2,}/.test(line);
  }

  function isStageDirection(line) {
    const trimmed = line.trim();
    return trimmed.startsWith('[') || trimmed.endsWith(']');
  }

  function isContinuationLine(line) {
    // Continuation lines start with lowercase or are indented
    return line.length > 0 && !isSpeakerLine(line) && !isStageDirection(line) && line.trim().length > 0;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Get play title
    if (!play.title && trimmed && !trimmed.startsWith('by') && i < 10) {
      play.title = trimmed;
      continue;
    }

    // Act marker
    if (trimmed.startsWith('ACT ')) {
      saveSpeech();
      const actNum = parseInt(trimmed.match(/ACT (\d+)/)?.[1] || '0');
      currentAct = {
        act: actNum,
        scenes: []
      };
      play.acts.push(currentAct);
      continue;
    }

    // Scene marker
    if (trimmed.startsWith('Scene ')) {
      saveSpeech();
      const sceneNum = parseInt(trimmed.match(/Scene (\d+)/)?.[1] || '0');
      currentScene = {
        scene: sceneNum,
        speeches: [],
        stageDirections: []
      };
      if (currentAct) {
        currentAct.scenes.push(currentScene);
      }
      lineNumber = 0;
      continue;
    }

    // Stage directions
    if (isStageDirection(line)) {
      saveSpeech();
      if (currentScene) {
        currentScene.stageDirections.push({
          position: currentScene.speeches.length,
          text: trimmed.slice(1, -1)
        });
      }
      continue;
    }

    // Speaker line (speaker name followed by dialogue)
    if (isSpeakerLine(line) && currentScene) {
      saveSpeech();
      // Split on first occurrence of 2+ spaces
      const parts = line.split(/\s{2,}/);
      currentSpeaker = parts[0].trim();
      const dialogueText = parts.slice(1).join('  ').trim();

      if (dialogueText) {
        lineNumber++;
        currentSpeech.push({
          lineNumber: lineNumber,
          text: dialogueText
        });
      }
      continue;
    }

    // Continuation line (dialogue continuing from previous speaker)
    if (isContinuationLine(line) && currentSpeaker && currentScene) {
      lineNumber++;
      currentSpeech.push({
        lineNumber: lineNumber,
        text: trimmed
      });
      continue;
    }

    // Empty line might signal end of speech
    if (!trimmed && currentSpeech.length > 0) {
      saveSpeech();
    }
  }

  // Save any remaining speech
  saveSpeech();

  return play;
}

function generateTypeScript(play) {
  let output = `// Generated from Folger Shakespeare Library text\n\n`;
  output += `export interface SpeechLine {\n`;
  output += `  lineNumber: number;\n`;
  output += `  text: string;\n`;
  output += `}\n\n`;
  output += `export interface Speech {\n`;
  output += `  speaker: string;\n`;
  output += `  lines: SpeechLine[];\n`;
  output += `}\n\n`;
  output += `export interface StageDirection {\n`;
  output += `  position: number;\n`;
  output += `  text: string;\n`;
  output += `}\n\n`;
  output += `export interface SceneData {\n`;
  output += `  playTitle: string;\n`;
  output += `  act: number;\n`;
  output += `  scene: number;\n`;
  output += `  speeches: Speech[];\n`;
  output += `  stageDirections: StageDirection[];\n`;
  output += `  autoInsights?: { [lineNumber: number]: string };\n`;
  output += `}\n\n`;

  const playId = play.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  for (const act of play.acts) {
    for (const scene of act.scenes) {
      const varName = `${playId}_${act.act}_${scene.scene}`;
      output += `const ${varName}: SceneData = {\n`;
      output += `  playTitle: '${play.title}',\n`;
      output += `  act: ${act.act},\n`;
      output += `  scene: ${scene.scene},\n`;
      output += `  speeches: ${JSON.stringify(scene.speeches, null, 2)},\n`;
      output += `  stageDirections: ${JSON.stringify(scene.stageDirections, null, 2)},\n`;
      output += `  autoInsights: {}\n`;
      output += `};\n\n`;
    }
  }

  // Generate lookup object
  output += `export const scenes: { [key: string]: SceneData } = {\n`;
  for (const act of play.acts) {
    for (const scene of act.scenes) {
      const key = `${playId}_${act.act}_${scene.scene}`;
      output += `  '${key}': ${key},\n`;
    }
  }
  output += `};\n\n`;

  // Generate getScene function
  output += `export const getScene = (playId: string, act: number, scene: number): SceneData | null => {\n`;
  output += `  const key = \`\${playId}_\${act}_\${scene}\`;\n`;
  output += `  return scenes[key] || null;\n`;
  output += `};\n`;

  return output;
}

// Main execution
if (require.main === module) {
  const inputFile = process.argv[2];

  if (!inputFile) {
    console.error('Usage: node parse-folger.js <input-file.txt>');
    process.exit(1);
  }

  const content = fs.readFileSync(inputFile, 'utf-8');
  const play = parseFolgerPlay(content);

  console.log(`Parsed: ${play.title}`);
  console.log(`Acts: ${play.acts.length}`);
  play.acts.forEach(act => {
    console.log(`  Act ${act.act}: ${act.scenes.length} scenes`);
  });

  const typescript = generateTypeScript(play);

  const outputFile = inputFile.replace('.txt', '-parsed.ts');
  fs.writeFileSync(outputFile, typescript);

  console.log(`\nGenerated TypeScript: ${outputFile}`);
}

module.exports = { parseFolgerPlay, generateTypeScript };
