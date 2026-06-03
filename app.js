const parks = [
  {
    id: "yellowstone",
    name: "Yellowstone",
    region: "Wyoming, Montana, Idaho",
    mood: ["alpine", "dawn", "migration", "solitude"],
    image: "./assets/wildlife-oracle-hero.png",
    accent: "#3fa46a",
    glow: "#7fd0a3",
    imagePosition: "52% 50%",
    signal: "thermal valley pulse",
    summary: "Thermal basins, river valleys, and high meadows make this the grand theater for big mammals.",
    habitats: [
      ["Lamar Valley", "Open grassland corridor for wolves, bison, pronghorn, and coyotes."],
      ["Thermal Edge", "Warm ground and broken forest create strange winter grazing pockets."],
      ["River Bend", "Dawn elk movement, otter traces, and bird activity concentrate here."],
      ["High Forest", "Black bear, mule deer, and quiet songbird pockets after rain."]
    ],
    safety: "Keep at least 100 yards from bears and wolves, and 25 yards from all other wildlife.",
    species: ["gray-wolf", "bison", "grizzly", "trumpeter-swan"]
  },
  {
    id: "everglades",
    name: "Everglades",
    region: "Florida",
    mood: ["wetland", "family-friendly", "dusk"],
    image: "./assets/wildlife-oracle-hero.png",
    accent: "#5cb98a",
    glow: "#1f6b45",
    imagePosition: "28% 44%",
    signal: "waterline rising",
    summary: "A slow river of grass where weather, waterline, and patience decide what appears.",
    habitats: [
      ["Sawgrass", "Wading birds and alligators use the open marsh like a moving runway."],
      ["Mangrove Tunnel", "Manatees, herons, and fish nurseries gather in shaded water."],
      ["Pine Rockland", "Rare reptiles and butterflies favor the dry, sunlit edges."],
      ["Coastal Flats", "Dolphins, roseate spoonbills, and crocodiles shift with tides."]
    ],
    safety: "Stay on marked paths and keep hands away from water edges where alligators rest unseen.",
    species: ["american-alligator", "manatee", "roseate-spoonbill", "florida-panther"]
  },
  {
    id: "olympic",
    name: "Olympic",
    region: "Washington",
    mood: ["forest", "dawn", "solitude"],
    image: "./assets/wildlife-oracle-hero.png",
    accent: "#2f8f5b",
    glow: "#3fa46a",
    imagePosition: "66% 42%",
    signal: "rainforest corridor",
    summary: "Rainforest, glacier, and coast fold into one park, making every habitat feel like a portal.",
    habitats: [
      ["Temperate Rainforest", "Roosevelt elk browse under mossy canopy after soft rain."],
      ["Tidepool Shelf", "Sea stars, anemones, harbor seals, and shorebirds reveal the low tide world."],
      ["Subalpine Meadow", "Marmots, deer, and mountain goats appear along open slopes."],
      ["River Corridor", "Salmon seasons pull eagles and otters toward bright water."]
    ],
    safety: "Respect tide charts, slick logs, and fast weather changes across coast and alpine zones.",
    species: ["roosevelt-elk", "harbor-seal", "bald-eagle", "marmot"]
  },
  {
    id: "saguaro",
    name: "Saguaro",
    region: "Arizona",
    mood: ["desert", "dusk", "family-friendly"],
    image: "./assets/wildlife-oracle-hero.png",
    accent: "#2bbd72",
    glow: "#3fa46a",
    imagePosition: "44% 56%",
    signal: "desert bloom clock",
    summary: "A desert observatory where silhouettes, heat, and flowering cactus shape the animal clock.",
    habitats: [
      ["Cactus Forest", "Gila woodpeckers, doves, and bats work the saguaro skyline."],
      ["Desert Wash", "Javelina, coyotes, and jackrabbits follow cooler evening corridors."],
      ["Rocky Slope", "Lizards, snakes, and bighorn sheep favor sunlit stone."],
      ["Bloom Pocket", "Pollinators surge during spring cactus flowers and monsoon pulses."]
    ],
    safety: "Carry water, watch heat exposure, and never place hands where you cannot see.",
    species: ["gila-woodpecker", "javelina", "lesser-long-nosed-bat", "desert-bighorn"]
  }
];

