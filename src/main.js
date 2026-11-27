import cockpit from "./cockpit.svg?raw";

/* =========================================================
   CONFIG
   ここを書き換えるだけでサイトの内容を差し替えられます。
   ========================================================= */
const CONFIG = {
  profile: {
    name: "Yu Kamisawa",
    age: 16,
    role: "Engineer",
    stack: ["WindowsAPI", "Kotlin", "Python"],
    location: "Saitama, JP",
    status: "Independent developer",
    focus: "OS / tools / agents",
  },

  skills: [
    { category: "Languages", items: ["C", "C++", "C#", "Python", "Kotlin", "PHP", "SQL", "Shell script"] },
    { category: "OS", items: ["Linux", "Windows", "Android", "macOS"] },
    { category: "Systems", items: ["Linux kernel", "systemd", "Windows API", "MCP Server"] },
  ],

  projects: [
    {
      title: "nacut linux",
      description: "私が初めて作ったlinuxディストリビューションで、linuxカーネルベースのOS",
      descriptionEn: "The first Linux distribution I created—an OS based on the Linux kernel.",
      tags: ["C", "systemd", "Linux", "Shell script"],
      demo: "#",
      code: "#",
    },
    {
      title: "liout linux",
      description: "私が責任者及びプロデューサーを務めるlinuxディストリビューションプロジェクト",
      descriptionEn: "A Linux distribution project for which I serve as project lead and producer.",
      tags: ["C", "Shell script", "systemd", "Linux"],
      demo: "#",
      code: "#",
    },
    {
      title: "自作データサーバー",
      description: "必要なデータを自分で管理するために設計・制作したデータサーバー。",
      descriptionEn: "A self-built data server designed to manage the data I need myself.",
      tags: ["php", "SQL", "Linux"],
      demo: "#",
      code: "#",
    },
    {
      title: "自作栄養管理エージェント",
      description: "日々の栄養管理を支援するために設計・制作した自作エージェント。",
      descriptionEn: "A custom agent designed and built to support day-to-day nutrition management.",
      tags: ["Python", "C/C++", "MCPServer" ],
      demo: "#",
      code: "#",
    },
  ],

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/roamer1mao",
      icon: `<path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.29 9.29 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>`,
    },
    {
      name: "X",
      url: "https://x.com/Roamer1mao",
      icon: `<path d="M18.24 3H21l-6.55 7.49L22.2 21h-6.28l-4.92-6.44L5.32 21H2.55l7.02-8.02L2 3h6.44l4.45 5.9L18.24 3Zm-1.1 16.17h1.55L7.02 4.74H5.35l11.79 14.43Z"/>`,
    },
      {
      name: "YouTube",
      url: "https://www.youtube.com/@Roamer1mao",
      icon: `<path d="M21.8 8.2a2.8 2.8 0 0 0-1.96-1.98C18.08 6 12 6 12 6s-6.08 0-7.84.22A2.8 2.8 0 0 0 2.2 8.2 29 29 0 0 0 2 12a29 29 0 0 0 .2 3.8 2.8 2.8 0 0 0 1.96 1.98C5.92 18 12 18 12 18s6.08 0 7.84-.22A2.8 2.8 0 0 0 21.8 15.8 29 29 0 0 0 22 12a29 29 0 0 0-.2-3.8ZM10 14.5v-5l5 2.5-5 2.5Z"/>`,
    },
    
  ],
};

const TRANSLATIONS = {
  ja: {
    "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects", "nav.contact": "Contact",
    "actions.contact": "連絡する", "actions.projects": "プロジェクトを見る",
    "hero.title": "自分が欲しいものは、<br>自分で作る。", "hero.description": "主にC/C++を軸に、Android向けのKotlin、Windowsでのエージェント開発、PythonやPHPを使ったさまざまなプロジェクトに携わっています。",
    "about.title": "必要なものを、<br>自分の手で形にする。", "about.description": "nacut linuxとliout linuxの開発プロジェクトで責任者及びプロデューサーを務めています。自作データサーバーや自作栄養管理エージェントの制作など、自分に必要なものを自ら設計・開発しています。",
    "facts.age": "年齢", "facts.location": "拠点", "facts.role": "役割", "facts.core": "中心言語",
    "sections.skills": "使用技術", "sections.projects": "つくったもの",
    "contact.title": "新しいプロジェクトの話、<br>お気軽にどうぞ。", "contact.description": "お仕事のご相談や雑談まで、メールまたは各SNSからお気軽にご連絡ください。",
    "project.demo": "Demo", "project.code": "Code", "footer.top": "トップへ戻る", "language.label": "EN"
  },
  en: {
    "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects", "nav.contact": "Contact",
    "actions.contact": "Get in touch", "actions.projects": "View projects",
    "hero.title": "I build what<br>I need.", "hero.description": "My work spans a range of projects, centered on C/C++, with Android work in Kotlin, Windows-focused agent development, and practical projects using Python and PHP.",
    "about.title": "Building what I need,<br>with my own hands.", "about.description": "I serve as project lead and producer for the nacut linux and liout linux development projects. I also design and build tools for myself, including a custom data server and a nutrition management agent.",
    "facts.age": "Age", "facts.location": "Based in", "facts.role": "Role", "facts.core": "Core language",
    "sections.skills": "Skills", "sections.projects": "Selected work",
    "contact.title": "Have a project in mind?<br>Let's talk.", "contact.description": "For work inquiries or just a conversation, feel free to reach out by email or social media.",
    "project.demo": "Demo", "project.code": "Code", "footer.top": "Back to top", "language.label": "JA"
  }
};

