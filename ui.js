// ui.js
(function () {
  window.kenUI = {
    createPainel: function () {
      const div = document.createElement('div');
      div.id = 'kenai-painel';
      div.style.position = 'fixed';
      div.style.top = '20px';
      div.style.left = '20px';
      div.style.padding = '10px 20px';
      div.style.backgroundColor = '#222';
      div.style.color = 'white';
      div.style.fontFamily = 'Arial, sans-serif';
      div.style.zIndex = 999999;
      div.style.borderRadius = '8px';
      div.innerText = 'Painel Ken AI carregado!';
      document.body.appendChild(div);
    }
  };
})();
