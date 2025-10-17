"use client";

import { useEffect } from "react";

import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

/**
 * @description 页面加载进度条
 * @returns
 */
export default function NProgressClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.configure({ showSpinner: false, trickleSpeed: 120 });

    const handleBeforeUnload = () => {
      NProgress.start();
    };

    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      // Find nearest anchor
      const anchor = target.closest("a");
      if (!anchor) return;

      // Ignore if modified click or new tab/window
      const mouseEvent = event as MouseEvent;
      if (mouseEvent.defaultPrevented) return;
      if (mouseEvent.button !== 0) return; // only left click
      if (anchor.target && anchor.target !== "") return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (href.startsWith("#")) return;

      // Same-origin internal navigation
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;

      // Only start when navigating to a different route (pathname or search changes)
      const samePathname = url.pathname === window.location.pathname;
      const sameSearch = url.search === window.location.search;
      if (samePathname && sameSearch) return;

      NProgress.start();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("click", handleLinkClick, true);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("click", handleLinkClick, true);
    };
  }, []);

  // When the URL changes (path or search), we consider navigation complete
  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  return null;
}
