import { useState, useEffect } from "react";

export function useDelayedMobileRotation(delay = 500) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [shouldRotate, setShouldRotate] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsPageLoaded(true);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    const checkMobileView = () => setIsMobileView(window.innerWidth <= 1024);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  useEffect(() => {
    if (isPageLoaded && isMobileView) {
      const timer = setTimeout(() => setShouldRotate(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isPageLoaded, isMobileView, delay]);

  return shouldRotate;
}
