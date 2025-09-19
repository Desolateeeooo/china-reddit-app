ChinaTalk - Reddit Client 📱🐉

A beautiful, responsive Reddit client focused on Chinese culture, built with Next.js, TypeScript, and Redux. Explore China-related subreddits with an elegant traditional Chinese-inspired design.

🌟 Features
✨ Core Functionality
Subreddit Navigation: Browse popular China-related communities

Real-time Search: Find posts across multiple Chinese subreddits

Trending Topics: Discover popular themes in Chinese culture

High-quality Media: Optimized image loading with Next.js

Responsive Design: Works perfectly on desktop, tablet, and mobile

🎨 Design Features
Traditional Chinese Aesthetic: Red and gold color scheme inspired by Chinese culture

Smooth Animations: Elegant transitions and hover effects

Typography: Chinese-inspired fonts with proper hierarchy

Mobile-First: Responsive design that works on all devices

🔧 Technical Features
Next.js 14: Latest React framework with App Router

TypeScript: Full type safety throughout the application

Redux Toolkit: Modern state management

Styled Components: CSS-in-JS with theme support

API Routes: Custom serverless functions for Reddit API

🛠️ Installation
Prerequisites
Node.js 18+

npm or yarn

### Setup Instructions
1. Clone the repository

```bash
git clone https://github.com/your-username/china-reddit-app.git
cd china-reddit-app
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open your browser
Navigate to http://localhost:3000

🏗️ Project Structure

...

🎯 Supported Subreddits
- r/China - General discussion about China
- r/Chinese - Chinese language and culture
- r/ChinaPics - Beautiful photos from China
- r/Shanghai - Shanghai-specific content
- r/Beijing - Beijing-specific content
- r/ChineseFood - Chinese cuisine
- r/ChineseLanguage - Language learning
- r/TravelChina - Travel tips and experiences

🔌 API Usage
This application uses the Reddit JSON API to fetch posts and comments. All requests are routed through Next.js API routes to handle CORS and rate limiting.

Rate Limiting
The app respects Reddit's API rate limits:

- 60 requests per minute for OAuth clients
- Appropriate caching to minimize requests
- Error handling for rate limit responses

🎨 Customization
Theming
The application uses a Chinese-inspired color scheme:

```css
:root {
  --primary-red: #c62f2f;
  --primary-gold: #d4af37;
  --dark-red: #8a1f1f;
  --light-gold: #f8e7b6;
  --background: #f9f2e3;
}
```

### Adding New Subreddits
Edit the SUBREDDITS array in components/Sidebar/Subreddits/SubredList.tsx:

```ts
const SUBREDDITS = [
  { id: 'yoursubreddit', name: 'r/YourSubreddit' },
  // ... add more subreddits
];
```

📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

