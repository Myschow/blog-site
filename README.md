# TECH_BLOG.exe - Pixel Style Blog Site

A retro-styled pixel art blog built with Next.js 15, TypeScript, and Tailwind CSS. Features animated backgrounds, terminal-style UI, and a nostalgic tech aesthetic.

## 🚀 Features

- **Pixel Art Design**: Retro terminal-style interface with pixel fonts and animations
- **Animated Background**: Dynamic particle system with wave effects
- **Responsive Layout**: Works on desktop and mobile devices
- **Blog System**: Article pages with navigation and formatting
- **Sound Integration**: Background music with user interaction controls
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS 4.0

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 with Turbopack
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.0
- **Font**: Silkscreen (pixel-style font)
- **Deployment**: Optimized for Vercel/Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my_blog_site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
my_blog_site/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   │   ├── Homepage_header.tsx
│   │   ├── Homepage_footer.tsx
│   │   ├── BlogPostsSection.tsx
│   │   ├── background_animation.tsx
│   │   └── sound.tsx
│   ├── article/[article_id]/ # Dynamic article routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── public/                # Static assets
│   └── sounds/           # Audio files
└── package.json          # Dependencies and scripts
```

## 🎨 Design Features

- **Pixel Font**: Silkscreen font for authentic retro feel
- **Color Scheme**: Pixel-themed colors (cyan, green, purple, blue)
- **Animations**: Floating particles and wave effects
- **Terminal UI**: Command-line inspired interface elements
- **Responsive**: Mobile-first design approach

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Other Platforms

- **Netlify**: Connect repository and deploy
- **Railway**: Deploy with Node.js runtime
- **Traditional Hosting**: Run `npm run build` and serve `.next` folder

## 🔧 Development Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Environment Variables

No environment variables required for basic functionality.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is private and not licensed for public use.

## 🆘 Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ using Next.js 15 & Pixel Art Aesthetics**
