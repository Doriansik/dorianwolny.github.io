const ACTIVE_CLASS = "active";
const HIDDEN_CLASS = "hidden";
const VIDEO_ACTIVE_CLASS = "video-active";
const HAS_TRANSLATION_CLASS = "has-translation";
const REVEALED_CLASS = "revealed";
const SWITCHING_CLASS = "switching";
const COPIED_CLASS = "copied";
const DISABLED_CLASS = "disabled";
const PAUSED_CLASS = "paused";
const CUSTOM_CURSOR_CLASS = "custom-cursor-enabled";
const CURSOR_VISIBLE_CLASS = "visible";
const CURSOR_HOVER_CLASS = "hover";
const CURSOR_ZOOM_CLASS = "zoom";
const CURSOR_CLICK_CLASS = "clicking";
const ESCAPE_KEY = "Escape";
const ARROW_LEFT_KEY = "ArrowLeft";
const ARROW_RIGHT_KEY = "ArrowRight";
const CV_PATH_EN = "Images/Dorian%20Wolny%20CV%20eng.pdf";
const CV_PATH_PL = "Images/Dorian%20Wolny%20CV.pdf";

const MEDIA_TYPE_IMAGE = "image";
const MEDIA_TYPE_VIDEO = "video";

const DEFAULT_LANG = "en";
const STORAGE_LANG_KEY = "portfolio_lang";

const FIRST_INDEX = 0;
const INDEX_STEP = 1;
const MIN_GALLERY_COUNT = 2;
const NOT_FOUND_INDEX = -1;
const MIN_RATIO = 0;
const MAX_RATIO = 1;
const ZERO_TIME = 0;
const DEFAULT_DPR = 1;
const CENTER_OFFSET_PERCENT = -50;
const FIXED_DECIMALS = 2;
const SWIPE_THRESHOLD_PX = 40;

const SCROLL_OFFSET_RATIO = 0.35;
const BOTTOM_SCROLL_THRESHOLD = 10;
const REVEAL_THRESHOLD = 0.14;
const STAGGER_STEP_MS = 75;
const IMAGE_FADE_MS = 130;
const TOAST_DURATION_MS = 2800;
const FULL_PERCENT = 100;

const TILT_PERSPECTIVE_PX = 1000;
const DEFAULT_TILT_MAX_DEG = 4;
const TILT_HOVER_LIFT_PX = -4;
const HALF_NORMALIZED = 0.5;
const DOUBLE_FACTOR = 2;

const CURSOR_LERP_FACTOR = 0.18;
const OFFSCREEN_COORD = -100;
const INTERACTIVE_SELECTOR = "a, button, label, input, .thumb-btn, .video-lightbox-btn, .cert-card";
const ZOOM_SELECTOR = "[data-lightbox], .cert-card";
const GAME_CARD_SELECTOR = "#games .game-card";
const CERT_CARD_SELECTOR = "#certifications .cert-card";
const CERT_TAB_SELECTOR = ".cert-tab-btn";
const VIDEO_EXPAND_SELECTOR = ".video-lightbox-btn";

const PARTICLE_COUNT = 38;
const PARTICLE_MIN_RADIUS = 1.1;
const PARTICLE_MAX_RADIUS = 2.6;
const PARTICLE_MIN_VY = -0.32;
const PARTICLE_MAX_VY = -0.1;
const PARTICLE_DRIFT_VX = 0.18;
const PARTICLE_MIN_ALPHA = 0.2;
const PARTICLE_MAX_ALPHA = 0.65;
const PARTICLE_COLOR_RGB = "167, 139, 250";
const PARTICLE_CONNECT_DIST = 115;
const PARTICLE_LINE_MAX_ALPHA = 0.09;
const PARTICLE_WRAP_MARGIN = 12;
const MAX_PIXEL_RATIO = 2;

const EXTENSION_SEPARATOR = ".";
const FALLBACK_LIST_SEPARATOR = ",";

