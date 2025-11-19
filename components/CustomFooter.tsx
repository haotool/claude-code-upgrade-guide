"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { Language } from "@/lib/types";

interface CustomFooterProps {
  lang: Language;
}

export const CustomFooter: React.FC<CustomFooterProps> = ({ lang }) => {
  const docsUrl =
    lang === "zh"
      ? "https://code.claude.com/docs/zh-TW/overview"
      : "https://code.claude.com/docs/en/overview";

  const docsText = lang === "zh" ? "官方文檔" : "Official Docs";
  const createdByText = lang === "zh" ? "Created by" : "Created by";
  const rightsText =
    lang === "zh"
      ? "© 2025 Haotool. All rights reserved."
      : "© 2025 Haotool. All rights reserved.";

  return (
    <footer className="w-full border-t border-claude-border/30 bg-gradient-to-b from-black/20 to-black/40 backdrop-blur-sm">
      {/* Container with no horizontal padding, only vertical */}
      <div className="w-full py-6 md:py-8 pb-0">
        {/* Main content - responsive flex layout with max-width constraint */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 max-w-5xl mx-auto px-6 sm:px-8 md:px-10">
          {/* Left: Branding & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2.5 text-center md:text-left">
            {/* Logo and title */}
            <div className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-claude-accent/10 flex items-center justify-center border border-claude-accent/20 group-hover:border-claude-accent/40 transition-all duration-300">
                <span className="text-claude-accent text-sm font-mono font-bold select-none">{`>_`}</span>
              </div>
              <span className="text-base font-semibold text-white/90 tracking-wide group-hover:text-white transition-colors">
                Claude Code 好工具
              </span>
            </div>

            {/* Copyright */}
            <p className="text-xs text-claude-muted/70 font-light tracking-wide">
              {rightsText}
            </p>
          </div>

          {/* Right: Links & Social */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Official Docs Link */}
            <a
              href={docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 transition-all duration-300"
            >
              <span className="text-sm text-claude-muted group-hover:text-claude-accent transition-colors">
                {docsText}
              </span>
              <ExternalLink
                size={14}
                className="text-claude-muted/60 group-hover:text-claude-accent group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </a>

            {/* Divider - hidden on mobile */}
            <div className="hidden sm:block h-6 w-px bg-claude-border/50" />

            {/* Creator Link with Threads Icon */}
            <a
              href="https://www.threads.net/@azlife_1224"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-claude-card/30 border border-transparent hover:border-claude-border/30 transition-all duration-300"
            >
              <span className="text-sm text-claude-muted/70 group-hover:text-claude-muted transition-colors">
                {createdByText}
              </span>
              <svg
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-claude-muted/60 group-hover:text-claude-accent transition-colors duration-300"
                fill="currentColor"
                aria-label="Threads"
              >
                <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path>
              </svg>
              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                azlife_1224
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
