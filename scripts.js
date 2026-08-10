// ===== PERGUNTAS DE GEOMETRIA =====
const perguntas = [
    {
        pergunta: 'Em um cone com raio = 5 e altura = 10, o volume é: (use π ≈ 3,14)',
        opcoes: ['50', '150', '200', '300'],
        correta: 1 // 150
    },
    {
        pergunta: 'Qual a área de um círculo de raio 7? (use π ≈ 3,14)',
        opcoes: ['153,86', '43,96', '113,04', '78,50'],
        correta: 0
    },
    {
        pergunta: 'O volume de uma esfera de raio 3 é aproximadamente: (use π ≈ 3,14)',
        opcoes: ['113,04', '84,78', '36,00', '28,26'],
        correta: 0
    },
    {
        pergunta: 'Um cilindro tem raio 4 e altura 6. Seu volume é: (use π ≈ 3,14)',
        opcoes: ['301,44', '200,96', '150,72', '100,48'],
        correta: 0
    },
    {
        pergunta: 'Qual a diagonal de um quadrado de lado 5? (use √2 ≈ 1,41)',
        opcoes: ['7,05', '10,00', '6,25', '5,00'],
        correta: 0
    },
    // Você pode adicionar mais perguntas aqui para ter variedade
];

// ===== ELEMENTOS DOM =====
const cardsContainer = document.getElementById('cards-container');
const expandedQuestion = document.getElementById('expanded-question');
const questionContent = document.getElementById('question-content');
const closeModalBtn = document.getElementById('close-modal');

let currentCardIndex = null;      // índice da carta clicada
let isAnswered = false;          // controla se já respondeu à pergunta atual
let score = 0;                   // contador de acertos

// ===== GERAR 50 CARTAS =====
for (let i = 0; i < 50; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = i + 1;
    card.dataset.index = i;
    card.addEventListener('click', () => abrirPergunta(i, card));
    cardsContainer.appendChild(card);
}

// ===== FUNÇÃO PARA ABRIR MODAL COM PERGUNTA =====
function abrirPergunta(index, cardElement) {
    // Se a carta já estiver oculta (já respondida), não faz nada
    if (cardElement.classList.contains('hidden-card')) return;

    // Guarda referência da carta atual
    currentCardIndex = index;
    const perguntaObj = perguntas[index % perguntas.length]; // ciclo

    // Monta o conteúdo do modal
    let html = `
        <div class="question-text">${perguntaObj.pergunta}</div>
        <div class="score-display">🏆 Acertos: <span id="scoreDisplay">${score}</span></div>
        <div class="options-grid" id="optionsGrid">
    `;
    const letras = ['A', 'B', 'C', 'D'];
    perguntaObj.opcoes.forEach((opcao, i) => {
        html += `
            <button class="option-btn" data-optindex="${i}">
                <span class="letter">${letras[i]}</span> ${opcao}
            </button>
        `;
    });
    html += `
        </div>
        <div class="feedback-msg" id="feedbackMsg"></div>
    `;
    questionContent.innerHTML = html;

    // Adiciona evento de clique nas opções
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (isAnswered) return; // já respondeu
            const optIndex = parseInt(btn.dataset.optindex);
            responderPergunta(optIndex, perguntaObj, cardElement);
        });
    });

    // Reseta estado
    isAnswered = false;
    // Mostra modal
    expandedQuestion.classList.add('show');
}

// ===== FUNÇÃO PARA PROCESSAR RESPOSTA =====
function responderPergunta(optIndex, perguntaObj, cardElement) {
    if (isAnswered) return;
    isAnswered = true;

    const allBtns = document.querySelectorAll('.option-btn');
    const feedbackMsg = document.getElementById('feedbackMsg');
    const scoreSpan = document.getElementById('scoreDisplay');

    // Desabilita todos os botões
    allBtns.forEach(btn => btn.classList.add('disabled'));

    // Verifica se acertou
    const acertou = (optIndex === perguntaObj.correta);
    if (acertou) {
        score++;
        scoreSpan.textContent = score;
        feedbackMsg.textContent = '✅ Resposta correta!';
        feedbackMsg.className = 'feedback-msg show correct';
    } else {
        feedbackMsg.textContent = '❌ Resposta incorreta. A correta era: ' + perguntaObj.opcoes[perguntaObj.correta];
        feedbackMsg.className = 'feedback-msg show wrong';
    }

    // Marca visualmente os botões (correto e errado)
    allBtns.forEach((btn, idx) => {
        if (idx === perguntaObj.correta) {
            btn.classList.add('correct');
        } else if (idx === optIndex && !acertou) {
            btn.classList.add('wrong');
        }
    });

    // Oculta a carta (removendo-a da vista) – mantendo a função original
    cardElement.classList.add('hidden-card');
    cardElement.classList.remove('flipped'); // para garantir

    // Após 2 segundos, fecha o modal automaticamente (ou pode deixar o usuário fechar)
    // Mas mantemos o botão de fechar.
}

// ===== FECHAR MODAL =====
function fecharModal() {
    expandedQuestion.classList.remove('show');
    // Limpa conteúdo para evitar conflitos
    questionContent.innerHTML = '';
    isAnswered = false;
}

// Evento do botão fechar
closeModalBtn.addEventListener('click', fecharModal);

// Fechar com tecla ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        fecharModal();
    }
});

// Fechar ao clicar no fundo (overlay) – opcional
expandedQuestion.addEventListener('click', (e) => {
    if (e.target === expandedQuestion) {
        fecharModal();
    }
});