const TRANSLATIONS = {
  en: {
    "page.title": "Dorian Wolny | Game Developer Portfolio",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.games": "Games",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    "hero.index": "01 / PORTFOLIO",
    "hero.description": "I'm an indie game developer working in <strong>Unity</strong> with <strong>C#</strong>. I'm passionate about gameplay programming, <strong>ScriptableObjects</strong> architecture, and technology.",
    "hero.ctaGames": "View My Games \u2192",
    "hero.ctaContact": "Get in Touch",
    "hero.ctaCv": "View CV \u2197",
    "inspector.script": "Script",
    "inspector.engine": "Engine",
    "inspector.language": "Language",
    "inspector.focus": "Focus",
    "inspector.focusValue": "ScriptableObjects & Systems",
    "inspector.experience": "Experience",
    "inspector.experienceValue": "8 yrs",
    "inspector.shipped": "Shipped & WIP",
    "inspector.shippedValue": "4 Games",
    "inspector.status": "Status",
    "inspector.statusReady": "Ready to Build",
    "inspector.statusPaused": "Component Disabled",
    "about.index": "02 / ABOUT",
    "about.heading": "Behind the code<span class=\"accent-dot\">.</span>",
    "about.text": "I am a Game Development student who has been creating games on and off for around eight years. What drives me most in programming is seeing complex systems come together and actually work on screen. I particularly enjoy working with numbers, game balance, and modular data-driven architectures built around Unity's ScriptableObjects.",
    "skills.index": "03 / TOOLKIT & SKILLS",
    "skills.heading": "How I build games<span class=\"accent-dot\">.</span>",
    "skills.toolsHeading": "Engine & Software",
    "skills.skillsHeading": "Core Competencies",
    "skills.gameplay": "Gameplay & Combat Systems",
    "skills.solid": "SOLID Principles & Clean Architecture",
    "skills.so": "ScriptableObjects & Data-Driven Design",
    "skills.ai": "AI & Autonomous Unit Behaviors",
    "skills.balance": "Game Balance & Numerical Systems",
    "skills.ui": "Dialogue, Event & UI Frameworks",
    "games.index": "04 / FEATURED WORK",
    "games.heading": "Games I've built<span class=\"accent-dot\">.</span>",
    "games.playItch": "Play on Itch.io \u2197",
    "games.watchTrailer": "Watch Trailer \u2197",
    "games.githubCode": "GitHub Code \u2197",
    "games.rustcrave.desc": "A dark, steampunk side-scrolling roguelite with RTS elements that brutally flips the classic perspective\u2014you are the invader, not the savior. As the Empty Conductor, you command a swarm of mechanized insects invading the dying planet Aion to rip out its Power Core.",
    "games.rustcrave.role": "<strong>My Role:</strong> Programmed swarm control mechanics, autonomous unit behaviors, and the core interaction system.",
    "games.shellraiser.tagStrategy": "Strategy",
    "games.shellraiser.desc": "Join the battle between Shellraiser, a young necromancer snail, and Crab King Clawford V, ruler of all beaches. Command your army of snails to destroy the Crab King's mighty Sandcastle and settle an old score.",
    "games.shellraiser.role": "<strong>My Role:</strong> Sole programmer on the project\u2014built the entire codebase from scratch, including the combat system and unit management.",
    "games.noshit.tagComedy": "Comedy / Minigames",
    "games.noshit.desc": "Created by 3 Pieczarki's and inspired by Stanis\u0142aw Lem's <em>The Cyberiad</em>. Systematically repair a chaotic bathroom while waiting for the plumber\u2014where fixing one malfunction inevitably triggers a chain reaction that breaks something else.",
    "games.noshit.role": "<strong>My Role:</strong> Designed and programmed one of the core interactive repair minigames.",
    "games.dziady.tagDev": "In Development",
    "games.dziady.desc": "A 2D deckbuilding roguelite inspired by Slavic folklore and the <em>Dziady</em> ritual. Playing as the Gu\u015blarz, you summon spirits like a young girl seeking the bitterness she never experienced in life, traversing a map of Slavic demons, witches, healers, and narrative encounters before confronting an overprotective mother boss.",
    "games.dziady.role": "<strong>My Role:</strong> Architected the card and deck system, dialogue and event framework, combat encounters (standard, elite, and boss), and in-game battle UI.",
    "certs.index": "05 / CERTIFICATIONS",
    "certs.heading": "Awards & milestones<span class=\"accent-dot\">.</span>",
    "certs.tabIndividual": "Individual",
    "certs.tabTeam": "Team",
    "certs.tabFront": "Front",
    "certs.tabBack": "Back",
    "certs.cyberiadaIndividual": "Cyberiada \u2014 Individual Winner Certificate",
    "certs.cyberiadaIndividualTranscript": "<p>This document certifies that <strong>Dorian Wolny</strong> participated in the competition and specialized video game development training, as well as the finals of the National Computer Game Design Championships <strong>&ldquo;Cyberiada&rdquo;</strong>, organized by the &ldquo;Teatrikon&rdquo; Foundation for Creativity, Education and Animation of Youth under the IT Talent Development Program for 2019&ndash;2029, funded by the state budget.</p><p>40 teams from across Poland qualified for the project, tasked with creating a prototype of an original game.</p><p><strong>Team:</strong> 3Pieczarki's &middot; <strong>Track:</strong> Game Development &middot; <strong>Classification:</strong> Winner &middot; <strong>Score:</strong> 1st place &ndash; 858.8 pts</p><p class=\"cert-translation-meta\">Lublin, July 11, 2026</p>",
    "certs.cyberiadaTeam": "Cyberiada \u2014 Team Winner Certificate",
    "certs.cyberiadaTeamTranscript": "<p><strong>Winner &mdash; Baza Kra\u015bnali &bull; 3Pieczarki's (Game: Rustcrave)</strong></p><p>This document certifies the team's participation in the competition and specialized video game development training, as well as the finals of the National Computer Game Design Championships <strong>&ldquo;Cyberiada&rdquo;</strong>, organized by the &ldquo;Teatrikon&rdquo; Foundation for Creativity, Education and Animation of Youth under the IT Talent Development Program for 2019&ndash;2029, funded by the state budget.</p><p><strong>National Ranking:</strong> 1st place &middot; <strong>Score:</strong> 858.8 pts &middot; <strong>Base Ranking:</strong> 1st place</p><p><strong>Dorian Wolny's Role:</strong> Game Development (10-person team: Project Management, Game Design, Game Development, Experience Design, Quality Assurance)</p><p class=\"cert-translation-meta\">Lublin, July 11, 2026</p>",
    "certs.cdvFront": "CDV Accelerator Certificate (Front)",
    "certs.cdvFrontTranscript": "<p><strong>Certificate:</strong> <strong>Dorian Wolny</strong> completed the acceleration program <strong>CDV Accelerator</strong>, organized from May 15 to June 30, 2025.</p><p class=\"cert-translation-meta\">Organizer: Collegium Da Vinci (CDV)</p>",
    "certs.cdvBack": "CDV Accelerator Certificate (Back)",
    "certs.cdvBackTranscript": "<p><strong>Program (24 hours):</strong></p><ul><li>Fundamentals of startup organization</li><li>Business Model Canvas</li><li>Game improvements in terms of design</li><li>Business relations</li><li>Intellectual property</li><li>Game improvements in terms of technical and production aspects</li><li>Startup financing</li><li>Product and service design</li><li>Technological leverage</li><li>Game improvements in terms of graphics</li><li>Team Building</li><li>Marketing and brand building</li></ul>",
    "certs.profilLingua": "ProfiLingua Language Certificate",
    "certs.profilLinguaTranscript": "<p><strong>Certificate</strong> awarded to <strong>Dorian Wolny</strong> for completing the course: <strong>English language course at B2 level</strong>, completed in the scope of <strong>120 hours</strong> and finished with a grade of <strong>5.5</strong>.</p><p class=\"cert-translation-meta\">Academic year: 2025&ndash;2026 &middot; Methodologist: Justyna Martin &middot; ProfiLingua (Tutore Group)</p>",
    "contact.index": "06 / CONTACT",
    "contact.heading": "Let's work together<span class=\"accent-dot\">.</span>",
    "contact.text": "Want to talk about Unity, game mechanics, or potential collaboration? Feel free to reach out.",
    "contact.copyDefault": "Copy Email",
    "contact.copySuccess": "Copied!",
    "contact.toast": "Email copied to clipboard",
    "footer.role": "Game Developer"
  },
  pl: {
    "page.title": "Dorian Wolny | Portfolio Game Developera",
    "nav.about": "O mnie",
    "nav.skills": "Umiej\u0119tno\u015bci",
    "nav.games": "Gry",
    "nav.certifications": "Certyfikaty",
    "nav.contact": "Kontakt",
    "hero.index": "01 / PORTFOLIO",
    "hero.description": "Jestem niezale\u017cnym tw\u00f3rc\u0105 gier pracuj\u0105cym w silniku <strong>Unity</strong> oraz j\u0119zyku <strong>C#</strong>. Pasjonuj\u0119 si\u0119 programowaniem rozgrywki, architektur\u0105 opart\u0105 na <strong>ScriptableObjects</strong> oraz nowoczesnymi technologiami.",
    "hero.ctaGames": "Zobacz moje gry \u2192",
    "hero.ctaContact": "Skontaktuj si\u0119",
    "hero.ctaCv": "Zobacz CV \u2197",
    "inspector.script": "Skrypt",
    "inspector.engine": "Silnik",
    "inspector.language": "J\u0119zyk",
    "inspector.focus": "Specjalizacja",
    "inspector.focusValue": "ScriptableObjects i systemy",
    "inspector.experience": "Do\u015bwiadczenie",
    "inspector.experienceValue": "8 lat",
    "inspector.shipped": "Wydane i w produkcji",
    "inspector.shippedValue": "4 gry",
    "inspector.status": "Status",
    "inspector.statusReady": "Gotowy do pracy",
    "inspector.statusPaused": "Komponent wy\u0142\u0105czony",
    "about.index": "02 / O MNIE",
    "about.heading": "Poznajmy si\u0119 bli\u017cej<span class=\"accent-dot\">.</span>",
    "about.text": "Jestem studentem Game Developmentu, kt\u00f3ry z przerwami tworzy gry od oko\u0142o o\u015bmiu lat. W programowaniu najbardziej nap\u0119dza mnie moment, w kt\u00f3rym z\u0142o\u017cone systemy zaczynaj\u0105 ze sob\u0105 wsp\u00f3\u0142gra\u0107 i dzia\u0142a\u0107 na ekranie. Szczeg\u00f3lnie lubi\u0119 prac\u0119 z liczbami, balansem rozgrywki oraz modularn\u0105 architektur\u0105 opart\u0105 na danych z wykorzystaniem ScriptableObjects w Unity.",
    "skills.index": "03 / NARZ\u0118DZIA I UMIEJ\u0118TNO\u015aCI",
    "skills.heading": "Jak tworz\u0119 gry<span class=\"accent-dot\">.</span>",
    "skills.toolsHeading": "Silnik i oprogramowanie",
    "skills.skillsHeading": "Kluczowe kompetencje",
    "skills.gameplay": "Systemy rozgrywki i walki",
    "skills.solid": "Zasady SOLID i czysta architektura",
    "skills.so": "ScriptableObjects i projektowanie oparte na danych",
    "skills.ai": "SI i autonomiczne zachowania jednostek",
    "skills.balance": "Balans gry i systemy liczbowe",
    "skills.ui": "Systemy dialog\u00f3w, zdarze\u0144 i interfejsu UI",
    "games.index": "04 / WYBRANE PROJEKTY",
    "games.heading": "Gry, kt\u00f3re stworzy\u0142em<span class=\"accent-dot\">.</span>",
    "games.playItch": "Zagraj na Itch.io \u2197",
    "games.watchTrailer": "Zobacz zwiastun \u2197",
    "games.githubCode": "Kod na GitHubie \u2197",
    "games.rustcrave.desc": "Mroczny, steampunkowy roguelite typu side-scroller z elementami RTS, kt\u00f3ry odwraca klasyczn\u0105 perspektyw\u0119 \u2014 to Ty jeste\u015b naje\u017ad\u017ac\u0105, a nie wybawc\u0105. Jako Pusty Dyrygent dowodzisz rojem zmechanizowanych insekt\u00f3w naje\u017cd\u017caj\u0105cych umieraj\u0105c\u0105 planet\u0119 Aion, aby wyrwa\u0107 jej Rdze\u0144 Mocy.",
    "games.rustcrave.role": "<strong>Moja rola:</strong> Zaprogramowanie mechaniki kontroli roju, autonomicznych zachowa\u0144 jednostek oraz g\u0142\u00f3wnego systemu interakcji.",
    "games.shellraiser.tagStrategy": "Strategia",
    "games.shellraiser.desc": "Do\u0142\u0105cz do bitwy pomi\u0119dzy Shellraiserem, m\u0142odym \u015blimakiem-nekromant\u0105, a Kr\u00f3lem Krab\u00f3w Clawfordem V, w\u0142adc\u0105 wszystkich pla\u017c. Poprowad\u017a swoj\u0105 armi\u0119 \u015blimak\u00f3w, aby zniszczy\u0107 pot\u0119\u017cny Zamek z Piasku Kr\u00f3la Krab\u00f3w i wyr\u00f3wna\u0107 dawne rachunki.",
    "games.shellraiser.role": "<strong>Moja rola:</strong> Jedyny programista w projekcie \u2014 zbudowa\u0142em ca\u0142\u0105 baz\u0119 kodu od zera, w tym system walki i zarz\u0105dzania jednostkami.",
    "games.noshit.tagComedy": "Komedia / Minigry",
    "games.noshit.desc": "Gra stworzona przez zesp\u00f3\u0142 3 Pieczarki's, inspirowana <em>Cyberiad\u0105</em> Stanis\u0142awa Lema. Systematycznie naprawiaj chaotyczn\u0105 \u0142azienk\u0119 w oczekiwaniu na hydraulika \u2014 gdzie usuni\u0119cie jednej usterki nieuchronnie wywo\u0142uje reakcj\u0119 \u0142a\u0144cuchow\u0105 psuj\u0105c\u0105 kolejny element.",
    "games.noshit.role": "<strong>Moja rola:</strong> Zaprojektowanie i zaprogramowanie jednej z g\u0142\u00f3wnych interaktywnych minigier naprawczych.",
    "games.dziady.tagDev": "W trakcie produkcji",
    "games.dziady.desc": "Dwuwymiarowy roguelite typu deckbuilder inspirowany s\u0142owia\u0144skim folklorem oraz obrz\u0119dem <em>Dziad\u00f3w</em>. Wcielaj\u0105c si\u0119 w Gu\u015blarza, przywo\u0142ujesz duchy \u2014 takie jak dziewczyna pragn\u0105ca zazna\u0107 goryczy, kt\u00f3rej nie do\u015bwiadczy\u0142a za \u017cycia \u2014 przemierzaj\u0105c map\u0119 pe\u0142n\u0105 s\u0142owia\u0144skich demon\u00f3w, wied\u017am, szeptuch i wydarze\u0144 fabularnych przed starciem z nadopieku\u0144cz\u0105 matk\u0105 jako bossem.",
    "games.dziady.role": "<strong>Moja rola:</strong> Zaprojektowanie architektury systemu kart i talii, frameworku dialog\u00f3w i zdarze\u0144, star\u0107 bojowych (zwyk\u0142ych, elitarnych oraz z bossem) oraz interfejsu walki.",
    "certs.index": "05 / CERTYFIKATY",
    "certs.heading": "Osi\u0105gni\u0119cia i wyr\u00f3\u017cnienia<span class=\"accent-dot\">.</span>",
    "certs.tabIndividual": "Imienny",
    "certs.tabTeam": "Dru\u017cynowy",
    "certs.tabFront": "Prz\u00f3d",
    "certs.tabBack": "Ty\u0142",
    "certs.cyberiadaIndividual": "Cyberiada \u2014 Imienny certyfikat zwyci\u0119zcy",
    "certs.cyberiadaIndividualTranscript": "",
    "certs.cyberiadaTeam": "Cyberiada \u2014 Dru\u017cynowy certyfikat zwyci\u0119zcy",
    "certs.cyberiadaTeamTranscript": "",
    "certs.cdvFront": "Certyfikat Akceleratora CDV (Prz\u00f3d)",
    "certs.cdvFrontTranscript": "",
    "certs.cdvBack": "Certyfikat Akceleratora CDV (Ty\u0142)",
    "certs.cdvBackTranscript": "",
    "certs.profilLingua": "Certyfikat j\u0119zykowy ProfiLingua",
    "certs.profilLinguaTranscript": "",
    "contact.index": "06 / KONTAKT",
    "contact.heading": "Porozmawiajmy o wsp\u00f3\u0142pracy<span class=\"accent-dot\">.</span>",
    "contact.text": "Chcesz porozmawia\u0107 o Unity, mechanikach gier lub potencjalnej wsp\u00f3\u0142pracy? \u015amia\u0142o napisz.",
    "contact.copyDefault": "Kopiuj e-mail",
    "contact.copySuccess": "Skopiowano!",
    "contact.toast": "Skopiowano e-mail do schowka",
    "footer.role": "Tw\u00f3rca Gier"
  }
};

