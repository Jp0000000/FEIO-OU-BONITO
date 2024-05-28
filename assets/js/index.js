if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./assets/html/signin.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

document.addEventListener("DOMContentLoaded", function () {
  var sairLinks = document.querySelectorAll(".Sair");

  sairLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userLogado");
        window.location.href = "./assets/html/signin.html";
      }, 1000);
    });
  });
});

/******************** Like Noticia1 **********************************/
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#like");
  const number = document.querySelector("#number");
  let liked = false;

  button.addEventListener("click", () => {
    if (!liked) {
      // Se o botão ainda não foi clicado
      number.innerHTML = Number(number.textContent) + 1; // Adiciona um like
      button.classList.add("like"); // Adiciona a classe "like" para estilização
      liked = true; // define como true

      const particlesContainer = document.createElement("div");
      particlesContainer.classList.add("particles-container");
      document.body.appendChild(particlesContainer);

      const particlesCount = 10;
      const buttonRect = button.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;
      const maxDistanceFromCenter =
        Math.min(buttonRect.width, buttonRect.height) * 1.5;

      for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particlesContainer.appendChild(particle);

        // Coordenadas polares: raio = distância máxima do centro, ângulo = ângulo aleatório
        const angle = Math.random() * Math.PI * 2;
        const distance =
          Math.random() * maxDistanceFromCenter + buttonRect.width / 2; // Distância aumentada para estar fora do botão
        const particleX = buttonCenterX + distance * Math.cos(angle);
        const particleY = buttonCenterY + distance * Math.sin(angle);

        particle.style.left = `${particleX}px`;
        particle.style.top = `${particleY}px`;
      }

      setTimeout(() => {
        particlesContainer.remove();
      }, 1000);
    } else {
      // Se o botão já foi clicado
      number.innerHTML = Number(number.textContent) - 1; // Remove o like
      button.classList.remove("like"); // Remove a classe "like"
      liked = false; // Define liked como false novamente
    }
  });
});
/***************************************************************/
/**************** Comentarios Noticia 1  ***********************/

document.addEventListener("DOMContentLoaded", () => {
  const commentText = document.getElementById("comment-text");
  const postCommentButton = document.getElementById("post-comment");
  const commentsContainer = document.getElementById("comments-container");
  const toggleCommentsButton = document.getElementById("toggle-comments");

  postCommentButton.addEventListener("click", () => {
    const commentValue = commentText.value.trim();

    if (commentValue) {
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment");

      const commentAuthor = document.createElement("div");
      commentAuthor.classList.add("comment-author");
      commentAuthor.textContent = "Usuário Anônimo"; // Você pode substituir isso por um nome de usuário real

      const commentTextElement = document.createElement("div");
      commentTextElement.classList.add("comment-text");
      commentTextElement.textContent = commentValue;

      commentElement.appendChild(commentAuthor);
      commentElement.appendChild(commentTextElement);

      commentsContainer.appendChild(commentElement);
      commentText.value = ""; // Limpa o campo de texto após adicionar o comentário
    }
  });

  toggleCommentsButton.addEventListener("click", () => {
    if (commentsContainer.style.display === "none") {
      commentsContainer.style.display = "block";
      toggleCommentsButton.textContent = "Ocultar Comentários";
    } else {
      commentsContainer.style.display = "none";
      toggleCommentsButton.textContent = "Mostrar Comentários";
    }
  });
});

/***************************************************************** */
