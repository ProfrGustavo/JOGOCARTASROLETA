// ===== BANCO DE DADOS: 50 QUESTÕES DE FUNÇÃO DO 2º GRAU (y = ax² + c) =====
const perguntas = [
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 1, c: -4,
        opcoes: ["y = x² - 4", "y = -x² - 4", "y = x² + 4", "y = -x² + 4"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -1, c: 4,
        opcoes: ["y = -x² + 4", "y = x² + 4", "y = -x² - 4", "y = x² - 4"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 2, c: -8,
        opcoes: ["y = 2x² - 8", "y = -2x² - 8", "y = 2x² + 8", "y = x² - 8"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -2, c: 2,
        opcoes: ["y = -2x² + 2", "y = 2x² + 2", "y = -2x² - 2", "y = -x² + 2"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 1, c: 3,
        opcoes: ["y = x² + 3", "y = x² - 3", "y = -x² + 3", "y = -x² - 3"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -1, c: -3,
        opcoes: ["y = -x² - 3", "y = -x² + 3", "y = x² - 3", "y = x² + 3"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 3, c: 0,
        opcoes: ["y = 3x²", "y = -3x²", "y = x² + 3", "y = 3x² - 3"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -3, c: 0,
        opcoes: ["y = -3x²", "y = 3x²", "y = -x² - 3", "y = -3x² + 3"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 1, c: -1,
        opcoes: ["y = x² - 1", "y = x² + 1", "y = -x² - 1", "y = -x² + 1"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -1, c: 1,
        opcoes: ["y = -x² + 1", "y = x² + 1", "y = -x² - 1", "y = x² - 1"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 0.5, c: -2,
        opcoes: ["y = 0,5x² - 2", "y = -0,5x² - 2", "y = 0,5x² + 2", "y = 2x² - 2"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -0.5, c: 2,
        opcoes: ["y = -0,5x² + 2", "y = 0,5x² + 2", "y = -0,5x² - 2", "y = -2x² + 2"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 1, c: -9,
        opcoes: ["y = x² - 9", "y = -x² - 9", "y = x² + 9", "y = 3x² - 9"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -1, c: 9,
        opcoes: ["y = -x² + 9", "y = x² + 9", "y = -x² - 9", "y = -3x² + 9"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 4, c: -4,
        opcoes: ["y = 4x² - 4", "y = -4x² - 4", "y = 4x² + 4", "y = x² - 4"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -4, c: 4,
        opcoes: ["y = -4x² + 4", "y = 4x² + 4", "y = -4x² - 4", "y = -x² + 4"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 2, c: 0,
        opcoes: ["y = 2x²", "y = -2x²", "y = 2x² + 2", "y = 2x² - 2"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -2, c: 0,
        opcoes: ["y = -2x²", "y = 2x²", "y = -2x² + 2", "y = -2x² - 2"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 1, c: 5,
        opcoes: ["y = x² + 5", "y = x² - 5", "y = -x² + 5", "y = -x² - 5"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -1, c: -5,
        opcoes: ["y = -x² - 5", "y = -x² + 5", "y = x² - 5", "y = x² + 5"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 3, c: -3,
        opcoes: ["y = 3x² - 3", "y = -3x² - 3", "y = 3x² + 3", "y = x² - 3"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -3, c: 3,
        opcoes: ["y = -3x² + 3", "y = 3x² + 3", "y = -3x² - 3", "y = -x² + 3"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 0.5, c: 0,
        opcoes: ["y = 0,5x²", "y = -0,5x²", "y = 0,5x² + 1", "y = 0,5x² - 1"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -0.5, c: 0,
        opcoes: ["y = -0,5x²", "y = 0,5x²", "y = -0,5x² + 1", "y = -0,5x² - 1"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 2, c: -2,
        opcoes: ["y = 2x² - 2", "y = -2x² - 2", "y = 2x² + 2", "y = x² - 2"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -2, c: 8,
        opcoes: ["y = -2x² + 8", "y = 2x² + 8", "y = -2x² - 8", "y = -x² + 8"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 1, c: -25,
        opcoes: ["y = x² - 25", "y = -x² - 25", "y = x² + 25", "y = 5x² - 25"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -1, c: 25,
        opcoes: ["y = -x² + 25", "y = x² + 25", "y = -x² - 25", "y = -5x² + 25"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 1, c: 2,
        opcoes: ["y = x² + 2", "y = x² - 2", "y = -x² + 2", "y = -x² - 2"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -1, c: -2,
        opcoes: ["y = -x² - 2", "y = -x² + 2", "y = x² - 2", "y = x² + 2"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 5, c: -5,
        opcoes: ["y = 5x² - 5", "y = -5x² - 5", "y = 5x² + 5", "y = x² - 5"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -5, c: 5,
        opcoes: ["y = -5x² + 5", "y = 5x² + 5", "y = -5x² - 5", "y = -x² + 5"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 1, c: 0,
        opcoes: ["y = x²", "y = -x²", "y = x² + 1", "y = x² - 1"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -1, c: 0,
        opcoes: ["y = -x²", "y = x²", "y = -x² + 1", "y = -x² - 1"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 2, c: 4,
        opcoes: ["y = 2x² + 4", "y = 2x² - 4", "y = -2x² + 4", "y = -2x² - 4"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -2, c: -4,
        opcoes: ["y = -2x² - 4", "y = -2x² + 4", "y = 2x² - 4", "y = 2x² + 4"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 0.5, c: -4,
        opcoes: ["y = 0,5x² - 4", "y = -0,5x² - 4", "y = 0,5x² + 4", "y = x² - 4"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -0.5, c: 4,
        opcoes: ["y = -0,5x² + 4", "y = 0,5x² + 4", "y = -0,5x² - 4", "y = -x² + 4"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 3, c: -12,
        opcoes: ["y = 3x² - 12", "y = -3x² - 12", "y = 3x² + 12", "y = x² - 12"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -3, c: 12,
        opcoes: ["y = -3x² + 12", "y = 3x² + 12", "y = -3x² - 12", "y = -x² + 12"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 1, c: -16,
        opcoes: ["y = x² - 16", "y = -x² - 16", "y = x² + 16", "y = 4x² - 16"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -1, c: 16,
        opcoes: ["y = -x² + 16", "y = x² + 16", "y = -x² - 16", "y = -4x² + 16"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 4, c: 0,
        opcoes: ["y = 4x²", "y = -4x²", "y = 4x² + 4", "y = 4x² - 4"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -4, c: 0,
        opcoes: ["y = -4x²", "y = 4x²", "y = -4x² + 4", "y = -4x² - 4"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 1, c: 1,
        opcoes: ["y = x² + 1", "y = x² - 1", "y = -x² + 1", "y = -x² - 1"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -1, c: -1,
        opcoes: ["y = -x² - 1", "y = -x² + 1", "y = x² - 1", "y = x² + 1"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 2, c: -18,
        opcoes: ["y = 2x² - 18", "y = -2x² - 18", "y = 2x² + 18", "y = x² - 18"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -2, c: 18,
        opcoes: ["y = -2x² + 18", "y = 2x² + 18", "y = -2x² - 18", "y = -x² + 18"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: 0.5, c: -8,
        opcoes: ["y = 0,5x² - 8", "y = -0,5x² - 8", "y = 0,5x² + 8", "y = 2x² - 8"],
        correta: 0
    },
    {
        pergunta: "Qual é a equação da função do 2º grau representada no gráfico abaixo?",
        a: -0.5, c: 8,
        opcoes: ["y = -0,5x² + 8", "y = 0,5x² + 8", "y = -0,5x² - 8", "y = -2x² + 8"],
        correta: 0
    }
];

// ===== GERADOR DE SVG DO GRÁFICO (GRANDE E LEGÍVEL DE LONGE) =====
function gerarSVG(a, c) {
    const width = 500;
    const height = 320;
    const X0 = width / 2;
    const Y0 = height / 2;

    const scaleX = 40;
    const absC = Math.abs(c);

    let scaleY = 20;
    if (absC > 20) scaleY = 5;
    else if (absC > 10) scaleY = 10;
    else if (absC > 5) scaleY = 14;

    const Y_vertice = Y0 - (c * scaleY);

    let pathD = "";
    const xMin = -5;
    const xMax = 5;
    const step = 0.05;

    let isFirst = true;
    for (let x = xMin; x <= xMax; x += step) {
        const y = a * x * x + c;
        const px = X0 + x * scaleX;
        const py = Y0 - y * scaleY;

        if (py >= -60 && py <= height + 60) {
            if (isFirst) {
                pathD += `M ${px.toFixed(1)} ${py.toFixed(1)}`;
                isFirst = false;
            } else {
                pathD += ` L ${px.toFixed(1)} ${py.toFixed(1)}`;
            }
        }
    }

    let raizesHTML = "";
    if (a * c < 0) {
        const r = Math.sqrt(-c / a);
        if (r <= 4.8) {
            const xR1 = X0 - r * scaleX;
            const xR2 = X0 + r * scaleX;
            const labelR1 = (Number.isInteger(r) ? -r : (-r).toFixed(1)).toString().replace('.', ',');
            const labelR2 = (Number.isInteger(r) ? r : r.toFixed(1)).toString().replace('.', ',');

            raizesHTML = `
                <circle cx="${xR1.toFixed(1)}" cy="${Y0}" r="6" fill="#059669" stroke="#ffffff" stroke-width="2"/>
                <circle cx="${xR2.toFixed(1)}" cy="${Y0}" r="6" fill="#059669" stroke="#ffffff" stroke-width="2"/>
                <text x="${xR1.toFixed(1)}" y="${Y0 + 22}" fill="#047857" font-size="16" font-weight="bold" text-anchor="middle">${labelR1}</text>
                <text x="${xR2.toFixed(1)}" y="${Y0 + 22}" fill="#047857" font-size="16" font-weight="bold" text-anchor="middle">${labelR2}</text>
            `;
        }
    }

    let labelVerticeY = Y_vertice + (c >= 0 ? -14 : 26);
    if (c === 0) labelVerticeY = Y0 + 22;

    const textoVertice = c === 0 ? "(0, 0)" : `(0, ${c > 0 ? '+' + c : c})`;

    let gridLines = "";
    for (let gx = -4; gx <= 4; gx += 2) {
        if (gx !== 0) {
            const px = X0 + gx * scaleX;
            gridLines += `<line x1="${px}" y1="15" x2="${px}" y2="${height - 15}" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,4"/>`;
        }
    }

    return `
        <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="arrowX" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e293b"/>
                </marker>
                <marker id="arrowY" viewBox="0 0 10 10" refX="5" refY="4" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M 0 10 L 5 0 L 10 10 z" fill="#1e293b"/>
                </marker>
            </defs>

            <rect width="${width}" height="${height}" fill="#ffffff" rx="16" stroke="#cbd5e1" stroke-width="2"/>
            
            ${gridLines}

            <!-- Eixo X -->
            <line x1="20" y1="${Y0}" x2="${width - 25}" y2="${Y0}" stroke="#1e293b" stroke-width="3" marker-end="url(#arrowX)"/>
            <text x="${width - 20}" y="${Y0 + 6}" fill="#1e293b" font-size="22" font-weight="bold">x</text>

            <!-- Eixo Y -->
            <line x1="${X0}" y1="${height - 20}" x2="${X0}" y2="25" stroke="#1e293b" stroke-width="3" marker-end="url(#arrowY)"/>
            <text x="${X0 - 15}" y="20" fill="#1e293b" font-size="22" font-weight="bold">y</text>

            ${c !== 0 ? `<text x="${X0 - 14}" y="${Y0 + 18}" fill="#64748b" font-size="15" font-weight="bold">0</text>` : ''}

            <!-- Parábola -->
            <path d="${pathD}" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- Vértice -->
            <circle cx="${X0}" cy="${Y_vertice.toFixed(1)}" r="7" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
            <rect x="${X0 + 10}" y="${labelVerticeY - 14}" width="78" height="24" fill="#fee2e2" rx="6" stroke="#fca5a5" stroke-width="1"/>
            <text x="${X0 + 49}" y="${labelVerticeY + 3}" fill="#dc2626" font-size="16" font-weight="bold" text-anchor="middle">${textoVertice}</text>

            <!-- Raízes -->
            ${raizesHTML}

            <!-- Concavidade -->
            <text x="25" y="45" fill="#334155" font-size="16" font-weight="bold">
                ${a > 0 ? 'Concavidade: Voltada para CIMA (a > 0)' : 'Concavidade: Voltada para BAIXO (a < 0)'}
            </text>
        </svg>
    `;
}

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

// ===== EMBARALHAR ARRAY =====
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

// ===== ABRIR PERGUNTA E MOSTRAR GRÁFICO =====
function abrirPergunta(index, cardElement) {
    if (cardElement.classList.contains('hidden-card')) return;
    currentCardIndex = index;
    const perguntaObj = perguntas[index % perguntas.length];

    const opcoesComIndices = perguntaObj.opcoes.map((texto, idx) => ({ texto, idx }));
    const embaralhadas = shuffleArray([...opcoesComIndices]);
    const opcoesEmbaralhadas = embaralhadas.map(item => item.texto);
    const novoIndiceCorreto = embaralhadas.findIndex(item => item.idx === perguntaObj.correta);

    const svgHTML = gerarSVG(perguntaObj.a, perguntaObj.c);

    let html = `
        <div class="question-text">${perguntaObj.pergunta}</div>
        <div class="score-display">
            <span>🏆 Acertos: <span id="scoreDisplay">${score}</span></span>
            <span class="timer-display" id="timerDisplay">⏱️ 00:00</span>
        </div>
        <div class="graph-container">
            ${svgHTML}
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

    window._indiceCorretoAtual = novoIndiceCorreto;

    iniciarCronometro();

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

// ===== RESPONDER PERGUNTA =====
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
        feedbackMsg.textContent = '✅ Resposta correta! Essa é a equação do gráfico.';
        feedbackMsg.className = 'feedback-msg show correct';
    } else {
        const letras = ['A', 'B', 'C', 'D'];
        const letraCorreta = letras[indiceCorretoEmbaralhado];
        feedbackMsg.textContent = `❌ Resposta incorreta. A equação correta era a letra ${letraCorreta}.`;
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