let currentLanguage = DEFAULT_LANG;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isCustomCursorSupported() {
  const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  return hasFinePointer && !prefersReducedMotion();
}

function getTranslatedText(key) {
  const dictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS[DEFAULT_LANG];
  if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
    return dictionary[key];
  }

  return TRANSLATIONS[DEFAULT_LANG][key] || "";
}

function readSavedLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_LANG_KEY);
    if (saved && TRANSLATIONS[saved]) {
      return saved;
    }
  } catch (error) {
    return DEFAULT_LANG;
  }

  return DEFAULT_LANG;
}

function saveLanguagePreference(lang) {
  try {
    window.localStorage.setItem(STORAGE_LANG_KEY, lang);
  } catch (error) {
    return;
  }
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = getTranslatedText("page.title");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translation = getTranslatedText(key);
    if (translation) {
      element.textContent = translation;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.getAttribute("data-i18n-html");
    const translation = getTranslatedText(key);
    element.innerHTML = translation;
  });
}

function updateLanguageSwitcherButtons(buttons) {
  buttons.forEach((button) => {
    const isSelected = button.getAttribute("data-lang") === currentLanguage;
    button.classList.toggle(ACTIVE_CLASS, isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function syncDynamicTranslatedElements() {
  const toggleInput = document.getElementById("inspectorActiveToggle");
  const statusText = document.getElementById("inspectorStatusText");
  if (toggleInput && statusText) {
    const statusKey = toggleInput.checked ? "inspector.statusReady" : "inspector.statusPaused";
    statusText.textContent = getTranslatedText(statusKey);
  }

  const copyButton = document.getElementById("copyEmailBtn");
  const copyLabel = document.getElementById("copyEmailLabel");
  if (copyButton && copyLabel) {
    const copyKey = copyButton.classList.contains(COPIED_CLASS) ? "contact.copySuccess" : "contact.copyDefault";
    copyLabel.textContent = getTranslatedText(copyKey);
  }

  const heroCvLink = document.getElementById("heroCvLink");
  if (heroCvLink) {
    heroCvLink.href = currentLanguage === DEFAULT_LANG ? CV_PATH_EN : CV_PATH_PL;
  }
}

function setLanguage(lang, langButtons) {
  if (!TRANSLATIONS[lang]) {
    return;
  }

  currentLanguage = lang;
  saveLanguagePreference(lang);
  applyStaticTranslations();
  updateLanguageSwitcherButtons(langButtons);
  syncDynamicTranslatedElements();
}

function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll(".lang-btn");
  if (!langButtons.length) {
    return;
  }

  currentLanguage = readSavedLanguage();
  applyStaticTranslations();
  updateLanguageSwitcherButtons(langButtons);
  syncDynamicTranslatedElements();

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLang = button.getAttribute("data-lang");
      if (selectedLang && selectedLang !== currentLanguage) {
        setLanguage(selectedLang, langButtons);
      }
    });
  });
}

