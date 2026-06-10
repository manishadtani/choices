/* ═══════════════════════════════════════════════════════════════
   ✨ "Hey You" v3 ULTIMATE — Romantic Quiz Game
   20 Questions · 5 Types · Interludes · 3D Tilt · Mesh BG
   ═══════════════════════════════════════════════════════════════ */

const EMAIL_CONFIG = {
  serviceId:  'service_ts5652l',
  templateId: 'template_iwv2c0n',
  publicKey:  'b7MfO2EMHY3cuG6AA',
};


/* ═══════════════════════════════════════
   QUESTIONS — 20 Mixed Types 🔥
   Types: text, textarea, choice, thisOrThat, emojiRate, slider
   ═══════════════════════════════════════ */
const questions = [
  // ── LEVEL 1: The Basics 🌱 ──
  {
    id: 'flower', emoji: '🌸', type: 'text',
    oneliner: "You know what's embarrassing? I could stare at you for hours but I still don't know which flower makes YOUR eyes light up.",
    question: "What's your favorite flower?",
    placeholder: 'The one that makes you stop and smile...'
  },
  {
    id: 'mountains_or_beach', emoji: '🌍', type: 'thisOrThat',
    oneliner: "No wrong answers here... but your answer decides our first trip together 😏",
    question: "Where does your soul belong?",
    optionA: { emoji: '🏔️', label: 'Mountains' },
    optionB: { emoji: '🏖️', label: 'Beach' }
  },
  {
    id: 'dish', emoji: '🍜', type: 'text',
    oneliner: "My mom asked what you like to eat and I just stood there like 🧍... save me.",
    question: "What dish could you eat every single day?",
    placeholder: 'Make me hungry...'
  },
  {
    id: 'color', emoji: '🎨', type: 'choice',
    oneliner: "If I painted the entire sky for you one evening, what color would make your heart skip?",
    question: "What's your favorite color?",
    options: ['Red ❤️', 'Blue 💙', 'Pink 💗', 'Purple 💜', 'Yellow 💛', 'Green 💚', 'Black 🖤', 'White 🤍']
  },

  // ── LEVEL 2: Getting Personal 🔥 ──
  {
    id: 'love_rain', emoji: '🌧️', type: 'emojiRate',
    oneliner: "I need to know if 'chai + rain + you' is a valid date idea or if you'll murder me for it 🌧️",
    question: "How much do you love rainy days?",
    rateLabels: ['Nope 😤', 'Meh 😐', 'It\'s okay 🙂', 'Love it! 🥰', 'OBSESSED 🌧️💕']
  },
  {
    id: 'movie', emoji: '🎬', type: 'text',
    oneliner: "I need your comfort movie so I can 'accidentally' suggest it on our next movie night. Smooth, right? 😏",
    question: "What movie can you rewatch forever?",
    placeholder: 'The one you never skip...'
  },
  {
    id: 'morning_or_night', emoji: '🌙', type: 'thisOrThat',
    oneliner: "This determines if our future has sunrise hikes or midnight snack runs. Choose wisely.",
    question: "When are you most alive?",
    optionA: { emoji: '🌅', label: 'Mornings' },
    optionB: { emoji: '🦉', label: 'Nights' }
  },
  {
    id: 'song', emoji: '🎵', type: 'text',
    oneliner: "Every love story needs a soundtrack. I want to know the song that plays in YOUR head when you feel unstoppable.",
    question: "What's your personal anthem?",
    placeholder: 'Your main character song...'
  },

  // ── LEVEL 3: Deep Dive 🌊 ──
  {
    id: 'introvert_extrovert', emoji: '🎭', type: 'slider',
    oneliner: "Are you the 'cozy blanket fort at home' type or the 'let's dance at 2 AM' type? Slide to confess 🎚️",
    question: "Where do you fall on this spectrum?",
    sliderLeft: { emoji: '📚', label: 'Introvert' },
    sliderRight: { emoji: '🎉', label: 'Extrovert' },
    sliderLabels: ['Full Introvert', 'Mostly Intro', 'Ambivert', 'Mostly Extro', 'Full Extrovert']
  },
  {
    id: 'comfort_food', emoji: '🍕', type: 'text',
    oneliner: "Bad days are illegal when you're around. But just in case — what food should I always have ready for you?",
    question: "What's your ultimate comfort food?",
    placeholder: 'The emotional support meal...'
  },
  {
    id: 'season', emoji: '🌦️', type: 'choice',
    oneliner: "When do you feel most alive? When flowers bloom, rain falls, or snow settles?",
    question: "What's your favorite season?",
    options: ['Spring 🌸', 'Summer ☀️', 'Monsoon 🌧️', 'Autumn 🍂', 'Winter ❄️']
  },
  {
    id: 'book', emoji: '📖', type: 'text',
    oneliner: "Tell me the book that lives rent-free in your head. I promise I'll read it this week. Even if it's 800 pages. For you? Worth it.",
    question: "A book that changed the way you see the world?",
    placeholder: 'The one that stayed with you...'
  },

  // ── LEVEL 4: Heart to Heart 💓 ──
  {
    id: 'cook_or_order', emoji: '🍳', type: 'thisOrThat',
    oneliner: "Be honest — do I need to learn cooking or just memorize the entire Zomato menu? 😂",
    question: "Our ideal food night looks like...",
    optionA: { emoji: '👩‍🍳', label: 'Cook Together' },
    optionB: { emoji: '📱', label: 'Order In' }
  },
  {
    id: 'dream_date', emoji: '💑', type: 'textarea',
    oneliner: "Plan our perfect day. No budget, no rules. Just you and me and whatever makes your heart happy. I dare you.",
    question: "Describe your dream date — go wild.",
    placeholder: 'Paint me a picture... I\'m taking notes 📝'
  },
  {
    id: 'love_language', emoji: '💕', type: 'choice',
    oneliner: "How do you like to be loved? Because I refuse to guess wrong. I want to do it right — for you.",
    question: "What's your love language?",
    options: ['Words of Affirmation 💌', 'Quality Time ⏰', 'Physical Touch 🤗', 'Acts of Service 🛠️', 'Receiving Gifts 🎁']
  },
  {
    id: 'rate_my_texts', emoji: '📱', type: 'emojiRate',
    oneliner: "Be brutally honest. My ego can handle it. Maybe. Probably not. Tell me anyway.",
    question: "Rate my texting game — no mercy.",
    rateLabels: ['Tragic 😬', 'Needs work 📝', 'Decent 👍', 'Really good 😊', 'Chef\'s kiss 💋']
  },

  // ── LEVEL 5: Final Boss 👑 ──
  {
    id: 'place', emoji: '✈️', type: 'text',
    oneliner: "Close your eyes. We can go anywhere in the world right now — no tickets, no limits. Where are we?",
    question: "What's your dream travel destination?",
    placeholder: 'I\'ll make it happen someday...'
  },
  {
    id: 'superpower', emoji: '⚡', type: 'text',
    oneliner: "You already have the power to make my heart stop with one look. Pick a second one — you deserve it.",
    question: "If you could have any superpower?",
    placeholder: 'Choose wisely (you\'re already super)...'
  },
  {
    id: 'calls_or_texts', emoji: '📞', type: 'thisOrThat',
    oneliner: "I need to know if I should practice my voice or my emoji game. This is critical intel 🕵️",
    question: "How do you prefer to connect?",
    optionA: { emoji: '📞', label: 'Long Calls' },
    optionB: { emoji: '💬', label: 'Long Texts' }
  },
  {
    id: 'about_me', emoji: '🥺', type: 'textarea',
    oneliner: "Last one. I'm not fishing for compliments — okay maybe a little — but I genuinely want to know...",
    question: "What made you say yes to this disaster of a boyfriend?",
    placeholder: 'Make my entire day... 💕'
  }
];


