"use client";
import {useMemo} from "react";

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
  return useMemo(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return {isWebView: false, context: "browser"};
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
      return {isWebView: true, context: "telegram"};
    }

    // Discord WebView detection
    if (/DiscordBot/.test(ua) || /Discord/.test(ua)) {
      return {isWebView: true, context: "discord"};
    }

    // iOS Safari - regular browser
    if (
      isIOS &&
      /Safari/.test(ua) &&
      !/CriOS/.test(ua) &&
      !/FxiOS/.test(ua) &&
      !/Chrome/.test(ua)
    ) {
      return {isWebView: false, context: "browser"};
    }

    // iOS WebView (embedded in app)
    if (isIOS && !/Safari/.test(ua) && !/CriOS/.test(ua) && !/FxiOS/.test(ua)) {
      return {isWebView: true, context: "webview"};
    }

    // Android Chrome - regular browser
    if (isAndroid && /Chrome/.test(ua) && /Safari/.test(ua) && !/wv/.test(ua)) {
      return {isWebView: false, context: "browser"};
    }

    // Android WebView (embedded in app)
    if (
      isAndroid &&
      (/; wv\)/.test(ua) ||
        (/Version\/[\d.]+ Chrome\/[\d.]+ Mobile/.test(ua) &&
          !/Safari/.test(ua)))
    ) {
      return {isWebView: true, context: "webview"};
    }

    // Default to browser for everything else
    return {isWebView: false, context: "browser"};
  }, []);
}
