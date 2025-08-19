"use client";
import {useEffect, useState} from "react";
import {isWebview} from "@dvlden/is-webview";

export const useWebview = () => {
  const [isWebviewState, setIsWebviewState] = useState(false);
  useEffect(() => {
    setIsWebviewState(isWebview(window.navigator.userAgent));
  }, []);
  return isWebviewState;
};
