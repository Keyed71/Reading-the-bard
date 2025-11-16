import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MessageCircle, ChevronLeft, ChevronRight, BookOpen, Info } from 'lucide-react';
import { getScene } from '../data/alls-well';
import { getSceneSynopsis } from '../data/play-metadata';

const AllsWellReader = () => {
  const { actId, sceneId } = useParams();
  const navigate = useNavigate();
  const [selectedLineNumber, setSelectedLineNumber] = useState<number | null>(null);
  const [commentary, setCommentary] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<Array<{ role: string; content: string }>>([]);
  const [userQuestion, setUserQuestion] = useState('');

  const currentAct = parseInt(actId!);
  const currentScene = parseInt(sceneId!);
  const sceneData = getScene('all-s-well-that-ends-well', currentAct, currentScene);
  const sceneSynopsis = getSceneSynopsis('all-s-well-that-ends-well', currentAct, currentScene);

  // Scene navigation helpers
  const actSceneCounts: { [key: number]: number } = {
    1: 3, 2: 5, 3: 7, 4: 5, 5: 3
  };

  const getNextScene = () => {
    if (currentScene < actSceneCounts[currentAct]) {
      return { act: currentAct, scene: currentScene + 1 };
    } else if (currentAct < 5) {
      return { act: currentAct + 1, scene: 1 };
    }
    return null;
  };

  const getPrevScene = () => {
    if (currentScene > 1) {
      return { act: currentAct, scene: currentScene - 1 };
    } else if (currentAct > 1) {
      return { act: currentAct - 1, scene: actSceneCounts[currentAct - 1] };
    }
    return null;
  };

  const nextScene = getNextScene();
  const prevScene = getPrevScene();

  if (!sceneData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">Scene Not Found</h2>
        <Link to="/" className="text-amber-600 hover:text-amber-800">← Back to Play Selection</Link>
      </div>
    );
  }

  const getClaudeCommentary = async (lineNumber: number, lineText: string, speaker: string = '', isQuestion = false) => {
    setLoading(true);

    const contextPrompt = isQuestion
      ? `The student is reading ${sceneData.playTitle}, Act ${actId}, Scene ${sceneId}. They're looking at line ${lineNumber}, spoken by ${speaker}: "${lineText}".

They have a question: ${userQuestion}

As their Shakespeare teacher, provide a thoughtful, engaging answer. Be specific, use examples, and help deepen their understanding.`
      : `You are an expert Shakespeare teacher guiding a student through ${sceneData.playTitle}, Act ${actId}, Scene ${sceneId}.

The student has clicked on line ${lineNumber}, which is spoken by ${speaker}:
"${lineText}"

Provide clear, direct commentary. Include:
- What this line means in modern English
- Why ${speaker} says this at this moment
- Any literary devices Shakespeare uses here
- How it connects to the play's themes

Keep it conversational but focused - like a knowledgeable friend explaining the text. Be concise (2-3 short paragraphs). Avoid excessive praise or filler phrases.`;

    try {
      const messages = isQuestion
        ? [...conversationHistory, { role: "user", content: contextPrompt }]
        : [{ role: "user", content: contextPrompt }];

      const response = await fetch("/api/claude", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: messages
        })
      });

      const data = await response.json();
      const commentaryText = data.content[0].text;

      setCommentary(commentaryText);

      if (isQuestion) {
        setConversationHistory([
          ...conversationHistory,
          { role: "user", content: contextPrompt },
          { role: "assistant", content: commentaryText }
        ]);
        setUserQuestion('');
      }
    } catch (error) {
      setCommentary("Sorry, I couldn't load the commentary. Please make sure your API key is configured.");
    }

    setLoading(false);
  };

  const handleLineClick = (lineNumber: number, lineText: string, speaker: string) => {
    setSelectedLineNumber(lineNumber);
    setCommentary('');
    setConversationHistory([]);
    getClaudeCommentary(lineNumber, lineText, speaker);
  };

  const handleAskQuestion = () => {
    if (userQuestion.trim() && selectedLineNumber) {
      const speech = sceneData.speeches.find(s =>
        s.lines.some(l => l.lineNumber === selectedLineNumber)
      );
      const line = speech?.lines.find(l => l.lineNumber === selectedLineNumber);
      if (line && speech) {
        getClaudeCommentary(selectedLineNumber, line.text, speech.speaker, true);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/" className="flex items-center gap-2 text-amber-600 hover:text-amber-800 mb-4">
          <ChevronLeft className="w-4 h-4" />
          Back to Play Selection
        </Link>
        <div className="bg-white rounded-lg shadow-md border-2 border-amber-200 p-4">
          <h2 className="text-2xl font-bold text-amber-900">{sceneData.playTitle}</h2>
          <p className="text-amber-600">Act {actId}, Scene {sceneId}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-amber-200">
          {/* Scene Synopsis */}
          {sceneSynopsis && (
            <div className="mb-6 pb-6 border-b-2 border-amber-100">
              <div className="flex items-start gap-3 mb-3">
                <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-amber-900 text-lg mb-1">Scene Overview</h3>
                  <p className="text-sm text-amber-600 italic mb-2">{sceneSynopsis.setting}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{sceneSynopsis.summary}</p>
                  {sceneSynopsis.characters && sceneSynopsis.characters.length > 0 && (
                    <p className="text-xs text-amber-600 mt-2">
                      <span className="font-semibold">Characters: </span>
                      {sceneSynopsis.characters.join(', ')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mb-6 pb-4 border-b-2 border-amber-100">
            <p className="text-sm text-amber-600 mt-1">Click any line for detailed commentary</p>
          </div>

          <div className="space-y-6">
            {sceneData.speeches.map((speech, speechIndex) => {
              const stageDirection = sceneData.stageDirections.find(sd => sd.position === speechIndex);

              return (
                <div key={speechIndex}>
                  {stageDirection && (
                    <div className="text-xs italic text-gray-500 mb-2 pl-2">
                      [{stageDirection.text}]
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="text-sm font-bold text-amber-700 uppercase mb-2">
                      {speech.speaker}
                    </div>

                    <div className="font-serif text-gray-800 leading-relaxed">
                      {speech.lines.map((line, lineIndex) => (
                        <span
                          key={lineIndex}
                          onClick={() => handleLineClick(line.lineNumber, line.text, speech.speaker)}
                          className={`cursor-pointer transition-colors inline ${
                            selectedLineNumber === line.lineNumber
                              ? 'bg-amber-200 rounded px-1'
                              : 'hover:bg-amber-50 rounded px-1'
                          }`}
                          title={`Line ${line.lineNumber} - ${speech.speaker}`}
                        >
                          {line.text}
                          {lineIndex < speech.lines.length - 1 && ' '}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-amber-100 flex justify-between items-center">
            {prevScene ? (
              <button
                onClick={() => navigate(`/play/alls-well-that-ends-well/${prevScene.act}/${prevScene.scene}`)}
                className="flex items-center gap-2 px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous Scene
              </button>
            ) : (
              <div></div>
            )}
            {nextScene ? (
              <button
                onClick={() => navigate(`/play/alls-well-that-ends-well/${nextScene.act}/${nextScene.scene}`)}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
              >
                Next Scene
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="text-sm text-amber-600 italic">End of play</div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-amber-200 sticky top-8 h-fit">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-amber-100">
            <MessageCircle className="w-6 h-6 text-amber-700" />
            <h2 className="text-2xl font-bold text-amber-900">Teacher's Commentary</h2>
          </div>

          {!selectedLineNumber ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-amber-300 mx-auto mb-4" />
              <p className="text-amber-600">Click on any line to begin exploring the text together</p>
            </div>
          ) : (
            <div>
              <div className="bg-amber-50 p-4 rounded-lg mb-6 border-l-4 border-amber-500">
                <p className="text-xs text-amber-600 mb-1">LINE {selectedLineNumber}</p>
                <p className="text-gray-800 font-serif italic">
                  {sceneData.speeches
                    .flatMap(s => s.lines)
                    .find(l => l.lineNumber === selectedLineNumber)?.text}
                </p>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-700"></div>
                </div>
              ) : commentary ? (
                <div className="prose prose-sm max-w-none">
                  <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {commentary}
                  </div>
                </div>
              ) : null}

              <div className="mt-6 pt-6 border-t-2 border-amber-100">
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  Ask a follow-up question about this line:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAskQuestion()}
                    placeholder="e.g., Why does the character say this?"
                    className="flex-1 px-3 py-2 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                  />
                  <button
                    onClick={handleAskQuestion}
                    disabled={!userQuestion.trim() || loading}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 text-white rounded-lg transition-colors"
                  >
                    Ask
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllsWellReader;
