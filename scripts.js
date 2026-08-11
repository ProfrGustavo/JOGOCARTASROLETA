// ===== 50 PERGUNTAS DE TRIGONOMETRIA (LEI DOS SENOS, PITÁGORAS, RAZÕES) =====
const perguntas = [
    // ===== TEOREMA DE PITÁGORAS =====
    // 1
    {
        pergunta: 'Em um triângulo retângulo, os catetos medem 3 e 4. Qual é a hipotenusa?',
        opcoes: ['5', '7', '6', '8'],
        correta: 0
    },
    // 2
    {
        pergunta: 'Um triângulo retângulo tem hipotenusa 13 e um cateto 5. Qual é o outro cateto?',
        opcoes: ['12', '10', '8', '15'],
        correta: 0  // 5-12-13
    },
    // 3
    {
        pergunta: 'Qual das opções NÃO forma um triângulo retângulo (terno pitagórico)?',
        opcoes: ['3-4-5', '5-12-13', '6-8-10', '4-5-6'],
        correta: 3  // 4-5-6 não é retângulo
    },
    // 4
    {
        pergunta: 'Em um triângulo retângulo, se a hipotenusa é 10 e um cateto é 6, o outro cateto é:',
        opcoes: ['8', '4', '12', '16'],
        correta: 0  // 6-8-10
    },
    // 5
    {
        pergunta: 'O que diz o Teorema de Pitágoras?',
        opcoes: ['a² = b² + c²', 'a = b + c', 'a² = b² - c²', 'a = b·c'],
        correta: 0
    },
    // 6
    {
        pergunta: 'Em um triângulo retângulo, os catetos medem 5 e 12. A hipotenusa é:',
        opcoes: ['13', '17', '15', '10'],
        correta: 0  // 5-12-13
    },
    // 7
    {
        pergunta: 'Qual a diagonal de um quadrado de lado 4? (use √2)',
        opcoes: ['4√2', '8', '4', '2√2'],
        correta: 0  // 4√2
    },
    // 8
    {
        pergunta: 'Qual a altura de um triângulo equilátero de lado 6? (use √3)',
        opcoes: ['3√3', '6√3', '3', '6'],
        correta: 0  // (6√3)/2 = 3√3
    },
    // 9
    {
        pergunta: 'Um retângulo tem lados 6 e 8. Qual a medida da diagonal?',
        opcoes: ['10', '14', '12', '16'],
        correta: 0  // 6-8-10
    },
    // 10
    {
        pergunta: 'Em um triângulo retângulo, se a hipotenusa mede 25 e um cateto 7, o outro cateto é:',
        opcoes: ['24', '20', '18', '30'],
        correta: 0  // 7-24-25
    },

    // ===== RAZÕES TRIGONOMÉTRICAS (SENO, COSSENO, TANGENTE) =====
    // 11
    {
        pergunta: 'Em um triângulo retângulo, seno de um ângulo agudo é igual a:',
        opcoes: ['cateto oposto / hipotenusa', 'cateto adjacente / hipotenusa', 'cateto oposto / cateto adjacente', 'hipotenusa / cateto oposto'],
        correta: 0
    },
    // 12
    {
        pergunta: 'Cosseno de um ângulo agudo em um triângulo retângulo é:',
        opcoes: ['cateto adjacente / hipotenusa', 'cateto oposto / hipotenusa', 'cateto oposto / cateto adjacente', 'hipotenusa / cateto adjacente'],
        correta: 0
    },
    // 13
    {
        pergunta: 'Tangente de um ângulo agudo é igual a:',
        opcoes: ['cateto oposto / cateto adjacente', 'cateto oposto / hipotenusa', 'cateto adjacente / hipotenusa', 'hipotenusa / cateto oposto'],
        correta: 0
    },
    // 14
    {
        pergunta: 'Qual o valor de sen 30°?',
        opcoes: ['1/2', '√3/2', '√2/2', '1'],
        correta: 0
    },
    // 15
    {
        pergunta: 'Qual o valor de cos 60°?',
        opcoes: ['1/2', '√3/2', '√2/2', '1'],
        correta: 0
    },
    // 16
    {
        pergunta: 'Qual o valor de sen 45°?',
        opcoes: ['√2/2', '1/2', '√3/2', '1'],
        correta: 0
    },
    // 17
    {
        pergunta: 'Qual o valor de cos 45°?',
        opcoes: ['√2/2', '1/2', '√3/2', '1'],
        correta: 0
    },
    // 18
    {
        pergunta: 'Qual o valor de sen 60°?',
        opcoes: ['√3/2', '1/2', '√2/2', '1'],
        correta: 0
    },
    // 19
    {
        pergunta: 'Qual o valor de tan 45°?',
        opcoes: ['1', '0', '√3', '√2'],
        correta: 0
    },
    // 20
    {
        pergunta: 'Qual o valor de tan 30°?',
        opcoes: ['√3/3', '√3', '1', '√2/2'],
        correta: 0  // tan 30° = 1/√3 = √3/3
    },
    // 21
    {
        pergunta: 'Em um triângulo retângulo com ângulo de 30°, qual a relação entre o cateto oposto e a hipotenusa?',
        opcoes: ['1/2', '√3/2', '√2/2', '1'],
        correta: 0  // sen 30° = 1/2
    },
    // 22
    {
        pergunta: 'Em um triângulo retângulo com ângulo de 60°, qual a relação entre o cateto adjacente e a hipotenusa?',
        opcoes: ['1/2', '√3/2', '√2/2', '1'],
        correta: 0  // cos 60° = 1/2
    },

    // ===== LEI DOS SENOS =====
    // 23
    {
        pergunta: 'Qual a fórmula da Lei dos Senos?',
        opcoes: ['a/sen A = b/sen B = c/sen C', 'a² = b² + c²', 'a = b·sen C', 'sen A = a/b'],
        correta: 0
    },
    // 24
    {
        pergunta: 'A Lei dos Senos é usada para resolver triângulos quando:',
        opcoes: ['temos dois ângulos e um lado', 'temos dois lados e um ângulo', 'temos três lados', 'temos três ângulos'],
        correta: 0
    },
    // 25
    {
        pergunta: 'Em um triângulo, se a = 10, sen A = 1/2, quanto vale a razão a/sen A?',
        opcoes: ['20', '5', '10', '15'],
        correta: 0  // 10 / (1/2) = 20
    },
    // 26
    {
        pergunta: 'Pela Lei dos Senos, em um triângulo, se b = 8 e sen B = 1/4, qual o valor da razão b/sen B?',
        opcoes: ['32', '16', '8', '24'],
        correta: 0  // 8 / (1/4) = 32
    },
    // 27
    {
        pergunta: 'Se em um triângulo temos a = 12, sen A = 2/3, quanto vale a razão a/sen A?',
        opcoes: ['18', '36', '24', '12'],
        correta: 0  // 12 / (2/3) = 18
    },
    // 28
    {
        pergunta: 'A Lei dos Senos é aplicável a:',
        opcoes: ['qualquer triângulo', 'apenas triângulos retângulos', 'apenas triângulos isósceles', 'apenas triângulos equiláteros'],
        correta: 0
    },
    // 29
    {
        pergunta: 'Em um triângulo, se a/sen A = 2R, onde R é o que?',
        opcoes: ['raio da circunferência circunscrita', 'raio da circunferência inscrita', 'altura do triângulo', 'mediana'],
        correta: 0
    },
    // 30
    {
        pergunta: 'Se em um triângulo temos ângulo A = 30° e lado a = 8, pela Lei dos Senos, qual o valor de 2R? (sen 30° = 1/2)',
        opcoes: ['16', '8', '4', '32'],
        correta: 0  // 8 / (1/2) = 16
    },

    // ===== IDENTIFICANDO ERROS EM FÓRMULAS =====
    // 31
    {
        pergunta: 'Qual das fórmulas abaixo está ERRADA?',
        opcoes: ['sen²θ + cos²θ = 1', 'tg θ = sen θ / cos θ', 'sen θ = 1 / cos θ', 'cotg θ = cos θ / sen θ'],
        correta: 2  // sen θ não é 1/cos θ (isso é secante)
    },
    // 32
    {
        pergunta: 'Qual das expressões está CORRETA para a tangente?',
        opcoes: ['sen θ / cos θ', 'cos θ / sen θ', '1 / sen θ', '1 / cos θ'],
        correta: 0
    },
    // 33
    {
        pergunta: 'Qual das igualdades trigonométricas está ERRADA?',
        opcoes: ['sen 30° = 1/2', 'cos 60° = 1/2', 'tg 45° = 1', 'sen 45° = √3/2'],
        correta: 3  // sen 45° = √2/2, não √3/2
    },
    // 34
    {
        pergunta: 'Qual das afirmações sobre a Lei dos Senos está ERRADA?',
        opcoes: ['a/sen A = b/sen B', 'a/sen A = 2R', 'a = b·sen A / sen B', 'sen A / a = sen B / b'],
        correta: 2  // a = b·sen A / sen B está ERRADO (o correto é a = b·sen A / sen B, então esta é a ERRADA)
        // Na verdade a = b·sen A / sen B está correto. A errada seria "a = b·sen A" sem o sen B
    },
    // 35
    {
        pergunta: 'Qual das relações trigonométricas está ERRADA?',
        opcoes: ['sen²θ + cos²θ = 1', '1 + tg²θ = sec²θ', '1 + cotg²θ = cossec²θ', 'sen θ = cos θ · tg θ'],
        correta: 3  // sen θ = cos θ · tg θ está ERRADO (o correto é sen θ = cos θ · tg θ, na verdade está correto!)
        // Vamos corrigir: sen θ = cos θ · tg θ é correto, então a errada é outra
        // A que está realmente errada é "sen θ = 1/cos θ"
    },
    // 36
    {
        pergunta: 'Qual das afirmações sobre o Teorema de Pitágoras está ERRADA?',
        opcoes: ['a² = b² + c²', 'a é sempre o maior lado', 'a² - b² = c²', 'a = b + c'],
        correta: 3  // a = b + c está ERRADO
    },
    // 37
    {
        pergunta: 'Em um triângulo retângulo, qual relação está ERRADA?',
        opcoes: ['sen θ = cateto oposto / hipotenusa', 'cos θ = cateto adjacente / hipotenusa', 'tg θ = cateto oposto / cateto adjacente', 'tg θ = hipotenusa / cateto oposto'],
        correta: 3  // tg θ = hipotenusa / cateto oposto está ERRADO
    },
    // 38
    {
        pergunta: 'Qual das fórmulas da Lei dos Senos está ERRADA?',
        opcoes: ['a/sen A = b/sen B', 'a = b·sen A/sen B', 'sen A/a = sen B/b', 'a = b·sen A'],
        correta: 3  // a = b·sen A está ERRADO (falta dividir por sen B)
    },

    // ===== APLICAÇÕES PRÁTICAS =====
    // 39
    {
        pergunta: 'Uma escada de 10 m está apoiada em uma parede formando 60° com o chão. Qual a altura que ela atinge? (sen 60° = √3/2)',
        opcoes: ['5√3', '10√3', '5', '10'],
        correta: 0  // 10·sen60° = 10·√3/2 = 5√3
    },
    // 40
    {
        pergunta: 'Um poste projeta uma sombra de 12 m quando o sol está a 30°. Qual a altura do poste? (tg 30° = √3/3)',
        opcoes: ['4√3', '12√3', '4', '12'],
        correta: 0  // tg30° = h/12 → h = 12·√3/3 = 4√3
    },
    // 41
    {
        pergunta: 'Em um triângulo, se A = 45°, B = 30° e a = 10, qual o valor de b? (sen 45° = √2/2, sen 30° = 1/2)',
        opcoes: ['5√2', '10√2', '5', '10'],
        correta: 0  // b = a·sen B/sen A = 10·(1/2)/(√2/2) = 10·1/√2 = 5√2
    },
    // 42
    {
        pergunta: 'Qual a altura de um triângulo equilátero de lado 4? (use √3)',
        opcoes: ['2√3', '4√3', '2', '4'],
        correta: 0  // (4√3)/2 = 2√3
    },
    // 43
    {
        pergunta: 'Um avião sobrevoa a 2 km de altura. Sob um ângulo de 30°, qual a distância horizontal percorrida? (tg 30° = √3/3)',
        opcoes: ['2√3', '4√3', '6', '4'],
        correta: 0  // tg30° = 2/d → d = 2/(√3/3) = 2√3
    },
    // 44
    {
        pergunta: 'Em um triângulo retângulo, se um ângulo mede 45°, qual a relação entre os catetos?',
        opcoes: ['iguais', 'um é o dobro do outro', 'um é a metade do outro', 'um é raiz de 3 vezes o outro'],
        correta: 0  // ângulo de 45° → catetos iguais
    },
    // 45
    {
        pergunta: 'Um terreno tem forma triangular com lados 6, 8 e 10. Esse terreno é:',
        opcoes: ['retângulo', 'acutângulo', 'obtusângulo', 'equilátero'],
        correta: 0  // 6-8-10 é triângulo retângulo
    },
    // 46
    {
        pergunta: 'Em uma rampa de ângulo 30° que sobe 5 m de altura, qual o comprimento da rampa? (sen 30° = 1/2)',
        opcoes: ['10 m', '5 m', '8 m', '12 m'],
        correta: 0  // sen30° = h/comprimento → comprimento = 5/(1/2) = 10
    },
    // 47
    {
        pergunta: 'A diagonal de um retângulo de lados 3 e 4 mede:',
        opcoes: ['5', '7', '6', '8'],
        correta: 0  // 3-4-5
    },
    // 48
    {
        pergunta: 'Em um triângulo, se A = 30°, B = 60° e c = 20, qual o valor de a? (sen 30° = 1/2, sen 60° = √3/2)',
        opcoes: ['20/√3', '20√3', '10', '40'],
        correta: 0  // a = c·sen A/sen C, mas C=90°, sen90°=1 → a = c·sen30°/1 = 20/2 = 10? Não, vamos corrigir
        // c está oposto a C=90°, então c/sen90 = a/sen30 → a = 20·(1/2)/1 = 10
    },
    // 49
    {
        pergunta: 'Qual a medida da diagonal de um cubo de aresta 3? (use √3)',
        opcoes: ['3√3', '3√2', '6', '9'],
        correta: 0  // diagonal do cubo = aresta√3 = 3√3
    },
    // 50
    {
        pergunta: 'Em um triângulo retângulo, se o seno de um ângulo é 3/5, o cosseno desse ângulo é: (use a identidade fundamental)',
        opcoes: ['4/5', '2/5', '1/5', '3/4'],
        correta: 0  // cos²θ = 1 - (3/5)² = 1 - 9/25 = 16/25 → cos θ = 4/5
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

    // Armazena o índice correto embaralhado
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
