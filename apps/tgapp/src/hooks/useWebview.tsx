"use client";
import {useMemo} from "react";

export function useIsWebView(): boolean {
  return useMemo(() => {
    const ua =
      navigator.userAgent ||
      navigator.vendor ||
      (window as unknown as {opera: string}).opera;

    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isSafari = /Safari/.test(ua) && !/CriOS/.test(ua);
    const isUIWebView = isIOS && !isSafari && !/FxiOS|Chrome/.test(ua);

    const isAndroid = /Android/.test(ua);
    const isAndroidWebView =
      /; wv\)/.test(ua) || /Version\/[\d.]+ Chrome\/[\d.]+ Mobile/.test(ua);

    const isChromeInWebView =
      isAndroid && /Chrome\/[\d.]+ Mobile/.test(ua) && !/Safari/.test(ua);

    // Optional: detect if you're in your own app by custom user-agent string
    console.log(
      isUIWebView,
      isAndroidWebView,
      isChromeInWebView,
      ua,
      "isWebView"
    );
    return isUIWebView || isAndroidWebView || isChromeInWebView;
  }, []);
}
