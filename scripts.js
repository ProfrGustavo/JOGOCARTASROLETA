// Array de perguntas para as cartas
const perguntas = [
   "1) Qual é a importância do empreendedorismo na economia?",
"2) Quais são os principais tipos de empreendedores?",
"3) Como a inovação está relacionada ao empreendedorismo?",
"4) O que caracteriza um empreendedor de sucesso?",
"5) Quais são as principais diferenças entre empreendedorismo e gestão empresarial?",
"6) Por que é importante elaborar um plano de negócios?",
"7) Quais elementos devem ser incluídos em um plano de negócios eficaz?",
"8) Como a análise SWOT pode ajudar na elaboração de estratégias empresariais?",
"9) Qual a importância da definição de metas e objetivos no empreendedorismo?",
"10) Como realizar uma pesquisa de mercado para entender o seu público-alvo?",
"11) Como calcular o ponto de equilíbrio de um negócio?",
"12) O que deve ser considerado ao definir o preço de um produto ou serviço?",
"13) Quais são as principais fontes de financiamento para novos empreendimentos?",
"14) Como a gestão de fluxo de caixa pode impactar a sobrevivência de um negócio?",
"15) Quais são as diferenças entre lucro, receita e custo?",
"16) O que é marketing digital e como ele pode beneficiar um novo negócio?",
"17) Quais são as principais estratégias de marketing para pequenas empresas?",
"18) Como construir uma identidade visual para uma marca?",
"19) Quais são as vantagens de utilizar as redes sociais para promover um negócio?",
"20) Como desenvolver um funil de vendas eficiente?",
"21) Quais habilidades são essenciais para um líder empreendedor?",
"22) Como a cultura organizacional influencia o sucesso de uma empresa?",
"23) O que é gestão de equipes e por que é importante para um empreendedor?",
"24) Como lidar com a pressão e o estresse no ambiente empresarial?",
"25) Quais são os desafios comuns enfrentados por empreendedores em início de carreira?",
"26) Como o empreendedorismo social difere do empreendedorismo tradicional?",
"27) Qual a importância da sustentabilidade nos negócios contemporâneos?",
"28) Como implementar práticas de responsabilidade social em um novo empreendimento?",
"29) Quais são os benefícios de adotar um modelo de negócios sustentável?",
"30) Como medir o impacto social de uma empresa?",
"31) Quais são as tendências atuais no empreendedorismo?",
"32) Como a tecnologia pode ser utilizada para impulsionar novos negócios?",
"33) O que é um 'pitch' e como apresentá-lo de forma eficaz?",
"34) Como as startups estão mudando o cenário do empreendedorismo?",
"35) Qual é o papel da inteligência artificial no futuro dos negócios?",
"36) Quais características pessoais são essenciais para um empreendedor?",
"37) Como a resiliência pode ajudar um empreendedor a superar obstáculos?",
"38) De que forma a educação empreendedora pode impactar a carreira de um indivíduo?",
"39) Como o networking pode beneficiar um empreendedor?",
"40) Quais são as melhores práticas para o desenvolvimento contínuo de habilidades empreendedoras?",
"41) Cite um exemplo de empreendedor famoso e explique como ele alcançou o sucesso.",
"42) Quais lições podem ser aprendidas com falhas de empreendedores conhecidos?",
"43) Como os mentores podem ajudar novos empreendedores?",
"44) O que podemos aprender com o fracasso de um negócio?",
"45) Como as histórias de sucesso podem inspirar novos empreendedores?",
"46) Quais são os principais desafios enfrentados por novos empreendedores no mercado atual?",
"47) Como identificar oportunidades de negócio em um mercado saturado?",
"48) O que é um modelo de negócios e como ele se relaciona com a viabilidade de uma empresa?",
"49) Como a pandemia afetou o empreendedorismo e quais mudanças permanecerão?",
"50) De que forma a economia global impacta as decisões de empreendedores locais?"

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
