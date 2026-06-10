/* ═══════════════════════════════════════════════════════════════
   ✨ "Hey You" — Romantic Quiz Game  ·  v2 CINEMATIC
   Intro · Quiz · Particles · Starfield · Cursor Trail · Email
   ═══════════════════════════════════════════════════════════════ */

// ╔══════════════════════════════════════════╗
// ║  📧 EMAIL JS CONFIG — Fill these in!    ║
// ║  Then uncomment the send block in       ║
// ║  submitAnswers() below                  ║
// ╚══════════════════════════════════════════╝
const EMAIL_CONFIG = {
  serviceId:  'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey:  'YOUR_PUBLIC_KEY',
};


/* ═══════════════════════════════════════
   QUESTIONS — Better one-liners 🔥
   ═══════════════════════════════════════ */
const questions = [
  {
    id: 'flower',
    emoji: '🌸',
    oneliner: "You know what's embarrassing? I could stare at you for hours but I still don't know which flower makes YOUR eyes light up.",
    question: "So tell me — what's your favorite flower?",
    type: 'text',
    placeholder: 'The one that makes you stop and smile...'
  },
  {
    id: 'dish',
    emoji: '🍜',
    oneliner: "My mom asked me what you like to eat... and I just stood there like 🧍. Help me not be a disaster, please.",
    question: "What's the dish you could eat every single day?",
    type: 'text',
    placeholder: 'Make me hungry...'
  },
  {
    id: 'movie',
    emoji: '🎬',
    oneliner: "I need to know your comfort movie so I can 'accidentally' suggest it on our next movie night. Smooth, right? 😏",
    question: "What movie can you watch a hundred times and never get bored?",
    type: 'text',
    placeholder: 'The one you never skip...'
  },
  {
    id: 'color',
    emoji: '🎨',
    oneliner: "If I painted the entire sky just for you one evening, what color would make you smile the widest?",
    question: "What's your favorite color?",
    type: 'choice',
    options: ['Red ❤️', 'Blue 💙', 'Pink 💗', 'Purple 💜', 'Yellow 💛', 'Green 💚', 'Black 🖤', 'White 🤍']
  },
  {
    id: 'song',
    emoji: '🎵',
    oneliner: "Every love story needs a soundtrack. I want to know the song that plays in your head when you feel like the main character.",
    question: "What's YOUR song?",
    type: 'text',
    placeholder: 'Your personal anthem...'
  },
  {
    id: 'place',
    emoji: '✈️',
    oneliner: "Close your eyes. We can go anywhere in the world right now — no tickets, no limits. Where are we?",
    question: "What's your dream travel destination?",
    type: 'text',
    placeholder: 'I\'ll make it happen someday...'
  },
  {
    id: 'season',
    emoji: '🌦️',
    oneliner: "Important research question: When do you feel most alive — when the flowers bloom, the rain falls, or the snow settles?",
    question: "What's your favorite season?",
    type: 'choice',
    options: ['Spring 🌸', 'Summer ☀️', 'Monsoon 🌧️', 'Autumn 🍂', 'Winter ❄️']
  },
  {
    id: 'comfort_food',
    emoji: '🍕',
    oneliner: "Bad days are illegal when you're around. But just in case life gets tough — what food should I always have ready for you?",
    question: "What's your ultimate comfort food?",
    type: 'text',
    placeholder: 'The emotional support meal...'
  },
  {
    id: 'book',
    emoji: '📖',
    oneliner: "Tell me the book that lives rent-free in your head and I promise I'll read it this week. Even if it's 800 pages. For you? Worth it.",
    question: "What's a book that changed the way you think?",
    type: 'text',
    placeholder: 'The one that stayed with you...'
  },
  {
    id: 'hobby',
    emoji: '🎯',
    oneliner: "Besides teaching your boyfriend how to survive (and English apparently), what makes you lose track of time?",
    question: "What's your favorite thing to do when the world goes quiet?",
    type: 'text',
    placeholder: 'Besides being absolutely amazing...'
  },
  {
    id: 'morning_night',
    emoji: '🌙',
    oneliner: "This is critical scientific research 🔬 — should I send 'good morning beautiful' or 'goodnight gorgeous' first? Help a man out.",
    question: "Morning person or night owl?",
    type: 'choice',
    options: ['Early Bird 🌅', 'Night Owl 🦉', 'Depends on my mood 🤷‍♀️', 'I never sleep 😴']
  },
  {
    id: 'makes_laugh',
    emoji: '😂',
    oneliner: "I want to be the reason you can't stop laughing. Consider this question my cheat code — I'm not ashamed.",
    question: "What ALWAYS makes you laugh, no matter what?",
    type: 'text',
    placeholder: 'Your happy trigger...'
  },
  {
    id: 'dream_date',
    emoji: '💑',
    oneliner: "Plan our perfect day. No budget, no rules — just you and me and whatever makes your heart happy. Describe it, I dare you.",
    question: "What's your idea of a perfect date?",
    type: 'textarea',
    placeholder: 'Paint me a picture... I\'m taking notes 📝'
  },
  {
    id: 'love_language',
    emoji: '💕',
    oneliner: "How do you like to be loved? Because I refuse to guess wrong. I want to do it right — for you.",
    question: "What's your love language?",
    type: 'choice',
    options: ['Words of Affirmation 💌', 'Quality Time ⏰', 'Physical Touch 🤗', 'Acts of Service 🛠️', 'Receiving Gifts 🎁']
  },
  {
    id: 'teach_me',
    emoji: '📝',
    oneliner: "In 8 days you've already made me a better person than I was in 8 years. What's my next lesson, teacher?",
    question: "What's something you want to teach me next?",
    type: 'text',
    placeholder: 'I\'m your most eager student...'
  },
  {
    id: 'superpower',
    emoji: '⚡',
    oneliner: "You already have the power to make my heart stop with one look. But if you could pick a second one — go ahead, you deserve it.",
    question: "If you could have any superpower, what would it be?",
    type: 'text',
    placeholder: 'Choose wisely (or don\'t, you\'re already super)...'
  },
  {
    id: 'together',
    emoji: '🚀',
    oneliner: "Here's the deal — the world is ours, and I'm in for everything. The crazier, the better. I just want it to be with you.",
    question: "What's something you want us to do together someday?",
    type: 'textarea',
    placeholder: 'Our bucket list starts here...'
  },
  {
    id: 'about_me',
    emoji: '🥺',
    oneliner: "Last one. Be honest with me. I'm not fishing for compliments — okay maybe a little — but I really want to know...",
    question: "What made you say yes to this disaster of a boyfriend?",
    type: 'textarea',
    placeholder: 'Make my entire day... 💕'
  }
];


