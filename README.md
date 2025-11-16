# Reading the Bard

An interactive Shakespeare reading companion powered by Claude AI. Built for ESL teaching with real-time commentary, analysis, and discussion.

## Features

- 📖 **Interactive Text** - Click any line for instant expert commentary
- 💬 **AI Discussion** - Ask questions and have conversations about the text
- 💡 **Teaching Notes** - Pre-written insights highlighting important moments
- 🎭 **Multiple Plays** - Hamlet, Romeo & Juliet, Macbeth (more to come)
- 🎯 **ESL-Focused** - Designed specifically for language learners

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure API Key

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Get your Anthropic API key from: https://console.anthropic.com/

3. Add your key to `.env`:
   ```
   VITE_ANTHROPIC_API_KEY=sk-ant-your-key-here
   ```

### 3. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Project Structure

```
reading-the-bard/
├── src/
│   ├── components/
│   │   ├── ShakespeareCompanion.tsx  # Main reading interface
│   │   └── PlaySelector.tsx           # Play/scene selection
│   ├── data/
│   │   └── plays.ts                   # Shakespeare text data
│   ├── App.tsx                        # Main app with routing
│   ├── main.tsx                       # Entry point
│   └── index.css                      # Tailwind styles
├── public/                            # Static assets
├── index.html                         # HTML template
└── package.json                       # Dependencies
```

## Adding New Scenes

To add a new scene, edit `src/data/plays.ts`:

```typescript
const hamlet_1_1: SceneData = {
  playTitle: 'Hamlet',
  sceneDescription: 'Scene description here',
  lines: [
    { line: 1, speaker: 'SPEAKER NAME', text: 'Line text here' },
    // ... more lines
  ],
  autoInsights: {
    1: "Teaching note for line 1",
    // ... more insights
  }
};

// Then add to the scenes object:
const scenes: { [key: string]: SceneData } = {
  'hamlet_3_1': hamlet_3_1,
  'hamlet_1_1': hamlet_1_1,  // Add here
};
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Add `VITE_ANTHROPIC_API_KEY` to Vercel environment variables
4. Deploy!

```bash
npm run build
```

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Claude API** - AI commentary
- **Lucide React** - Icons

## Usage Tips

1. **For Teachers**: Use "Teaching Notes" to highlight key moments before class
2. **For Students**: Click lines you don't understand for instant help
3. **For Discussion**: Use the question feature to dig deeper into themes
4. **For ESL**: Focus on archaic language explanations and modern translations

## License

MIT

## Built With

Created for ESL teaching by combining 24 years of teaching experience with Claude AI.
