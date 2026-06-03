const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");

const fallbackRuns = [
  {
    id: "saturday-cetate-run",
    title: "Saturday Cetate Run",
    titleRo: "Alergarea de sâmbătă prin Cetate",
    dayOfWeek: 6,
    time: "09:00",
    durationMinutes: 75,
    meetup: "Obelisc Alba Iulia",
    distance: "3 km / 6 km",
    route: "Șanțurile Cetății · Cetatea Alba Carolina",
    description:
      "Meet at Obelisc, choose 1 or 2 loops, regroup before and after, then coffee at Framm's.",
    descriptionRo:
      "Ne vedem la Obelisc, alegem 1 sau 2 ture, ne regrupăm înainte și după alergare, apoi cafea la Framm's.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Obelisc%20Alba%20Iulia",
    detailUrl: "runs/saturday-cetate-run.html",
  },
  {
    id: "wednesday-evening-run",
    title: "Wednesday Evening Run",
    titleRo: "Alergarea de miercuri seara",
    dayOfWeek: 3,
    time: "20:00",
    durationMinutes: 75,
    meetup: "Framm's Coffee",
    distance: "3 km / 6 km",
    route: "Șanțurile Cetății · Cetatea Alba Carolina",
    description:
      "Meet at Framm's Coffee for a social evening loop around the citadel moat, all paces welcome.",
    descriptionRo:
      "Ne vedem la Framm's Coffee pentru o alergare socială de seară prin Șanțurile Cetății, toate ritmurile sunt binevenite.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Framm%27s%20Coffee%20Alba%20Iulia",
    detailUrl: "runs/wednesday-evening-run.html",
  },
];

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("is-open") ?? false;
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navMenu.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

const pad = (value) => String(value).padStart(2, "0");

const getRunStart = (run, now = new Date()) => {
  const [hour, minute] = run.time.split(":").map(Number);
  const start = new Date(now);
  start.setHours(hour, minute, 0, 0);

  let daysUntil = (run.dayOfWeek - now.getDay() + 7) % 7;
  if (daysUntil === 0 && start <= now) {
    daysUntil = 7;
  }

  start.setDate(now.getDate() + daysUntil);
  return start;
};

const formatDate = (date) =>
  new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);

const formatDateTime = (date) =>
  `${formatDate(date)} · ${pad(date.getHours())}:${pad(date.getMinutes())}`;

const toCalendarDate = (date) =>
  date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

const buildCalendarLinks = (run, start) => {
  const end = new Date(start.getTime() + (run.durationMinutes || 75) * 60000);
  const dates = `${toCalendarDate(start)}/${toCalendarDate(end)}`;
  const text = encodeURIComponent(`Carolina Running Club · ${run.title}`);
  const details = encodeURIComponent(
    `${run.description}\n\nDistance: ${run.distance}\nRoute: ${run.route}\nUpdates: https://www.instagram.com/carolina.running.club/`,
  );
  const location = encodeURIComponent(`${run.meetup}, Alba Iulia, Romania`);
  const google = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Carolina Running Club//Runs//EN",
    "BEGIN:VEVENT",
    `UID:${run.id}-${toCalendarDate(start)}@carolinarunningclub`,
    `DTSTAMP:${toCalendarDate(new Date())}`,
    `DTSTART:${toCalendarDate(start)}`,
    `DTEND:${toCalendarDate(end)}`,
    `SUMMARY:Carolina Running Club · ${run.title}`,
    `LOCATION:${run.meetup}, Alba Iulia, Romania`,
    `DESCRIPTION:${run.description.replace(/,/g, "\\,")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return {
    google,
    ics: `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`,
  };
};

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

const setHref = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute("href", value);
  });
};

const renderNextRun = (run, start) => {
  const calendar = buildCalendarLinks(run, start);

  setText("[data-next-title]", run.title);
  setText("[data-next-date]", formatDate(start));
  setText("[data-next-time]", run.time);
  setText("[data-next-meetup]", run.meetup);
  setText("[data-next-distance]", run.distance);
  setText("[data-next-route]", run.route);
  setText("[data-next-description]", run.description);
  setText("[data-next-description-ro]", run.descriptionRo);
  setHref("[data-next-map]", run.mapUrl);
  setHref("[data-next-detail]", run.detailUrl);
  setHref("[data-google-calendar]", calendar.google);
  setHref("[data-ics-calendar]", calendar.ics);
  setText(
    "[data-sticky-next-label]",
    `${formatDateTime(start)} · ${run.meetup}`,
  );
};

const createRunCard = (run, index) => {
  const article = document.createElement("article");
  article.className = `mini-run-card${index === 0 ? " is-active" : ""}`;
  article.innerHTML = `
    <p>${run.dayOfWeek === 6 ? "Saturday" : "Wednesday"} · ${run.time}</p>
    <h4>${run.title}</h4>
    <span>${run.meetup} · ${run.distance}</span>
    <a href="${run.detailUrl}">Open details</a>
  `;
  return article;
};

const setupRunRotator = (runs) => {
  const track = document.querySelector("[data-run-track]");
  const nextButton = document.querySelector("[data-run-next]");
  const prevButton = document.querySelector("[data-run-prev]");
  if (!track) return;

  track.replaceChildren(...runs.map(createRunCard));
  const cards = [...track.querySelectorAll(".mini-run-card")];
  let active = 0;

  const show = (nextIndex) => {
    active = (nextIndex + cards.length) % cards.length;
    cards.forEach((card, index) =>
      card.classList.toggle("is-active", index === active),
    );
  };

  nextButton?.addEventListener("click", () => show(active + 1));
  prevButton?.addEventListener("click", () => show(active - 1));

  if (cards.length > 1) {
    window.setInterval(() => show(active + 1), 5500);
  }
};

const loadRuns = async () => {
  try {
    const response = await fetch("data/runs.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Run data request failed");
    return await response.json();
  } catch (_error) {
    return fallbackRuns;
  }
};

loadRuns().then((runs) => {
  const sortedRuns = runs
    .map((run) => ({ ...run, nextStart: getRunStart(run) }))
    .sort((a, b) => a.nextStart - b.nextStart);

  const [nextRun] = sortedRuns;
  if (nextRun) {
    renderNextRun(nextRun, nextRun.nextStart);
  }

  setupRunRotator(runs);
});
