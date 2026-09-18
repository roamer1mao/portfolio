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
    {
      category: "Languages",
      items: ["C", "C++", "C#", "Python", "Java", "Go", "Kotlin", "Lua", "Malbolge", "Objective-C", "Ruby", "Swift", "Visual Basic", "Visual Basic .NET", "Assembly", "Rust", "Dart", "R", "Scala", "Perl", "Haskell", "Erlang", "F#", "OCaml", "Elixir", "Julia", "Fortran", "COBOL", "Ada", "Lisp", "Prolog", "Scheme", "Smalltalk", "Groovy", "Crystal", "Nim", "Zig", "VHDL", "Verilog", "Matlab", "SAS", "ABAP", "PL/SQL", "T-SQL", "PowerShell", "Bash", "Fish", "Zsh", "Batch", "Makefile", "Dockerfile", "YAML", "JSON", "XML", "Markdown", "LaTeX", "HTML", "CSS", "JavaScript", "TypeScript", "PHP", "SQL", "NoSQL", "GraphQL", "REST", "SOAP", "gRPC", "WebAssembly"],
    },
    {
      category: "OS",
      items: ["Windows", "macOS", "Gentoo", "Arch Linux", "Ubuntu", "Debian", "Fedora", "CentOS", "Red Hat Enterprise Linux", "openSUSE", "FreeBSD", "OpenBSD", "NetBSD", "DragonFly BSD", "Solaris", "AIX", "HP-UX", "IRIX", "BeOS", "Haiku OS", "ReactOS", "Chrome OS", "Android", "iOS"],
    },
    {
      category: "Systems",
      items: ["systemd", "Vim script", "Shell script", "LinuxKernel", "Windows API", "Windows Forms", "Win32 API", "WebSockets", "SSH", "TCP/IP", "UDP", "HTTP", "HTTPS", "FTP", "SMTP", "POP3", "IMAP", "DNS", "DHCP", "NTP", "SNMP", "LDAP", "Kerberos", "IPSec", "OpenSSL", "GnuPG", "OpenSSH", "NAT", "iptables", "firewalld", "SELinux", "AppArmor", "systemctl", "journalctl", "strace", "ltrace", "gdb", "valgrind", "perf", "tcpdump", "wireshark", "nmap", "netstat", "ss", "traceroute", "ping", "dig", "nslookup", "curl", "wget", "rsync", "scp", "sftp", "ftp", "telnet", "ssh-keygen", "ssh-agent", "ssh-add", "ssh-copy-id", "sshfs", "smbclient", "nfs-utils", "mount", "umount", "df", "du", "lsblk", "blkid", "fdisk", "parted", "mkfs", "fsck", "mount", "umount", "lsblk", "blkid", "fdisk", "parted", "mkfs", "fsck", "mount", "umount", "lsblk", "blkid", "fdisk", "parted", "mkfs", "fsck", "nginx", "Apache", "MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis", "Memcached", "RabbitMQ", "Kafka", "Elasticsearch", "Logstash", "Kibana", "Grafana", "Prometheus", "InfluxDB", "Telegraf", "Chronograf", "Kapacitor", "docker", "docker-compose", "Kubernetes", "Helm", "Terraform", "Ansible", "Puppet", "Chef", "SaltStack", "Vagrant", "VirtualBox", "VMware", "Hyper-V", "QEMU", "KVM", "Xen", "LXC/LXD", "OpenVZ", "FreeBSD jails", "Solaris Zones", "systemctl", "journalctl", "strace", "ltrace", "gdb", "valgrind", "perf", "tcpdump", "wireshark", "nmap", "netstat", "ss", "traceroute", "ping", "dig", "nslookup", "curl", "wget", "rsync", "scp", "sftp", "ftp", "telnet"],
    },
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
    "nav.about": "about", "nav.skills": "skills", "nav.projects": "projects", "nav.contact": "contact",
    "actions.contact": "連絡する", "actions.projects": "プロジェクトを見る", "menu.open": "メニューを開く",
    "hero.title": "自分が欲しいものは、<br>自分で作る。", "hero.description": "自分が欲しいものは自分で作る。主にC/C++を軸に、Android向けのKotlin、Windowsでのエージェント開発、PythonやPHPを使ったさまざまなプロジェクトに携わっています。",
    "about.title": "必要なものを、<br>自分の手で形にする。", "about.description": "nacut linuxとliout linuxの開発プロジェクトで責任者及びプロデューサーを務めています。自作データサーバーや自作栄養管理エージェントの制作など、自分に必要なものを自ら設計・開発しています。",
    "stats.experience": "中心言語", "stats.projects": "Android向け", "stats.stack": "よく使う言語", "sections.skills": "使用技術", "sections.projects": "つくったもの",
    "contact.title": "新しいプロジェクトの話、<br>お気軽にどうぞ。", "contact.description": "お仕事のご相談や雑談まで、メールまたは各SNSからお気軽にご連絡ください。", "footer.backToTop": "back to top ↑", "project.demo": "Demo", "project.code": "Code", "language.label": "EN"
  },
  en: {
    "nav.about": "about", "nav.skills": "skills", "nav.projects": "projects", "nav.contact": "contact",
    "actions.contact": "Get in touch", "actions.projects": "View projects", "menu.open": "Open menu",
    "hero.title": "I build what<br>I need.", "hero.description": "I build what I need myself. My work spans a range of projects, centered on C/C++, with Android work in Kotlin, Windows-focused agent development, and practical projects using Python and PHP.",
    "about.title": "Building what I need,<br>with my own hands.", "about.description": "I serve as project lead and producer for the nacut linux and liout linux development projects. I also design and build tools for myself, including a custom data server and a nutrition management agent.",
    "stats.experience": "core language", "stats.projects": "Android", "stats.stack": "frequently used", "sections.skills": "Skills", "sections.projects": "Selected work",
    "contact.title": "Have a project in mind?<br>Let's talk.", "contact.description": "For work inquiries or just a conversation, feel free to reach out by email or social media.", "footer.backToTop": "back to top ↑", "project.demo": "Demo", "project.code": "Code", "language.label": "JA"
  }
};

