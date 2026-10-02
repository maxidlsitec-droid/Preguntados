const questions = {
  "Matemática": [
    { q: "¿Cuánto es 12 × 8?", a: ["86", "96", "108", "92"], c: 1 },
    { q: "¿Cuál es la raíz cuadrada de 144?", a: ["10", "11", "12", "14"], c: 2 },
    { q: "Si x + 7 = 19, ¿cuánto vale x?", a: ["10", "11", "12", "13"], c: 2 },
    { q: "¿Cuál es el resultado de 3² + 4²?", a: ["12", "25", "49", "24"], c: 1 },
    { q: "¿Cuánto es el 20% de 150?", a: ["20", "25", "30", "35"], c: 2 },
    { q: "¿Cuántos lados tiene un hexágono?", a: ["5", "6", "7", "8"], c: 1 },
    { q: "¿Cuál es el número primo?", a: ["21", "27", "29", "33"], c: 2 },
    { q: "¿Cuánto es 7 × 9 − 10?", a: ["43", "53", "63", "73"], c: 1 }
  ],
  "Historia": [
    { q: "¿En qué año llegó Cristóbal Colón a América?", a: ["1492", "1512", "1453", "1520"], c: 0 },
    { q: "¿Quién fue el primer presidente de Argentina?", a: ["San Martín", "Bernardino Rivadavia", "Belgrano", "Sarmiento"], c: 1 },
    { q: "¿En qué año comenzó la Revolución Francesa?", a: ["1776", "1789", "1810", "1804"], c: 1 },
    { q: "¿Quién lideró el cruce de los Andes?", a: ["Manuel Belgrano", "José de San Martín", "Mariano Moreno", "Juan Lavalle"], c: 1 },
    { q: "¿Qué civilización construyó Machu Picchu?", a: ["Maya", "Azteca", "Inca", "Romana"], c: 2 },
    { q: "¿En qué año se declaró la independencia argentina?", a: ["1810", "1812", "1816", "1820"], c: 2 },
    { q: "¿Qué antiguo pueblo creó la democracia ateniense?", a: ["Egipcios", "Griegos", "Persas", "Fenicios"], c: 1 },
    { q: "¿Qué acontecimiento ocurrió el 25 de mayo de 1810?", a: ["Independencia", "Revolución de Mayo", "Cruce de los Andes", "Constitución"], c: 1 }
  ],
  "Geografía": [
    { q: "¿Cuál es el río más largo de Sudamérica?", a: ["Paraná", "Amazonas", "Orinoco", "Uruguay"], c: 1 },
    { q: "¿Cuál es la capital de Australia?", a: ["Sídney", "Melbourne", "Canberra", "Perth"], c: 2 },
    { q: "¿En qué continente está el desierto del Sahara?", a: ["Asia", "África", "Oceanía", "América"], c: 1 },
    { q: "¿Cuál es el océano más grande?", a: ["Atlántico", "Índico", "Pacífico", "Ártico"], c: 2 },
    { q: "¿Cuál es el país más grande del mundo por superficie?", a: ["China", "Canadá", "Rusia", "Estados Unidos"], c: 2 },
    { q: "¿Qué cordillera atraviesa el oeste de Argentina?", a: ["Alpes", "Andes", "Himalaya", "Apalaches"], c: 1 },
    { q: "¿Cuál es la capital de Japón?", a: ["Kioto", "Osaka", "Tokio", "Nara"], c: 2 },
    { q: "¿En qué hemisferio está principalmente Argentina?", a: ["Norte", "Sur", "Este", "Ártico"], c: 1 }
  ],
  "Ciencias": [
    { q: "¿Cuál es el planeta más cercano al Sol?", a: ["Venus", "Mercurio", "Marte", "Júpiter"], c: 1 },
    { q: "¿Qué órgano bombea la sangre?", a: ["Pulmón", "Cerebro", "Corazón", "Hígado"], c: 2 },
    { q: "¿Cuál es el símbolo químico del oxígeno?", a: ["Ox", "O", "Og", "X"], c: 1 },
    { q: "¿Cuántos huesos tiene aproximadamente un adulto?", a: ["106", "206", "306", "406"], c: 1 },
    { q: "¿Qué fuerza atrae los objetos hacia la Tierra?", a: ["Fricción", "Gravedad", "Electricidad", "Presión"], c: 1 },
    { q: "¿Qué gas absorben principalmente las plantas durante la fotosíntesis?", a: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Helio"], c: 2 },
    { q: "¿Cuál es el estado del agua a 100 °C al nivel del mar?", a: ["Sólido", "Líquido", "Gaseoso", "Plasma"], c: 2 },
    { q: "¿Qué planeta es conocido como el planeta rojo?", a: ["Marte", "Saturno", "Venus", "Neptuno"], c: 0 }
  ],
  "Lengua": [
    { q: "¿Cuál de estas palabras es un sustantivo?", a: ["Correr", "Hermoso", "Casa", "Rápidamente"], c: 2 },
    { q: "¿Cuál es el antónimo de 'abundante'?", a: ["Escaso", "Grande", "Lleno", "Excesivo"], c: 0 },
    { q: "¿Qué tipo de palabra es 'rápidamente'?", a: ["Sustantivo", "Adjetivo", "Adverbio", "Verbo"], c: 2 },
    { q: "¿Cuál lleva tilde correctamente?", a: ["Arbol", "Árbol", "Arból", "Arból"], c: 1 },
    { q: "¿Qué es una metáfora?", a: ["Una comparación implícita", "Una pregunta", "Una orden", "Una enumeración"], c: 0 },
    { q: "¿Cuál es un verbo?", a: ["Azul", "Correr", "Mesa", "Rápido"], c: 1 },
    { q: "¿Qué signo se utiliza al final de una pregunta?", a: ["¡!", "¿?", "...", ";"], c: 1 },
    { q: "¿Cuál es el plural de 'lápiz'?", a: ["Lápizes", "Lápizs", "Lápices", "Lápicess"], c: 2 }
  ],
  "Tecnología": [
    { q: "¿Qué significa HTML?", a: ["HyperText Markup Language", "High Tech Modern Language", "Hyper Tool Machine Link", "Home Text Markup Link"], c: 0 },
    { q: "¿Cuál de estos es un lenguaje de programación?", a: ["HTML", "JavaScript", "CSS", "HTTP"], c: 1 },
    { q: "¿Qué componente procesa instrucciones en una computadora?", a: ["RAM", "CPU", "SSD", "Monitor"], c: 1 },
    { q: "¿Qué significa CPU?", a: ["Central Processing Unit", "Computer Power Utility", "Central Program User", "Control Processing User"], c: 0 },
    { q: "¿Para qué se utiliza CSS?", a: ["Para dar estilo a páginas web", "Para almacenar datos", "Para crear procesadores", "Para enviar correos"], c: 0 },
    { q: "¿Qué dispositivo almacena datos de forma permanente?", a: ["RAM", "CPU", "SSD", "GPU"], c: 2 },
    { q: "¿Qué empresa desarrolló Android inicialmente?", a: ["Android Inc.", "Microsoft", "Apple", "IBM"], c: 0 },
    { q: "¿Qué estructura se usa normalmente para repetir código en JavaScript?", a: ["loop", "repeat", "for", "again"], c: 2 }
  ]
};

const state = {
  subject: "",
  deck: [],
  index: 0,
  score: 0,
  lives: 3,
  streak: 0,
  bestStreak: 0,
  correct: 0,
  answered: false,
  timer: null,
  timeLeft: 15,
  sound: true
};

const $ = id => document.getElementById(id);
const screens = ["homeScreen", "gameScreen", "resultScreen"];

function showScreen(id) {
  screens.forEach(s => $(s).classList.toggle("active", s === id));
  window.scrollTo({top: 0, behavior: "smooth"});
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function startGame(subject) {
  state.subject = subject;
  const pool = questions[subject];
  state.deck = shuffle(pool).slice(0, Math.min(10, pool.length));
  state.index = 0;
  state.score = 0;
  state.lives = 3;
  state.streak = 0;
  state.bestStreak = 0;
  state.correct = 0;
  showScreen("gameScreen");
  $("subjectPill").textContent = subject;
  renderQuestion();
}

function renderQuestion() {
  clearInterval(state.timer);
  state.answered = false;
  state.timeLeft = 15;

  const current = state.deck[state.index];
  $("questionCounter").textContent = `Pregunta ${state.index + 1} de ${state.deck.length}`;
  $("scoreLabel").textContent = `${state.score} pts`;
  $("progressBar").style.width = `${((state.index + 1) / state.deck.length) * 100}%`;
  $("questionCategory").textContent = state.subject.toUpperCase();
  $("questionText").textContent = current.q;
  $("timer").textContent = state.timeLeft;
  $("streak").textContent = state.streak;
  renderLives();

  const answers = $("answers");
  answers.innerHTML = "";

  current.a.forEach((answer, i) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = `${String.fromCharCode(65 + i)}. ${answer}`;
    button.addEventListener("click", () => answerQuestion(i, button));
    answers.appendChild(button);
  });

  startTimer();
}

function startTimer() {
  state.timer = setInterval(() => {
    state.timeLeft--;
    $("timer").textContent = state.timeLeft;
    if (state.timeLeft <= 5) $("timer").style.color = "#ff7185";
    else $("timer").style.color = "#c6bcff";

    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      handleTimeout();
    }
  }, 1000);
}

