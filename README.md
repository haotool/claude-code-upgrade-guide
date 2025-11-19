# Claude Code Native Upgrade Guide 🚀

<div align="center">
  <h3>Claude Code 原生版升級懶人包</h3>
  <p>一鍵複製指令，無痛升級至原生版 Claude Code</p>
  <p>
    <a href="https://claude-code-upgrade-guide.vercel.app">🌐 Live Demo</a> •
    <a href="#features">✨ Features</a> •
    <a href="#tech-stack">🛠️ Tech Stack</a> •
    <a href="#deployment">🚀 Deployment</a>
  </p>
</div>

---

## 📖 Overview

專為開發者設計的 Claude Code 原生版升級指南網站。提供一鍵複製指令功能，輕鬆解除舊版依賴，快速安裝 macOS, Linux, Windows 原生版本。

**Live Site**: [https://claude-code-upgrade-guide.vercel.app](https://claude-code-upgrade-guide.vercel.app)

## ✨ Features

- 🎯 **三平台支持** - macOS / WSL2 / Windows 完整升級指令
- 📋 **一鍵複製** - 單步驟複製或全部指令批量複製
- 🌐 **雙語介面** - 中文 / 英文切換
- 🎨 **優雅設計** - 專業 UI/UX，響應式設計
- ⚡ **極速體驗** - Next.js 16 + React 19 + Turbopack
- 🔍 **SEO 優化** - 完整 metadata、sitemap、robots.txt
- ♿ **無障礙設計** - ARIA 標籤、鍵盤導航支援

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.9.3
- **Styling**: Tailwind CSS 3.4.18
- **Animation**: Framer Motion 12.23.24
- **Icons**: Lucide React 0.554.0
- **Fonts**: Google Fonts (Outfit, JetBrains Mono)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/haotool/claude-code-upgrade-guide.git
cd claude-code-upgrade-guide

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
claude-code-upgrade-guide/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt configuration
│   └── icon.svg           # App icon
├── components/            # React components
│   ├── MainInterface.tsx  # Main UI component
│   ├── CodeCard.tsx       # Command card component
│   └── CustomFooter.tsx   # Footer component
├── lib/                   # Utilities
│   ├── constants.ts       # Platform data & translations
│   └── types.ts           # TypeScript types
└── public/                # Static assets
    ├── favicon.svg
    └── icon.svg
```

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/haotool/claude-code-upgrade-guide)

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect Next.js and deploy

### Environment Variables

No environment variables required. This is a static Next.js application.

## 📝 SEO Configuration

- ✅ Semantic HTML5
- ✅ Dynamic sitemap.xml
- ✅ Robots.txt
- ✅ Open Graph metadata
- ✅ Twitter Card metadata
- ✅ Structured data ready
- ✅ Mobile-first responsive design
- ✅ Fast loading (Lighthouse 90+)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 👨‍💻 Author

**Haotool** (azlife_1224)
- Threads: [@azlife_1224](https://www.threads.net/@azlife_1224)
- Website: [claude-code-upgrade-guide.vercel.app](https://claude-code-upgrade-guide.vercel.app)

## 🙏 Acknowledgments

- [Anthropic](https://www.anthropic.com) - For creating Claude Code
- [Vercel](https://vercel.com) - For hosting
- [Next.js](https://nextjs.org) - For the amazing framework

---

<div align="center">
  Made with ❤️ by Haotool
</div>
