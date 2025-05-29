// ==UserScript==
// @name         Ken AI Painel
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        *://*/*
// @grant        none
// @require      https://raw.githubusercontent.com/getscript13/ui.js/main/painel.js
// @require      https://raw.githubusercontent.com/getscript13/ui.js/main/actions.js
// ==/UserScript==

(function () {
  'use strict';

  window.kenUI.createPainel();
  window.kenActions.start();
})();