/* ═══════════════════════════════════════
   INTRO CONTENT
   ═══════════════════════════════════════ */
const introContent = [
  { title: "Hey You", typewriter: false },
  { title: "Can I be honest with you for a second?", typewriter: true },
  { title: "These last 8 days have been magic", sub: "...and honestly? the best days of my life", typewriter: false },
  { title: "You teach me, you care for me, you understand me", sub: "no one has ever done that the way you do", typewriter: false },
  { title: "But here's my little confession...", typewriter: true },
  { title: "I don't even know your favorite flower", sub: "...or your comfort movie, dream place, love language...", typewriter: false },
  { title: "So I stayed up and built this little thing", typewriter: true },
  { title: "20 questions — fun, romantic, and a little crazy", sub: "because you deserve someone who remembers every little detail", typewriter: false },
];
const introTimings = [3000, 3200, 3500, 3800, 3000, 4000, 3000];


/* ═══════════════════════════════════════
   LEVELS & INTERLUDES
   ═══════════════════════════════════════ */
const levels = [
  { name: 'The Basics',       emoji: '🌱', range: [0, 3] },
  { name: 'Getting Personal', emoji: '🔥', range: [4, 7] },
  { name: 'Deep Dive',        emoji: '🌊', range: [8, 11] },
  { name: 'Heart to Heart',   emoji: '💓', range: [12, 15] },
  { name: 'Final Boss',       emoji: '👑', range: [16, 19] },
];

