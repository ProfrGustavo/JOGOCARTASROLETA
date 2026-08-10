// ===== 50 PERGUNTAS DE GEOMETRIA (FÁCEIS, CONCEITUAIS, π = 3) =====
const perguntas = [
    // 1
    {
        pergunta: 'Qual é a fórmula do volume do cubo?',
        opcoes: ['lado³', 'lado²', '6·lado²', 'lado·altura·largura'],
        correta: 0
    },
    // 2
    {
        pergunta: 'Volume de um paralelepípedo de dimensões 2, 3 e 4 é:',
        opcoes: ['24', '12', '48', '36'],
        correta: 0
    },
    // 3
    {
        pergunta: 'Qual a área de um quadrado de lado 5?',
        opcoes: ['25', '20', '10', '15'],
        correta: 0
    },
    // 4
    {
        pergunta: 'Quantas faces tem um cubo?',
        opcoes: ['6', '8', '4', '12'],
        correta: 0
    },
    // 5
    {
        pergunta: 'Fórmula do volume do cilindro (use π = 3):',
        opcoes: ['π·r²·h', '2·π·r·h', 'π·r·h', 'π·r²'],
        correta: 0
    },
    // 6
    {
        pergunta: 'Volume de um cilindro com raio 2 e altura 5 (π=3):',
        opcoes: ['60', '30', '120', '90'],
        correta: 0
    },
    // 7
    {
        pergunta: 'Área de um retângulo de base 8 e altura 3:',
        opcoes: ['24', '11', '16', '48'],
        correta: 0
    },
    // 8
    {
        pergunta: 'Fórmula da área do círculo (use π = 3):',
        opcoes: ['π·r²', '2·π·r', 'π·r', 'π·d'],
        correta: 0
    },
    // 9
    {
        pergunta: 'Área de um círculo de raio 4 (π=3):',
        opcoes: ['48', '24', '36', '12'],
        correta: 0
    },
    // 10
    {
        pergunta: 'Qual a diagonal de um quadrado de lado 4? (use √2 ≈ 1,4)',
        opcoes: ['5,6', '8', '4', '16'],
        correta: 0
    },
    // 11
    {
        pergunta: 'Teorema de Pitágoras: qual a relação correta?',
        opcoes: ['a² = b² + c²', 'a = b + c', 'a² = b² - c²', 'a = b·c'],
        correta: 0
    },
    // 12
    {
        pergunta: 'Volume de uma pirâmide de base quadrada (lado 3, altura 4):',
        opcoes: ['12', '36', '9', '48'],
        correta: 0
    },
    // 13
    {
        pergunta: 'Fórmula do volume da esfera (use π=3):',
        opcoes: ['(4/3)·π·r³', '4·π·r²', '(4/3)·π·r²', 'π·r³'],
        correta: 0
    },
    // 14
    {
        pergunta: 'Volume de uma esfera de raio 3 (π=3):',
        opcoes: ['108', '36', '72', '54'],
        correta: 0
    },
    // 15
    {
        pergunta: 'Área de um triângulo de base 6 e altura 5:',
        opcoes: ['15', '30', '11', '20'],
        correta: 0
    },
    // 16
    {
        pergunta: 'Qual é o volume de um cubo de aresta 3?',
        opcoes: ['27', '9', '81', '18'],
        correta: 0
    },
    // 17
    {
        pergunta: 'Fórmula do volume do cone (use π=3):',
        opcoes: ['(1/3)·π·r²·h', 'π·r²·h', '(1/3)·π·r·h', 'π·r·h'],
        correta: 0
    },
    // 18
    {
        pergunta: 'Volume de um cone com raio 2 e altura 6 (π=3):',
        opcoes: ['24', '12', '48', '36'],
        correta: 0
    },
    // 19
    {
        pergunta: 'Qual a área de um losango com diagonais 8 e 6?',
        opcoes: ['24', '48', '14', '28'],
        correta: 0
    },
    // 20
    {
        pergunta: 'Quantas arestas tem um cubo?',
        opcoes: ['12', '8', '6', '4'],
        correta: 0
    },
    // 21
    {
        pergunta: 'Perímetro de um quadrado de lado 7:',
        opcoes: ['28', '14', '49', '21'],
        correta: 0
    },
    // 22
    {
        pergunta: 'Área de um trapézio de bases 5 e 7, altura 4:',
        opcoes: ['24', '12', '48', '28'],
        correta: 0
    },
    // 23
    {
        pergunta: 'Volume de um paralelepípedo de dimensões 2, 2 e 5:',
        opcoes: ['20', '10', '40', '30'],
        correta: 0
    },
    // 24
    {
        pergunta: 'Qual fórmula dá a área da superfície de um cubo?',
        opcoes: ['6·l²', 'l³', '4·l²', '2·l²'],
        correta: 0
    },
    // 25
    {
        pergunta: 'Volume de um prisma de base triangular (área base=8, altura=5):',
        opcoes: ['40', '20', '80', '13'],
        correta: 0
    },
    // 26
    {
        pergunta: 'Fórmula da área do triângulo:',
        opcoes: ['(base·altura)/2', 'base·altura', 'base+altura', '(base²·altura)'],
        correta: 0
    },
    // 27
    {
        pergunta: 'Área de um quadrado de lado 10 é:',
        opcoes: ['100', '40', '20', '50'],
        correta: 0
    },
    // 28
    {
        pergunta: 'Volume de um cilindro com raio 3 e altura 4 (π=3):',
        opcoes: ['108', '36', '72', '54'],
        correta: 0
    },
    // 29
    {
        pergunta: 'Qual a medida da diagonal de um cubo de aresta 3? (use √3≈1,7)',
        opcoes: ['5,1', '9', '3', '6'],
        correta: 0
    },
    // 30
    {
        pergunta: 'Área de um círculo de raio 5 (π=3):',
        opcoes: ['75', '30', '15', '50'],
        correta: 0
    },
    // 31
    {
        pergunta: 'Volume de uma pirâmide de base retangular (área=12, altura=6):',
        opcoes: ['24', '72', '36', '48'],
        correta: 0
    },
    // 32
    {
        pergunta: 'Quantos vértices tem um cubo?',
        opcoes: ['8', '12', '6', '4'],
        correta: 0
    },
    // 33
    {
        pergunta: 'Fórmula da área do retângulo:',
        opcoes: ['base·altura', '2·(base+altura)', 'base+altura', 'base²'],
        correta: 0
    },
    // 34
    {
        pergunta: 'Volume de uma esfera de raio 2 (π=3):',
        opcoes: ['32', '16', '24', '48'],
        correta: 0
    },
    // 35
    {
        pergunta: 'Área de um paralelogramo de base 7 e altura 4:',
        opcoes: ['28', '11', '14', '21'],
        correta: 0
    },
    // 36
    {
        pergunta: 'Volume de um cone com raio 3 e altura 5 (π=3):',
        opcoes: ['45', '15', '30', '60'],
        correta: 0
    },
    // 37
    {
        pergunta: 'Qual é a fórmula da diagonal de um quadrado (lado L)?',
        opcoes: ['L·√2', '2·L', 'L²', 'L·√3'],
        correta: 0
    },
    // 38
    {
        pergunta: 'Perímetro de um retângulo de lados 4 e 6:',
        opcoes: ['20', '24', '10', '48'],
        correta: 0
    },
    // 39
    {
        pergunta: 'Área de um triângulo equilátero de lado 4 (use √3≈1,7):',
        opcoes: ['6,8', '16', '8', '12'],
        correta: 0
    },
    // 40
    {
        pergunta: 'Volume de um cubo de aresta 4:',
        opcoes: ['64', '16', '256', '48'],
        correta: 0
    },
    // 41
    {
        pergunta: 'Fórmula do volume do prisma:',
        opcoes: ['Área da base · altura', 'Comprimento · largura', '2·(base+altura)', 'base²·altura'],
        correta: 0
    },
    // 42
    {
        pergunta: 'Quantas faces tem uma pirâmide de base quadrada?',
        opcoes: ['5', '4', '6', '8'],
        correta: 0
    },
    // 43
    {
        pergunta: 'Área de um losango com diagonais 10 e 6:',
        opcoes: ['30', '60', '16', '20'],
        correta: 0
    },
    // 44
    {
        pergunta: 'Volume de um cilindro com diâmetro 4 e altura 6 (π=3):',
        opcoes: ['72', '24', '144', '36'],
        correta: 0
    },
    // 45
    {
        pergunta: 'Qual a área de um trapézio de bases 4 e 8, altura 3?',
        opcoes: ['18', '12', '24', '36'],
        correta: 0
    },
    // 46
    {
        pergunta: 'Fórmula da área do quadrado:',
        opcoes: ['lado²', '4·lado', '2·lado', 'lado³'],
        correta: 0
    },
    // 47
    {
        pergunta: 'Volume de uma esfera de raio 4 (π=3):',
        opcoes: ['256', '64', '128', '192'],
        correta: 0
    },
    // 48
    {
        pergunta: 'Área de um círculo com diâmetro 6 (π=3):',
        opcoes: ['27', '54', '18', '36'],
        correta: 0
    },
    // 49
    {
        pergunta: 'Quantas arestas tem uma pirâmide de base triangular?',
        opcoes: ['6', '8', '4', '9'],
        correta: 0
    },
    // 50
    {
        pergunta: 'Volume de um prisma de base quadrada (lado 3, altura 5):',
        opcoes: ['45', '15', '75', '30'],
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
for (let i = 0; i < 50; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = i + 1;
    card.dataset.index = i;
    card.addEventListener('click', () => abrirPergunta(i, card));
    cardsContainer.appendChild(card);
}

// ===== FUNÇÃO PARA ABRIR MODAL =====
function abrirPergunta(index, cardElement) {
    if (cardElement.classList.contains('hidden-card')) return;
    currentCardIndex = index;
    const perguntaObj = perguntas[index % perguntas.length];

    // Cria uma cópia das opções e índices, e embaralha
    const opcoesComIndices = perguntaObj.opcoes.map((texto, idx) => ({ texto, idx }));
    const embaralhadas = shuffleArray([...opcoesComIndices]);
    // Nova lista de textos na ordem embaralhada
    const opcoesEmbaralhadas = embaralhadas.map(item => item.texto);
    // Novo índice correto: posição onde está o item que tinha o índice original correto
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
            <button class="option-btn" data-optindex="${i}" data-original-correct="${novoIndiceCorreto}">
                <span class="letter">${letras[i]}</span> ${opcao}
            </button>
        `;
    });
    html += `
        </div>
        <div class="feedback-msg" id="feedbackMsg"></div>
    `;
    questionContent.innerHTML = html;

    // Armazena o índice correto embaralhado no escopo para uso na resposta
    window._indiceCorretoAtual = novoIndiceCorreto;

    // Inicia cronômetro
    iniciarCronometro();

    // Eventos das opções
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
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
        scoreSpan.textContent = score;
        feedbackMsg.textContent = '✅ Resposta correta!';
        feedbackMsg.className = 'feedback-msg show correct';
    } else {
        // Encontra a letra da opção correta
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
    expandedQuestion.classList.remove('show');
    questionContent.innerHTML = '';
    isAnswered = false;
}

// ===== EVENTOS =====
closeModalBtn.addEventListener('click', fecharModal);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') fecharModal();
});
expandedQuestion.addEventListener('click', (e) => {
    if (e.target === expandedQuestion) fecharModal();
});

// ===== AJUDA INICIAL =====
if (localStorage.getItem('quizHelpShown') === 'true') {
    helpOverlay.classList.add('hidden');
} else {
    helpOverlay.classList.remove('hidden');
}

closeHelpBtn.addEventListener('click', () => {
    helpOverlay.classList.add('hidden');
    localStorage.setItem('quizHelpShown', 'true');
});

helpBtn.addEventListener('click', () => {
    helpOverlay.classList.remove('hidden');
});
