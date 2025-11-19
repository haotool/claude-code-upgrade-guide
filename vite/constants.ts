
import { PlatformID, PlatformData, UiTranslation } from './types';

export const UI_TEXT: UiTranslation = {
  badge: {
    en: "Native Version Upgrade",
    zh: "原生版升級指南"
  },
  title: {
    en: "Claude Code",
    zh: "Claude Code"
  },
  subtitle: {
    en: "Lazy Pack",
    zh: "超級懶人包"
  },
  description: {
    en: "One-tap copy commands to seamlessly upgrade from the Node.js version to the new, stable Native binary. No dependencies required.",
    zh: "專為開發者設計。一鍵複製指令，輕鬆解除舊版依賴，無痛升級至更穩定、無 Node.js 依賴的原生版本。"
  },
  footerDoc: {
    en: "Read Official Documentation",
    zh: "閱讀官方文件"
  },
  footerDisclaim: {
    en: "Not affiliated with Anthropic. Use commands at your own risk.",
    zh: "非 Anthropic 官方製作。請自行評估使用風險。"
  },
  stepCount: {
    en: "Steps",
    zh: "步驟"
  },
  forPlatform: {
    en: "For",
    zh: "適用於"
  }
};

export const PLATFORM_DATA: PlatformData[] = [
  {
    id: PlatformID.MACOS,
    name: 'macOS',
    iconName: 'Apple',
    steps: [
      {
        id: 'mac-1',
        label: { en: 'Cleanup Old Version', zh: '清除舊版本' },
        command: 'npm uninstall -g @anthropic-ai/claude-code',
        description: { en: 'Remove the npm global package.', zh: '移除全域 npm 套件。' }
      },
      {
        id: 'mac-2',
        label: { en: 'Remove Brew Cask (Optional)', zh: '移除舊 Brew Cask (選用)' },
        command: 'brew uninstall --cask claude-code',
        description: { en: 'Only if you previously installed via brew.', zh: '僅限之前透過 brew 安裝過的使用者。' }
      },
      {
        id: 'mac-3',
        label: { en: 'Install Native Version', zh: '安裝原生版本' },
        command: 'brew install --cask claude-code',
        description: { en: 'Install the new standalone version.', zh: '安裝全新的獨立原生版本。' }
      },
      {
        id: 'mac-4',
        label: { en: 'Verify Installation', zh: '驗證安裝' },
        command: 'claude --version',
        description: { en: 'Check if everything works.', zh: '確認安裝版本是否正確。' }
      }
    ]
  },
  {
    id: PlatformID.LINUX,
    name: 'WSL2 / Linux',
    iconName: 'Terminal',
    steps: [
      {
        id: 'lin-1',
        label: { en: 'Cleanup Old Version', zh: '清除舊版本' },
        command: 'npm uninstall -g @anthropic-ai/claude-code',
        description: { en: 'Remove the npm global package.', zh: '移除全域 npm 套件。' }
      },
      {
        id: 'lin-2',
        label: { en: 'Install Native Version', zh: '安裝原生版本' },
        command: 'curl -fsSL https://claude.ai/install.sh | bash',
        description: { en: 'Download and run the official install script.', zh: '下載並執行官方安裝腳本。' }
      },
      {
        id: 'lin-3',
        label: { en: 'Verify Installation', zh: '驗證安裝' },
        command: 'claude --version',
        description: { en: 'Check the installed version.', zh: '確認安裝版本是否正確。' }
      }
    ]
  },
  {
    id: PlatformID.WINDOWS,
    name: 'Windows',
    iconName: 'Monitor',
    steps: [
      {
        id: 'win-1',
        label: { en: 'Cleanup Old Version', zh: '清除舊版本' },
        command: 'npm uninstall -g @anthropic-ai/claude-code',
        description: { en: 'Run in PowerShell as Administrator.', zh: '請以「系統管理員」身分執行 PowerShell。' }
      },
      {
        id: 'win-2',
        label: { en: 'Install Native Version', zh: '安裝原生版本' },
        command: 'irm https://claude.ai/install.ps1 | iex',
        description: { en: 'Official PowerShell install command.', zh: '執行官方 PowerShell 安裝指令。' }
      },
      {
        id: 'win-3',
        label: { en: 'Verify Installation', zh: '驗證安裝' },
        command: 'claude --version',
        description: { en: 'Check if Claude is ready.', zh: '確認 Claude 是否已準備就緒。' }
      }
    ]
  }
];