const species = {
  "gray-wolf": {
    name: "Gray wolf",
    rarity: "Rare",
    image: "./assets/wildlife-oracle-species.png",
    note: "Most visible across broad valleys when packs travel at first light.",
    seasons: ["Winter", "Spring"],
    times: ["Dawn", "Dusk"],
    habitats: ["Open valley", "Forest edge"],
    baseChance: 62
  },
  bison: {
    name: "Bison",
    rarity: "Common",
    image: "./assets/wildlife-oracle-species.png",
    note: "Look for grazing herds near valley roads, especially during cool hours.",
    seasons: ["Spring", "Summer", "Fall"],
    times: ["Dawn", "Dusk", "Midday"],
    habitats: ["Open valley", "River bend"],
    baseChance: 91
  },
  grizzly: {
    name: "Grizzly bear",
    rarity: "Elusive",
    image: "./assets/wildlife-oracle-species.png",
    note: "Spring slopes and berry season meadows raise the odds from very low to possible.",
    seasons: ["Spring", "Summer", "Fall"],
    times: ["Dawn", "Dusk"],
    habitats: ["Forest edge", "High meadow"],
    baseChance: 37
  },
  "trumpeter-swan": {
    name: "Trumpeter swan",
    rarity: "Seasonal",
    image: "./assets/wildlife-oracle-species.png",
    note: "Quiet water and low wind make their bright shapes easiest to find.",
    seasons: ["Winter", "Spring"],
    times: ["Dawn", "Midday"],
    habitats: ["River bend", "Wetland"],
    baseChance: 58
  },
  "american-alligator": {
    name: "American alligator",
    rarity: "Common",
    image: "./assets/wildlife-oracle-species.png",
    note: "Sunny banks and low water concentrate sightings along boardwalks.",
    seasons: ["Winter", "Spring", "Summer"],
    times: ["Midday", "Dusk"],
    habitats: ["Wetland", "River bend"],
    baseChance: 89
  },
  manatee: {
    name: "Manatee",
    rarity: "Seasonal",
    image: "./assets/wildlife-oracle-species.png",
    note: "Warm protected water and calm surfaces reveal slow-moving backs and noses.",
    seasons: ["Winter", "Spring"],
    times: ["Dawn", "Midday"],
    habitats: ["Wetland", "Coastal"],
    baseChance: 52
  },
  "roseate-spoonbill": {
    name: "Roseate spoonbill",
    rarity: "Uncommon",
    image: "./assets/wildlife-oracle-species.png",
    note: "Pink feeding flocks brighten shallow flats as water levels drop.",
    seasons: ["Winter", "Spring"],
    times: ["Dawn", "Dusk"],
    habitats: ["Wetland", "Coastal"],
    baseChance: 66
  },
  "florida-panther": {
    name: "Florida panther",
    rarity: "Legendary",
    image: "./assets/wildlife-oracle-species.png",
    note: "Mostly a presence rather than a sighting; tracks and trail cameras tell the story.",
    seasons: ["Winter", "Spring", "Fall"],
    times: ["Dawn", "Night"],
    habitats: ["Forest edge", "Wetland"],
    baseChance: 14
  },
  "roosevelt-elk": {
    name: "Roosevelt elk",
    rarity: "Likely",
    image: "./assets/wildlife-oracle-species.png",
    note: "Rainy meadows and river flats are the classic watch windows.",
    seasons: ["Spring", "Fall", "Winter"],
    times: ["Dawn", "Dusk"],
    habitats: ["Forest edge", "River bend"],
    baseChance: 79
  },
  "harbor-seal": {
    name: "Harbor seal",
    rarity: "Likely",
    image: "./assets/wildlife-oracle-species.png",
    note: "Scan offshore rocks at low tide with binoculars and a quiet stance.",
    seasons: ["Spring", "Summer", "Fall"],
    times: ["Midday", "Dusk"],
    habitats: ["Coastal", "River bend"],
    baseChance: 74
  },
  "bald-eagle": {
    name: "Bald eagle",
    rarity: "Likely",
    image: "./assets/wildlife-oracle-species.png",
    note: "Follow salmon runs, open water, and high snags along river corridors.",
    seasons: ["Fall", "Winter", "Spring"],
    times: ["Dawn", "Midday"],
    habitats: ["River bend", "Coastal"],
    baseChance: 72
  },
  marmot: {
    name: "Olympic marmot",
    rarity: "Seasonal",
    image: "./assets/wildlife-oracle-species.png",
    note: "Warm subalpine afternoons bring whistles from meadow edges.",
    seasons: ["Summer"],
    times: ["Midday", "Dusk"],
    habitats: ["High meadow", "Open valley"],
    baseChance: 46
  },
  "gila-woodpecker": {
    name: "Gila woodpecker",
    rarity: "Likely",
    image: "./assets/wildlife-oracle-species.png",
    note: "Listen for calls around saguaro cavities and flowering desert trees.",
    seasons: ["Spring", "Summer"],
    times: ["Dawn", "Midday"],
    habitats: ["Desert wash", "Forest edge"],
    baseChance: 71
  },
  javelina: {
    name: "Javelina",
    rarity: "Uncommon",
    image: "./assets/wildlife-oracle-species.png",
    note: "Family groups move through washes as the desert cools.",
    seasons: ["Spring", "Fall", "Winter"],
    times: ["Dusk", "Night", "Dawn"],
    habitats: ["Desert wash", "Forest edge"],
    baseChance: 48
  },
  "lesser-long-nosed-bat": {
    name: "Lesser long-nosed bat",
    rarity: "Seasonal",
    image: "./assets/wildlife-oracle-species.png",
    note: "Blooming saguaros and agaves set the night watch calendar.",
    seasons: ["Spring", "Summer"],
    times: ["Night", "Dusk"],
    habitats: ["Desert wash", "High meadow"],
    baseChance: 41
  },
  "desert-bighorn": {
    name: "Desert bighorn",
    rarity: "Rare",
    image: "./assets/wildlife-oracle-species.png",
    note: "Glass rocky ridges early, before heat pushes movement into shade.",
    seasons: ["Winter", "Spring", "Fall"],
    times: ["Dawn"],
    habitats: ["High meadow", "Open valley"],
    baseChance: 28
  }
};

