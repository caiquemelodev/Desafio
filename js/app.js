function validacaoEmail() {
  const emailForm = document.getElementById("email_form");
  emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    email = email.toLowerCase();
    const mensagem_sucesso = document.getElementById("mensagem_sucesso");
    const mensagem_aviso = document.getElementById("mensagem_aviso");
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let existingEmails = JSON.parse(localStorage.getItem("emails")) || [];

    if (regex.test(email)) {
      console.log(email);
      if (existingEmails.includes(email)) {
        mensagem_aviso.textContent = "Você já se inscreveu com este e-mail";
        mensagem_sucesso.textContent = "";
      } else {
        existingEmails.push(email);
        localStorage.setItem("emails", JSON.stringify(existingEmails));
        mensagem_sucesso.textContent = "Obrigado por se inscrever!";
        mensagem_aviso.textContent = "";
      }
    } else {
      mensagem_sucesso.textContent =
        "E-mail inválido. Por favor, tente novamente.";
      mensagem_aviso.textContent = "";
    }
  });
}
validacaoEmail();