/* ═══════════════════════════════════════
   INTRO SLIDE CONTENT
   ═══════════════════════════════════════ */
const introContent = [
  { title: "Hey You", typewriter: false },
  { title: "Can I be honest with you for a second?", typewriter: true },
  { title: "These last 8 days have been magic", sub: "...and honestly? the best days of my life", typewriter: false },
  { title: "You teach me, you care for me, you make everything better", sub: "no one has ever done that the way you do", typewriter: false },
  { title: "But here's my little confession...", typewriter: true },
  { title: "I don't even know your favorite flower 🤦‍♂️", sub: "...or your comfort movie, dream place, love language...", typewriter: false },
  { title: "So I stayed up and built this little thing", typewriter: true },
  {
    title: "18 questions — some funny, some cheesy, all from the heart",
    sub: "because you deserve someone who remembers every little detail",
    typewriter: false
  },
];

const introTimings = [3000, 3200, 3500, 3800, 3000, 4000, 3000]; // ms per slide (last waits for click)


/* ═══════════════════════════════════════
   LEVEL SYSTEM 🎮
   ═══════════════════════════════════════ */
const levels = [
  { name: 'The Basics',      emoji: '🌱', range: [0, 3] },
  { name: 'Getting Warmer',  emoji: '🔥', range: [4, 7] },
  { name: 'Deep Diving',     emoji: '🌊', range: [8, 11] },
  { name: 'Heart Unlocked',  emoji: '💓', range: [12, 14] },
  { name: 'Final Boss',      emoji: '👑', range: [15, 17] },
];


/* ═══════════════════════════════════════
   REACTIONS
   ═══════════════════════════════════════ */
const reactions = [
  "Noted! 📝", "Ooh, interesting... 🤔", "Love that! 💕",
  "Impeccable taste 👌", "Awww! 🥰", "Taking mental notes... ✍️",
  "Perfect answer! ✨", "I KNEW it! 😄", "Saving this forever 💾",
  "You're the best 💖", "10/10 vibes 🔥", "That's adorable 🥹",
  "Screenshotting this 📸", "My heart! 💓", "Tell me more 🫠",
  "Obsessed with this answer 😍", "You're unreal 🤯", "Chef's kiss 💋"
];


