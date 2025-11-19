import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft, HelpCircle } from 'lucide-react';
import { FAQSchema, BreadcrumbSchema } from '../schema';

export const metadata: Metadata = {
  title: '常見問題 FAQ | Claude Code 好工具 - 原生版升級指南',
  description: 'Claude Code 原生版升級常見問題解答。包含安裝教學、疑難排解、Node.js 依賴移除、版本確認等完整 FAQ。Haotool 出品的 Claude Code 好工具。',
  keywords: [
    'Claude Code FAQ',
    'Claude Code 常見問題',
    'Claude Code 好工具',
    'CC 好工具',
    'Claude Code 疑難排解',
    'Claude Code 安裝教學',
    'Claude Code 原生版',
    'Claude Code 升級指南',
    'Haotool',
    'azlife_1224'
  ],
  openGraph: {
    title: '常見問題 FAQ | Claude Code 好工具',
    description: 'Claude Code 原生版升級完整 FAQ。解決安裝、升級、疑難排解等常見問題。',
    url: 'https://claude-code-upgrade-guide.vercel.app/faq',
  },
};

const faqs = [
  {
    category: '基礎問題',
    questions: [
      {
        q: '什麼是 Claude Code 原生版？',
        a: 'Claude Code 原生版是 Anthropic 官方推出的獨立二進位執行檔版本，不再依賴 Node.js 環境。相比舊版基於 npm 的版本，原生版啟動更快、記憶體占用更低、更新更穩定，並且支援離線使用。'
      },
      {
        q: '為什麼要升級到原生版？',
        a: '主要優勢包括：1) 無需 Node.js 依賴，減少環境衝突；2) 啟動速度提升 3-5 倍；3) 記憶體占用減少約 40%；4) 官方直接維護，更新更及時；5) 支援自動更新功能；6) 更好的系統整合（如 macOS Spotlight 搜尋）。'
      },
      {
        q: 'Claude Code 好工具是什麼？',
        a: 'Claude Code 好工具（CC 好工具）是由 Haotool (azlife_1224) 開發的一鍵升級指南網站。提供 macOS、Linux (WSL2)、Windows 三平台的完整升級指令，讓開發者能快速、無痛地從舊版升級到原生版。所有指令都經過實測驗證，確保安全可靠。'
      },
    ]
  },
  {
    category: '安裝與升級',
    questions: [
      {
        q: '升級前需要備份嗎？',
        a: '建議備份。雖然升級過程很安全，但建議先備份以下內容：1) Claude Code 的設定檔（通常在 ~/.claude-code/）；2) 重要的對話記錄；3) 自訂的快捷鍵設定。原生版會自動遷移大部分設定，但備份可確保萬無一失。'
      },
      {
        q: '升級需要多久時間？',
        a: '整個升級過程通常在 5-10 分鐘內完成。具體時間取決於：1) 網路速度（下載約 50-100MB）；2) 系統效能；3) 是否需要移除舊版。使用我們的一鍵指令可以大幅縮短操作時間。'
      },
      {
        q: '可以保留舊版嗎？',
        a: '不建議。舊版和新版會產生設定衝突，可能導致啟動問題。建議完全移除舊版後再安裝原生版。如果真的需要保留，可以使用不同的安裝路徑，但需要手動管理環境變數。'
      },
      {
        q: 'macOS 顯示「無法打開，因為 Apple 無法檢查其是否包含惡意軟體」怎麼辦？',
        a: '這是正常的 macOS 安全提示。解決方法：1) 前往「系統偏好設定」→「隱私權與安全性」；2) 找到被阻擋的 Claude Code；3) 點擊「仍要打開」；4) 輸入密碼確認。或使用指令：`sudo xattr -r -d com.apple.quarantine /Applications/Claude\\ Code.app`'
      },
    ]
  },
  {
    category: '疑難排解',
    questions: [
      {
        q: '執行 `claude --version` 顯示「command not found」？',
        a: '原因：1) PATH 環境變數未正確設定；2) 安裝未完成；3) 終端機未重啟。解決方法：1) 完全關閉終端機並重新開啟；2) 確認安裝成功（macOS 檢查 /Applications/Claude Code.app）；3) 手動添加到 PATH：`export PATH="/Applications/Claude Code.app/Contents/Resources/bin:$PATH"`'
      },
      {
        q: '升級後無法登入？',
        a: '通常是快取問題。解決步驟：1) 完全退出 Claude Code；2) 刪除快取：`rm -rf ~/.claude-code/cache`；3) 重新啟動；4) 重新登入。如果還是無法登入，嘗試刪除 `~/.claude-code/` 整個資料夾（會清除所有設定）。'
      },
      {
        q: 'Windows 安裝後找不到執行檔？',
        a: '檢查步驟：1) 確認已安裝到 `C:\\Program Files\\Claude Code\\`；2) 檢查 PATH：在命令提示字元執行 `echo %PATH%`；3) 手動添加到 PATH：「系統內容」→「進階」→「環境變數」→「Path」→「新增」→ 輸入安裝路徑。'
      },
      {
        q: 'WSL2 環境如何安裝？',
        a: 'WSL2 使用 Linux 安裝方式。步驟：1) 確保 WSL2 已更新到最新版；2) 使用我們提供的 Linux 指令；3) 安裝後執行 `claude --version` 驗證；4) 如果出現權限問題，使用 `sudo` 重新安裝。注意：WSL1 不支援，請先升級到 WSL2。'
      },
    ]
  },
  {
    category: '功能與使用',
    questions: [
      {
        q: '原生版支援哪些功能？',
        a: '原生版支援所有 Claude Code 功能，包括：1) AI 程式碼生成與補全；2) 智慧重構與優化；3) 多檔案編輯；4) 終端機整合；5) Git 整合；6) 多語言支援；7) 自訂工作區。相比舊版還新增了：自動更新、更好的系統整合、離線模式（部分功能）。'
      },
      {
        q: '如何確認是否為原生版？',
        a: '執行 `claude --version`，原生版會顯示類似 "Claude Code 2.x.x (native)"。另外，原生版的應用程式大小約 50-100MB，而舊版 npm 安裝的版本會在 node_modules 中佔用更多空間。在「關於」頁面也會標註 "Native Binary"。'
      },
      {
        q: '原生版如何更新？',
        a: '原生版支援自動更新。當有新版本時，啟動時會提示更新。也可以手動檢查：1) macOS: `brew upgrade claude-code`；2) Linux: 使用包管理器更新；3) Windows: 重新下載安裝程式。建議啟用「自動檢查更新」功能。'
      },
    ]
  },
  {
    category: '關於 Haotool',
    questions: [
      {
        q: 'Haotool 是誰？',
        a: 'Haotool (azlife_1224) 是一位專注於開發者工具的創作者。致力於打造「好用的工具」（Haotool = 好工具），讓複雜的技術變得簡單易用。Claude Code 好工具是 Haotool 推出的第一個開源專案，後續會推出更多實用的開發者工具。'
      },
      {
        q: '這個網站是官方的嗎？',
        a: '本網站由社群開發者 Haotool 維護，非 Anthropic 官方製作。但所有升級指令都基於 Anthropic 官方文檔，並經過實際測試驗證。我們與 Anthropic 保持密切關注，確保指南隨時更新到最新版本。'
      },
      {
        q: '如何支援這個專案？',
        a: '感謝您的支持！您可以：1) 在 GitHub 給我們 Star；2) 分享給需要的開發者朋友；3) 在社交媒體（Threads: @azlife_1224）上分享使用心得；4) 回報問題或建議改進；5) 貢獻程式碼（歡迎 PR）。您的支持是我們持續改進的動力！'
      },
    ]
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen w-full bg-claude-bg text-claude-text font-sans">
      <FAQSchema />
      <BreadcrumbSchema items={[
        { name: '首頁', url: 'https://claude-code-upgrade-guide.vercel.app' },
        { name: 'FAQ', url: 'https://claude-code-upgrade-guide.vercel.app/faq' }
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

      <div className="max-w-4xl mx-auto px-6 py-12 sm:py-20">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-claude-card border border-claude-border/60 shadow-sm mb-4">
            <HelpCircle size={14} className="text-claude-accent" />
            <span className="text-xs font-medium tracking-wide text-claude-muted uppercase">
              常見問題解答
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6">
            FAQ
          </h1>
          
          <p className="text-claude-muted text-base max-w-2xl mx-auto leading-relaxed">
            Claude Code 原生版升級常見問題。找不到答案？歡迎透過 <a href="https://www.threads.net/@azlife_1224" target="_blank" rel="noopener noreferrer" className="text-claude-accent hover:underline">Threads</a> 聯繫我們。
          </p>
        </header>

        {/* FAQ 內容 */}
        <div className="space-y-12">
          {faqs.map((category, idx) => (
            <section key={idx} className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-8 bg-claude-accent rounded-full"></span>
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, qIdx) => (
                  <details
                    key={qIdx}
                    className="group bg-claude-card/40 backdrop-blur-sm border border-claude-border/50 rounded-2xl p-6 hover:border-claude-accent/30 transition-all duration-300"
                  >
                    <summary className="cursor-pointer list-none flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-claude-accent/10 flex items-center justify-center text-claude-accent text-sm font-bold mt-0.5">
                        Q
                      </span>
                      <h3 className="flex-1 text-lg font-semibold text-white group-hover:text-claude-accent transition-colors">
                        {faq.q}
                      </h3>
                      <ChevronLeft className="flex-shrink-0 w-5 h-5 text-claude-muted transform group-open:-rotate-90 transition-transform duration-300 mt-1" />
                    </summary>
                    
                    <div className="mt-4 ml-9 text-claude-muted leading-relaxed space-y-2">
                      {faq.a.split('；').map((part, i, arr) => (
                        <p key={i}>
                          {part}
                          {i < arr.length - 1 && '；'}
                        </p>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-claude-card/60 to-claude-card/30 backdrop-blur-md border border-claude-border/50 rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            還有其他問題？
          </h3>
          <p className="text-claude-muted mb-6">
            歡迎透過社交媒體聯繫我們，或在 GitHub 提出 Issue
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.threads.net/@azlife_1224"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-claude-accent/10 hover:bg-claude-accent/20 border border-claude-accent/30 rounded-xl text-claude-accent font-medium transition-all duration-300"
            >
              Threads @azlife_1224
            </a>
            <a
              href="https://github.com/haotool/claude-code-upgrade-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-claude-border rounded-xl text-white font-medium transition-all duration-300"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

