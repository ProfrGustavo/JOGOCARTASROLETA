// ===== BANCO DE DADOS DE PERGUNTAS DE GEOMETRIA E MATEMÁTICA =====
const perguntas = [
    {
        pergunta: "Qual a fórmula da área total do cone?",
        opcoes: ["π · r · (r + g)", "2 · π · r · (r + g)", "π · r²", "π · r · g"],
        correta: 0
    },
    {
        pergunta: "Qual a fórmula da área total da esfera?",
        opcoes: ["4 · π · r²", "2 · π · r²", "π · r²", "4 · π · r³"],
        correta: 0
    },
    {
        pergunta: "Qual a fórmula da área total do cilindro?",
        opcoes: ["2 · π · r · (h + r)", "π · r · (h + r)", "2 · π · r · h", "π · r² · h"],
        correta: 0
    },
    {
        pergunta: "Qual a fórmula da área total do cubo?",
        opcoes: ["6 · a²", "a³", "4 · a²", "2 · a²"],
        correta: 0
    },
    {
        pergunta: "Qual a fórmula da área total de um prisma reto?",
        opcoes: ["2 · Ab + Al", "Ab + Al", "2 · Ab", "Al"],
        correta: 0
    },
    {
        pergunta: "Qual a fórmula da área de um triângulo?",
        opcoes: ["(base · altura) / 2", "base · altura", "lado²", "π · r²"],
        correta: 0
    },
    {
        pergunta: "Qual a fórmula do volume do cone?",
        opcoes: ["(π · r² · h) / 3", "π · r² · h", "(2 · π · r² · h) / 3", "(π · r³) / 3"],
        correta: 0
    },
    {
        pergunta: "Qual a fórmula do volume da esfera?",
        opcoes: ["(4 · π · r³) / 3", "π · r³", "4 · π · r²", "(2 · π · r³) / 3"],
        correta: 0
    },
    {
        pergunta: "Qual a fórmula do volume do cilindro?",
        opcoes: ["π · r² · h", "2 · π · r² · h", "π · r²", "π · r · h"],
        correta: 0
    },
    {
        pergunta: "Qual a fórmula do volume do cubo?",
        opcoes: ["a³", "6 · a²", "a²", "4 · a³"],
        correta: 0
    },
    {
        pergunta: "Calcule a área total de um cubo de lado 3.",
        opcoes: ["54", "27", "36", "18"],
        correta: 0
    },
    {
        pergunta: "Calcule o volume de um cubo de lado 4.",
        opcoes: ["64", "48", "16", "96"],
        correta: 0
    },
    {
        pergunta: "Calcule o volume de um cone com raio 3 e altura 4 (use π=3).",
        opcoes: ["36", "48", "24", "12"],
        correta: 0
    },
    {
        pergunta: "Calcule a área total de um cilindro com raio 2 e altura 5 (use π=3).",
        opcoes: ["84", "60", "72", "48"],
        correta: 0
    },
    {
        pergunta: "Qual a área de um triângulo de base 6 e altura 8?",
        opcoes: ["24", "48", "14", "28"],
        correta: 0
    },
    {
        pergunta: "Qual a área de um círculo de raio 5 (use π=3)?",
        opcoes: ["75", "30", "15", "100"],
        correta: 0
    },
    {
        pergunta: "Qual a circunferência de um círculo de raio 7 (use π=3)?",
        opcoes: ["42", "21", "14", "49"],
        correta: 0
    },
    {
        pergunta: "Qual a área de um quadrado de lado 9?",
        opcoes: ["81", "18", "36", "72"],
        correta: 0
    },
    {
        pergunta: "Qual o perímetro de um retângulo de lados 4 e 7?",
        opcoes: ["22", "11", "28", "14"],
        correta: 0
    },
    {
        pergunta: "Qual a área de um losango com diagonais 6 e 8?",
        opcoes: ["24", "48", "14", "12"],
        correta: 0
    },
    {
        pergunta: "Qual a área de um paralelogramo de base 5 e altura 6?",
        opcoes: ["30", "11", "60", "15"],
        correta: 0
    },
    {
        pergunta: "Qual a soma dos ângulos internos de um triângulo?",
        opcoes: ["180°", "90°", "360°", "270°"],
        correta: 0
    },
    {
        pergunta: "Qual a soma dos ângulos internos de um quadrilátero?",
        opcoes: ["360°", "180°", "540°", "720°"],
        correta: 0
    },
    {
        pergunta: "Qual o teorema de Pitágoras?",
        opcoes: ["a² + b² = c²", "a + b = c", "a² + b² = c", "a + b² = c²"],
        correta: 0
    },
    {
        pergunta: "Qual o erro comum na fórmula da área do círculo?",
        opcoes: ["Usar 2 · π · r", "Usar π · r²", "Usar π · d", "Usar 2 · π · r²"],
        correta: 0
    },
    {
        pergunta: "Qual a raiz quadrada de 144?",
        opcoes: ["12", "14", "16", "10"],
        correta: 0
    },
    {
        pergunta: "Qual a raiz quadrada de 81?",
        opcoes: ["9", "7", "8", "11"],
        correta: 0
    },
    {
        pergunta: "Quanto é 7 x 8?",
        opcoes: ["56", "48", "64", "42"],
        correta: 0
    },
    {
        pergunta: "Quanto é 15% de 200?",
        opcoes: ["30", "15", "20", "25"],
        correta: 0
    },
    {
        pergunta: "Quanto é 25% de 80?",
        opcoes: ["20", "25", "15", "30"],
        correta: 0
    },
    {
        pergunta: "Qual a média de 4, 6, 8 e 10?",
        opcoes: ["7", "6", "8", "9"],
        correta: 0
    },
    {
        pergunta: "Qual a moda de 2, 3, 3, 4, 5?",
        opcoes: ["3", "2", "4", "5"],
        correta: 0
    },
    {
        pergunta: "Qual a mediana de 1, 3, 5, 7, 9?",
        opcoes: ["5", "3", "7", "6"],
        correta: 0
    },
    {
        pergunta: "Qual o próximo número da sequência: 2, 4, 8, 16, ...?",
        opcoes: ["32", "24", "30", "18"],
        correta: 0
    },
    {
        pergunta: "Qual a raiz cúbica de 27?",
        opcoes: ["3", "9", "6", "12"],
        correta: 0
    },
    {
        pergunta: "Quanto é 2 elevado a 5?",
        opcoes: ["32", "16", "8", "64"],
        correta: 0
    },
    {
        pergunta: "Quanto é 3 elevado a 3?",
        opcoes: ["27", "9", "81", "18"],
        correta: 0
    },
    {
        pergunta: "Quanto é 10 elevado a 2?",
        opcoes: ["100", "20", "1000", "10"],
        correta: 0
    },
    {
        pergunta: "Qual a distância entre os pontos (0,0) e (3,4)?",
        opcoes: ["5", "7", "1", "6"],
        correta: 0
    },
    {
        pergunta: "Qual a equação da reta que passa por (0,0) e (1,1)?",
        opcoes: ["y = x", "y = 2x", "y = x²", "y = x + 1"],
        correta: 0
    },
    {
        pergunta: "Qual o seno de 30°?",
        opcoes: ["1/2", "√3/2", "1", "0"],
        correta: 0
    },
    {
        pergunta: "Qual o cosseno de 60°?",
        opcoes: ["1/2", "√3/2", "1", "0"],
        correta: 0
    },
    {
        pergunta: "Qual a tangente de 45°?",
        opcoes: ["1", "0", "√3", "1/2"],
        correta: 0
    },
    {
        pergunta: "Qual a derivada de x²?",
        opcoes: ["2x", "x", "x²", "2"],
        correta: 0
    },
    {
        pergunta: "Qual a integral indefinida de 2x?",
        opcoes: ["x²", "2x²", "x", "x²/2"],
        correta: 0
    },
    {
        pergunta: "Calcule a área total de um cone com raio 3 e geratriz 5 (use π=3).",
        opcoes: ["72", "60", "48", "36"],
        correta: 0
    },
    {
        pergunta: "Calcule o volume de uma esfera de raio 3 (use π=3).",
        opcoes: ["108", "36", "72", "12"],
        correta: 0
    },
    {
        pergunta: "Qual a área total de um cubo de lado x?",
        opcoes: ["6x²", "x³", "4x²", "2x²"],
        correta: 0
    },
    {
        pergunta: "Qual o volume de um cubo de lado x?",
        opcoes: ["x³", "6x²", "x²", "4x³"],
        correta: 0
    },
    {
        pergunta: "Calcule o volume de um cone com raio 4 e altura 6 (use π=3).",
        opcoes: ["96", "72", "48", "144"],
        correta: 0
    }
];