function toggleNavigation(navElement) {
  navElement.classList.toggle(ACTIVE_CLASS);
}

function closeNavigation(navElement) {
  navElement.classList.remove(ACTIVE_CLASS);
}

function initNavigation() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!menuToggle || !navLinks) {
    return;
  }

  menuToggle.addEventListener("click", () => toggleNavigation(navLinks));

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeNavigation(navLinks));
  });
}

function updateScrollProgress(progressBar) {
  const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollableDistance <= MIN_RATIO) {
    progressBar.style.width = `${MIN_RATIO}%`;
    return;
  }

  const ratio = Math.min(Math.max(window.scrollY / scrollableDistance, MIN_RATIO), MAX_RATIO);
  progressBar.style.width = `${ratio * FULL_PERCENT}%`;
}

function initScrollProgress() {
  const progressBar = document.getElementById("scrollProgress");
  if (!progressBar) {
    return;
  }

  const handleScroll = () => updateScrollProgress(progressBar);
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

function isScrolledToBottom() {
  const scrolledHeight = Math.ceil(window.innerHeight + window.scrollY);
  const totalHeight = document.documentElement.scrollHeight;
  return scrolledHeight >= totalHeight - BOTTOM_SCROLL_THRESHOLD;
}

function getActiveSectionId(sections) {
  if (isScrolledToBottom()) {
    return sections[sections.length - INDEX_STEP].id;
  }

  const scrollPosition = window.scrollY + window.innerHeight * SCROLL_OFFSET_RATIO;
  let currentSectionId = "";

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentSectionId = section.id;
    }
  });

  return currentSectionId;
}

