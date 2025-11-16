import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import ShakespeareCompanion from './components/ShakespeareCompanion';
import TempestReader from './components/TempestReader';
import AllsWellReader from './components/AllsWellReader';
import PlaySelector from './components/PlaySelector';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        {/* Header */}
        <header className="bg-white shadow-md border-b-2 border-amber-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <BookOpen className="w-8 h-8 text-amber-800" />
              <div>
                <h1 className="text-3xl font-bold text-amber-900">Reading the Bard</h1>
                <p className="text-sm text-amber-600">Interactive Shakespeare Study Guide</p>
              </div>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<PlaySelector />} />
            <Route path="/play/the-tempest/:actId/:sceneId" element={<TempestReader />} />
            <Route path="/play/alls-well-that-ends-well/:actId/:sceneId" element={<AllsWellReader />} />
            <Route path="/play/:playId/:actId/:sceneId" element={<ShakespeareCompanion />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="mt-16 py-8 text-center text-amber-600 text-sm">
          <p>Powered by Claude AI • Built for ESL Teaching</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
