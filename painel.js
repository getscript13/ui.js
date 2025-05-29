// ==UserScript==
// @name         Ken AI Painel Test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Teste modular Tampermonkey com github
// @author       Kelve
// @match        *://*/*
// @grant        none
// @require      https://raw.githubusercontent.com/seu-usuario/seu-repo/main/ui.js
// @require      https://raw.githubusercontent.com/seu-usuario/seu-repo/main/actions.js
// ==/UserScript==

(function () {
  'use strict';

  // Cria painel (de ui.js)
  window.kenUI.createPainel();

  // Inicia ação (de actions.js)
  window.kenActions.start();
})();