/* ═══════════════════════════════════════
   STATE
   ═══════════════════════════════════════ */
let currentSlide    = 0;
let currentQuestion = 0;
let answers         = {};
let isTransitioning = false;
let introTimer      = null;

const totalSlides    = introContent.length;
const totalQuestions = questions.length;


/* ═══════════════════════════════════════
   LOADING SCREEN
   ═══════════════════════════════════════ */
function hideLoader() {
  const loader = document.getElementById('loader');
  const intro  = document.getElementById('intro');

  setTimeout(() => {
    loader.classList.remove('active');
    setTimeout(() => {
      intro.classList.add('active');
      runIntroSlide(0);
    }, 500);
  }, 2600); // Let the heart animation complete
}


/* ═══════════════════════════════════════
   INTRO CINEMATIC ENGINE
   ═══════════════════════════════════════ */
function runIntroSlide(index) {
  if (index >= totalSlides) return;

  const slides = document.querySelectorAll('.intro-slide');

  // Exit previous
  slides.forEach((s, i) => {
    s.classList.remove('active');
    if (i < index) s.classList.add('exit');
  });

  // Activate current
  const slide = slides[index];
  slide.classList.remove('exit');
  slide.classList.add('active');
  currentSlide = index;

  const data    = introContent[index];
  const titleEl = document.getElementById(`introTitle${index}`);
  const subEl   = document.getElementById(`introSub${index}`);

  // Type or set title
  if (data.typewriter && titleEl) {
    typewrite(titleEl, data.title, 38, () => {
      if (subEl && data.sub) showSub(subEl, data.sub);
    });
  } else {
    if (titleEl) titleEl.innerHTML = data.title;
    if (subEl && data.sub) {
      setTimeout(() => showSub(subEl, data.sub), 500);
    }
  }

  // Auto-advance (except last slide)
  if (index < totalSlides - 1) {
    introTimer = setTimeout(() => {
      runIntroSlide(index + 1);
    }, introTimings[index]);
  }
}

function showSub(el, text) {
  el.textContent = text;
  el.classList.add('visible');
}

function skipIntro() {
  clearTimeout(introTimer);
  startQuiz();
}


/* ═══════════════════════════════════════
   TYPEWRITER EFFECT ⌨️
   ═══════════════════════════════════════ */
function typewrite(element, text, speed = 40, onComplete) {
  element.innerHTML = '';
  let i = 0;

  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  element.appendChild(cursor);

  function type() {
    if (i < text.length) {
      element.insertBefore(document.createTextNode(text.charAt(i)), cursor);
      i++;
      setTimeout(type, speed + Math.random() * 20); // Slight randomness for realism
    } else {
      // Remove cursor after a beat
      setTimeout(() => {
        cursor.style.animation = 'none';
        cursor.style.opacity = '0';
        cursor.style.transition = 'opacity 0.5s';
        if (onComplete) onComplete();
      }, 600);
    }
  }

  type();
}


/* ═══════════════════════════════════════
   START QUIZ
   ═══════════════════════════════════════ */
function startQuiz() {
  clearTimeout(introTimer);

  const intro = document.getElementById('intro');
  const quiz  = document.getElementById('quiz');

  intro.classList.remove('active');

  setTimeout(() => {
    quiz.classList.add('active');
    renderDots();
    renderQuestion(0);
    updateProgress();
    updateLevel();
  }, 700);
}


/* ═══════════════════════════════════════
   QUIZ ENGINE
   ═══════════════════════════════════════ */
