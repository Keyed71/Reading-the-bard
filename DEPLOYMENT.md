# Deploying to Vercel

## Steps to Deploy

### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - Reading the Bard Shakespeare companion"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/reading-the-bard.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the Vite setup

### 3. Configure Environment Variables

In your Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add: `VITE_ANTHROPIC_API_KEY` = `your-api-key-here`
3. Make sure it's available for **Production**, **Preview**, and **Development**

### 4. Deploy

Click "Deploy" and Vercel will:
- Build your React app
- Deploy the serverless function at `/api/claude`
- Give you a live URL

## How It Works

- The frontend calls `/api/claude` (our serverless function)
- The serverless function forwards requests to Anthropic API
- This avoids CORS issues since the API key stays server-side
- Your API key is kept secure in Vercel's environment variables

## Local Development

For local development, the API calls will fail because there's no local serverless function running. To test locally with the serverless function:

```bash
npm install -g vercel
vercel dev
```

This runs both the Vite dev server AND the serverless functions locally.
