// ====== EDIT THIS BLOCK TO PERSONALIZE ======
const CONFIG = {
  herName: "Kimi",
  myName: "Ivan",
  reasons: [
    "Your smile makes my whole day better.",
    "You make me want to be a better person.",
    "You laugh at my silly smile.",
    "You make every moment special.",
    "You make my heart feel at home.",
    "You are the reason behind my happiness.",
    "You make my world brighter just by being in it.",
    "You make every day feel like an adventure.",
    "You make my life feel complete.",
    "You are my everything.",
    "You are the light of my life.",
    "You are my forever and always.",
    "You are the best thing that ever happened to me.",
    "My home is wherever you are.",
    "Because you are simply you.",
    "I love you for who you are",
    "You make my heart skip a beat every time I see you. (even in video call)",
    "You are my dream come true.",
    "You are the most beautiful person I have ever met.",
    "You are my sunshine on a cloudy day.",
    "You make my heart feel full of love.",
    "You are my safe haven in a chaotic world.",
  ],
  // Love letter: typed out letter by letter. Use \n for a new line, \n\n for a blank line.
  letter:
    "My love,\n\n" +
    "I have been trying to find the right words for a long time, and the truth is that there are no words big enough. But I wanted to try anyway, because you deserve to hear it, again and again, for as long as I live.\n\n" +
    "First of all: thank you. Thank you for walking into my life and turning it into something softer, brighter and so much happier. Before you, I did not know that a person could feel like home. Now I know, because my home is wherever you are. It does not matter if it is a room, a street, a screen or a silence. If you are there, I am home.\n\n" +
    "Do you remember that moment during our video call? When I saw you and my heart skipped a beat, like it was the very first time? I want you to know that it still does. Every single time. Even through a screen, you manage to make my whole world stop and smile. I think that is the moment I understood that what I feel for you is not something that fades with habit. It only grows.\n\n" +
    "You make me want to be a better person. Not because you ask me to, but because you show me every day what kindness, patience and love look like. You make me want to be braver, softer, funnier, more present. You make me believe that I can become the person you already think I am.\n\n" +
    "Your smile makes my whole day better. It is true, and it is almost silly how much power it has. A bad morning, a heavy day, a long week, and then you smile and everything gets lighter. You are my sunshine on a cloudy day, and I hope you know how many cloudy days you have already turned into beautiful ones.\n\n" +
    "And you laugh at my silly smile. You are the only person who makes me feel completely free to be ridiculous, to be myself, with no filter and no fear. With you I do not have to pretend. I love you for who you are, and the most precious thing you do is let me be who I am.\n\n" +
    "You are the most beautiful person I have ever met. I mean outside, of course, but also and above all inside: in the way you care, in the way you listen, in the way you look at the people you love. Your heart is the most beautiful thing about you, and I am lucky enough to be allowed to hold a little piece of it.\n\n" +
    "You make every moment special. A normal day, a short message, a random joke, a quiet evening: with you they all become little memories I want to keep forever. You make every day feel like an adventure, even the days when nothing happens, because the adventure is simply being with you.\n\n" +
    "You are my safe haven in a chaotic world. When everything is loud, you are the place where I can finally breathe. When I am tired, you are my rest. When I am afraid, you are my courage. When I am lost, you are the light that shows me the way back. You make my heart feel full of love, and at the same time you make it feel calm.\n\n" +
    "You are the reason behind my happiness. I do not say this lightly. You make my world brighter just by being in it, and you make my life feel complete in a way I never knew it could be. You are my dream come true, and the best part is that I do not have to wake up.\n\n" +
    "I want you to know that I see you. I see how hard you try, I see your worries, I see the little things you do that nobody notices, and I admire you for all of them. I love your strength and I love your weak moments too, because they are part of you and I love every part of you.\n\n" +
    "I promise you that I will keep choosing you. On the easy days and on the difficult ones. When we are close and when we are far. When it is simple and when it is not. I promise to listen, to laugh with you, to support you, to be patient, and to remind you every day of how much you are loved.\n\n" +
    "I also promise that I will keep trying to make you smile the way you make me smile, and that I will never take for granted a single minute with you. Every minute is a gift, and I know it.\n\n" +
    "You are the light of my life. You are my everything. You are my forever and always. And you are the best thing that has ever happened to me. If I could go back and live my life again, I would walk every road again just to end up next to you.\n\n" +
    "So this is my letter, and it is long because my love is long. It has no end, no pause and no limit. If you remember only one thing from all these words, remember this: you are loved, you are wanted, you are enough, and you are my favorite person in the whole world.\n\n" +
    "I love you. Today, tomorrow and for every day after that.",
  noMessages: [
    "Nice try 😘 the answer is only Yes",
    "Are you sure? Look again 🥺",
    "That button is broken, I promise 😅",
    "Come on... you know it 💕",
    "Stop chasing it, press Yes 😍",
    "I will never stop loving you, so Yes it is 💖",
  ],
  finale: "I love you more than words can say. Thank you for being mine. Forever. 💞",
};
// ============================================