function answerQuestion(selected, button) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timer);

  const current = state.deck[state.index];
  const all = [...document.querySelectorAll(".answer")];
  all.forEach(b => b.disabled = true);

  if (selected === current.c) {
    button.classList.add("correct");
    all[current.c].classList.add("correct");
    state.correct++;
    state.streak++;
    state.bestStreak = Math.max(state.bestStreak, state.streak);

    const bonus = state.streak >= 3 ? 50 : 0;
    const points = 100 + (state.timeLeft * 5) + bonus;
    state.score += points;
    $("scoreLabel").textContent = `${state.score} pts`;
    showToast(`✅ ¡Correcto! +${points} puntos`);
    beep(700, .08);
  } else {
    button.classList.add("wrong");
    all[current.c].classList.add("correct");
    loseLife();
    state.streak = 0;
    $("questionCard").classList.add("shake");
    setTimeout(() => $("questionCard").classList.remove("shake"), 400);
    showToast(`❌ Incorrecto. La respuesta era: ${current.a[current.c]}`);
    beep(180, .13);
  }

  $("streak").textContent = state.streak;
  setTimeout(nextQuestion, 1200);
}

function handleTimeout() {
  if (state.answered) return;
  state.answered = true;
  const current = state.deck[state.index];
  const all = [...document.querySelectorAll(".answer")];
  all.forEach(b => b.disabled = true);
  all[current.c].classList.add("correct");
  loseLife();
  state.streak = 0;
  $("streak").textContent = 0;
  showToast(`⏰ ¡Se acabó el tiempo!`);
  beep(150, .18);
  setTimeout(nextQuestion, 1200);
}

