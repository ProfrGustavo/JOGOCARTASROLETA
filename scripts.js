// Array de perguntas para as cartas
const perguntas = [
    "Qual é a importância do empreendedorismo na economia?", 
"Quais são os principais tipos de empreendedores?", 
"Como a inovação está relacionada ao empreendedorismo?", 
"O que caracteriza um empreendedor de sucesso?", 
"Quais são as principais diferenças entre empreendedorismo e gestão empresarial?", 
"Por que é importante elaborar um plano de negócios?", 
"Quais elementos devem ser incluídos em um plano de negócios eficaz?", 
"Como a análise SWOT pode ajudar na elaboração de estratégias empresariais?", 
"Qual a importância da definição de metas e objetivos no empreendedorismo?", 
"Como realizar uma pesquisa de mercado para entender o seu público-alvo?", 
"Como calcular o ponto de equilíbrio de um negócio?", 
"O que deve ser considerado ao definir o preço de um produto ou serviço?", 
"Quais são as principais fontes de financiamento para novos empreendimentos?", 
"Como a gestão de fluxo de caixa pode impactar a sobrevivência de um negócio?", 
"Quais são as diferenças entre lucro, receita e custo?", 
"O que é marketing digital e como ele pode beneficiar um novo negócio?", 
"Quais são as principais estratégias de marketing para pequenas empresas?", 
"Como construir uma identidade visual para uma marca?", 
"Quais são as vantagens de utilizar as redes sociais para promover um negócio?", 
"Como desenvolver um funil de vendas eficiente?", 
"Quais habilidades são essenciais para um líder empreendedor?", 
"Como a cultura organizacional influencia o sucesso de uma empresa?", 
"O que é gestão de equipes e por que é importante para um empreendedor?", 
"Como lidar com a pressão e o estresse no ambiente empresarial?", 
"Quais são os desafios comuns enfrentados por empreendedores em início de carreira?", 
"Como o empreendedorismo social difere do empreendedorismo tradicional?", 
"Qual a importância da sustentabilidade nos negócios contemporâneos?", 
"Como implementar práticas de responsabilidade social em um novo empreendimento?", 
"Quais são os benefícios de adotar um modelo de negócios sustentável?", 
"Como medir o impacto social de uma empresa?", 
"Quais são as tendências atuais no empreendedorismo?", 
"Como a tecnologia pode ser utilizada para impulsionar novos negócios?", 
"O que é um 'pitch' e como apresentá-lo de forma eficaz?", 
"Como as startups estão mudando o cenário do empreendedorismo?", 
"Qual é o papel da inteligência artificial no futuro dos negócios?", 
"Quais características pessoais são essenciais para um empreendedor?", 
"Como a resiliência pode ajudar um empreendedor a superar obstáculos?", 
"De que forma a educação empreendedora pode impactar a carreira de um indivíduo?", 
"Como o networking pode beneficiar um empreendedor?", 
"Quais são as melhores práticas para o desenvolvimento contínuo de habilidades empreendedoras?", 
"Cite um exemplo de empreendedor famoso e explique como ele alcançou o sucesso.", 
"Quais lições podem ser aprendidas com falhas de empreendedores conhecidos?", 
"Como os mentores podem ajudar novos empreendedores?", 
"O que podemos aprender com o fracasso de um negócio?", 
"Como as histórias de sucesso podem inspirar novos empreendedores?", 
"Quais são os principais desafios enfrentados por novos empreendedores no mercado atual?", 
"Como identificar oportunidades de negócio em um mercado saturado?", 
"O que é um modelo de negócios e como ele se relaciona com a viabilidade de uma empresa?", 
"Como a pandemia afetou o empreendedorismo e quais mudanças permanecerão?", 
"De que forma a economia global impacta as decisões de empreendedores locais?"

    // Adicione mais perguntas conforme necessário
];

const cardsContainer = document.getElementById("cards-container");
const expandedQuestion = document.getElementById("expanded-question");
const questionContent = document.getElementById("question-content");

// Gerar 50 cartas automaticamente
for (let i = 0; i < 50; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerText = "Carta " + (i + 1);
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
        flippedCards[flippedCards.length - 1].style.visibility = "hidden";
    }
}

// Evento para fechar ao pressionar Esc
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeExpandedQuestion();
    }
});
