"use client";
import { useEffect } from "react";

export default function ScrollManager() {
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Case 1: pure hash link (e.g., #about)
      if (href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          history.pushState(null, "", href);
        }
        return;
      }

      // Case 2: same-page absolute link with hash (e.g., /#about)
      try {
        const url = new URL(href, window.location.origin);
        const samePage =
          url.origin === window.location.origin &&
          url.pathname === window.location.pathname &&
          !!url.hash;
        if (samePage) {
          const target = document.querySelector(url.hash);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            history.pushState(null, "", url.hash);
          }
        }
      } catch {
        // Ignore invalid URLs
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
