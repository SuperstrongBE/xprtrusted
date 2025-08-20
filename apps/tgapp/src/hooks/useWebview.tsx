"use client";
import {useEffect, useState} from "react";

type WebViewContext = "browser" | "webview";

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
      return;
    }

    const ua =
      navigator.userAgent ||
      navigator.vendor ||
      (window as unknown as {opera: string}).opera;

    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isAndroid = /Android/.test(ua);

    // Check for any WebView indicators
    const isWebViewDetected =
      // Telegram WebView
      /TelegramWebView/.test(ua) ||
      window.Telegram?.WebApp !== undefined ||
      /tgWebAppPlatform/.test(ua) ||
      // Discord WebView
      /DiscordBot/.test(ua) ||
      /Discord/.test(ua) ||
      // iOS WebView (embedded in app)
      (isIOS && !/Safari/.test(ua) && !/CriOS/.test(ua) && !/FxiOS/.test(ua)) ||
      // Android WebView
      (isAndroid &&
        (/; wv\)/.test(ua) ||
          (/Version\/[\d.]+ Chrome\/[\d.]+ Mobile/.test(ua) &&
            !/Safari/.test(ua))));

    if (isWebViewDetected) {
      setIsWebView(true);
      setContext("webview");
    } else {
      setIsWebView(false);
      setContext("browser");
    }
  }, []);
  return {isWebView, context};
}
