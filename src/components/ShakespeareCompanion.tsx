import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageCircle, Sparkles, ChevronLeft, BookOpen } from 'lucide-react';
import { getScene } from '../data/plays';

interface Line {
  line: number;
  speaker: string;
  text: string;
}

const ShakespeareCompanion = () => {
  const { playId, actId, sceneId } = useParams();
  const [selectedLine, setSelectedLine] = useState<Line | null>(null);
  const [commentary, setCommentary] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<Array<{ role: string; content: string }>>([]);
  const [userQuestion, setUserQuestion] = useState('');
  const [showAutoInsights, setShowAutoInsights] = useState(true);

  const sceneData = getScene(playId!, parseInt(actId!), parseInt(sceneId!));

  if (!sceneData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">Scene Not Found</h2>
        <Link to="/" className="text-amber-600 hover:text-amber-800">← Back to Play Selection</Link>
      </div>
    );
  }

  const getClaudeCommentary = async (lineText: string, lineNumber: number, isQuestion = false) => {
    setLoading(true);

    const contextPrompt = isQuestion
      ? `The student is reading ${sceneData.playTitle}, Act ${actId}, Scene ${sceneId}. They're looking at line ${lineNumber}: "${lineText}". 

They have a question: ${userQuestion}

As their Shakespeare teacher, provide a thoughtful, engaging answer. Be specific, use examples, and help deepen their understanding.`
      : `You are an expert Shakespeare teacher guiding a student through ${sceneData.playTitle}, Act ${actId}, Scene ${sceneId}. 

The student has clicked on line ${lineNumber}: "${lineText}"

Provide insightful commentary as the best teacher would. Include:
- What this line means in modern English
- Literary devices or techniques Shakespeare uses
- How it connects to the character and the play's themes
- Any interesting historical/performance context

Keep it conversational and engaging, like you're sitting next to them discussing the text. Be concise but illuminating (2-3 short paragraphs).`;

    try {
      const messages = isQuestion
        ? [...conversationHistory, { role: "user", content: contextPrompt }]
        : [{ role: "user", content: contextPrompt }];

      // Call our serverless function instead of Anthropic API directly
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
      setCommentary("Sorry, I couldn't load the commentary. Please make sure your API key is configured. Check the README for setup instructions.");
    }

    setLoading(false);
  };

  const handleLineClick = (line: Line) => {
    setSelectedLine(line);
    setCommentary('');
    setConversationHistory([]);
    getClaudeCommentary(line.text, line.line);
  };

  const handleAskQuestion = () => {
    if (userQuestion.trim() && selectedLine) {
      getClaudeCommentary(selectedLine.text, selectedLine.line, true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Link to="/" className="flex items-center gap-2 text-amber-600 hover:text-amber-800 mb-4">
          <ChevronLeft className="w-4 h-4" />
          Back to Play Selection
        </Link>
        <div className="bg-white rounded-lg shadow-md border-2 border-amber-200 p-4">
          <h2 className="text-2xl font-bold text-amber-900">{sceneData.playTitle}</h2>
          <p className="text-amber-600">Act {actId}, Scene {sceneId}</p>
          {sceneData.sceneDescription && (
            <p className="text-sm text-gray-600 mt-2 italic">{sceneData.sceneDescription}</p>
          )}
        </div>
      </div>

      {/* Toggle for auto-insights */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowAutoInsights(!showAutoInsights)}
          className="px-4 py-2 bg-amber-200 hover:bg-amber-300 rounded-lg text-amber-900 transition-colors flex items-center gap-2 mx-auto"
        >
          <Sparkles className="w-4 h-4" />
          {showAutoInsights ? 'Hide' : 'Show'} Teaching Notes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Panel */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-amber-200">
          <div className="mb-6 pb-4 border-b-2 border-amber-100">
            <p className="text-sm text-amber-600 mt-1">Click any line for detailed commentary</p>
          </div>

          <div className="space-y-3">
            {sceneData.lines.map((line) => (
              <div key={line.line} className="relative">
                <div
                  onClick={() => handleLineClick(line)}
                  className={`cursor-pointer p-3 rounded-lg transition-all ${selectedLine?.line === line.line
                      ? 'bg-amber-100 border-l-4 border-amber-500'
                      : 'hover:bg-amber-50 border-l-4 border-transparent'
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-amber-400 font-mono mt-1 w-6">{line.line}</span>
                    <div className="flex-1">
                      {line.speaker && (
                        <span className="text-xs font-bold text-amber-700 uppercase block mb-1">
                          {line.speaker}
                        </span>
                      )}
                      <p className="text-gray-800 leading-relaxed font-serif">
                        {line.text}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Auto-insight annotation */}
                {showAutoInsights && sceneData.autoInsights && sceneData.autoInsights[line.line] && (
                  <div className="ml-9 mt-2 text-xs text-amber-600 bg-amber-50 p-2 rounded border-l-2 border-amber-300">
                    {sceneData.autoInsights[line.line]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Commentary Panel */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-amber-200 sticky top-8 h-fit">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-amber-100">
            <MessageCircle className="w-6 h-6 text-amber-700" />
            <h2 className="text-2xl font-bold text-amber-900">Teacher's Commentary</h2>
          </div>

          {!selectedLine ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-amber-300 mx-auto mb-4" />
              <p className="text-amber-600">Click on any line to begin exploring the text together</p>
            </div>
          ) : (
            <div>
              {/* Selected line display */}
              <div className="bg-amber-50 p-4 rounded-lg mb-6 border-l-4 border-amber-500">
                <p className="text-xs text-amber-600 mb-1">LINE {selectedLine.line}</p>
                {selectedLine.speaker && (
                  <p className="text-xs font-bold text-amber-700 uppercase mb-1">{selectedLine.speaker}</p>
                )}
                <p className="text-gray-800 font-serif italic">{selectedLine.text}</p>
              </div>

              {/* Commentary */}
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

              {/* Question input */}
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
                    placeholder="e.g., Why does Hamlet use this metaphor?"
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

export default ShakespeareCompanion;