const interludes = {
  4:  { emoji: '💕', msg: "You're doing amazing, beautiful...", sub: "Every answer makes me fall for you a little more" },
  8:  { emoji: '🥰', msg: "Halfway there...", sub: "and I'm already obsessed with knowing you" },
  12: { emoji: '💫', msg: "You're incredible, you know that?", sub: "almost done... but I could ask you questions forever" },
  16: { emoji: '👑', msg: "Last stretch...", sub: "these ones are close to my heart" },
};


/* ═══════════════════════════════════════
   REACTIONS
   ═══════════════════════════════════════ */
const reactions = [
  "Noted! 📝", "Ooh interesting 🤔", "Love that! 💕",
  "Impeccable taste 👌", "Awww! 🥰", "Taking notes ✍️",
  "Perfect! ✨", "I KNEW IT 😄", "Saving forever 💾",
  "You're the best 💖", "10/10 vibes 🔥", "Adorable 🥹",
  "Screenshotting 📸", "My heart 💓", "Tell me more 🫠",
  "Obsessed 😍", "You're unreal 🤯", "Chef's kiss 💋"
];


/* ═══════════════════════════════════════
   STATE
   ═══════════════════════════════════════ */
let currentSlide = 0, currentQuestion = 0;
let answers = {};
let isTransitioning = false, introTimer = null, interludeTimer = null;
const totalSlides = introContent.length;
const totalQuestions = questions.length;


/* ═══════════════════════════════════════
   LOADING
   ═══════════════════════════════════════ */
function hideLoader() {
  setTimeout(() => {
    document.getElementById('loader').classList.remove('active');
    setTimeout(() => {
      document.getElementById('intro').classList.add('active');
      runIntroSlide(0);
    }, 500);
  }, 2600);
}


/* ═══════════════════════════════════════
   INTRO ENGINE
   ═══════════════════════════════════════ */
