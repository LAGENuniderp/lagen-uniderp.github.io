/* =====================================================================
   LAGEN — comportamentos da página
   1. Menu recolhível no celular
   2. Cronograma: marca a próxima aula e oculta as que já passaram
   3. Página inicial: mostra a próxima aula que ainda não aconteceu
   O site funciona sem este arquivo; ele só refina a exibição com base
   na data de hoje do visitante (não depende de novo commit).
   ===================================================================== */
(function () {
  "use strict";

  function hoje() {
    var d = new Date();
    return d.getFullYear() + "-" +
      ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
      ("0" + d.getDate()).slice(-2);
  }

  function cada(seletor, raiz, fn) {
    Array.prototype.forEach.call((raiz || document).querySelectorAll(seletor), fn);
  }

  var HOJE = hoje();

  /* 1. Menu ---------------------------------------------------------- */
  var botao = document.querySelector(".menu-botao");
  var menu = document.getElementById("menu-principal");

  if (botao && menu) {
    var definir = function (aberto) {
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
      menu.classList.toggle("aberto", aberto);
    };
    botao.addEventListener("click", function () {
      definir(botao.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && botao.getAttribute("aria-expanded") === "true") {
        definir(false);
        botao.focus();
      }
    });
  }

  /* 2. Cronograma ------------------------------------------------------ */
  cada("[data-cronograma]", null, function (bloco) {
    var lista = bloco.querySelector(".cronograma");
    var anteriores = 0;
    var proxima = null;

    cada(".aula[data-data]", bloco, function (aula) {
      if (aula.getAttribute("data-data") < HOJE) {
        aula.classList.add("aula--anterior");
        anteriores++;
      } else if (!proxima) {
        proxima = aula;
      }
    });

    if (proxima) {
      var eHoje = proxima.getAttribute("data-data") === HOJE;
      var selo = document.createElement("span");
      selo.className = "aula__selo";
      selo.textContent = eHoje ? "Hoje" : "Próxima aula";
      proxima.classList.add("aula--proxima");
      if (eHoje) proxima.classList.add("aula--hoje");
      var corpo = proxima.querySelector(".aula__corpo");
      if (corpo) corpo.insertBefore(selo, corpo.firstChild);
    } else {
      var semFuturas = bloco.querySelector("[data-sem-futuras]");
      if (semFuturas) semFuturas.hidden = false;
    }

    var alternar = bloco.querySelector("[data-alternar-anteriores]");
    if (anteriores > 0 && lista && alternar) {
      var rotulo = function (mostrando) {
        alternar.textContent = mostrando
          ? "Ocultar aulas anteriores"
          : "Mostrar aulas anteriores (" + anteriores + ")";
        alternar.setAttribute("aria-expanded", mostrando ? "true" : "false");
      };
      lista.classList.add("cronograma--ocultar");
      alternar.parentNode.hidden = false;
      rotulo(false);
      alternar.addEventListener("click", function () {
        var mostrando = lista.classList.toggle("cronograma--ocultar") === false;
        rotulo(mostrando);
      });
    }
  });

  /* 3. Próxima aula (página inicial) ---------------------------------- */
  cada("[data-proxima]", null, function (bloco) {
    var escolhido = null;
    cada(".proxima__item[data-data]", bloco, function (item) {
      item.hidden = true;
      if (!escolhido && item.getAttribute("data-data") >= HOJE) escolhido = item;
    });
    if (!escolhido) {
      bloco.hidden = true;
      return;
    }
    escolhido.hidden = false;
    if (escolhido.getAttribute("data-data") === HOJE) {
      var titulo = bloco.querySelector(".proxima__titulo");
      if (titulo) titulo.textContent = "Aula de hoje";
    }
  });
})();
