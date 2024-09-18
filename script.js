function Contar() {
  var init = window.document.getElementById("inicio");
  var fim = window.document.getElementById("fim");
  var pass = window.document.getElementById("passo");
  var res = window.document.getElementById("res");
  if (init.value.length == 0 || fim.value.length == 0) {
    window.alert("[ERRO] Falta de dados... Tente novamente!");
  } else {
    res.innerHTML = "Contando:";
    var i = Number(init.value);
    var f = Number(fim.value);
    var p = Number(pass.value);
    if (p == " ") {
      window.alert(
        "Como o valor Passo não foi informado ele vai passar a valer 1!"
      );
      p = 1;
    }
    if (i <= f) {
      for (var c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    } else if (i >= f) {
      for (var c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    }
    res.innerHTML += ` \u{1F3C1}`;
  }
}

var footer = window.document.getElementById("footer");
footer.innerHTML += `\u{1F9D9}`;
