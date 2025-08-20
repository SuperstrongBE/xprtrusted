"use client";
import {useEffect, useMemo, useState} from "react";

type WebViewContext =
  | "safari"
  | "chrome"
  | "telegram"
  | "discord"
  | "webview"
  | "browser";

interface WebViewResult {
  isWebView: boolean;
  context: WebViewContext;
}

export function useIsWebView(): WebViewResult {
  const [isWebView, setIsWebView] = useState<boolean>(false);
  const [context, setContext] = useState<WebViewContext>("browser");
  useEffect(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      setIsWebView(false);
      setContext("browser");
    }

    const ua =
      navigator.userAgent ||
      navigator.vendor ||
      (window as unknown as {opera: string}).opera;

    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isAndroid = /Android/.test(ua);

    // Telegram WebView detection
    if (
      /TelegramWebView/.test(ua) ||
      window.Telegram?.WebApp !== undefined ||
      /tgWebAppPlatform/.test(ua)
    ) {
      setIsWebView(true);
      setContext("webview");
    }

    // Discord WebView detection
    if (/DiscordBot/.test(ua) || /Discord/.test(ua)) {
      setIsWebView(true);
      setContext("webview");
    }

    // iOS Safari - regular browser
    if (
      isIOS &&
      /Safari/.test(ua) &&
      !/CriOS/.test(ua) &&
      !/FxiOS/.test(ua) &&
      !/Chrome/.test(ua)
    ) {
      setIsWebView(false);
      setContext("browser");
    }

    // iOS WebView (embedded in app)
    if (isIOS && !/Safari/.test(ua) && !/CriOS/.test(ua) && !/FxiOS/.test(ua)) {
      setIsWebView(true);
      setContext("webview");
    }

    // Android Chrome - regular browser
    if (isAndroid && /Chrome/.test(ua) && /Safari/.test(ua) && !/wv/.test(ua)) {
      setIsWebView(false);
      setContext("browser");
    }

    // Android WebView (embedded in app)
    if (
      isAndroid &&
      (/; wv\)/.test(ua) ||
        (/Version\/[\d.]+ Chrome\/[\d.]+ Mobile/.test(ua) &&
          !/Safari/.test(ua)))
    ) {
      setIsWebView(true);
      setContext("webview");
    }

    // Default to browser for everything else
    setIsWebView(false);
    setContext("browser");
  }, []);
  return {isWebView, context};
}