function renderQuestion(index, direction = 'forward') {
  const card = document.getElementById('questionCard');
  const q    = questions[index];

  const exitClass  = direction === 'forward' ? 'card-exit' : 'card-exit-back';
  const enterClass = direction === 'forward' ? 'card-enter' : 'card-enter-back';

  card.classList.add(exitClass);

  setTimeout(() => {
    const savedAnswer = answers[q.id] || '';
    let inputHTML = '';

    if (q.type === 'text') {
      inputHTML = `<input type="text" class="text-input" id="answerInput"
        placeholder="${q.placeholder}" value="${esc(savedAnswer)}"
        autocomplete="off" spellcheck="false" />`;
    } else if (q.type === 'textarea') {
      inputHTML = `<textarea class="text-input" id="answerInput"
        placeholder="${q.placeholder}" rows="3" spellcheck="false">${esc(savedAnswer)}</textarea>`;
    } else if (q.type === 'choice') {
      inputHTML = `<div class="choices-grid" id="choicesGrid">
        ${q.options.map(opt => `
          <button class="choice-btn ${savedAnswer === opt ? 'selected' : ''}"
            data-value="${esc(opt)}" onclick="selectChoice(this)">${opt}</button>
        `).join('')}
      </div>`;
    }

    card.innerHTML = `
      <span class="q-emoji">${q.emoji}</span>
      <p class="q-oneliner">${q.oneliner}</p>
      <h2 class="q-question">${q.question}</h2>
      ${inputHTML}
    `;

    card.classList.remove(exitClass);
    card.classList.add(enterClass);

    setTimeout(() => {
      card.classList.remove(enterClass);
      const input = document.getElementById('answerInput');
      if (input) {
        input.focus();
        input.addEventListener('keydown', e => {
          if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); nextQuestion(); }
        });
      }
    }, 550);

    updateNavButtons();
    updateDots();
  }, 380);
}

function selectChoice(btn) {
  btn.parentElement.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  answers[questions[currentQuestion].id] = btn.dataset.value;
  createSparkle(btn);
}

function getCurrentAnswer() {
  const q = questions[currentQuestion];
  if (q.type === 'choice') {
    const sel = document.querySelector('.choice-btn.selected');
    return sel ? sel.dataset.value : '';
  }
  const input = document.getElementById('answerInput');
  return input ? input.value.trim() : '';
}

function saveCurrentAnswer() {
  const q = questions[currentQuestion];
  const a = getCurrentAnswer();
  if (a) answers[q.id] = a;
}


/* ─── Navigation ─── */
function nextQuestion() {
  if (isTransitioning) return;
  saveCurrentAnswer();

  if (currentQuestion >= totalQuestions - 1) { submitAnswers(); return; }

  isTransitioning = true;
  showReaction();

  setTimeout(() => {
    const prevLevel = getLevel(currentQuestion);
    currentQuestion++;
    const newLevel = getLevel(currentQuestion);

    renderQuestion(currentQuestion, 'forward');
    updateProgress();

    if (newLevel !== prevLevel) triggerLevelUp();
    updateLevel();

    isTransitioning = false;
  }, 850);
}

function prevQuestion() {
  if (isTransitioning || currentQuestion <= 0) return;
  saveCurrentAnswer();
  isTransitioning = true;

  currentQuestion--;
  renderQuestion(currentQuestion, 'back');
  updateProgress();
  updateLevel();

  setTimeout(() => { isTransitioning = false; }, 550);
}

function updateProgress() {
  const pct = ((currentQuestion + 1) / totalQuestions) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressText').textContent = `${currentQuestion + 1} / ${totalQuestions}`;
}

function updateNavButtons() {
  const prev = document.getElementById('btnPrev');
  const next = document.getElementById('btnNext');

  prev.classList.toggle('hidden', currentQuestion === 0);

  if (currentQuestion === totalQuestions - 1) {
    next.textContent = '💕 Submit';
    next.classList.add('submit-btn');
  } else {
    next.textContent = 'Next →';
    next.classList.remove('submit-btn');
  }
}


/* ─── Level System ─── */
function getLevel(qIndex) {
  return levels.findIndex(l => qIndex >= l.range[0] && qIndex <= l.range[1]);
}

function updateLevel() {
  const lvl = levels[getLevel(currentQuestion)];
  document.getElementById('levelEmoji').textContent = lvl.emoji;
  document.getElementById('levelName').textContent  = lvl.name;
}

function triggerLevelUp() {
  const badge = document.getElementById('levelBadge');
  badge.classList.remove('level-up');
  void badge.offsetWidth; // Force reflow
  badge.classList.add('level-up');
  setTimeout(() => badge.classList.remove('level-up'), 800);
}


/* ─── Question Dots ─── */
function renderDots() {
  const container = document.getElementById('questionDots');
  let html = '';
  for (let i = 0; i < totalQuestions; i++) {
    html += `<div class="q-dot" data-index="${i}"></div>`;
  }
  container.innerHTML = html;
}

function updateDots() {
  const dots = document.querySelectorAll('.q-dot');
  dots.forEach((dot, i) => {
    dot.classList.remove('current', 'answered');
    if (i === currentQuestion) dot.classList.add('current');
    else if (answers[questions[i].id]) dot.classList.add('answered');
  });
}