const moods = ["all", "dawn", "dusk", "forest", "desert", "wetland", "alpine", "migration", "family-friendly", "solitude"];
const habitatLabels = ["Open valley", "Forest edge", "River bend", "Wetland"];
const seasonOptions = ["Spring", "Summer", "Fall", "Winter"];
const timeOptions = ["Dawn", "Midday", "Dusk", "Night"];
// Higher = harder to spot; used for the "Rarity" sort.
const rarityRank = {
  Common: 0, Likely: 1, Uncommon: 2, Seasonal: 3,
  Rare: 4, Elusive: 5, Legendary: 6
};
const state = {
  view: "exploreView",
  activeMood: "all",
  search: "",
  sort: "odds",
  activePark: parks[0],
  season: "Spring",
  time: "Dawn",
  habitat: "Forest edge",
  saved: JSON.parse(localStorage.getItem("wildlife-oracle-saved") || "[]"),
  seen: JSON.parse(localStorage.getItem("wildlife-oracle-seen") || "[]")
};

const $ = (selector) => document.querySelector(selector);

function saveState() {
  localStorage.setItem("wildlife-oracle-saved", JSON.stringify(state.saved));
  localStorage.setItem("wildlife-oracle-seen", JSON.stringify(state.seen));
}

let toastTimer;
function showToast(message, icon = "check") {
  const toast = $("#toast");
  if (!toast) return;
  toast.innerHTML = `<i data-lucide="${icon}"></i>${message}`;
  toast.classList.add("show");
  if (window.lucide) window.lucide.createIcons();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function isSaved(type, id) {
  return state.saved.some((item) => item.type === type && item.id === id);
}

function toggleSaved(type, id, title, image, meta) {
  const index = state.saved.findIndex((item) => item.type === type && item.id === id);
  if (index >= 0) {
    state.saved.splice(index, 1);
  } else {
    state.saved.unshift({ type, id, title, image, meta });
  }
  saveState();
  render();
}

function logSeen(id) {
  const animal = species[id];
  if (!animal) return;
  state.seen.unshift({
    id,
    name: animal.name,
    park: state.activePark.name,
    season: state.season,
    time: state.time,
    date: new Date().toISOString()
  });
  saveState();
  render();
  showToast(`Logged ${animal.name}`, "eye");
}

function removeSeen(index) {
  state.seen.splice(index, 1);
  saveState();
  render();
}

function scoreSpecies(animal) {
  let score = animal.baseChance;
  if (animal.seasons.includes(state.season)) score += 10;
  else score -= 12;
  if (animal.times.includes(state.time)) score += 11;
  else score -= 8;
  if (animal.habitats.includes(state.habitat)) score += 12;
  else score -= 6;
  return Math.max(5, Math.min(98, score));
}

// Search every season/time/habitat combination for the highest average odds
// across the active park's species, then apply it to the controls.
function applyBestWindow() {
  let best = { avg: -1 };
  for (const season of seasonOptions) {
    for (const time of timeOptions) {
      for (const habitat of habitatLabels) {
        const prev = { season: state.season, time: state.time, habitat: state.habitat };
        Object.assign(state, { season, time, habitat });
        const avg = state.activePark.species
          .reduce((sum, id) => sum + scoreSpecies(species[id]), 0) / state.activePark.species.length;
        Object.assign(state, prev);
        if (avg > best.avg) best = { avg, season, time, habitat };
      }
    }
  }
  Object.assign(state, { season: best.season, time: best.time, habitat: best.habitat });
  syncControls();
  render();
  const readout = $("#windowReadout");
  readout.innerHTML = `<i data-lucide="wand-sparkles"></i><span>Best window for ${state.activePark.name}: <b>${best.season} · ${best.time} · ${best.habitat}</b> (${Math.round(best.avg)}% avg)</span>`;
  readout.classList.add("show");
  if (window.lucide) window.lucide.createIcons();
}

function randomizeWindow() {
  state.season = seasonOptions[Math.floor(Math.random() * seasonOptions.length)];
  state.time = timeOptions[Math.floor(Math.random() * timeOptions.length)];
  state.habitat = habitatLabels[Math.floor(Math.random() * habitatLabels.length)];
  syncControls();
  render();
  showToast("Surprise window rolled", "dices");
}

function shareForecast() {
  const animals = state.activePark.species
    .map((id) => ({ ...species[id], score: scoreSpecies(species[id]) }))
    .sort((a, b) => b.score - a.score);
  const avg = Math.round(animals.reduce((s, a) => s + a.score, 0) / animals.length);
  const top = animals.slice(0, 3).map((a) => `${a.name} ${a.score}%`).join(", ");
  const text = `Wildlife Oracle — ${state.activePark.name}\n${state.season} · ${state.time} · ${state.habitat}\nOverall match: ${avg}%\nTop odds: ${top}`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(
      () => showToast("Forecast copied", "clipboard-check"),
      () => showToast("Copy failed", "x")
    );
  } else {
    showToast("Clipboard unavailable", "x");
  }
}