let currentLanguage = new URLSearchParams(window.location.search).get("lang") === "en" || localStorage.getItem("portfolio-language") === "en" ? "en" : "ja";

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("portfolio-language", language);
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = TRANSLATIONS[language][element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", TRANSLATIONS[language][element.dataset.i18nAriaLabel]);
  });
  document.getElementById("language-btn").textContent = TRANSLATIONS[language]["language.label"];
  renderProjects(CONFIG.projects);
  setupScrollReveal();
}

/* =========================================================
   Terminal typing effect
   ========================================================= */
function buildTerminalLines(profile) {
  const stack = profile.stack.map((s) => `"${s}"`).join(", ");
  return [
    "const profile = {",
    `  name: "${profile.name}",`,
    `  age: ${profile.age},`,
    `  role: "${profile.role}",`,
    `  stack: [${stack}],`,
    `  location: "${profile.location}",`,
    `  status: "${profile.status}",`,
    `  focus: "${profile.focus}",`,
    "};",
  ];
}

function typeTerminal(el, lines, opts = {}) {
  const speed = opts.speed ?? 18;
  const lineDelay = opts.lineDelay ?? 120;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    el.textContent = lines.join("\n");
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;
  el.textContent = "";

  function step() {
    if (lineIndex >= lines.length) return;
    const currentLine = lines[lineIndex];

    if (charIndex <= currentLine.length) {
      const typedSoFar = lines.slice(0, lineIndex).join("\n");
      const prefix = typedSoFar ? typedSoFar + "\n" : "";
      el.textContent = prefix + currentLine.slice(0, charIndex);
      charIndex++;
      setTimeout(step, speed);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(step, lineDelay);
    }
  }
  step();
}

/* =========================================================
   Render skills
   ========================================================= */
