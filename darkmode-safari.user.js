// ==UserScript==
// @name         Darkmode Safari
// @namespace    darkmode-safari
// @version      1.0.0
// @description  Force dark mode on all websites — iOS Safari + Tampermonkey compatible
// @author       Jason
// @match        *://*/*
// @exclude      *://www.youtube.com/*
// @exclude      *://music.youtube.com/*
// @exclude      *://github.com/*
// @exclude      *://twitter.com/*
// @exclude      *://x.com/*
// @exclude      *://discord.com/*
// @exclude      *://open.spotify.com/*
// @run-at       document-start
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {
  'use strict';

  const STYLE_ID = 'darkmode-safari-css';

  const darkCSS = `
    html {
      background-color: #1a1a1a !important;
      filter: invert(1) hue-rotate(180deg);
    }
    body {
      background-color: #1a1a1a !important;
    }
    img,
    video,
    picture,
    canvas,
    svg image,
    [style*="background-image"],
    embed,
    object {
      filter: invert(1) hue-rotate(180deg) !important;
    }
    iframe {
      filter: invert(1) hue-rotate(180deg);
    }
  `;

  function inject() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = darkCSS;
    (document.head || document.documentElement).appendChild(style);
  }

  // Inject immediately at document-start to avoid flash
  inject();

  // Re-inject if head wasn't available yet
  if (!document.head) {
    const observer = new MutationObserver(() => {
      if (document.head) {
        inject();
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true });
  }
})();