// Keep the form controls in sync with state (used by Best window / Surprise).
function syncControls() {
  $("#seasonSelect").value = state.season;
  $("#timeSelect").value = state.time;
  $("#habitatRange").value = String(habitatLabels.indexOf(state.habitat));
  $("#habitatLabel").textContent = state.habitat;
}

function showView(viewId) {
  state.view = viewId;
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
  $("#backButton").style.visibility = viewId === "detailView" ? "visible" : "hidden";
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.lucide) window.lucide.createIcons();
}

function renderHero() {
  const park = state.activePark;
  $("#parkHero").innerHTML = `
    <article class="hero-card" style="--park-accent:${park.accent}; --park-glow:${park.glow};">
      <img src="${park.image}" alt="${park.name} landscape" style="object-position:${park.imagePosition};" />
      <div class="hero-scan" aria-hidden="true"></div>
      <div class="star-map" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
      <div class="hero-content">
        <div class="hero-meta">
          <span class="pill"><i data-lucide="map-pin"></i>${park.region}</span>
          <span class="pill"><i data-lucide="binoculars"></i>${park.species.length} watch species</span>
        </div>
        <div class="signal-card">
          <span>Field Signal</span>
          <strong>${park.signal}</strong>
        </div>
        <h2>${park.name}</h2>
        <p>${park.summary}</p>
        <div class="hero-actions">
          <button class="primary-button" type="button" data-open-park="${park.id}">
            <i data-lucide="radar"></i>Read the signs
          </button>
          <button class="icon-button glass ${isSaved("park", park.id) ? "active" : ""}" type="button" data-save-park="${park.id}" aria-label="Save ${park.name}">
            <i data-lucide="bookmark"></i>
          </button>
        </div>
        <div class="metric-ribbon" aria-label="Park forecast metrics">
          <span><b>${Math.round(park.species.reduce((total, id) => total + species[id].baseChance, 0) / park.species.length)}%</b> wildlife match</span>
          <span><b>${park.habitats.length}</b> habitats</span>
          <span><b>${park.mood[0]}</b> prime mood</span>
        </div>
      </div>
    </article>
  `;
}