function runIntroSlide(index) {
  if (index >= totalSlides) return;
  const slides = document.querySelectorAll('.intro-slide');
  slides.forEach((s, i) => { s.classList.remove('active'); if (i < index) s.classList.add('exit'); });
  const slide = slides[index];
  slide.classList.remove('exit'); slide.classList.add('active');
  currentSlide = index;

  const data = introContent[index];
  const titleEl = document.getElementById(`introTitle${index}`);
  const subEl = document.getElementById(`introSub${index}`);

  if (data.typewriter && titleEl) {
    typewrite(titleEl, data.title, 35, () => { if (subEl && data.sub) showSub(subEl, data.sub); });
  } else {
    if (titleEl) titleEl.innerHTML = data.title;
    if (subEl && data.sub) setTimeout(() => showSub(subEl, data.sub), 500);
  }

  if (index < totalSlides - 1) {
    introTimer = setTimeout(() => runIntroSlide(index + 1), introTimings[index]);
  }
}

function showSub(el, text) { el.textContent = text; el.classList.add('visible'); }
function skipIntro() { clearTimeout(introTimer); startQuiz(); }

function typewrite(el, text, speed = 35, cb) {
  el.innerHTML = '';
  let i = 0;
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  el.appendChild(cursor);
  (function type() {
    if (i < text.length) {
      el.insertBefore(document.createTextNode(text.charAt(i)), cursor);
      i++;
      setTimeout(type, speed + Math.random() * 18);
    } else {
      setTimeout(() => { cursor.style.transition = 'opacity 0.5s'; cursor.style.opacity = '0'; if (cb) cb(); }, 600);
    }
  })();
}


/* ═══════════════════════════════════════
   START QUIZ
   ═══════════════════════════════════════ */
function startQuiz() {
  clearTimeout(introTimer);
  document.getElementById('intro').classList.remove('active');
  setTimeout(() => {
    document.getElementById('quiz').classList.add('active');
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
  const q = questions[index];
  const exitCls = direction === 'forward' ? 'card-exit' : 'card-exit-back';
  const enterCls = direction === 'forward' ? 'card-enter' : 'card-enter-back';

  card.classList.add(exitCls);

  setTimeout(() => {
    const saved = answers[q.id] || '';
    let inputHTML = '';

    switch (q.type) {
      case 'text':
        inputHTML = `<input type="text" class="text-input" id="answerInput" placeholder="${q.placeholder}" value="${esc(saved)}" autocomplete="off" spellcheck="false"/>`;
        break;

      case 'textarea':
        inputHTML = `<textarea class="text-input" id="answerInput" placeholder="${q.placeholder}" rows="3" spellcheck="false">${esc(saved)}</textarea>`;
        break;

      case 'choice':
        inputHTML = `<div class="choices-grid">${q.options.map(o =>
          `<button class="choice-btn ${saved===o?'selected':''}" data-value="${esc(o)}" onclick="selectChoice(this)">${o}</button>`
        ).join('')}</div>`;
        break;

      case 'thisOrThat':
        inputHTML = `<div class="tot-wrapper"><div class="tot-container">
          <div class="tot-card ${saved===q.optionA.label?'selected':''} ${saved===q.optionB.label?'dimmed':''}" data-value="${q.optionA.label}" onclick="selectTOT(this,'${q.optionA.label}')">
            <span class="tot-emoji">${q.optionA.emoji}</span><span class="tot-label">${q.optionA.label}</span>
          </div>
          <div class="tot-card ${saved===q.optionB.label?'selected':''} ${saved===q.optionA.label?'dimmed':''}" data-value="${q.optionB.label}" onclick="selectTOT(this,'${q.optionB.label}')">
            <span class="tot-emoji">${q.optionB.emoji}</span><span class="tot-label">${q.optionB.label}</span>
          </div>
        </div><div class="tot-or">or</div></div>`;
        break;

      case 'emojiRate':
        const savedRate = saved ? parseInt(saved) : 0;
        inputHTML = `<div class="emoji-rate-container">${[1,2,3,4,5].map(n =>
          `<span class="emoji-heart ${n<=savedRate?'filled':''}" data-val="${n}" onclick="selectRate(${n})">❤️</span>`
        ).join('')}</div><div class="rate-label" id="rateLabel">${savedRate ? q.rateLabels[savedRate-1] : ''}</div>`;
        break;

      case 'slider':
        const savedSlider = saved || '50';
        const sliderIdx = Math.round(parseInt(savedSlider) / 25);
        inputHTML = `<div class="slider-container">
          <div class="slider-labels">
            <div class="slider-end"><span class="slider-end-emoji">${q.sliderLeft.emoji}</span><span class="slider-end-text">${q.sliderLeft.label}</span></div>
            <div class="slider-end"><span class="slider-end-emoji">${q.sliderRight.emoji}</span><span class="slider-end-text">${q.sliderRight.label}</span></div>
          </div>
          <input type="range" class="custom-slider" id="sliderInput" min="0" max="100" value="${savedSlider}" oninput="updateSliderLabel()"/>
          <div class="slider-value" id="sliderLabel">${q.sliderLabels[sliderIdx]}</div>
        </div>`;
        break;
    }

    card.innerHTML = `
      <span class="q-emoji">${q.emoji}</span>
      <p class="q-oneliner">${q.oneliner}</p>
      <h2 class="q-question">${q.question}</h2>
      ${inputHTML}
    `;

    card.classList.remove(exitCls);
    card.classList.add(enterCls);

    setTimeout(() => {
      card.classList.remove(enterCls);
      const input = document.getElementById('answerInput');
      if (input) {
        input.focus();
        input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); nextQuestion(); } });
      }
      init3DTilt();
    }, 550);

    updateNavButtons();
  }, 380);
}


