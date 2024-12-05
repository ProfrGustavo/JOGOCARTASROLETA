// Array de perguntas para as cartas
const perguntas = [
  "1) quanto é 1 + 1?",
 "1) quanto é 1 + 1?", 
   "1) quanto é 1 + 1?",
  v "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
   "1) quanto é 1 + 1?",
  
    // Adicione mais perguntas conforme necessário
];

const cardsContainer = document.getElementById("cards-container");
const expandedQuestion = document.getElementById("expanded-question");
const questionContent = document.getElementById("question-content");

// Gerar 50 cartas automaticamente
for (let i = 0; i < 50; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerText = "" + (i + 1);
    card.addEventListener("click", () => flipCard(card, i));
    cardsContainer.appendChild(card);
}

// Função para girar a carta e exibir a pergunta
function flipCard(card, index) {
    card.classList.add("flipped");
    const pergunta = perguntas[index % perguntas.length]; // Cicla perguntas
    questionContent.innerText = pergunta;
    expandedQuestion.classList.add("show");
}

// Função para fechar a pergunta ampliada
function closeExpandedQuestion() {
    expandedQuestion.classList.remove("show");
    const flippedCards = document.querySelectorAll(".card.flipped");
    if (flippedCards.length > 0) {
        flippedCards.forEach(card => {
            card.classList.remove("flipped"); // Gira de volta a carta
            card.style.display = "none"; // Oculta a carta
        });
    }
}

// Evento para fechar ao pressionar Esc
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeExpandedQuestion();
    }
});