function renderMoods() {
  $("#moodStrip").innerHTML = moods.map((mood) => `
    <button class="mood-chip ${state.activeMood === mood ? "active" : ""}" type="button" data-mood="${mood}">
      ${mood === "all" ? "All moods" : mood}
    </button>
  `).join("");
}

function parkMatchesSearch(park) {
  const q = state.search.trim().toLowerCase();
  if (!q) return true;
  const speciesNames = park.species.map((id) => species[id].name.toLowerCase()).join(" ");
  return [park.name, park.region, park.mood.join(" "), park.signal, speciesNames]
    .join(" ").toLowerCase().includes(q);
}

function renderParkList() {
  const filtered = parks
    .filter((park) => state.activeMood === "all" || park.mood.includes(state.activeMood))
    .filter(parkMatchesSearch);
  $("#parkCounter").textContent = `${filtered.length} ${filtered.length === 1 ? "park" : "parks"}`;
  if (!filtered.length) {
    $("#parkList").innerHTML = `<div class="empty-state">No parks match that search yet. Try another name, region, or species.</div>`;
    return;
  }
  $("#parkList").innerHTML = filtered.map((park) => `
    <article class="park-row" role="button" tabindex="0" data-open-park="${park.id}" style="--park-accent:${park.accent}; --park-glow:${park.glow};">
      <img src="${park.image}" alt="${park.name} preview" style="object-position:${park.imagePosition};" />
      <div>
        <h3>${park.name}</h3>
        <p>${park.summary}</p>
        <div class="row-footer">
          ${park.mood.slice(0, 3).map((mood) => `<span class="micro-pill">${mood}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function renderForecast() {
  const activeSpecies = state.activePark.species
    .map((id) => ({ id, ...species[id], score: scoreSpecies(species[id]) }))
    .sort((a, b) => state.sort === "rarity"
      ? rarityRank[b.rarity] - rarityRank[a.rarity] || b.score - a.score
      : b.score - a.score);
  const average = Math.round(activeSpecies.reduce((total, animal) => total + animal.score, 0) / activeSpecies.length);
  $("#oracleScore").textContent = average;
  const scoreRing = document.querySelector(".oracle-score");
  if (scoreRing) scoreRing.style.setProperty("--avg", average);
  document.querySelectorAll("#sortSeg button").forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.sort === state.sort));
  $("#forecastGrid").innerHTML = activeSpecies.map((animal) => `
    <article class="species-card" style="--score:${animal.score};">
      <img src="${animal.image}" alt="${animal.name}" />
      <div>
        <div class="species-topline">
          <div>
            <h3>${animal.name}</h3>
            <p><span class="rarity-chip">${animal.rarity}</span> ${state.activePark.name}</p>
          </div>
          <div class="species-actions">
            <button class="seen-mini" type="button" data-seen-species="${animal.id}" aria-label="Mark ${animal.name} as seen">
              <i data-lucide="eye"></i>
            </button>
            <button class="save-mini ${isSaved("species", animal.id) ? "active" : ""}" type="button" data-save-species="${animal.id}" aria-label="Save ${animal.name}">
              <i data-lucide="bookmark"></i>
            </button>
          </div>
        </div>
        <div class="chance" aria-label="${animal.score}% sighting match"><span style="width:${animal.score}%"></span></div>
        <div class="meter-label"><span>${animal.score}% sighting match</span><span>${animal.times[0]}</span></div>
        <p>${animal.note}</p>
      </div>
    </article>
  `).join("");
}

