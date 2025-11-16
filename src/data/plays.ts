// Type definitions
export interface Line {
  line: number;
  speaker: string;
  text: string;
}

export interface SceneData {
  playTitle: string;
  lines: Line[];
  sceneDescription?: string;
  autoInsights?: { [lineNumber: number]: string };
}

// Hamlet, Act 3, Scene 1 - The famous soliloquy
const hamlet_3_1: SceneData = {
  playTitle: 'Hamlet',
  sceneDescription: 'A room in the castle. Hamlet delivers his famous "To be or not to be" soliloquy.',
  lines: [
    { line: 1, speaker: 'HAMLET', text: 'To be, or not to be, that is the question:' },
    { line: 2, speaker: '', text: 'Whether \'tis nobler in the mind to suffer' },
    { line: 3, speaker: '', text: 'The slings and arrows of outrageous fortune,' },
    { line: 4, speaker: '', text: 'Or to take arms against a sea of troubles' },
    { line: 5, speaker: '', text: 'And by opposing end them. To die—to sleep,' },
    { line: 6, speaker: '', text: 'No more; and by a sleep to say we end' },
    { line: 7, speaker: '', text: 'The heart-ache and the thousand natural shocks' },
    { line: 8, speaker: '', text: 'That flesh is heir to: \'tis a consummation' },
    { line: 9, speaker: '', text: 'Devoutly to be wish\'d. To die, to sleep;' },
    { line: 10, speaker: '', text: 'To sleep, perchance to dream—ay, there\'s the rub:' },
    { line: 11, speaker: '', text: 'For in that sleep of death what dreams may come,' },
    { line: 12, speaker: '', text: 'When we have shuffled off this mortal coil,' },
    { line: 13, speaker: '', text: 'Must give us pause—there\'s the respect' },
    { line: 14, speaker: '', text: 'That makes calamity of so long life.' },
  ],
  autoInsights: {
    1: "🎭 The most famous opening in all of Shakespeare! Notice the balanced antithesis: 'to be' vs 'not to be'—this sets up the entire speech's meditation on existence vs non-existence.",
    4: "⚔️ A brilliant mixed metaphor: how do you 'take arms' against a 'sea'? This illogical image mirrors Hamlet's confused mental state.",
    10: "💭 'Ay, there's the rub'—a bowling term! Shakespeare uses everyday language here. The 'rub' was an obstacle on the bowling green. Notice how he makes philosophy accessible.",
    12: "🌀 'Mortal coil' = the turmoil of life. 'Coil' meant 'turmoil' in Elizabethan English. 'Shuffle off' suggests casting aside like old clothes—death as liberation."
  }
};

// Add more scenes here as needed
// For example: hamlet_1_1, romeo_juliet_2_2, macbeth_1_5, etc.

// Scene lookup function
export const getScene = (playId: string, act: number, scene: number): SceneData | null => {
  const key = `${playId}_${act}_${scene}`;
  
  const scenes: { [key: string]: SceneData } = {
    'hamlet_3_1': hamlet_3_1,
    // Add more scenes here as you create them
  };

  return scenes[key] || null;
};