/* ─── Reaction Toast ─── */
function showReaction() {
  const toast = document.getElementById('reactionToast');
  toast.textContent = reactions[Math.floor(Math.random() * reactions.length)];
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 700);
}


/* ═══════════════════════════════════════
   SUBMIT
   ═══════════════════════════════════════ */
function submitAnswers() {
  saveCurrentAnswer();

  // ─── Build template params (each answer = separate variable) ───
  const templateParams = {
    subject:      '💕 Quiz Answers from Your Girl!',
    from_name:    'Hey You Quiz 💕',
    submitted_at: new Date().toLocaleString(),
    // Individual answers matching {{variable}} in EmailJS template
    flower:       answers.flower       || '(skipped)',
    dish:         answers.dish         || '(skipped)',
    movie:        answers.movie        || '(skipped)',
    color:        answers.color        || '(skipped)',
    song:         answers.song         || '(skipped)',
    place:        answers.place        || '(skipped)',
    season:       answers.season       || '(skipped)',
    comfort_food: answers.comfort_food || '(skipped)',
    book:         answers.book         || '(skipped)',
    hobby:        answers.hobby        || '(skipped)',
    morning_night:answers.morning_night|| '(skipped)',
    makes_laugh:  answers.makes_laugh  || '(skipped)',
    dream_date:   answers.dream_date   || '(skipped)',
    love_language: answers.love_language|| '(skipped)',
    teach_me:     answers.teach_me     || '(skipped)',
    superpower:   answers.superpower   || '(skipped)',
    together:     answers.together     || '(skipped)',
    about_me:     answers.about_me     || '(skipped)',
    // Also send the plain text version as backup
    message:      buildEmailBody(),
  };

  // ─── SEND VIA EMAILJS ───
  // Fill EMAIL_CONFIG at the top of this file, then this works automatically!
  if (EMAIL_CONFIG.serviceId !== 'YOUR_SERVICE_ID') {
    emailjs.init(EMAIL_CONFIG.publicKey);
    emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateId, templateParams)
      .then(() => {
        console.log('✅ Email sent successfully!');
      })
      .catch(err => {
        console.error('❌ Email failed:', err);
      });
  } else {
    console.log('⚠️ EmailJS not configured. Fill EMAIL_CONFIG in script.js');
    console.log('═══ TEMPLATE PARAMS (this is what EmailJS would send) ═══');
    console.log(JSON.stringify(templateParams, null, 2));
  }

  showOutro();
}

function buildEmailBody() {
  let body = '💕 Quiz Answers — "Hey You" Game 💕\n';
  body += '━'.repeat(40) + '\n\n';

  questions.forEach(q => {
    const ans = answers[q.id] || '(skipped)';
    body += `${q.emoji}  ${q.question}\n`;
    body += `   ➜  ${ans}\n\n`;
  });

  body += '━'.repeat(40) + '\n';
  body += `📅 Submitted: ${new Date().toLocaleString()}\n`;
  body += '❤️ Made with love\n';
  return body;
}


/* ═══════════════════════════════════════
   OUTRO
   ═══════════════════════════════════════ */
function showOutro() {
  const quiz  = document.getElementById('quiz');
  const outro = document.getElementById('outro');

  quiz.classList.remove('active');

  setTimeout(() => {
    outro.classList.add('active');
    renderOutroStats();
    launchConfetti();
  }, 700);
}

function renderOutroStats() {
  const stats = document.getElementById('outroStats');

  const highlights = [
    { emoji: '🌸', label: 'Her Flower',     value: answers.flower },
    { emoji: '🎬', label: 'Her Movie',       value: answers.movie },
    { emoji: '💕', label: 'Love Language',    value: answers.love_language },
    { emoji: '✈️', label: 'Dream Place',      value: answers.place },
    { emoji: '🍕', label: 'Comfort Food',     value: answers.comfort_food },
    { emoji: '🎵', label: 'Her Song',         value: answers.song },
  ].filter(h => h.value);

  stats.innerHTML = highlights.map(h => `
    <div class="stat-card">
      <span class="stat-emoji">${h.emoji}</span>
      <div class="stat-label">${h.label}</div>
      <div class="stat-value">${h.value}</div>
    </div>
  `).join('');
}