function renderDetail() {
  const park = state.activePark;
  $("#detailContent").innerHTML = `
    <section class="detail-hero" style="--park-accent:${park.accent}; --park-glow:${park.glow};">
      <img src="${park.image}" alt="${park.name} detail image" style="object-position:${park.imagePosition};" />
      <div class="hero-scan" aria-hidden="true"></div>
      <div class="detail-copy">
        <p class="eyebrow">Park Oracle</p>
        <h2>${park.name}</h2>
        <p>${park.summary}</p>
        <div class="detail-stats">
          <span><b>${park.signal}</b> current signal</span>
          <span><b>${park.species.length}</b> watch species</span>
        </div>
      </div>
    </section>
    <div class="section-heading">
      <div>
        <p class="eyebrow">Habitats</p>
        <h2>Where the clues gather</h2>
      </div>
    </div>
    <div class="habitat-map">
      ${park.habitats.map(([name, detail], index) => `
        <div class="habitat-tile" style="--tile-index:${index}">
          <strong>${name}</strong>
          <p>${detail}</p>
        </div>
      `).join("")}
    </div>
    <div class="safety-note">
      <i data-lucide="shield-alert"></i>
      <p>${park.safety}</p>
    </div>
    <div class="section-heading">
      <div>
        <p class="eyebrow">Species</p>
        <h2>Watch windows</h2>
      </div>
    </div>
    <div class="species-grid">
      ${park.species.map((id) => {
        const animal = species[id];
        const score = scoreSpecies(animal);
        return `
          <article class="species-card" style="--score:${score};">
            <img src="${animal.image}" alt="${animal.name}" />
            <div>
              <div class="species-topline">
                <div>
                  <h3>${animal.name}</h3>
                  <p><span class="rarity-chip">${animal.rarity}</span> ${animal.times.join(", ")}</p>
                </div>
                <div class="species-actions">
                  <button class="seen-mini" type="button" data-seen-species="${id}" aria-label="Mark ${animal.name} as seen">
                    <i data-lucide="eye"></i>
                  </button>
                  <button class="save-mini ${isSaved("species", id) ? "active" : ""}" type="button" data-save-species="${id}" aria-label="Save ${animal.name}">
                    <i data-lucide="bookmark"></i>
                  </button>
                </div>
              </div>
              <div class="chance"><span style="width:${score}%"></span></div>
              <div class="meter-label"><span>${score}% sighting match</span><span>${animal.habitats[0]}</span></div>
              <p>${animal.note}</p>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderSaved() {
  if (!state.saved.length) {
    $("#savedList").innerHTML = `<div class="empty-state">Tap a bookmark on a park or species to build your watchlist.</div>`;
    return;
  }
  $("#savedList").innerHTML = state.saved.map((item) => `
    <article class="saved-card">
      <button class="save-mini active" type="button" data-remove-saved="${item.type}:${item.id}" aria-label="Remove ${item.title}">
        <i data-lucide="x"></i>
      </button>
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p>${item.meta}</p>
    </article>
  `).join("");
}

function renderJournal() {
  $("#journalCount").textContent = state.seen.length
    ? `${state.seen.length} logged`
    : "";
  if (!state.seen.length) {
    $("#journalList").innerHTML = `<div class="empty-state">Tap the eye on any species to log a sighting with the date and conditions.</div>`;
    return;
  }
  const fmt = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  };
  $("#journalList").innerHTML = state.seen.map((entry, index) => `
    <article class="journal-card">
      <div>
        <h4>${entry.name}</h4>
        <p>${entry.park} · ${entry.season} · ${entry.time}</p>
      </div>
      <time datetime="${entry.date}">${fmt(entry.date)}</time>
      <button class="seen-mini" type="button" data-remove-seen="${index}" aria-label="Remove ${entry.name} from journal">
        <i data-lucide="trash-2"></i>
      </button>
    </article>
  `).join("");
}