const SOUNDCLOUD = "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fnureke-522622615%2Fpump-tekk-super-slowed-trvxer&color=%23e100ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false";

let lang = new URLSearchParams(location.search).get("lang") === "en" || localStorage.getItem("portfolio-language") === "en" ? "en" : "ja";
const t = (key) => TRANSLATIONS[lang][key];

function applyLanguage(next) {
  lang = next;
  localStorage.setItem("portfolio-language", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.getElementById("language-btn").textContent = t("language.label");
  renderFacts(CONFIG.profile);
  renderProjects(CONFIG.projects);
}

function renderFacts({ age, location, role }) {
  document.getElementById("facts").innerHTML = [
    [t("facts.age"), age], [t("facts.location"), location], [t("facts.role"), role], [t("facts.core"), "C/C++"],
  ]
    .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
    .join("");
}

function renderSkills(skills) {
  document.getElementById("skills-list").innerHTML = skills
    .map((g) => `
      <div class="group">
        <h3>${g.category}</h3>
        <ul class="chips">${g.items.map((i) => `<li>${i}</li>`).join("")}</ul>
      </div>`)
    .join("");
}

function renderProjects(projects) {
  document.getElementById("projects-list").innerHTML = projects
    .map((p) => {
      const links = [["demo", p.demo], ["code", p.code]]
        .filter(([, url]) => url && url !== "#")
        .map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${t(`project.${k}`)}</a>`)
        .join("");
      return `
      <article class="project">
        <h3>${p.title}</h3>
        <p>${lang === "en" ? p.descriptionEn : p.description}</p>
        <ul class="tags">${p.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
        ${links ? `<div class="project-links">${links}</div>` : ""}
      </article>`;
    })
    .join("");
}

function renderSocials(socials) {
  document.getElementById("social-list").innerHTML = socials
    .map((s) => `
      <li><a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.name}">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${s.icon}</svg>
      </a></li>`)
    .join("");
}

function setupActiveNav() {
  const links = document.querySelectorAll(".links a");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.dataset.nav === e.target.id));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        observer.unobserve(e.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px" }
  );
  document.querySelectorAll("[data-reveal], [data-stagger]").forEach((el) => observer.observe(el));
}

// cursor-following glow on project cards
function setupSpotlight() {
  document.getElementById("projects-list").addEventListener("pointermove", (e) => {
    const card = e.target.closest(".project");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - r.left}px`);
    card.style.setProperty("--y", `${e.clientY - r.top}px`);
  });
}

function setupProgress() {
  const root = document.documentElement;
  let queued = false;
  const update = () => {
    queued = false;
    const max = root.scrollHeight - innerHeight;
    root.style.setProperty("--page", (max > 0 ? scrollY / max : 0).toFixed(4));
    const travel = document.getElementById("top").offsetHeight - innerHeight;
    root.style.setProperty("--p", Math.min(Math.max(scrollY / travel, 0), 1).toFixed(4));
  };
  addEventListener("scroll", () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }, { passive: true });
  addEventListener("resize", update);
  update();
}

function setupCockpit() {
  const car = document.getElementById("cockpit");
  car.innerHTML = cockpit;
  const gear = car.querySelector("#ck-gear");
  const speed = car.querySelector("#ck-speed");

  // scroll is the throttle: rpm climbs through five gears, speed follows
  const drive = () => {
    const p = parseFloat(document.documentElement.style.getPropertyValue("--p")) || 0;
    const g = Math.min(Math.floor(p * 5), 4);
    car.style.setProperty("--tach", (0.2 + (p * 5 - g) * 0.58 + g * 0.03).toFixed(3));
    car.style.setProperty("--p", p);
    gear.textContent = p < 0.01 ? "N" : g + 1;
    speed.textContent = Math.round(p * 220);
  };
  addEventListener("scroll", () => requestAnimationFrame(drive), { passive: true });
  drive();

  addEventListener("pointermove", (e) => {
    car.style.setProperty("--steer", `${(e.clientX / innerWidth - 0.5) * 44}deg`);
  });
}

function toggleMusic() {
  const box = document.getElementById("music");
  const btn = document.getElementById("music-btn");
  if (!box.querySelector("iframe")) {
    box.innerHTML = `<iframe title="SoundCloud player" allow="autoplay" src="${SOUNDCLOUD}"></iframe>`;
  }
  box.hidden = !box.hidden;
  btn.setAttribute("aria-expanded", String(!box.hidden));
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderSkills(CONFIG.skills);
  renderSocials(CONFIG.socials);
  applyLanguage(lang);
  setupActiveNav();
  setupReveal();
  setupSpotlight();
  setupProgress();
  setupCockpit();
  import("./scene.js").then(({ start }) => start(document.getElementById("scene")));

  document.getElementById("language-btn").addEventListener("click", () => applyLanguage(lang === "ja" ? "en" : "ja"));
  document.getElementById("music-btn").addEventListener("click", toggleMusic);
});