function renderSkills(skills) {
  const container = document.getElementById("skills-list");
  container.innerHTML = skills
    .map(
      (group, i) => `
      <div data-reveal style="transition-delay:${i * 90}ms" class="grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 items-start pb-8 border-b border-line last:border-b-0">
        <h3 class="font-mono text-sm text-muted pt-1">${group.category}</h3>
        <div class="flex flex-wrap gap-2.5">
          ${group.items
            .map(
              (item) => `
            <span class="skill-pill rounded-full border border-line text-sm text-ink px-4 py-1.5">${item}</span>
          `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");
}

/* =========================================================
   Render projects
   ========================================================= */
function renderProjects(projects) {
  const container = document.getElementById("projects-list");
  container.innerHTML = projects
    .map(
      (p, i) => `
      <article data-reveal style="transition-delay:${i * 90}ms" class="project-card rounded-xl border border-line bg-surface/40 p-6 md:p-8">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div class="max-w-xl">
            <h3 class="font-display text-xl md:text-2xl text-ink font-semibold">${p.title}</h3>
            <p class="text-muted mt-3 leading-relaxed">${currentLanguage === "en" ? p.descriptionEn : p.description}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              ${p.tags.map((t) => `<span class="font-mono text-[11px] text-accent/90 border border-accent/30 rounded px-2 py-1">${t}</span>`).join("")}
            </div>
          </div>
          <div class="flex md:flex-col gap-3 shrink-0 font-mono text-sm">
            <a href="${p.demo}" class="text-ink hover:text-accent transition-colors border-b border-line hover:border-accent pb-0.5">${TRANSLATIONS[currentLanguage]["project.demo"]}</a>
            <a href="${p.code}" class="text-ink hover:text-accent transition-colors border-b border-line hover:border-accent pb-0.5">${TRANSLATIONS[currentLanguage]["project.code"]}</a>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

/* =========================================================
   Render socials
   ========================================================= */
function renderSocials(socials) {
  const container = document.getElementById("social-list");
  container.innerHTML = socials
    .map(
      (s) => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.name}"
         class="social-btn w-11 h-11 rounded-full border border-line flex items-center justify-center text-ink">
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">${s.icon}</svg>
      </a>
    `
    )
    .join("");
}

/* =========================================================
   Scroll reveal (IntersectionObserver)
   ========================================================= */
function setupScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((t) => observer.observe(t));
}

/* =========================================================
   Header state on scroll
   ========================================================= */
function setupHeaderScrollState() {
  const header = document.getElementById("site-header");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* =========================================================
   Active nav link highlighting
   ========================================================= */
function setupActiveNav() {
  const sections = ["about", "skills", "projects", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const links = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            link.classList.toggle("active", link.dataset.nav === entry.target.id);
          });
        }
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach((s) => observer.observe(s));
}

/* =========================================================
   Mobile menu toggle
   ========================================================= */
function setupMobileMenu() {
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("mobile-nav");

  const closeMenu = () => {
    btn.setAttribute("aria-expanded", "false");
    nav.style.maxHeight = "0px";
  };

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    nav.style.maxHeight = isOpen ? "0px" : nav.scrollHeight + "px";
  });

  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
}

function setupSoundCloudPlayer() {
  const player = document.getElementById("soundcloud-player");
  const handle = document.getElementById("soundcloud-drag-handle");
  let activePointerId = null;
  let offsetX = 0;
  let offsetY = 0;

  handle.addEventListener("pointerdown", (event) => {
    activePointerId = event.pointerId;
    const bounds = player.getBoundingClientRect();
    offsetX = event.clientX - bounds.left;
    offsetY = event.clientY - bounds.top;
    handle.setPointerCapture(activePointerId);
  });

  handle.addEventListener("pointermove", (event) => {
    if (event.pointerId !== activePointerId) return;
    const maxLeft = window.innerWidth - player.offsetWidth;
    const maxTop = window.innerHeight - player.offsetHeight;
    const left = Math.min(Math.max(0, event.clientX - offsetX), maxLeft);
    const top = Math.min(Math.max(0, event.clientY - offsetY), maxTop);
    player.style.left = `${left}px`;
    player.style.top = `${top}px`;
  });

  const stopDragging = (event) => {
    if (event.pointerId === activePointerId) activePointerId = null;
  };
  handle.addEventListener("pointerup", stopDragging);
  handle.addEventListener("pointercancel", stopDragging);
}

/* =========================================================
   Init
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderSkills(CONFIG.skills);
  renderProjects(CONFIG.projects);
  renderSocials(CONFIG.socials);
  applyLanguage(currentLanguage);
  document.getElementById("language-btn").addEventListener("click", () => applyLanguage(currentLanguage === "ja" ? "en" : "ja"));

  typeTerminal(document.getElementById("terminal-code"), buildTerminalLines(CONFIG.profile));

  setupScrollReveal();
  setupHeaderScrollState();
  setupActiveNav();
  setupMobileMenu();
  setupSoundCloudPlayer();
});