function loseLife() {
  state.lives--;
  renderLives();
  if (state.lives <= 0) {
    // Se permite terminar la pregunta actual antes de mostrar el resultado.
  }
}

function renderLives() {
  $("lives").textContent = "❤️ ".repeat(state.lives) + "🖤 ".repeat(3 - state.lives);
}

function nextQuestion() {
  if (state.lives <= 0 || state.index >= state.deck.length - 1) {
    finishGame();
    return;
  }
  state.index++;
  renderQuestion();
}

function finishGame() {
  clearInterval(state.timer);
  showScreen("resultScreen");

  const total = state.deck.length;
  const accuracy = Math.round((state.correct / total) * 100);

  $("finalScore").textContent = state.score;
  $("correctCount").textContent = `${state.correct}/${total}`;
  $("bestStreak").textContent = state.bestStreak;
  $("accuracy").textContent = `${accuracy}%`;

  if (state.score >= 1100) {
    $("trophy").textContent = "🏆";
    $("resultTitle").textContent = "¡Impresionante!";
    $("resultMessage").textContent = "Tenés una mente de campeón. Excelente partida.";
  } else if (state.score >= 650) {
    $("trophy").textContent = "🔥";
    $("resultTitle").textContent = "¡Muy bien!";
    $("resultMessage").textContent = "Estuviste muy cerca de dominar el desafío.";
  } else {
    $("trophy").textContent = "💪";
    $("resultTitle").textContent = "¡Buen intento!";
    $("resultMessage").textContent = "Cada partida es una oportunidad para aprender.";
  }
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1100);
}

function beep(freq, duration) {
  if (!state.sound) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.frequency.value = freq;
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.value = .035;
    oscillator.start();
    oscillator.stop(ctx.currentTime + duration);
  } catch(e) {}
}

// ==================== RULETA ====================
const wheelCanvas = $("wheelCanvas");
const wheelCtx = wheelCanvas.getContext("2d");
const subjects = Object.keys(questions);
const wheelColors = [
  "#7c5cff", "#ff6b8a", "#20c997",
  "#ffb84d", "#35a7ff", "#e45cff"
];

const subjectIcons = {
  "Matemática": "∑",
  "Historia": "🏛",
  "Geografía": "🌎",
  "Ciencias": "🔬",
  "Lengua": "✍",
  "Tecnología": "💻"
};
let wheelRotation = 0;
let spinning = false;

