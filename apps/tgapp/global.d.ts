interface TelegramWebApp {
  ready(): void;
  close(): void;
  expand(): void;
  isExpanded: boolean;
  viewportHeight: number;
  initData: string;
  initDataUnsafe: any;
  colorScheme: 'light' | 'dark';
  themeParams: any;
  MainButton: any;
  BackButton: any;
  HapticFeedback: any;
  CloudStorage: any;
  BiometricManager: any;
}

interface Telegram {
  WebApp: TelegramWebApp;
}

declare global {
  interface Window {
    Telegram?: Telegram;
  }
}

export {};