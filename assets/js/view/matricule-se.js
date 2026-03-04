const toggleSenha = document.getElementById("toggle-senha");
const toggleConfirmar = document.getElementById("toggle-confirmar");

const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");

const iconeSenha = toggleSenha.querySelector("i");
const iconeConfirmar = toggleConfirmar.querySelector("i");

toggleSenha.addEventListener("click", () => {
  if (senha.type === "password") {
    senha.type = "text";
    iconeSenha.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    senha.type = "password";
    iconeSenha.classList.replace("fa-eye-slash", "fa-eye");
  }
});

toggleConfirmar.addEventListener("click", () => {
  if (confirmarSenha.type === "password") {
    confirmarSenha.type = "text";
    iconeConfirmar.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    confirmarSenha.type = "password";
    iconeConfirmar.classList.replace("fa-eye-slash", "fa-eye");
  }
});

const data = document.getElementById("dataNascimento");

data.addEventListener("change", () => {
  if (data.value) {
    data.classList.add("preenchido");
  } else {
    data.classList.remove("preenchido");
  }
});