/* ─── Selection Handlers ─── */
function selectChoice(btn) {
  btn.parentElement.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  answers[questions[currentQuestion].id] = btn.dataset.value;
  createSparkle(btn);
}

function selectTOT(card, value) {
  const cards = card.parentElement.querySelectorAll('.tot-card');
  cards.forEach(c => { c.classList.remove('selected','dimmed'); });
  card.classList.add('selected');
  cards.forEach(c => { if (c !== card) c.classList.add('dimmed'); });
  answers[questions[currentQuestion].id] = value;
  createSparkle(card);
}

function selectRate(val) {
  const q = questions[currentQuestion];
  const hearts = document.querySelectorAll('.emoji-heart');
  hearts.forEach((h, i) => {
    h.classList.remove('filled');
    if (i < val) {
      setTimeout(() => h.classList.add('filled'), i * 60);
    }
  });
  answers[q.id] = String(val);
  setTimeout(() => {
    document.getElementById('rateLabel').textContent = q.rateLabels[val - 1];
  }, val * 60 + 100);
}

function updateSliderLabel() {
  const q = questions[currentQuestion];
  const slider = document.getElementById('sliderInput');
  const val = parseInt(slider.value);
  const idx = Math.round(val / 25);
  document.getElementById('sliderLabel').textContent = q.sliderLabels[idx];
  answers[q.id] = String(val);
}

function getCurrentAnswer() {
  const q = questions[currentQuestion];
  if (q.type === 'choice') { const s = document.querySelector('.choice-btn.selected'); return s ? s.dataset.value : ''; }
  if (q.type === 'thisOrThat') { const s = document.querySelector('.tot-card.selected'); return s ? s.dataset.value : ''; }
  if (q.type === 'emojiRate') return answers[q.id] || '';
  if (q.type === 'slider') { const s = document.getElementById('sliderInput'); return s ? s.value : ''; }
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

  const nextIdx = currentQuestion + 1;

  // Check for interlude
  if (interludes[nextIdx]) {
    setTimeout(() => {
      showInterlude(interludes[nextIdx], () => {
        const prevLevel = getLevel(currentQuestion);
        currentQuestion = nextIdx;
        renderQuestion(currentQuestion, 'forward');
        updateProgress();
        if (getLevel(currentQuestion) !== prevLevel) triggerLevelUp();
        updateLevel();
        isTransitioning = false;
      });
    }, 600);
  } else {
    setTimeout(() => {
      const prevLevel = getLevel(currentQuestion);
      currentQuestion = nextIdx;
      renderQuestion(currentQuestion, 'forward');
      updateProgress();
      if (getLevel(currentQuestion) !== prevLevel) triggerLevelUp();
      updateLevel();
      isTransitioning = false;
    }, 850);
  }
}