// ===== ELEMENTOS DOM =====
const cardsContainer = document.getElementById('cards-container');
const expandedQuestion = document.getElementById('expanded-question');
const questionContent = document.getElementById('question-content');
const closeModalBtn = document.getElementById('close-modal');
const helpOverlay = document.getElementById('helpOverlay');
const closeHelpBtn = document.getElementById('closeHelp');
const helpBtn = document.getElementById('helpBtn');

let currentCardIndex = null;
let isAnswered = false;
let score = 0;

// ===== CRONÔMETRO =====
let timerInterval = null;
let seconds = 0;
let timerRunning = false;

function iniciarCronometro() {
    if (timerRunning) return;
    seconds = 0;
    atualizarDisplayTimer();
    timerRunning = true;
    timerInterval = setInterval(() => {
        seconds++;
        atualizarDisplayTimer();
    }, 1000);
}

function pararCronometro() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    timerRunning = false;
}

function atualizarDisplayTimer() {
    const timerEl = document.getElementById('timerDisplay');
    if (timerEl) {
        const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        timerEl.textContent = `⏱️ ${mins}:${secs}`;
    }
}

function resetarTimerDisplay() {
    const timerEl = document.getElementById('timerDisplay');
    if (timerEl) timerEl.textContent = '⏱️ 00:00';
}

