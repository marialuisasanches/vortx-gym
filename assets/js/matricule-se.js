const toggle = document.getElementById("toggle-senha");
const senha = document.getElementById("senha");

toggle.addEventListener("click", () => {
  if (senha.type === "password") {
    senha.type = "text";
    toggle.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    senha.type = "password";
    toggle.classList.replace("fa-eye-slash", "fa-eye");
  }
});

const data = document.getElementById("data-nascimento");

data.addEventListener("change", () => {
  if (data.value) {
    data.classList.add("preenchido");
  } else {
    data.classList.remove("preenchido");
  }
});