function prevQuestion() {
  if (isTransitioning || currentQuestion <= 0) return;
  saveCurrentAnswer(); isTransitioning = true;
  currentQuestion--;
  renderQuestion(currentQuestion, 'back');
  updateProgress(); updateLevel();
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
    next.textContent = '💕 Submit'; next.classList.add('submit-btn');
  } else {
    next.textContent = 'Next →'; next.classList.remove('submit-btn');
  }
}

function getLevel(i) { return levels.findIndex(l => i >= l.range[0] && i <= l.range[1]); }
function updateLevel() {
  const l = levels[getLevel(currentQuestion)];
  document.getElementById('levelEmoji').textContent = l.emoji;
  document.getElementById('levelName').textContent = l.name;
}
function triggerLevelUp() {
  const b = document.getElementById('levelBadge');
  b.classList.remove('level-up'); void b.offsetWidth; b.classList.add('level-up');
  setTimeout(() => b.classList.remove('level-up'), 800);
}

function showReaction() {
  const t = document.getElementById('reactionToast');
  t.textContent = reactions[Math.floor(Math.random() * reactions.length)];
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 700);
}


/* ═══════════════════════════════════════
   INTERLUDE (Chapter Break)
   ═══════════════════════════════════════ */
let interludeCallback = null;

function showInterlude(data, callback) {
  interludeCallback = callback;
  const overlay = document.getElementById('interludeOverlay');
  document.getElementById('interludeEmoji').textContent = data.emoji;
  document.getElementById('interludeMsg').textContent = data.msg;
  document.getElementById('interludeSub').textContent = data.sub;
  const bar = document.getElementById('interludeBar');
  bar.style.transition = 'none'; bar.style.width = '0%';

  overlay.classList.add('active');

  // Start progress bar
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      bar.style.transition = 'width 3s linear';
      bar.style.width = '100%';
    });
  });

  interludeTimer = setTimeout(dismissInterlude, 3200);
}

function dismissInterlude() {
  clearTimeout(interludeTimer);
  document.getElementById('interludeOverlay').classList.remove('active');
  setTimeout(() => { if (interludeCallback) { interludeCallback(); interludeCallback = null; } }, 500);
}


/* ═══════════════════════════════════════
   3D TILT EFFECT
   ═══════════════════════════════════════ */
function init3DTilt() {
  const card = document.getElementById('questionCard');
  const container = document.getElementById('cardContainer');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -8;
    const rotateY = (x - 0.5) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease-out';
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    setTimeout(() => { card.style.transition = 'transform 0.15s ease-out'; }, 500);
  });
}


/* ═══════════════════════════════════════
   SUBMIT & EMAIL
   ═══════════════════════════════════════ */