// ===== FUNÇÃO PARA EMBARALHAR ARRAY =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ===== GERAR 50 CARTAS =====
if (cardsContainer) {
    cardsContainer.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = i + 1;
        card.dataset.index = i;
        card.addEventListener('click', () => abrirPergunta(i, card));
        cardsContainer.appendChild(card);
    }
}

// ===== FUNÇÃO PARA ABRIR MODAL =====
function abrirPergunta(index, cardElement) {
    if (cardElement.classList.contains('hidden-card')) return;
    currentCardIndex = index;
    const perguntaObj = perguntas[index % perguntas.length];

    // Cria uma cópia das opções e índices, e embaralha
    const opcoesComIndices = perguntaObj.opcoes.map((texto, idx) => ({ texto, idx }));
    const embaralhadas = shuffleArray([...opcoesComIndices]);
    const opcoesEmbaralhadas = embaralhadas.map(item => item.texto);
    const novoIndiceCorreto = embaralhadas.findIndex(item => item.idx === perguntaObj.correta);

    // Monta o HTML com as opções embaralhadas
    let html = `
        <div class="question-text">${perguntaObj.pergunta}</div>
        <div class="score-display">
            <span>🏆 Acertos: <span id="scoreDisplay">${score}</span></span>
            <span class="timer-display" id="timerDisplay">⏱️ 00:00</span>
        </div>
        <div class="options-grid" id="optionsGrid">
    `;
    const letras = ['A', 'B', 'C', 'D'];
    opcoesEmbaralhadas.forEach((opcao, i) => {
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

    // Armazena o índice correto embaralhado
    window._indiceCorretoAtual = novoIndiceCorreto;

    // Inicia cronômetro
    iniciarCronometro();

    // Eventos das opções
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (isAnswered) return;
            const optIndex = parseInt(btn.dataset.optindex);
            responderPergunta(optIndex, perguntaObj, cardElement, window._indiceCorretoAtual);
        });
    });

    isAnswered = false;
    expandedQuestion.classList.add('show');
}

// ===== FUNÇÃO PARA RESPONDER =====
function responderPergunta(optIndex, perguntaObj, cardElement, indiceCorretoEmbaralhado) {
    if (isAnswered) return;
    isAnswered = true;

    pararCronometro();

    const allBtns = document.querySelectorAll('.option-btn');
    const feedbackMsg = document.getElementById('feedbackMsg');
    const scoreSpan = document.getElementById('scoreDisplay');

    allBtns.forEach(btn => btn.classList.add('disabled'));

    const acertou = (optIndex === indiceCorretoEmbaralhado);
    if (acertou) {
        score++;
        if (scoreSpan) scoreSpan.textContent = score;
        feedbackMsg.textContent = '✅ Resposta correta!';
        feedbackMsg.className = 'feedback-msg show correct';
    } else {
        const letras = ['A', 'B', 'C', 'D'];
        const letraCorreta = letras[indiceCorretoEmbaralhado];
        feedbackMsg.textContent = `❌ Resposta incorreta. A correta era a letra ${letraCorreta}.`;
        feedbackMsg.className = 'feedback-msg show wrong';
    }

    allBtns.forEach((btn, idx) => {
        if (idx === indiceCorretoEmbaralhado) {
            btn.classList.add('correct');
        } else if (idx === optIndex && !acertou) {
            btn.classList.add('wrong');
        }
    });

    cardElement.classList.add('hidden-card');
    cardElement.classList.remove('flipped');
}

// ===== FECHAR MODAL =====
function fecharModal() {
    pararCronometro();
    resetarTimerDisplay();
    if (expandedQuestion) expandedQuestion.classList.remove('show');
    if (questionContent) questionContent.innerHTML = '';
    isAnswered = false;
}

// ===== EVENTOS =====
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', fecharModal);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') fecharModal();
});

if (expandedQuestion) {
    expandedQuestion.addEventListener('click', (e) => {
        if (e.target === expandedQuestion) fecharModal();
    });
}

// ===== AJUDA INICIAL =====
if (helpOverlay) {
    if (localStorage.getItem('quizHelpShown') === 'true') {
        helpOverlay.classList.add('hidden');
    } else {
        helpOverlay.classList.remove('hidden');
    }
}

if (closeHelpBtn) {
    closeHelpBtn.addEventListener('click', () => {
        if (helpOverlay) helpOverlay.classList.add('hidden');
        localStorage.setItem('quizHelpShown', 'true');
    });
}

if (helpBtn) {
    helpBtn.addEventListener('click', () => {
        if (helpOverlay) helpOverlay.classList.remove('hidden');
    });
}