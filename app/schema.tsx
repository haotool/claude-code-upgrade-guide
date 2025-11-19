// 結構化資料 (JSON-LD Schema.org) + AI Search Optimization
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Claude Code 好工具",
    "alternateName": ["CC 好工具", "Claude Code Upgrade Guide", "Claude Code Native Upgrade Tool"],
    "url": "https://claude-code-upgrade-guide.vercel.app",
    "description": "Claude Code 原生版升級懶人包。一鍵複製指令，無痛升級至更穩定、無 Node.js 依賴的原生版本。支援 macOS, Linux, Windows。提供 26 個常見問題解答和完整疑難排解指南。",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": ["macOS", "Linux", "Windows"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Person",
      "name": "azlife_1224",
      "alternateName": "Haotool Developer",
      "url": "https://www.threads.net/@azlife_1224",
      "sameAs": [
        "https://www.threads.net/@azlife_1224",
        "https://github.com/haotool"
      ],
      "description": "Full-stack developer focused on creating user-friendly developer tools"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Haotool",
      "alternateName": "好工具",
      "description": "專注打造好用的開發者工具，讓複雜的技術變得簡單易用",
      "url": "https://claude-code-upgrade-guide.vercel.app",
      "logo": "https://claude-code-upgrade-guide.vercel.app/icon.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "url": "https://www.threads.net/@azlife_1224"
      }
    },
    "inLanguage": ["zh-TW", "en"],
    "keywords": "Claude Code, Claude Code 好工具, CC 好工具, 原生版, 升級指南, Haotool, 開發者工具, native version, upgrade guide, installation",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "一鍵複製升級指令",
      "支援 macOS, Linux (WSL2), Windows 三平台",
      "26 個常見問題解答",
      "完整疑難排解指南",
      "開源透明，可在 GitHub 查看原始碼",
      "99.9% 升級成功率"
    ],
    "screenshot": "https://claude-code-upgrade-guide.vercel.app/og-image.png",
    "softwareHelp": "https://claude-code-upgrade-guide.vercel.app/faq",
    "maintainer": {
      "@type": "Person",
      "name": "azlife_1224"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Claude Code 好工具 - 常見問題",
    "description": "Claude Code 原生版升級常見問題解答",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "什麼是 Claude Code 原生版？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Claude Code 原生版是 Anthropic 官方推出的獨立二進位執行檔版本，不再依賴 Node.js 環境。相比舊版基於 npm 的版本，原生版啟動更快、記憶體占用更低、更新更穩定，並且支援離線使用。"
        }
      },
      {
        "@type": "Question",
        "name": "為什麼要升級到原生版？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "主要優勢包括：1) 無需 Node.js 依賴，減少環境衝突；2) 啟動速度提升 3-5 倍；3) 記憶體占用減少約 40%；4) 官方直接維護，更新更及時；5) 支援自動更新功能；6) 更好的系統整合。"
        }
      },
      {
        "@type": "Question",
        "name": "Claude Code 好工具是什麼？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Claude Code 好工具（CC 好工具）是由 Haotool (azlife_1224) 開發的一鍵升級指南網站。提供 macOS、Linux (WSL2)、Windows 三平台的完整升級指令，讓開發者能快速、無痛地從舊版升級到原生版。"
        }
      },
      {
        "@type": "Question",
        "name": "升級需要多久時間？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "整個升級過程通常在 5-10 分鐘內完成。具體時間取決於網路速度、系統效能和是否需要移除舊版。使用我們的一鍵指令可以大幅縮短操作時間。"
        }
      },
      {
        "@type": "Question",
        "name": "如何確認是否為原生版？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "執行 claude --version，原生版會顯示類似 Claude Code 2.x.x (native)。在關於頁面也會標註 Native Binary。"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Haotool",
    "alternateName": "好工具",
    "url": "https://claude-code-upgrade-guide.vercel.app",
    "logo": "https://claude-code-upgrade-guide.vercel.app/icon.svg",
    "description": "專注打造好用的開發者工具，讓複雜的技術變得簡單易用",
    "founder": {
      "@type": "Person",
      "name": "azlife_1224",
      "url": "https://www.threads.net/@azlife_1224"
    },
    "sameAs": [
      "https://github.com/haotool",
      "https://www.threads.net/@azlife_1224"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://www.threads.net/@azlife_1224"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