function updateActiveNavLink(sections, navAnchors) {
  const currentSectionId = getActiveSectionId(sections);

  navAnchors.forEach((anchor) => {
    const targetId = anchor.getAttribute("href").slice(INDEX_STEP);
    anchor.classList.toggle(ACTIVE_CLASS, targetId === currentSectionId);
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");

  if (!sections.length || !navAnchors.length) {
    return;
  }

  const handleScroll = () => updateActiveNavLink(sections, navAnchors);
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

function applyStaggerDelays() {
  const staggerContainers = document.querySelectorAll("[data-reveal-stagger]");

  staggerContainers.forEach((container) => {
    const items = container.querySelectorAll("[data-reveal]");
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * STAGGER_STEP_MS}ms`;
      item.addEventListener(
        "transitionend",
        () => {
          item.style.transitionDelay = "";
        },
        { once: true }
      );
    });
  });
}

function handleRevealEntries(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add(REVEALED_CLASS);
    observer.unobserve(entry.target);
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll("[data-reveal]");
  if (!revealElements.length) {
    return;
  }

  applyStaggerDelays();

  const observer = new IntersectionObserver(handleRevealEntries, {
    threshold: REVEAL_THRESHOLD
  });

  revealElements.forEach((element) => observer.observe(element));
}

function handleTiltMove(event, element, maxTiltDeg) {
  if (element.classList.contains(VIDEO_ACTIVE_CLASS)) {
    element.style.transform = `translateY(${TILT_HOVER_LIFT_PX}px)`;
    return;
  }

  const bounds = element.getBoundingClientRect();
  const pointerX = event.clientX - bounds.left;
  const pointerY = event.clientY - bounds.top;

  element.style.setProperty("--mouse-x", `${pointerX}px`);
  element.style.setProperty("--mouse-y", `${pointerY}px`);

  const normalizedX = (pointerX / bounds.width - HALF_NORMALIZED) * DOUBLE_FACTOR;
  const normalizedY = (pointerY / bounds.height - HALF_NORMALIZED) * DOUBLE_FACTOR;

  const rotateX = (-normalizedY * maxTiltDeg).toFixed(FIXED_DECIMALS);
  const rotateY = (normalizedX * maxTiltDeg).toFixed(FIXED_DECIMALS);

  element.style.transform = `perspective(${TILT_PERSPECTIVE_PX}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${TILT_HOVER_LIFT_PX}px)`;
}

function resetTilt(element) {
  element.style.transform = "";
}

function initTiltEffect() {
  if (prefersReducedMotion()) {
    return;
  }

  const tiltElements = document.querySelectorAll("[data-tilt]");

  tiltElements.forEach((element) => {
    const maxTiltDeg = Number(element.getAttribute("data-tilt-max")) || DEFAULT_TILT_MAX_DEG;

    element.addEventListener("mousemove", (event) => handleTiltMove(event, element, maxTiltDeg));
    element.addEventListener("mouseleave", () => resetTilt(element));
  });
}

function updateInspectorState(toggleInput, inspectorBody, statusContainer, statusText) {
  const isEnabled = toggleInput.checked;
  inspectorBody.classList.toggle(DISABLED_CLASS, !isEnabled);
  statusContainer.classList.toggle(PAUSED_CLASS, !isEnabled);
  const statusKey = isEnabled ? "inspector.statusReady" : "inspector.statusPaused";
  statusText.textContent = getTranslatedText(statusKey);
}

function initInspectorToggle() {
  const toggleInput = document.getElementById("inspectorActiveToggle");
  const inspectorBody = document.getElementById("inspectorBody");
  const statusContainer = document.getElementById("inspectorStatus");
  const statusText = document.getElementById("inspectorStatusText");

  if (!toggleInput || !inspectorBody || !statusContainer || !statusText) {
    return;
  }

  updateInspectorState(toggleInput, inspectorBody, statusContainer, statusText);
  toggleInput.addEventListener("change", () => {
    updateInspectorState(toggleInput, inspectorBody, statusContainer, statusText);
  });
}

function updateCursorHoverState(target, dotElement, ringElement) {
  const isZoomTarget = Boolean(target.closest(ZOOM_SELECTOR));
  const isInteractiveTarget = !isZoomTarget && Boolean(target.closest(INTERACTIVE_SELECTOR));

  dotElement.classList.toggle(CURSOR_HOVER_CLASS, isInteractiveTarget || isZoomTarget);
  ringElement.classList.toggle(CURSOR_HOVER_CLASS, isInteractiveTarget);
  ringElement.classList.toggle(CURSOR_ZOOM_CLASS, isZoomTarget);
}

function setCursorTransform(element, x, y) {
  element.style.transform = `translate3d(${x}px, ${y}px, ${MIN_RATIO}) translate(${CENTER_OFFSET_PERCENT}%, ${CENTER_OFFSET_PERCENT}%)`;
}

function bindCursorEvents(dotElement, ringElement, state) {
  document.addEventListener(
    "mousemove",
    (event) => {
      state.targetX = event.clientX;
      state.targetY = event.clientY;
      setCursorTransform(dotElement, state.targetX, state.targetY);

      if (!state.isVisible) {
        state.ringX = state.targetX;
        state.ringY = state.targetY;
        state.isVisible = true;
        dotElement.classList.add(CURSOR_VISIBLE_CLASS);
        ringElement.classList.add(CURSOR_VISIBLE_CLASS);
      }

      if (event.target instanceof Element) {
        updateCursorHoverState(event.target, dotElement, ringElement);
      }
    },
    { passive: true }
  );

  document.addEventListener("mousedown", () => ringElement.classList.add(CURSOR_CLICK_CLASS));
  document.addEventListener("mouseup", () => ringElement.classList.remove(CURSOR_CLICK_CLASS));

  document.documentElement.addEventListener("mouseleave", () => {
    state.isVisible = false;
    dotElement.classList.remove(CURSOR_VISIBLE_CLASS);
    ringElement.classList.remove(CURSOR_VISIBLE_CLASS);
  });
}

function initCustomCursor() {
  if (!isCustomCursorSupported()) {
    return;
  }

  const dotElement = document.getElementById("cursorDot");
  const ringElement = document.getElementById("cursorRing");

  if (!dotElement || !ringElement) {
    return;
  }

  document.documentElement.classList.add(CUSTOM_CURSOR_CLASS);

  const state = {
    targetX: OFFSCREEN_COORD,
    targetY: OFFSCREEN_COORD,
    ringX: OFFSCREEN_COORD,
    ringY: OFFSCREEN_COORD,
    isVisible: false
  };

  bindCursorEvents(dotElement, ringElement, state);

  function renderCursorLoop() {
    state.ringX += (state.targetX - state.ringX) * CURSOR_LERP_FACTOR;
    state.ringY += (state.targetY - state.ringY) * CURSOR_LERP_FACTOR;
    setCursorTransform(ringElement, state.ringX, state.ringY);
    window.requestAnimationFrame(renderCursorLoop);
  }

  renderCursorLoop();
}

function randomInRange(min, max) {
  return min + Math.random() * (max - min);
}

function createParticle(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: randomInRange(-PARTICLE_DRIFT_VX, PARTICLE_DRIFT_VX),
    vy: randomInRange(PARTICLE_MIN_VY, PARTICLE_MAX_VY),
    radius: randomInRange(PARTICLE_MIN_RADIUS, PARTICLE_MAX_RADIUS),
    alpha: randomInRange(PARTICLE_MIN_ALPHA, PARTICLE_MAX_ALPHA)
  };
}

function updateParticle(particle, width, height) {
  particle.x += particle.vx;
  particle.y += particle.vy;

  if (particle.y < -PARTICLE_WRAP_MARGIN) {
    particle.y = height + PARTICLE_WRAP_MARGIN;
    particle.x = Math.random() * width;
  }

  if (particle.x < -PARTICLE_WRAP_MARGIN) {
    particle.x = width + PARTICLE_WRAP_MARGIN;
  } else if (particle.x > width + PARTICLE_WRAP_MARGIN) {
    particle.x = -PARTICLE_WRAP_MARGIN;
  }
}

function drawParticles(ctx, particles, width, height) {
  ctx.clearRect(MIN_RATIO, MIN_RATIO, width, height);

  for (let i = FIRST_INDEX; i < particles.length; i += INDEX_STEP) {
    const first = particles[i];
    updateParticle(first, width, height);

    ctx.beginPath();
    ctx.arc(first.x, first.y, first.radius, MIN_RATIO, Math.PI * DOUBLE_FACTOR);
    ctx.fillStyle = `rgba(${PARTICLE_COLOR_RGB}, ${first.alpha})`;
    ctx.fill();

    for (let j = i + INDEX_STEP; j < particles.length; j += INDEX_STEP) {
      const second = particles[j];
      const dx = first.x - second.x;
      const dy = first.y - second.y;
      const distance = Math.hypot(dx, dy);

      if (distance < PARTICLE_CONNECT_DIST) {
        const lineAlpha = (MAX_RATIO - distance / PARTICLE_CONNECT_DIST) * PARTICLE_LINE_MAX_ALPHA;
        ctx.beginPath();
        ctx.moveTo(first.x, first.y);
        ctx.lineTo(second.x, second.y);
        ctx.strokeStyle = `rgba(${PARTICLE_COLOR_RGB}, ${lineAlpha})`;
        ctx.stroke();
      }
    }
  }
}

function initHeroParticles() {
  if (prefersReducedMotion()) {
    return;
  }

  const canvas = document.getElementById("heroParticles");
  const heroSection = document.getElementById("hero");
  if (!canvas || !heroSection) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  let width = MIN_RATIO;
  let height = MIN_RATIO;
  let particles = [];
  let animationFrameId = null;
  let isHeroVisible = true;

  function resizeCanvas() {
    const bounds = heroSection.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || DEFAULT_DPR, MAX_PIXEL_RATIO);
    width = bounds.width;
    height = bounds.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, MIN_RATIO, MIN_RATIO, dpr, MIN_RATIO, MIN_RATIO);

    if (!particles.length) {
      particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle(width, height));
    }
  }

  function renderLoop() {
    if (!isHeroVisible) {
      animationFrameId = null;
      return;
    }

    drawParticles(ctx, particles, width, height);
    animationFrameId = window.requestAnimationFrame(renderLoop);
  }

  const visibilityObserver = new IntersectionObserver((entries) => {
    isHeroVisible = entries[FIRST_INDEX].isIntersecting;
    if (isHeroVisible && animationFrameId === null) {
      renderLoop();
    }
  });

  resizeCanvas();
  visibilityObserver.observe(heroSection);
  window.addEventListener("resize", resizeCanvas, { passive: true });
  renderLoop();
}

function copyTextFallback(text) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  tempInput.setAttribute("readonly", "");
  tempInput.style.position = "fixed";
  tempInput.style.opacity = String(MIN_RATIO);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

async function writeToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  copyTextFallback(text);
}

function initCopyEmail() {
  const copyButton = document.getElementById("copyEmailBtn");
  const copyLabel = document.getElementById("copyEmailLabel");
  const toast = document.getElementById("toastNotification");

  if (!copyButton || !copyLabel || !toast) {
    return;
  }

  let resetTimerId = null;

  copyButton.addEventListener("click", async () => {
    const email = copyButton.getAttribute("data-email");
    if (!email) {
      return;
    }

    await writeToClipboard(email);

    copyButton.classList.add(COPIED_CLASS);
    copyLabel.textContent = getTranslatedText("contact.copySuccess");
    toast.classList.add(ACTIVE_CLASS);

    if (resetTimerId !== null) {
      window.clearTimeout(resetTimerId);
    }

    resetTimerId = window.setTimeout(() => {
      copyButton.classList.remove(COPIED_CLASS);
      copyLabel.textContent = getTranslatedText("contact.copyDefault");
      toast.classList.remove(ACTIVE_CLASS);
      resetTimerId = null;
    }, TOAST_DURATION_MS);
  });
}

function isImageBroken(imgElement) {
  return imgElement.complete && imgElement.naturalWidth === MIN_RATIO;
}

function tryNextImageExtension(imgElement, extensions) {
  const currentIndex = Number(imgElement.dataset.fallbackIndex ?? FIRST_INDEX);
  if (currentIndex >= extensions.length) {
    return;
  }

  const rawSource = imgElement.getAttribute("src") || "";
  const dotIndex = rawSource.lastIndexOf(EXTENSION_SEPARATOR);
  if (dotIndex === NOT_FOUND_INDEX) {
    return;
  }

  const basePath = rawSource.slice(FIRST_INDEX, dotIndex);
  const nextExtension = extensions[currentIndex].trim();
  imgElement.dataset.fallbackIndex = String(currentIndex + INDEX_STEP);
  imgElement.src = `${basePath}${EXTENSION_SEPARATOR}${nextExtension}`;
}

function initImageFallback() {
  const fallbackImages = document.querySelectorAll("img[data-fallback-exts]");

  fallbackImages.forEach((img) => {
    const rawList = img.getAttribute("data-fallback-exts") || "";
    const extensions = rawList.split(FALLBACK_LIST_SEPARATOR).filter(Boolean);
    if (!extensions.length) {
      return;
    }

    img.addEventListener("error", () => tryNextImageExtension(img, extensions));

    if (isImageBroken(img)) {
      tryNextImageExtension(img, extensions);
    }
  });
}

function pauseAndResetVideo(videoElement) {
  if (!videoElement) {
    return;
  }

  videoElement.pause();
  videoElement.currentTime = ZERO_TIME;
}

function swapPreviewImage(mainImage, newSource) {
  mainImage.classList.add(SWITCHING_CLASS);

  window.setTimeout(() => {
    mainImage.dataset.fallbackIndex = String(FIRST_INDEX);
    mainImage.src = newSource;
    mainImage.classList.remove(SWITCHING_CLASS);
  }, IMAGE_FADE_MS);
}

function showCardImagePreview(cardElement, newSource) {
  const mainImage = cardElement.querySelector(".main-preview");
  const mainVideo = cardElement.querySelector(".main-video-preview");
  const expandButton = cardElement.querySelector(VIDEO_EXPAND_SELECTOR);

  cardElement.classList.remove(VIDEO_ACTIVE_CLASS);

  if (mainVideo) {
    pauseAndResetVideo(mainVideo);
    mainVideo.classList.add(HIDDEN_CLASS);
  }

  if (expandButton) {
    expandButton.classList.add(HIDDEN_CLASS);
  }

  if (mainImage) {
    mainImage.classList.remove(HIDDEN_CLASS);
    swapPreviewImage(mainImage, newSource);
  }
}

function showCardVideoPreview(cardElement, newSource, posterSource) {
  const mainImage = cardElement.querySelector(".main-preview");
  const mainVideo = cardElement.querySelector(".main-video-preview");
  const expandButton = cardElement.querySelector(VIDEO_EXPAND_SELECTOR);

  if (!mainVideo) {
    return;
  }

  cardElement.classList.add(VIDEO_ACTIVE_CLASS);
  cardElement.style.transform = "";

  if (mainImage) {
    mainImage.classList.add(HIDDEN_CLASS);
  }

  pauseAndResetVideo(mainVideo);
  if (posterSource) {
    mainVideo.poster = posterSource;
  }
  mainVideo.src = newSource;
  mainVideo.load();
  mainVideo.classList.remove(HIDDEN_CLASS);

  if (expandButton) {
    expandButton.classList.remove(HIDDEN_CLASS);
  }
}

function handleThumbnailClick(button, cardElement) {
  if (button.classList.contains(ACTIVE_CLASS)) {
    return;
  }

  const newSource = button.getAttribute("data-src");
  if (!newSource) {
    return;
  }

  const mediaType = button.getAttribute("data-media-type") || MEDIA_TYPE_IMAGE;
  if (mediaType === MEDIA_TYPE_VIDEO) {
    const posterSource = button.getAttribute("data-poster") || "";
    showCardVideoPreview(cardElement, newSource, posterSource);
  } else {
    showCardImagePreview(cardElement, newSource);
  }

  cardElement.querySelectorAll(".thumb-btn").forEach((btn) => {
    btn.classList.remove(ACTIVE_CLASS);
  });

  button.classList.add(ACTIVE_CLASS);
}

function initGallerySwitchers() {
  const gameCards = document.querySelectorAll(GAME_CARD_SELECTOR);

  gameCards.forEach((card) => {
    const thumbButtons = card.querySelectorAll(".thumb-btn");
    thumbButtons.forEach((button) => {
      button.addEventListener("click", () => handleThumbnailClick(button, card));
    });
  });
}

function updateCertificateCardContent(cardElement, slideKey) {
  const titleKey = `certs.${slideKey}`;
  const titleElement = cardElement.querySelector(".cert-title");

  if (titleElement) {
    titleElement.setAttribute("data-i18n", titleKey);
    titleElement.textContent = getTranslatedText(titleKey);
  }
}

function updateCertificateTabStates(tabButtons, activeButton) {
  tabButtons.forEach((tab) => {
    const isSelected = tab === activeButton;
    tab.classList.toggle(ACTIVE_CLASS, isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
  });
}

function handleCertificateTabClick(button, cardElement) {
  if (button.classList.contains(ACTIVE_CLASS)) {
    return;
  }

  const mainImage = cardElement.querySelector(".cert-main-preview");
  const newSource = button.getAttribute("data-src");
  const slideKey = button.getAttribute("data-cert-slide");

  if (!mainImage || !newSource || !slideKey) {
    return;
  }

  const titleText = getTranslatedText(`certs.${slideKey}`);
  if (titleText) {
    mainImage.alt = titleText;
  }

  swapPreviewImage(mainImage, newSource);
  updateCertificateCardContent(cardElement, slideKey);
  updateCertificateTabStates(cardElement.querySelectorAll(CERT_TAB_SELECTOR), button);
}

function initCertificateSwitchers() {
  const certCards = document.querySelectorAll(CERT_CARD_SELECTOR);

  certCards.forEach((card) => {
    const tabButtons = card.querySelectorAll(CERT_TAB_SELECTOR);
    tabButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        handleCertificateTabClick(button, card);
      });
    });
  });
}

function collectCardGalleryItems(card) {
  const items = [];
  const heading = card.querySelector("h3");
  const gameTitle = heading ? heading.textContent.trim() : "";
  const thumbButtons = card.querySelectorAll(".thumb-btn");

  if (thumbButtons.length) {
    thumbButtons.forEach((button) => {
      const src = button.getAttribute("data-src");
      const thumbImg = button.querySelector("img");
      const mediaType = button.getAttribute("data-media-type") || MEDIA_TYPE_IMAGE;
      const poster = button.getAttribute("data-poster") || "";

      if (src) {
        items.push({
          type: mediaType,
          src,
          poster,
          alt: thumbImg ? thumbImg.alt : gameTitle,
          title: gameTitle,
          transcriptHtml: ""
        });
      }
    });
    return items;
  }

  const mainImg = card.querySelector(".main-preview");
  const mainSrc = mainImg ? mainImg.getAttribute("src") : "";
  if (mainImg && mainSrc) {
    items.push({
      type: MEDIA_TYPE_IMAGE,
      src: mainSrc,
      poster: "",
      alt: mainImg.alt || gameTitle,
      title: gameTitle,
      transcriptHtml: ""
    });
  }

  return items;
}

function findGalleryIndexBySource(items, source) {
  const matchedIndex = items.findIndex((item) => item.src === source);
  return matchedIndex !== NOT_FOUND_INDEX ? matchedIndex : FIRST_INDEX;
}

function collectCertificateGalleryItems(certCard) {
  const items = [];
  const tabButtons = certCard.querySelectorAll(CERT_TAB_SELECTOR);

  tabButtons.forEach((button) => {
    const src = button.getAttribute("data-src");
    const slideKey = button.getAttribute("data-cert-slide");
    if (!src || !slideKey) {
      return;
    }

    const titleText = getTranslatedText(`certs.${slideKey}`);
    const transcriptHtml = getTranslatedText(`certs.${slideKey}Transcript`);
    items.push({
      type: MEDIA_TYPE_IMAGE,
      src,
      poster: "",
      alt: titleText,
      title: titleText,
      transcriptHtml
    });
  });

  return items;
}

function findActiveCertificateTabIndex(tabButtons) {
  const buttonsList = Array.from(tabButtons);
  const activeIndex = buttonsList.findIndex((btn) => btn.classList.contains(ACTIVE_CLASS));
  return activeIndex !== NOT_FOUND_INDEX ? activeIndex : FIRST_INDEX;
}

function renderLightboxTranslation(elements, activeItem) {
  const shouldShowTranslation = Boolean(activeItem.transcriptHtml) && currentLanguage === DEFAULT_LANG;
  elements.stage.classList.toggle(HAS_TRANSLATION_CLASS, shouldShowTranslation);
  elements.translationBox.classList.toggle(HIDDEN_CLASS, !shouldShowTranslation);

  if (shouldShowTranslation) {
    elements.translationTitle.textContent = activeItem.title;
    elements.translationBody.innerHTML = activeItem.transcriptHtml;
  }
}

function renderLightboxMedia(elements, activeItem) {
  pauseAndResetVideo(elements.video);

  if (activeItem.type === MEDIA_TYPE_VIDEO) {
    elements.image.classList.add(HIDDEN_CLASS);
    if (activeItem.poster) {
      elements.video.poster = activeItem.poster;
    }
    elements.video.src = activeItem.src;
    elements.video.load();
    elements.video.classList.remove(HIDDEN_CLASS);
    return;
  }

  elements.video.classList.add(HIDDEN_CLASS);
  elements.image.classList.remove(HIDDEN_CLASS);
  elements.image.dataset.fallbackIndex = String(FIRST_INDEX);
  elements.image.src = activeItem.src;
  elements.image.alt = activeItem.alt;
}

function renderLightboxSlide(elements, state) {
  const activeItem = state.items[state.currentIndex];
  if (!activeItem) {
    return;
  }

  renderLightboxMedia(elements, activeItem);

  const hasMultipleSlides = state.items.length >= MIN_GALLERY_COUNT;
  elements.prevBtn.classList.toggle(HIDDEN_CLASS, !hasMultipleSlides);
  elements.nextBtn.classList.toggle(HIDDEN_CLASS, !hasMultipleSlides);
  elements.caption.classList.toggle(HIDDEN_CLASS, !hasMultipleSlides);

  if (hasMultipleSlides) {
    elements.title.textContent = activeItem.title;
    elements.counter.textContent = `${state.currentIndex + INDEX_STEP} / ${state.items.length}`;
  }

  renderLightboxTranslation(elements, activeItem);
}

function openLightboxGallery(elements, state, items, startIndex) {
  state.items = items;
  state.currentIndex = startIndex;
  renderLightboxSlide(elements, state);
  elements.root.classList.add(ACTIVE_CLASS);
  elements.root.setAttribute("aria-hidden", "false");
}

function openCardLightbox(elements, state, card, clickedSource) {
  const items = collectCardGalleryItems(card);
  const startIndex = findGalleryIndexBySource(items, clickedSource);
  openLightboxGallery(elements, state, items, startIndex);
}

function openCertificateLightbox(elements, state, certCard, clickedImage) {
  const tabButtons = certCard.querySelectorAll(CERT_TAB_SELECTOR);
  if (tabButtons.length) {
    const items = collectCertificateGalleryItems(certCard);
    const startIndex = findActiveCertificateTabIndex(tabButtons);
    openLightboxGallery(elements, state, items, startIndex);
    return;
  }

  const certKey = certCard.getAttribute("data-cert-key") || "";
  const titleText = certKey ? getTranslatedText(`certs.${certKey}`) : clickedImage.alt;
  const transcriptHtml = certKey ? getTranslatedText(`certs.${certKey}Transcript`) : "";

  openLightboxGallery(
    elements,
    state,
    [
      {
        type: MEDIA_TYPE_IMAGE,
        src: clickedImage.src,
        poster: "",
        alt: clickedImage.alt,
        title: titleText,
        transcriptHtml
      }
    ],
    FIRST_INDEX
  );
}

function openSingleImageLightbox(elements, state, clickedImage) {
  openLightboxGallery(
    elements,
    state,
    [
      {
        type: MEDIA_TYPE_IMAGE,
        src: clickedImage.src,
        poster: "",
        alt: clickedImage.alt,
        title: "",
        transcriptHtml: ""
      }
    ],
    FIRST_INDEX
  );
}

function stepLightboxSlide(elements, state, delta) {
  if (state.items.length < MIN_GALLERY_COUNT) {
    return;
  }

  const total = state.items.length;
  state.currentIndex = (state.currentIndex + delta + total) % total;
  renderLightboxSlide(elements, state);
}

function closeLightbox(elements) {
  pauseAndResetVideo(elements.video);
  elements.root.classList.remove(ACTIVE_CLASS);
  elements.root.setAttribute("aria-hidden", "true");
}

function bindCardVideoExpandButtons(elements, state) {
  const expandButtons = document.querySelectorAll(VIDEO_EXPAND_SELECTOR);

  expandButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const parentGameCard = button.closest(GAME_CARD_SELECTOR);
      if (!parentGameCard) {
        return;
      }

      const inlineVideo = parentGameCard.querySelector(".main-video-preview");
      const rawSource = inlineVideo ? inlineVideo.getAttribute("src") || "" : "";
      pauseAndResetVideo(inlineVideo);
      openCardLightbox(elements, state, parentGameCard, rawSource);
    });
  });
}

function initLightbox() {
  const root = document.getElementById("lightbox");
  const stage = root ? root.querySelector(".lightbox-stage") : null;
  const image = document.getElementById("lightboxImage");
  const video = document.getElementById("lightboxVideo");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  const caption = document.getElementById("lightboxCaption");
  const title = document.getElementById("lightboxTitle");
  const counter = document.getElementById("lightboxCounter");
  const translationBox = document.getElementById("lightboxTranslation");
  const translationTitle = document.getElementById("lightboxTranslationTitle");
  const translationBody = document.getElementById("lightboxTranslationBody");
  const previewImages = document.querySelectorAll("[data-lightbox]");

  if (
    !root ||
    !stage ||
    !image ||
    !video ||
    !closeBtn ||
    !prevBtn ||
    !nextBtn ||
    !caption ||
    !title ||
    !counter ||
    !translationBox ||
    !translationTitle ||
    !translationBody
  ) {
    return;
  }

  const elements = {
    root,
    stage,
    image,
    video,
    prevBtn,
    nextBtn,
    caption,
    title,
    counter,
    translationBox,
    translationTitle,
    translationBody
  };
  const state = { items: [], currentIndex: FIRST_INDEX };
  let touchStartX = MIN_RATIO;

  previewImages.forEach((img) => {
    img.addEventListener("click", (event) => {
      const parentGameCard = img.closest(GAME_CARD_SELECTOR);
      if (parentGameCard) {
        event.stopPropagation();
        const rawSrc = img.getAttribute("src") || "";
        openCardLightbox(elements, state, parentGameCard, rawSrc);
        return;
      }

      const parentCertCard = img.closest(CERT_CARD_SELECTOR);
      if (parentCertCard) {
        event.stopPropagation();
        openCertificateLightbox(elements, state, parentCertCard, img);
        return;
      }

      event.stopPropagation();
      openSingleImageLightbox(elements, state, img);
    });
  });

  document.querySelectorAll(CERT_CARD_SELECTOR).forEach((certCard) => {
    certCard.addEventListener("click", () => {
      const mainImg = certCard.querySelector(".cert-main-preview");
      if (mainImg) {
        openCertificateLightbox(elements, state, certCard, mainImg);
      }
    });
  });

  bindCardVideoExpandButtons(elements, state);

  prevBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    stepLightboxSlide(elements, state, -INDEX_STEP);
  });

  nextBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    stepLightboxSlide(elements, state, INDEX_STEP);
  });

  closeBtn.addEventListener("click", () => {
    closeLightbox(elements);
  });

  root.addEventListener("click", (event) => {
    if (event.target === root) {
      closeLightbox(elements);
    }
  });

  root.addEventListener(
    "touchstart",
    (event) => {
      if (event.touches.length === INDEX_STEP) {
        touchStartX = event.touches[FIRST_INDEX].clientX;
      }
    },
    { passive: true }
  );

  root.addEventListener("touchend", (event) => {
    if (!root.classList.contains(ACTIVE_CLASS) || !event.changedTouches.length) {
      return;
    }

    const deltaX = event.changedTouches[FIRST_INDEX].clientX - touchStartX;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) {
      return;
    }

    const direction = deltaX < MIN_RATIO ? INDEX_STEP : -INDEX_STEP;
    stepLightboxSlide(elements, state, direction);
  });

  document.addEventListener("keydown", (event) => {
    if (!root.classList.contains(ACTIVE_CLASS)) {
      return;
    }

    if (event.key === ESCAPE_KEY) {
      closeLightbox(elements);
    } else if (event.key === ARROW_RIGHT_KEY) {
      stepLightboxSlide(elements, state, INDEX_STEP);
    } else if (event.key === ARROW_LEFT_KEY) {
      stepLightboxSlide(elements, state, -INDEX_STEP);
    }
  });
}

function initApp() {
  initLanguageSwitcher();
  initNavigation();
  initScrollProgress();
  initScrollSpy();
  initScrollReveal();
  initTiltEffect();
  initInspectorToggle();
  initCustomCursor();
  initHeroParticles();
  initCopyEmail();
  initImageFallback();
  initGallerySwitchers();
  initCertificateSwitchers();
  initLightbox();
}

document.addEventListener("DOMContentLoaded", initApp);