function submitAnswers() {
  saveCurrentAnswer();

  // Map slider/rate values to readable text
  const sliderQ = questions.find(q => q.id === 'introvert_extrovert');
  const sliderVal = answers.introvert_extrovert ? sliderQ.sliderLabels[Math.round(parseInt(answers.introvert_extrovert) / 25)] : '(skipped)';
  const rainQ = questions.find(q => q.id === 'love_rain');
  const rainVal = answers.love_rain ? rainQ.rateLabels[parseInt(answers.love_rain) - 1] : '(skipped)';
  const textsQ = questions.find(q => q.id === 'rate_my_texts');
  const textsVal = answers.rate_my_texts ? textsQ.rateLabels[parseInt(answers.rate_my_texts) - 1] : '(skipped)';

  const params = {
    subject: '💕 Quiz Answers from Your Girl!',
    from_name: 'Hey You Quiz 💕',
    submitted_at: new Date().toLocaleString(),
    flower: answers.flower || '(skipped)',
    mountains_or_beach: answers.mountains_or_beach || '(skipped)',
    dish: answers.dish || '(skipped)',
    color: answers.color || '(skipped)',
    love_rain: rainVal,
    movie: answers.movie || '(skipped)',
    morning_or_night: answers.morning_or_night || '(skipped)',
    song: answers.song || '(skipped)',
    introvert_extrovert: sliderVal,
    comfort_food: answers.comfort_food || '(skipped)',
    season: answers.season || '(skipped)',
    book: answers.book || '(skipped)',
    cook_or_order: answers.cook_or_order || '(skipped)',
    dream_date: answers.dream_date || '(skipped)',
    love_language: answers.love_language || '(skipped)',
    rate_my_texts: textsVal,
    place: answers.place || '(skipped)',
    superpower: answers.superpower || '(skipped)',
    calls_or_texts: answers.calls_or_texts || '(skipped)',
    about_me: answers.about_me || '(skipped)',
    message: buildEmailBody(sliderVal, rainVal, textsVal),
  };

  if (EMAIL_CONFIG.serviceId !== 'YOUR_SERVICE_ID') {
    emailjs.init(EMAIL_CONFIG.publicKey);
    emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateId, params)
      .then(() => console.log('✅ Email sent!'))
      .catch(err => console.error('❌ Email failed:', err));
  } else {
    console.log('⚠️ EmailJS not configured');
    console.log(JSON.stringify(params, null, 2));
  }

  showOutro();
}

function buildEmailBody(sliderVal, rainVal, textsVal) {
  let b = '💕 Quiz Answers — "Hey You" Game 💕\n' + '━'.repeat(40) + '\n\n';
  const readable = { ...answers, introvert_extrovert: sliderVal, love_rain: rainVal, rate_my_texts: textsVal };
  questions.forEach(q => {
    b += `${q.emoji}  ${q.question}\n   ➜  ${readable[q.id] || '(skipped)'}\n\n`;
  });
  b += '━'.repeat(40) + `\n📅 ${new Date().toLocaleString()}\n❤️ Made with love\n`;
  return b;
}


/* ═══════════════════════════════════════
   OUTRO
   ═══════════════════════════════════════ */
function showOutro() {
  document.getElementById('quiz').classList.remove('active');
  setTimeout(() => {
    document.getElementById('outro').classList.add('active');
    renderOutroStats();
    launchConfetti();
  }, 700);
}

function renderOutroStats() {
  const sliderQ = questions.find(q => q.id === 'introvert_extrovert');
  const sliderVal = answers.introvert_extrovert ? sliderQ.sliderLabels[Math.round(parseInt(answers.introvert_extrovert) / 25)] : null;
  const rainQ = questions.find(q => q.id === 'love_rain');
  const rainVal = answers.love_rain ? `${'❤️'.repeat(parseInt(answers.love_rain))}` : null;

  const hl = [
    { emoji:'🌸', label:'Her Flower', value: answers.flower },
    { emoji:'🎬', label:'Her Movie', value: answers.movie },
    { emoji:'💕', label:'Love Language', value: answers.love_language },
    { emoji:'✈️', label:'Dream Place', value: answers.place },
    { emoji:'🌧️', label:'Loves Rain', value: rainVal },
    { emoji:'🎭', label:'Personality', value: sliderVal },
  ].filter(h => h.value);

  document.getElementById('outroStats').innerHTML = hl.map(h =>
    `<div class="stat-card"><span class="stat-emoji">${h.emoji}</span><div class="stat-label">${h.label}</div><div class="stat-value">${h.value}</div></div>`
  ).join('');
}

