import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft, Heart, Github, Sparkles, Target, Users, Zap } from 'lucide-react';
import { BreadcrumbSchema } from '../schema';

export const metadata: Metadata = {
  title: '關於我們 | Claude Code 好工具 - Haotool 出品',
  description: 'Claude Code 好工具（CC 好工具）由 Haotool (azlife_1224) 開發。專注打造好用的開發者工具，讓複雜的技術變得簡單易用。了解我們的使命、願景和開源理念。',
  keywords: [
    'Claude Code 好工具',
    'CC 好工具',
    'Haotool',
    'azlife_1224',
    '開發者工具',
    'Claude Code',
    '原生版升級',
    '開源專案',
    '技術工具',
    '程式設計工具'
  ],
  openGraph: {
    title: '關於 Claude Code 好工具 | Haotool 出品',
    description: '專注打造好用的開發者工具。了解 Haotool 和 Claude Code 好工具的故事。',
    url: 'https://claude-code-upgrade-guide.vercel.app/about',
  },
};

const stats = [
  { icon: Users, label: '服務開發者', value: '1000+' },
  { icon: Zap, label: '升級成功率', value: '99.9%' },
  { icon: Github, label: 'GitHub Stars', value: '持續增長' },
  { icon: Heart, label: '社群支持', value: '積極活躍' },
];

