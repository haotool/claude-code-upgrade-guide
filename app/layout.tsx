import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Claude Code Upgrade Guide | Native Version Lazy Pack",
  description: "Simple, mobile-first guide to upgrade Claude Code to the native standalone version. No dependencies required. Super lazy pack for developers.",
  keywords: ["Claude Code", "Anthropic", "Native Upgrade", "Lazy Pack", "Developer Tools", "懶人包", "升級指南"],
  openGraph: {
    title: "Claude Code 原生版升級懶人包",
    description: "一鍵複製指令，無痛升級至原生版 Claude Code。支援 macOS, Linux, Windows。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="dark">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased bg-claude-bg text-claude-text selection:bg-claude-accent/30 selection:text-white min-h-screen overflow-x-hidden`}
      >
        {/* Ambient Background Effects (Global) */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-claude-accent/10 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
        
        {children}
      </body>
    </html>
  );
}