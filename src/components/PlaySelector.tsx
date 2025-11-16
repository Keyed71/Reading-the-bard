import { Link } from 'react-router-dom';
import { Book, Cloud, Skull, Crown, Heart, Smile } from 'lucide-react';

const plays = [
  {
    id: 'the-tempest',
    title: 'The Tempest',
    subtitle: 'A Tale of Magic and Forgiveness',
    icon: Cloud,
    description: 'Shipwreck, sorcery, and redemption on an enchanted island',
    difficulty: 'Intermediate',
    acts: [
      { id: 1, scenes: 2 },
      { id: 2, scenes: 2 },
      { id: 3, scenes: 3 },
      { id: 4, scenes: 1 },
      { id: 5, scenes: 1 },
    ]
  },
  {
    id: 'alls-well-that-ends-well',
    title: "All's Well That Ends Well",
    subtitle: 'A Comedy of Trials and Triumph',
    icon: Smile,
    description: 'Love, deception, and the power of determination',
    difficulty: 'Intermediate',
    acts: [
      { id: 1, scenes: 3 },
      { id: 2, scenes: 5 },
      { id: 3, scenes: 7 },
      { id: 4, scenes: 5 },
      { id: 5, scenes: 3 },
    ]
  },
  {
    id: 'hamlet',
    title: 'Hamlet',
    subtitle: 'Prince of Denmark',
    icon: Skull,
    description: 'A tale of revenge, madness, and moral corruption',
    difficulty: 'Advanced',
    acts: [
      { id: 1, scenes: 5 },
      { id: 2, scenes: 2 },
      { id: 3, scenes: 4 },
      { id: 4, scenes: 7 },
      { id: 5, scenes: 2 },
    ]
  },
  {
    id: 'romeo-juliet',
    title: 'Romeo and Juliet',
    subtitle: 'The Tragedy of Star-Crossed Lovers',
    icon: Heart,
    description: 'Love, family feuds, and tragic fate',
    difficulty: 'Intermediate',
    acts: [
      { id: 1, scenes: 5 },
      { id: 2, scenes: 6 },
      { id: 3, scenes: 5 },
      { id: 4, scenes: 5 },
      { id: 5, scenes: 3 },
    ]
  },
  {
    id: 'macbeth',
    title: 'Macbeth',
    subtitle: 'The Scottish Play',
    icon: Crown,
    description: 'Ambition, power, and supernatural prophecy',
    difficulty: 'Advanced',
    acts: [
      { id: 1, scenes: 7 },
      { id: 2, scenes: 4 },
      { id: 3, scenes: 6 },
      { id: 4, scenes: 3 },
      { id: 5, scenes: 9 },
    ]
  },
  // More plays can be added here
];

const PlaySelector = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-amber-900 mb-4">Choose Your Play</h2>
        <p className="text-lg text-amber-700">
          Select a play to begin your interactive Shakespeare journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plays.map((play) => {
          const Icon = play.icon;
          return (
            <div
              key={play.id}
              className="bg-white rounded-xl shadow-lg border-2 border-amber-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 border-b-2 border-amber-200">
                <Icon className="w-12 h-12 text-amber-700 mb-3" />
                <h3 className="text-2xl font-bold text-amber-900 mb-1">{play.title}</h3>
                <p className="text-sm text-amber-600 italic">{play.subtitle}</p>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{play.description}</p>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                    {play.difficulty}
                  </span>
                  <span className="text-xs text-gray-500">
                    {play.acts.length} Acts • {play.acts.reduce((sum, act) => sum + act.scenes, 0)} Scenes
                  </span>
                </div>

                {/* Act/Scene selector */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-amber-900 mb-2">Select Act & Scene:</p>
                  {play.acts.map((act) => (
                    <div key={act.id} className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-medium text-amber-700 w-16">Act {act.id}:</span>
                      {Array.from({ length: act.scenes }, (_, i) => i + 1).map((scene) => (
                        <Link
                          key={scene}
                          to={`/play/${play.id}/${act.id}/${scene}`}
                          className="px-3 py-1 text-xs bg-amber-50 hover:bg-amber-200 border border-amber-300 rounded transition-colors"
                        >
                          Scene {scene}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Section */}
      <div className="mt-16 bg-white rounded-xl shadow-lg border-2 border-amber-200 p-8">
        <div className="flex items-start gap-4">
          <Book className="w-8 h-8 text-amber-700 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">How It Works</h3>
            <ul className="text-gray-700 space-y-2">
              <li>📖 <strong>Read the text</strong> - Shakespeare's original language with line numbers</li>
              <li>💡 <strong>Click any line</strong> - Get instant commentary explaining meaning and context</li>
              <li>💬 <strong>Ask questions</strong> - Have a conversation about the text with your AI guide</li>
              <li>🎯 <strong>Teaching notes</strong> - See highlighted literary devices and important moments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaySelector;