function drawWheel(rotation = wheelRotation) {
  const size = wheelCanvas.width;
  const center = size / 2;
  const radius = size / 2 - 10;
  const slice = (Math.PI * 2) / subjects.length;

  wheelCtx.clearRect(0, 0, size, size);

  subjects.forEach((subject, i) => {
    const start = rotation + i * slice - Math.PI / 2;
    const end = start + slice;

    wheelCtx.beginPath();
    wheelCtx.moveTo(center, center);
    wheelCtx.arc(center, center, radius, start, end);
    wheelCtx.closePath();
    wheelCtx.fillStyle = wheelColors[i];
    wheelCtx.fill();

    wheelCtx.strokeStyle = "rgba(255,255,255,.28)";
    wheelCtx.lineWidth = 3;
    wheelCtx.stroke();

    wheelCtx.save();
    wheelCtx.translate(center, center);
    wheelCtx.rotate(start + slice / 2);
    wheelCtx.textAlign = "right";
    wheelCtx.fillStyle = "#fff";
    wheelCtx.shadowColor = "rgba(0,0,0,.3)";
    wheelCtx.shadowBlur = 5;

    wheelCtx.font = "900 25px Nunito, sans-serif";
    wheelCtx.fillText(subjectIcons[subject], radius - 28, -13);

    wheelCtx.font = "900 17px Nunito, sans-serif";
    wheelCtx.fillText(subject, radius - 28, 13);
    wheelCtx.restore();
  });

  // Outer ring
  wheelCtx.beginPath();
  wheelCtx.arc(center, center, radius, 0, Math.PI * 2);
  wheelCtx.strokeStyle = "rgba(255,255,255,.45)";
  wheelCtx.lineWidth = 8;
  wheelCtx.stroke();

  // Small decorative dots
  for (let i = 0; i < 24; i++) {
    const a = i * Math.PI * 2 / 24;
    const x = center + Math.cos(a) * (radius + 2);
    const y = center + Math.sin(a) * (radius + 2);
    wheelCtx.beginPath();
    wheelCtx.arc(x, y, 3, 0, Math.PI * 2);
    wheelCtx.fillStyle = "#fff";
    wheelCtx.fill();
  }
}

function spinWheel() {
  if (spinning) return;
  spinning = true;
  $("spinBtn").disabled = true;
  $("spinBtn").classList.add("spinning");
  $("wheelHint").textContent = "🎲 La ruleta está decidiendo...";

  const winner = Math.floor(Math.random() * subjects.length);
  const slice = (Math.PI * 2) / subjects.length;

  // Pointer is at the top. Calculate a rotation that puts the winner at the top.
  const currentNormalized = wheelRotation % (Math.PI * 2);
  const targetAngle = -(winner * slice + slice / 2);
  let delta = targetAngle - currentNormalized;
  while (delta < 0) delta += Math.PI * 2;

  const extraTurns = (6 + Math.floor(Math.random() * 3)) * Math.PI * 2;
  const finalRotation = wheelRotation + extraTurns + delta;
  const duration = 4300;

  const initial = wheelRotation;
  const startTime = performance.now();

  function animate(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    wheelRotation = initial + (finalRotation - initial) * eased;
    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      wheelRotation = finalRotation;
      drawWheel();
      spinning = false;
      $("spinBtn").disabled = false;
      $("spinBtn").classList.remove("spinning");

      const chosen = subjects[winner];
      $("wheelHint").textContent = `✨ ¡Salió ${chosen}!`;
      showToast(`🎯 ${chosen}`);
      beep(850, .16);

      setTimeout(() => startGame(chosen), 850);
    }
  }

  beep(420, .08);
  requestAnimationFrame(animate);
}

$("spinBtn").addEventListener("click", spinWheel);

document.querySelectorAll(".quick-grid button").forEach(button => {
  button.addEventListener("click", () => startGame(button.dataset.subject));
});

drawWheel();

$("backBtn").addEventListener("click", () => {
  clearInterval(state.timer);
  showScreen("homeScreen");
});

$("playAgain").addEventListener("click", () => {
  clearInterval(state.timer);

  // Volvemos a la pantalla de la ruleta y la hacemos girar automáticamente.
  $("wheelHint").textContent = "🎲 Preparando una nueva partida...";
  $("spinBtn").disabled = false;
  $("spinBtn").classList.remove("spinning");
  showScreen("homeScreen");
  drawWheel();

  // Pequeña pausa para que se vea el regreso a la ruleta antes del giro.
  setTimeout(() => {
    spinWheel();
  }, 450);
});

$("homeBtn").addEventListener("click", () => {
  clearInterval(state.timer);
  $("wheelHint").textContent = "La ruleta elegirá una materia al azar";
  $("spinBtn").disabled = false;
  $("spinBtn").classList.remove("spinning");
  showScreen("homeScreen");
  drawWheel();
});

$("soundBtn").addEventListener("click", () => {
  state.sound = !state.sound;
  $("soundBtn").textContent = state.sound ? "🔊" : "🔇";
});