function restartQuiz() {
  currentQuestion = 0;
  answers = {};

  const outro = document.getElementById('outro');
  const quiz  = document.getElementById('quiz');

  outro.classList.remove('active');
  setTimeout(() => {
    quiz.classList.add('active');
    renderDots();
    renderQuestion(0);
    updateProgress();
    updateLevel();
  }, 700);
}


/* ═══════════════════════════════════════
   CONFETTI 🎉
   ═══════════════════════════════════════ */
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const shapes = ['❤️','💕','✨','🌸','💖','🎉','💗','⭐','🥰','💫'];

  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.textContent = shapes[Math.floor(Math.random() * shapes.length)];
      piece.style.left = Math.random() * 100 + '%';
      piece.style.fontSize = (Math.random() * 18 + 10) + 'px';
      piece.style.animationDuration = (Math.random() * 3.5 + 2.5) + 's';
      canvas.appendChild(piece);
      setTimeout(() => piece.remove(), 6000);
    }, i * 60);
  }
}


/* ═══════════════════════════════════════
   STARFIELD ⭐
   ═══════════════════════════════════════ */
function initStarfield() {
  const container = document.getElementById('starfield');
  const count = window.innerWidth < 640 ? 80 : 160;

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    star.style.width  = size + 'px';
    star.style.height = size + 'px';
    star.style.left   = Math.random() * 100 + '%';
    star.style.top    = Math.random() * 100 + '%';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    star.style.animationDelay    = (Math.random() * 4) + 's';
    star.style.opacity = Math.random() * 0.5 + 0.1;
    container.appendChild(star);
  }
}


/* ═══════════════════════════════════════
   FLOATING HEART PARTICLES
   ═══════════════════════════════════════ */
function initParticles() {
  const container = document.getElementById('particles');
  const hearts = ['💕','💗','💖','✨','💫','🌸','♥','🤍'];

  function spawn() {
    const heart = document.createElement('div');
    heart.className = 'particle-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 14 + 8) + 'px';
    const dur = Math.random() * 14 + 10;
    heart.style.animationDuration = dur + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), dur * 1000);
  }

  for (let i = 0; i < 6; i++) setTimeout(spawn, i * 600);
  setInterval(spawn, 3000);
}


/* ═══════════════════════════════════════
   CURSOR HEART TRAIL 💕
   ═══════════════════════════════════════ */
function initCursorTrail() {
  const container = document.getElementById('cursorTrail');
  const emojis = ['💕','✨','💗','♥','💫'];
  let lastX = 0, lastY = 0;
  let throttle = false;

  document.addEventListener('mousemove', (e) => {
    if (throttle) return;
    throttle = true;

    // Only spawn if moved enough
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    if (Math.sqrt(dx*dx + dy*dy) > 30) {
      const dot = document.createElement('div');
      dot.className = 'trail-dot';
      dot.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
      container.appendChild(dot);
      setTimeout(() => dot.remove(), 900);

      lastX = e.clientX;
      lastY = e.clientY;
    }

    setTimeout(() => { throttle = false; }, 80);
  });
}


/* ═══════════════════════════════════════
   SPARKLE BURST (on choice select)
   ═══════════════════════════════════════ */
function createSparkle(element) {
  const rect = element.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const burst = document.createElement('div');
  burst.className = 'sparkle-burst';
  burst.style.left = cx + 'px';
  burst.style.top  = cy + 'px';

  const colors = ['#ff6b9d','#c471ed','#f7b731','#ff8fb3','#fff','#ffd700'];

  for (let i = 0; i < 12; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    const angle = (Math.PI * 2 * i) / 12;
    const dist  = Math.random() * 55 + 25;
    s.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
    s.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
    s.style.background = colors[Math.floor(Math.random() * colors.length)];
    burst.appendChild(s);
  }

  document.body.appendChild(burst);
  setTimeout(() => burst.remove(), 850);
}


/* ═══════════════════════════════════════
   KEYBOARD
   ═══════════════════════════════════════ */
document.addEventListener('keydown', (e) => {
  const quiz = document.getElementById('quiz');
  if (!quiz.classList.contains('active')) return;
  if (e.key === 'ArrowRight' && !isTransitioning) nextQuestion();
  if (e.key === 'ArrowLeft'  && !isTransitioning) prevQuestion();
});


/* ═══════════════════════════════════════
   UTILITY
   ═══════════════════════════════════════ */
function esc(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}


/* ═══════════════════════════════════════
   🚀 INIT
   ═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initStarfield();
  initParticles();
  initCursorTrail();
  hideLoader();
});
