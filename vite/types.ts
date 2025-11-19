
export enum PlatformID {
  MACOS = 'macos',
  LINUX = 'linux',
  WINDOWS = 'windows'
}

export type Language = 'en' | 'zh';

export interface LocalizedString {
  en: string;
  zh: string;
}

export interface CommandStep {
  id: string;
  label: LocalizedString;
  command: string;
  description?: LocalizedString;
}

export interface PlatformData {
  id: PlatformID;
  name: string;
  iconName: string;
  steps: CommandStep[];
}

export interface UiTranslation {
  badge: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  footerDoc: LocalizedString;
  footerDisclaim: LocalizedString;
  stepCount: LocalizedString;
  forPlatform: LocalizedString;
}
