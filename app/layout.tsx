
import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { WebsiteSchema, OrganizationSchema } from "./schema";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap", // Lighthouse: Ensure text remains visible during webfont load
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Accessibility: Allow users to zoom
  themeColor: "#0f0f0f",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://claude-code-upgrade-guide.vercel.app'),
  title: "Claude Code 原生版升級懶人包 | Haotool 出品",
  description: "專為開發者設計的 Claude Code 原生版升級指南。一鍵複製指令，無痛解除舊版依賴，快速安裝 macOS, Linux, Windows 原生版本。",
  keywords: [
    "Claude Code",
    "Claude Code 好工具",
    "CC 好工具",
    "Claude Code 原生版",
    "Claude Code 升級",
    "Claude Code 安裝",
    "Anthropic",
    "Native Upgrade",
    "Lazy Pack",
    "Developer Tools",
    "懶人包",
    "升級指南",
    "Haotool",
    "azlife_1224",
    "開發者工具",
    "程式設計工具"
  ],
  authors: [{ name: "azlife_1224" }],
  verification: {
    google: "zsmN7DF_-zxLnHMyGLsf5TO6ldn5hjdkmdzec7unZeg",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: '512x512' }
    ],
    apple: [
      { url: '/icon.svg', sizes: '180x180', type: 'image/svg+xml' }
    ],
  },
  openGraph: {
    title: "Claude Code 原生版升級懶人包",
    description: "一鍵複製指令，無痛升級至原生版 Claude Code。支援 macOS, Linux, Windows。",
    url: "https://claude-code-upgrade-guide.vercel.app",
    siteName: "Claude Code Upgrade Guide",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "https://claude-code-upgrade-guide.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Claude Code Native Upgrade Lazy Pack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code 原生版升級懶人包 | Haotool 出品",
    description: "開發者必備：Claude Code 無 Node.js 依賴版本快速安裝指南。",
    images: ["https://claude-code-upgrade-guide.vercel.app/og-image.png"],
    creator: "@azlife_1224",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="dark">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for future navigation */}
        <link rel="dns-prefetch" href="https://www.threads.net" />
        <link rel="dns-prefetch" href="https://github.com" />
      </head>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}
        role="document"
      >
        <WebsiteSchema />
        <OrganizationSchema />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-claude-accent focus:text-white">
          跳至主要內容
        </a>
        <main id="main-content" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
