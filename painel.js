// ==UserScript==
// @name         Ken AI Painel
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        *://*/*
// @grant        none
// @require      https://raw.githubusercontent.com/getscript13/ui.js/main/painel.js
// @require      https://raw.githubusercontent.com/getscript13/ui.js/main/actions.js
// ==/UserScript==
// painel.js

(function () {
  window.kenUI = {
    createPainel: function () {
      const div = document.createElement('div');
      div.id = 'kenai-painel';
      div.style.position = 'fixed';
      div.style.top = '20px';
      div.style.left = '20px';
      div.style.backgroundColor = '#222';
      div.style.color = 'white';
      div.style.padding = '10px 20px';
      div.style.borderRadius = '8px';
      div.style.zIndex = 999999;
      div.style.fontFamily = 'Arial, sans-serif';
      div.innerText = 'Painel Ken AI carregado!';
      document.body.appendChild(div);
    }
  };

  window.kenUI.createPainel();
  window.kenActions.start();
})();