function restartQuiz() {
  currentQuestion = 0; answers = {};
  document.getElementById('outro').classList.remove('active');
  setTimeout(() => {
    document.getElementById('quiz').classList.add('active');
    renderQuestion(0); updateProgress(); updateLevel();
  }, 700);
}


/* ═══════════════════════════════════════
   CONFETTI
   ═══════════════════════════════════════ */
function launchConfetti() {
  const c = document.getElementById('confettiCanvas');
  const shapes = ['❤️','💕','✨','🌸','💖','🎉','💗','⭐','🥰','💫','🦋'];
  for (let i = 0; i < 90; i++) {
    setTimeout(() => {
      const p = document.createElement('div');
      p.className = 'confetti-piece';
      p.textContent = shapes[Math.floor(Math.random()*shapes.length)];
      p.style.left = Math.random()*100+'%';
      p.style.fontSize = (Math.random()*18+10)+'px';
      p.style.animationDuration = (Math.random()*3.5+2.5)+'s';
      c.appendChild(p);
      setTimeout(()=>p.remove(),6500);
    }, i*50);
  }
}


/* ═══════════════════════════════════════
   STARFIELD
   ═══════════════════════════════════════ */
function initStarfield() {
  const c = document.getElementById('starfield');
  const count = window.innerWidth < 640 ? 60 : 130;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const sz = Math.random()*2+0.5;
    s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-duration:${Math.random()*3+2}s;animation-delay:${Math.random()*4}s;opacity:${Math.random()*0.4+0.08}`;
    c.appendChild(s);
  }
}


/* ═══════════════════════════════════════
   PARTICLES
   ═══════════════════════════════════════ */
function initParticles() {
  const c = document.getElementById('particles');
  const h = ['💕','💗','💖','✨','💫','🌸','♥'];
  function spawn() {
    const el = document.createElement('div');
    el.className = 'particle-heart';
    el.textContent = h[Math.floor(Math.random()*h.length)];
    el.style.left = Math.random()*100+'%';
    el.style.fontSize = (Math.random()*14+8)+'px';
    const d = Math.random()*14+10;
    el.style.animationDuration = d+'s';
    c.appendChild(el);
    setTimeout(()=>el.remove(), d*1000);
  }
  for (let i=0;i<5;i++) setTimeout(spawn, i*700);
  setInterval(spawn, 3500);
}


/* ═══════════════════════════════════════
   SPARKLE
   ═══════════════════════════════════════ */
function createSparkle(el) {
  const r = el.getBoundingClientRect();
  const cx = r.left+r.width/2, cy = r.top+r.height/2;
  const burst = document.createElement('div');
  burst.className = 'sparkle-burst';
  burst.style.left = cx+'px'; burst.style.top = cy+'px';
  const colors = ['#ff5e94','#a855f7','#f59e0b','#2dd4bf','#fff'];
  for (let i=0;i<12;i++) {
    const s = document.createElement('div'); s.className = 'sparkle';
    const a = (Math.PI*2*i)/12, d = Math.random()*55+25;
    s.style.setProperty('--dx', Math.cos(a)*d+'px');
    s.style.setProperty('--dy', Math.sin(a)*d+'px');
    s.style.background = colors[Math.floor(Math.random()*colors.length)];
    burst.appendChild(s);
  }
  document.body.appendChild(burst);
  setTimeout(()=>burst.remove(),850);
}


/* ═══════════════════════════════════════
   KEYBOARD
   ═══════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (!document.getElementById('quiz').classList.contains('active')) return;
  if (e.key === 'ArrowRight' && !isTransitioning) nextQuestion();
  if (e.key === 'ArrowLeft' && !isTransitioning) prevQuestion();
});


/* ═══════════════════════════════════════
   UTILITY
   ═══════════════════════════════════════ */
function esc(s) { return s ? s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;') : ''; }


/* ═══════════════════════════════════════
   🚀 INIT
   ═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initStarfield();
  initParticles();
  hideLoader();
});
