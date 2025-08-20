"use client";
import {useMemo} from "react";

export function useIsWebView(): boolean {
  return useMemo(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return false;
    }

    const ua =
      navigator.userAgent ||
      navigator.vendor ||
      (window as unknown as {opera: string}).opera;

    // Telegram WebView detection
    const isTelegramWebView =
      /TelegramWebView/.test(ua) ||
      window.Telegram?.WebApp !== undefined ||
      /tgWebAppPlatform/.test(ua);

    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isSafari = /Safari/.test(ua) && !/CriOS/.test(ua);
    const isUIWebView = isIOS && !isSafari && !/FxiOS|Chrome/.test(ua);

    const isAndroid = /Android/.test(ua);
    // Improved Android WebView detection
    const isAndroidWebView =
      /; wv\)/.test(ua) ||
      (/Android/.test(ua) &&
        /Version\/[\d.]+ Chrome\/[\d.]+ Mobile/.test(ua) &&
        !/Safari/.test(ua)) ||
      (/Android/.test(ua) && /Chrome/.test(ua) && /Version/.test(ua));

    const isChromeInWebView =
      isAndroid && /Chrome\/[\d.]+ Mobile/.test(ua) && !/Safari/.test(ua);

    return (
      isTelegramWebView || isUIWebView || isAndroidWebView || isChromeInWebView
    );
  }, []);
}