const $ = (s, r = document) => r.querySelector(s);
const steps = [...document.querySelectorAll(".step")];
let current = 0;

// Progress dots
const progress = $("#progress");
steps.forEach(() => progress.appendChild(document.createElement("span")));
function showStep(i) {
  steps[current].classList.remove("active");
  current = i;
  steps[current].classList.add("active");
  [...progress.children].forEach((d, k) => d.classList.toggle("on", k <= i));
  if (steps[i].dataset.step === "2") spawnCatchHearts();
  if (steps[i].dataset.step === "4") writeLetter();
  if (steps[i].dataset.step === "6") finale();
  if (steps[i].dataset.step !== "5") resetNo();
}
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-next]") && !e.target.disabled) showStep(current + 1);
});

// Background floating hearts
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion) {
  setInterval(() => {
    const h = document.createElement("span");
    h.className = "bg-heart";
    h.textContent = ["💗", "💖", "💕", "❤️"][Math.floor(Math.random() * 4)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 14 + Math.random() * 22 + "px";
    h.style.animationDuration = 6 + Math.random() * 6 + "s";
    $("#bg-hearts").appendChild(h);
    setTimeout(() => h.remove(), 12500);
  }, 430); // was 600ms: ~40% more hearts
}

// Step 1
$("#welcome-title").textContent = `Hi ${CONFIG.herName} 💕`;

// Step 2
let caught = 0;
function spawnCatchHearts() {
  caught = 0;
  $("#catch-count").textContent = 0;
  $("#catch-next").disabled = true;
  const area = $("#catch-area");
  area.innerHTML = "";
  const maxHearts = 10;
  for (let i = 0; i < maxHearts; i++) {
    const b = document.createElement("button");
    b.className = "catch-heart";
    b.textContent = "❤️";
    b.style.left = 5 + Math.random() * 80 + "%";
    b.style.top = 5 + Math.random() * 70 + "%";
    b.style.animationDelay = Math.random() * 1.5 + "s";
    b.addEventListener("click", () => {
      if (b.classList.contains("caught")) return;
      b.classList.add("caught");
      caught++;
      $("#catch-count").textContent = caught;
      if (caught >= maxHearts) $("#catch-next").disabled = false;
    });
    area.appendChild(b);
  }
}

// Step 3
let reasonIdx = 0;
$("#reason-btn").addEventListener("click", () => {
  const d = document.createElement("div");
  d.className = "reason";
  d.textContent = "💗 " + CONFIG.reasons[reasonIdx++];
  $("#reasons").appendChild(d);
  if (reasonIdx >= CONFIG.reasons.length) {
    $("#reason-btn").classList.add("hidden");
    $("#reason-next").classList.remove("hidden");
    return;
  }
  d.scrollIntoView({ behavior: "smooth", block: "end" });
});

// Step 4: love letter, typed out letter by letter
let typer = null;
function writeLetter() {
  const el = $("#letter-text");
  const next = $("#letter-next");
  clearInterval(typer);
  el.textContent = "";
  $("#letter-from").textContent = `— ${CONFIG.myName}`;
  next.classList.add("hidden");
  const text = CONFIG.letter;
  let i = 0, finished = false;
  const done = () => {
    if (finished) return; // taps after the end must not jump the scroll
    finished = true;
    clearInterval(typer);
    el.textContent = text;
    el.classList.remove("typing");
    $("#letter").scrollTop = 0; // let her read from the top
    next.classList.remove("hidden");
  };
  if (reduceMotion) return done();
  el.classList.add("typing");
  typer = setInterval(() => {
    i += 2;
    el.textContent = text.slice(0, i);
    $("#letter").scrollTop = $("#letter").scrollHeight; // follow the text as it grows
    if (i >= text.length) done();
  }, 50);
  $("#letter").onclick = done; // tap the paper to skip the typing
}

// Step 5: runaway "No"
const noBtn = $("#no-btn");
const yesBtn = $("#yes-btn");
let attempts = 0;

// The card uses backdrop-filter, which would make position:fixed relative to
// the card instead of the screen. So the button is moved to <body> while it runs.
const noHome = noBtn.parentNode;
const noPlaceholder = document.createElement("span");
const MARGIN = 12;
let noX = 0, noY = 0;

function viewport() {
  return { w: document.documentElement.clientWidth, h: document.documentElement.clientHeight };
}

function placeNo(x, y) {
  const { w, h } = viewport();
  noX = Math.min(Math.max(x, MARGIN), w - noBtn.offsetWidth - MARGIN);
  noY = Math.min(Math.max(y, MARGIN), h - noBtn.offsetHeight - MARGIN);
  noBtn.style.left = noX + "px";
  noBtn.style.top = noY + "px";
}

function resetNo() {
  if (noBtn.parentNode === document.body) {
    noPlaceholder.replaceWith(noBtn);
  }
  noBtn.classList.remove("runaway");
  noBtn.style.left = noBtn.style.top = "";
}

// Yes grows a bit at every attempt, up to 600px wide (or the screen width on phones).
// It grows by real size (not transform) so it stays centered in the row.
const YES_MAX = 600;
let yesBase = null;
function growYes() {
  if (!yesBase) {
    yesBase = {
      w: yesBtn.offsetWidth,
      h: yesBtn.offsetHeight,
      font: parseFloat(getComputedStyle(yesBtn).fontSize),
    };
  }
  const maxW = Math.min(YES_MAX, document.documentElement.clientWidth - 32);
  const k = Math.min(1 + attempts * 0.4, maxW / yesBase.w);
  yesBtn.style.width = yesBase.w * k + "px";
  yesBtn.style.height = yesBase.h * k + "px";
  yesBtn.style.fontSize = yesBase.font * k + "px";
}

function runAway(e) {
  e.preventDefault();
  e.stopPropagation();
  attempts++;
  $("#no-message").textContent = CONFIG.noMessages[(attempts - 1) % CONFIG.noMessages.length];
  growYes();

  if (!noBtn.classList.contains("runaway")) {
    // lift off from where it is, so the first move is smooth too
    const r = noBtn.getBoundingClientRect();
    noPlaceholder.style.cssText = `display:inline-block;width:${r.width}px;height:${r.height}px`;
    noBtn.replaceWith(noPlaceholder);
    noPlaceholder.style.display = "none"; // Yes stays centered
    document.body.appendChild(noBtn);
    noBtn.classList.add("runaway");
    placeNo(r.left, r.top);
    noBtn.getBoundingClientRect(); // force reflow so the transition starts from here
  }

  const { w, h } = viewport();
  const bw = noBtn.offsetWidth, bh = noBtn.offsetHeight;
  const yes = yesBtn.getBoundingClientRect();
  let x, y, tries = 0;
  do {
    x = MARGIN + Math.random() * (w - bw - MARGIN * 2);
    y = MARGIN + Math.random() * (h - bh - MARGIN * 2);
    tries++;
  } while (
    tries < 30 &&
    ((x < yes.right + 20 && x + bw > yes.left - 20 && y < yes.bottom + 20 && y + bh > yes.top - 20) ||
      Math.hypot(x - noX, y - noY) < 120)
  );
  placeNo(x, y);
}
window.addEventListener("resize", () => {
  if (noBtn.classList.contains("runaway")) placeNo(noX, noY);
});
["mouseenter", "pointerdown", "touchstart", "click", "focus"].forEach((ev) =>
  noBtn.addEventListener(ev, runAway, { passive: false })
);

// Step 6
function finale() {
  $("#finale-title").textContent = `I love you, ${CONFIG.herName} ❤️`;
  $("#finale-text").textContent = CONFIG.finale;
  $("#signature").textContent = `— ${CONFIG.myName}`;
  if (reduceMotion) return;
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const c = document.createElement("span");
      c.className = "confetti";
      c.textContent = ["❤️", "💖", "💕", "💗"][Math.floor(Math.random() * 4)];
      c.style.left = Math.random() * 100 + "vw";
      c.style.fontSize = 16 + Math.random() * 24 + "px";
      c.style.animationDuration = 3 + Math.random() * 3 + "s";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 6500);
    }, i * 80);
  }
}

showStep(0);
