var form = document.getElementById("formLogin");
var campoEmail = document.getElementById("email");
var campoSenha = document.getElementById("senha");

function validarEmail(valor) {
  if (valor === "") return "Informe o e-mail.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) return "E-mail inválido.";
  return "";
}

function validarSenha(valor) {
  if (valor === "") return "Informe a senha.";
  if (valor.length < 6) return "A senha deve ter ao menos 6 caracteres.";
  return "";
}

function mostrarErro(campo, erroId, texto) {
  document.getElementById(erroId).textContent = texto;
  campo.classList.toggle("is-invalid", texto !== "");
  return texto === "";
}

campoEmail.addEventListener("input", function () {
  mostrarErro(campoEmail, "erroEmail", validarEmail(campoEmail.value.trim()));
});
campoSenha.addEventListener("input", function () {
  mostrarErro(campoSenha, "erroSenha", validarSenha(campoSenha.value));
});

document.getElementById("toggleSenha").addEventListener("click", function () {
  var oculta = campoSenha.type === "password";
  campoSenha.type = oculta ? "text" : "password";
  this.textContent = oculta ? "Ocultar" : "Mostrar";
});

["linkCadastro", "linkRecuperar"].forEach(function (id) {
  document.getElementById(id).addEventListener("click", function (e) {
    e.preventDefault();
  });
});

form.onsubmit = function (event) {
  event.preventDefault();

  var okEmail = mostrarErro(campoEmail, "erroEmail", validarEmail(campoEmail.value.trim()));
  var okSenha = mostrarErro(campoSenha, "erroSenha", validarSenha(campoSenha.value));

  var msg = document.getElementById("msgLogin");
  if (okEmail && okSenha) {
    msg.textContent = "Login validado com sucesso!";
    msg.className = "text-center fw-semibold text-success mt-3";
  } else {
    msg.textContent = "";
  }
};
