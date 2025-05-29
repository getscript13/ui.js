// actions.js
(function () {
  window.kenActions = {
    start: function () {
      if (!window.kenUI || !document.getElementById('kenai-painel')) {
        console.error('kenUI não carregado ou painel não criado ainda!');
        return;
      }
      const painel = document.getElementById('kenai-painel');
      painel.innerText += '\nAção iniciada! Bora com tudo 🔥';

      // Exemplo de ação simples: muda a cor do painel depois de 2 seg
      setTimeout(() => {
        painel.style.backgroundColor = '#4caf50';
        painel.innerText += '\nCor do painel mudou! 🎉';
      }, 2000);
    }
  };
})();