function renderNavBadge() {
  const badge = $("#savedBadge");
  if (!badge) return;
  if (state.saved.length) {
    badge.textContent = state.saved.length;
    badge.hidden = false;
  } else {
    badge.hidden = true;
  }
}

function render() {
  renderHero();
  renderMoods();
  renderParkList();
  renderForecast();
  renderDetail();
  renderSaved();
  renderJournal();
  renderNavBadge();
  showView(state.view);
}

function bindEvents() {
  document.body.addEventListener("click", (event) => {
    const nav = event.target.closest("[data-view]");
    const mood = event.target.closest("[data-mood]");
    const parkOpen = event.target.closest("[data-open-park]");
    const parkSave = event.target.closest("[data-save-park]");
    const speciesSave = event.target.closest("[data-save-species]");
    const speciesSeen = event.target.closest("[data-seen-species]");
    const removeSaved = event.target.closest("[data-remove-saved]");
    const removeSeenBtn = event.target.closest("[data-remove-seen]");
    const sortBtn = event.target.closest("[data-sort]");

    if (nav) showView(nav.dataset.view);
    if (speciesSeen) {
      logSeen(speciesSeen.dataset.seenSpecies);
      event.stopPropagation();
    }
    if (removeSeenBtn) {
      removeSeen(Number(removeSeenBtn.dataset.removeSeen));
      event.stopPropagation();
    }
    if (sortBtn) {
      state.sort = sortBtn.dataset.sort;
      renderForecast();
      if (window.lucide) window.lucide.createIcons();
    }
    if (mood) {
      state.activeMood = mood.dataset.mood;
      render();
    }
    if (parkSave) {
      const park = parks.find((item) => item.id === parkSave.dataset.savePark);
      toggleSaved("park", park.id, park.name, park.image, `${park.region} · ${park.species.length} watch species`);
      event.stopPropagation();
    }
    if (speciesSave) {
      const id = speciesSave.dataset.saveSpecies;
      const animal = species[id];
      toggleSaved("species", id, animal.name, animal.image, `${animal.rarity} · ${animal.habitats.join(", ")}`);
      event.stopPropagation();
    }
    if (parkOpen) {
      state.activePark = parks.find((item) => item.id === parkOpen.dataset.openPark);
      render();
      showView("detailView");
    }
    if (removeSaved) {
      const [type, id] = removeSaved.dataset.removeSaved.split(":");
      state.saved = state.saved.filter((item) => item.type !== type || item.id !== id);
      saveState();
      render();
    }
  });

  document.body.addEventListener("keydown", (event) => {
    const parkRow = event.target.closest(".park-row");
    if (parkRow && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      parkRow.click();
    }
  });

  $("#backButton").addEventListener("click", () => showView("exploreView"));
  $("#shuffleButton").addEventListener("click", () => {
    const next = parks[Math.floor(Math.random() * parks.length)];
    state.activePark = next;
    render();
  });
  $("#seasonSelect").addEventListener("change", (event) => {
    state.season = event.target.value;
    renderForecast();
    if (window.lucide) window.lucide.createIcons();
  });
  $("#timeSelect").addEventListener("change", (event) => {
    state.time = event.target.value;
    renderForecast();
    if (window.lucide) window.lucide.createIcons();
  });
  $("#habitatRange").addEventListener("input", (event) => {
    state.habitat = habitatLabels[Number(event.target.value)];
    $("#habitatLabel").textContent = state.habitat;
    renderForecast();
    if (window.lucide) window.lucide.createIcons();
  });

  $("#parkSearch").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderParkList();
    if (window.lucide) window.lucide.createIcons();
  });

  $("#bestWindowBtn").addEventListener("click", applyBestWindow);
  $("#randomizeBtn").addEventListener("click", randomizeWindow);
  $("#shareBtn").addEventListener("click", shareForecast);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

bindEvents();
render();
