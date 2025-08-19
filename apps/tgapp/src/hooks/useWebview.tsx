"use client";
import {useEffect, useState} from "react";

export const useWebview = () => {
  const [isWebview, setIsWebview] = useState(false);
  useEffect(() => {
    const isWebview =
      typeof window !== "undefined" &&
      navigator.userAgent.indexOf("Telegram") != -1;
    setIsWebview(isWebview);
  }, []);
  return isWebview;
};