const features = [
  {
    icon: Target,
    title: '專注易用性',
    description: '我們相信好工具應該「開箱即用」。一鍵複製、無需繁瑣設定，讓開發者專注在創造價值上。'
  },
  {
    icon: Sparkles,
    title: '持續更新',
    description: '隨著 Claude Code 官方版本更新，我們會第一時間更新升級指南，確保指令永遠有效。'
  },
  {
    icon: Heart,
    title: '開源透明',
    description: '所有程式碼開源在 GitHub，歡迎檢視、使用、貢獻。我們相信開源是最好的品質保證。'
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-claude-bg text-claude-text font-sans">
      <BreadcrumbSchema items={[
        { name: '首頁', url: 'https://claude-code-upgrade-guide.vercel.app' },
        { name: '關於我們', url: 'https://claude-code-upgrade-guide.vercel.app/about' }
      ]} />
      {/* 返回按鈕 */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-claude-card/80 backdrop-blur-md border border-claude-border/60 hover:border-claude-accent/50 transition-all duration-300 shadow-lg group"
        >
          <ChevronLeft size={16} className="text-claude-muted group-hover:text-claude-accent transition-colors" />
          <span className="text-sm font-medium text-claude-muted group-hover:text-white transition-colors">
            返回首頁
          </span>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 sm:py-20">
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-claude-card border border-claude-border/60 shadow-sm mb-4">
            <Heart size={14} className="text-claude-accent" />
            <span className="text-xs font-medium tracking-wide text-claude-muted uppercase">
              關於我們
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              Claude Code
            </span>
            <br />
            <span className="text-claude-accent font-serif italic text-5xl sm:text-6xl md:text-7xl">
              好工具
            </span>
          </h1>
          
          <p className="text-claude-muted text-lg max-w-2xl mx-auto leading-relaxed">
            讓複雜的技術變得簡單易用
          </p>
        </header>

        {/* Story */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-claude-card/60 to-claude-card/30 backdrop-blur-md border border-claude-border/50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-claude-accent rounded-full"></span>
              我們的故事
            </h2>
            
            <div className="space-y-4 text-claude-muted leading-relaxed text-lg">
              <p>
                <strong className="text-white">Haotool</strong>（好工具）由開發者 <strong className="text-claude-accent">azlife_1224</strong> 創立。名字很直白：我們就是要做「好用的工具」。
              </p>
              
              <p>
                當 Anthropic 推出 Claude Code 原生版時，我們發現許多開發者在升級過程中遇到困難：需要閱讀冗長的官方文檔、手動輸入多條指令、擔心操作錯誤。於是，<strong className="text-white">Claude Code 好工具</strong>（簡稱 CC 好工具）誕生了。
              </p>
              
              <p>
                我們的理念很簡單：<strong className="text-white">一個好工具，應該讓人在 10 秒內就能上手</strong>。不需要閱讀長篇文檔，不需要記住複雜指令，只要點擊、複製、執行。就這麼簡單。
              </p>
              
              <p>
                這是 Haotool 的第一個開源專案，但不會是最後一個。我們正在準備更多實用的開發者工具，敬請期待！
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-claude-card/40 backdrop-blur-sm border border-claude-border/50 rounded-2xl p-6 text-center hover:border-claude-accent/30 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-claude-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-claude-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            我們的理念
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-claude-card/40 backdrop-blur-sm border border-claude-border/50 rounded-2xl p-8 hover:border-claude-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-claude-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-claude-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-claude-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <div className="bg-claude-card/40 backdrop-blur-sm border border-claude-border/50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-claude-accent rounded-full"></span>
              技術棧
            </h2>
            
            <p className="text-claude-muted mb-6">
              Claude Code 好工具使用現代化的前端技術打造，確保最佳的使用體驗：
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-claude-bg/50 rounded-xl border border-claude-border/30">
                <div className="w-2 h-2 rounded-full bg-claude-accent"></div>
                <div>
                  <strong className="text-white">Next.js 16</strong>
                  <span className="text-claude-muted text-sm ml-2">- React 框架</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-claude-bg/50 rounded-xl border border-claude-border/30">
                <div className="w-2 h-2 rounded-full bg-claude-accent"></div>
                <div>
                  <strong className="text-white">TypeScript</strong>
                  <span className="text-claude-muted text-sm ml-2">- 型別安全</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-claude-bg/50 rounded-xl border border-claude-border/30">
                <div className="w-2 h-2 rounded-full bg-claude-accent"></div>
                <div>
                  <strong className="text-white">Tailwind CSS</strong>
                  <span className="text-claude-muted text-sm ml-2">- 樣式框架</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-claude-bg/50 rounded-xl border border-claude-border/30">
                <div className="w-2 h-2 rounded-full bg-claude-accent"></div>
                <div>
                  <strong className="text-white">Framer Motion</strong>
                  <span className="text-claude-muted text-sm ml-2">- 動畫效果</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-claude-bg/50 rounded-xl border border-claude-border/30">
                <div className="w-2 h-2 rounded-full bg-claude-accent"></div>
                <div>
                  <strong className="text-white">Vercel</strong>
                  <span className="text-claude-muted text-sm ml-2">- 部署平台</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-claude-bg/50 rounded-xl border border-claude-border/30">
                <div className="w-2 h-2 rounded-full bg-claude-accent"></div>
                <div>
                  <strong className="text-white">Open Source</strong>
                  <span className="text-claude-muted text-sm ml-2">- MIT 授權</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creator */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-claude-accent/10 to-claude-accent/5 backdrop-blur-sm border border-claude-accent/30 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-claude-accent/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">👨‍💻</span>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-3">
              azlife_1224
            </h2>
            
            <p className="text-claude-muted mb-6 max-w-2xl mx-auto">
              全端開發者、開源愛好者、工具創作者。相信好工具能讓世界更美好。目前專注於開發者體驗優化和工作流程自動化。
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.threads.net/@azlife_1224"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-claude-accent/10 hover:bg-claude-accent/20 border border-claude-accent/30 rounded-xl text-claude-accent font-medium transition-all duration-300 flex items-center gap-2"
              >
                <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor">
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path>
                </svg>
                Threads
              </a>
              
              <a
                href="https://github.com/haotool/claude-code-upgrade-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-claude-border rounded-xl text-white font-medium transition-all duration-300 flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              開始使用 Claude Code 好工具
            </h2>
            <p className="text-claude-muted mb-8">
              一鍵升級，無痛體驗原生版 Claude Code
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-claude-accent hover:bg-claude-accent/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-claude-accent/20"
            >
              <Sparkles size={20} />
              立即升級
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

