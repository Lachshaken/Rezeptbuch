/* ============================================================
   REZEPTBUCH — script.js
   ------------------------------------------------------------
   NEUES REZEPT HINZUFÜGEN:
   1. Bild in den Ordner "images/" legen (z. B. images/lasagne.jpg)
   2. Unten im Array RECIPES einen neuen Block ergänzen:

      {
        title: "Lasagne",
        category: "Hauptgericht",     // muss zu CATEGORIES passen
        badge: "Klassiker",           // optional, Pille auf dem Bild
        image: "images/lasagne.jpg",
        time: "60 Min",
        portions: "4 Portionen",
        ingredients: ["Nudelplatten", "Hackfleisch", "..."],
        steps: ["Schritt 1 ...", "Schritt 2 ..."]
      },

   Mehr ist nicht nötig – Zählung, Filter und Suche laufen automatisch.
   ============================================================ */

const CATEGORIES = [
  "Alle Rezepte",
  "Frühstück",
  "Hauptgericht",
  "Beilage",
  "Dips",
  "Suppen",
  "Dessert"
];

const RECIPES = [
  {
    title: "Overnight Oats mit Beeren",
    category: "Frühstück",
    badge: "Veggi",
    image: "images/overnight-oats.jpg",
    time: "10 Min + über Nacht",
    portions: "2 Portionen",
    ingredients: [
      "100 g Haferflocken",
      "200 ml Hafermilch",
      "150 g Naturjoghurt",
      "1 EL Chiasamen",
      "150 g gemischte Beeren",
      "1 EL Ahornsirup"
    ],
    steps: [
      "Haferflocken, Hafermilch, Joghurt und Chiasamen in einem Glas verrühren.",
      "Mit Ahornsirup süßen und abgedeckt über Nacht in den Kühlschrank stellen.",
      "Am Morgen umrühren, ggf. etwas Milch nachgießen.",
      "Mit frischen Beeren toppen und servieren."
    ]
  },
  {
    title: "Rührei mit Spinat & Feta",
    category: "Frühstück",
    badge: "Veggi",
    image: "images/ruehrei-spinat.jpg",
    time: "15 Min",
    portions: "2 Portionen",
    ingredients: [
      "4 Eier",
      "2 Handvoll Babyspinat",
      "60 g Feta",
      "1 Frühlingszwiebel",
      "1 EL Olivenöl",
      "Salz, Pfeffer"
    ],
    steps: [
      "Frühlingszwiebel in Ringe schneiden und in Olivenöl kurz andünsten.",
      "Spinat zugeben und zusammenfallen lassen.",
      "Eier verquirlen, würzen und in die Pfanne geben.",
      "Bei mittlerer Hitze stocken lassen, Feta darüber zerbröseln."
    ]
  },
  {
    title: "Ofengemüse-Bowl mit Kichererbsen",
    category: "Hauptgericht",
    badge: "Vegan",
    image: "images/ofengemuese-bowl.jpg",
    time: "40 Min",
    portions: "2 Portionen",
    ingredients: [
      "1 Dose Kichererbsen",
      "1 Süßkartoffel",
      "1 rote Paprika",
      "1 Zucchini",
      "2 EL Olivenöl",
      "1 TL Paprikapulver",
      "1 TL Kreuzkümmel",
      "150 g Quinoa"
    ],
    steps: [
      "Ofen auf 200 °C Ober-/Unterhitze vorheizen.",
      "Gemüse in mundgerechte Stücke schneiden, mit Kichererbsen, Öl und Gewürzen mischen.",
      "Auf einem Blech 30 Minuten rösten, nach der Hälfte wenden.",
      "Quinoa nach Packungsanleitung garen.",
      "Quinoa in Schalen füllen, Ofengemüse darauf verteilen."
    ]
  },
  {
    title: "Pasta al Limone",
    category: "Hauptgericht",
    badge: "Veggi",
    image: "images/pasta-al-limone.jpg",
    time: "20 Min",
    portions: "2 Portionen",
    ingredients: [
      "250 g Spaghetti",
      "1 Bio-Zitrone",
      "100 ml Sahne",
      "50 g Parmesan",
      "1 Knoblauchzehe",
      "Olivenöl, Salz, Pfeffer"
    ],
    steps: [
      "Spaghetti in Salzwasser al dente kochen, etwas Nudelwasser aufheben.",
      "Knoblauch fein hacken und in Olivenöl glasig dünsten.",
      "Sahne, Zitronenabrieb und -saft zugeben, kurz einkochen.",
      "Nudeln, Parmesan und etwas Nudelwasser unterheben, bis die Sauce cremig ist."
    ]
  },
  {
    title: "Rote-Linsen-Dal",
    category: "Hauptgericht",
    badge: "Veggi",
    image: "images/rote-linsen-dal.jpg",
    time: "35 Min",
    portions: "3 Portionen",
    ingredients: [
      "250 g rote Linsen",
      "1 Dose Kokosmilch",
      "1 Zwiebel",
      "2 cm Ingwer",
      "2 Knoblauchzehen",
      "2 TL Currypulver",
      "400 ml Gemüsebrühe",
      "Koriander zum Servieren"
    ],
    steps: [
      "Zwiebel, Knoblauch und Ingwer fein würfeln und andünsten.",
      "Currypulver kurz mitrösten.",
      "Linsen, Kokosmilch und Brühe zugeben, 20 Minuten köcheln lassen.",
      "Abschmecken und mit frischem Koriander servieren."
    ]
  },
  {
    title: "Ofenkartoffeln mit Rosmarin",
    category: "Beilage",
    badge: "Veggi",
    image: "images/ofenkartoffeln.jpg",
    time: "45 Min",
    portions: "4 Portionen",
    ingredients: [
      "1 kg festkochende Kartoffeln",
      "3 EL Olivenöl",
      "2 Zweige Rosmarin",
      "3 Knoblauchzehen",
      "Grobes Salz"
    ],
    steps: [
      "Kartoffeln waschen und vierteln.",
      "Mit Öl, Rosmarin, angedrücktem Knoblauch und Salz mischen.",
      "Bei 200 °C ca. 40 Minuten backen, zwischendurch wenden."
    ]
  },
  {
    title: "Krautsalat mit Apfel",
    category: "Beilage",
    badge: "Veggi",
    image: "images/krautsalat.jpg",
    time: "20 Min",
    portions: "4 Portionen",
    ingredients: [
      "1/2 Weißkohl",
      "1 Apfel",
      "1 Karotte",
      "3 EL Apfelessig",
      "2 EL Olivenöl",
      "1 TL Honig",
      "Salz, Kümmel"
    ],
    steps: [
      "Weißkohl fein hobeln und mit Salz kräftig durchkneten.",
      "Apfel und Karotte grob raspeln.",
      "Essig, Öl, Honig und Kümmel verrühren, untermischen.",
      "Mindestens 15 Minuten ziehen lassen."
    ]
  },
  {
    title: "Cremiger Hummus",
    category: "Dips",
    badge: "Vegan",
    image: "images/hummus.jpg",
    time: "10 Min",
    portions: "1 Schale",
    ingredients: [
      "1 Dose Kichererbsen",
      "2 EL Tahini",
      "1 Zitrone",
      "1 Knoblauchzehe",
      "3 EL Olivenöl",
      "1 TL Kreuzkümmel",
      "Salz"
    ],
    steps: [
      "Kichererbsen abgießen und abspülen.",
      "Alle Zutaten mit 3–4 EL Eiswasser fein pürieren.",
      "Abschmecken und mit Olivenöl beträufelt servieren."
    ]
  },
  {
    title: "Joghurt-Kräuter-Dip",
    category: "Dips",
    badge: "Veggi",
    image: "images/kraeuterdip.jpg",
    time: "5 Min",
    portions: "1 Schale",
    ingredients: [
      "250 g griechischer Joghurt",
      "1 Bund Schnittlauch",
      "1 Bund Dill",
      "1 Knoblauchzehe",
      "1 TL Zitronensaft",
      "Salz, Pfeffer"
    ],
    steps: [
      "Kräuter fein hacken.",
      "Mit Joghurt, gepresstem Knoblauch und Zitronensaft verrühren.",
      "Würzen und kurz durchziehen lassen."
    ]
  },
  {
    title: "Kürbissuppe mit Ingwer",
    category: "Suppen",
    badge: "Herbst",
    image: "images/kuerbissuppe.jpg",
    time: "35 Min",
    portions: "4 Portionen",
    ingredients: [
      "1 Hokkaido-Kürbis",
      "1 Zwiebel",
      "2 cm Ingwer",
      "700 ml Gemüsebrühe",
      "100 ml Kokosmilch",
      "Kürbiskernöl"
    ],
    steps: [
      "Kürbis waschen, entkernen und würfeln (Schale kann dranbleiben).",
      "Zwiebel und Ingwer andünsten, Kürbis zugeben.",
      "Mit Brühe auffüllen und 20 Minuten weich kochen.",
      "Fein pürieren, Kokosmilch einrühren, abschmecken."
    ]
  },
  {
    title: "Tomatensuppe mit Basilikum",
    category: "Suppen",
    badge: "Veggi",
    image: "images/tomatensuppe.jpg",
    time: "30 Min",
    portions: "3 Portionen",
    ingredients: [
      "800 g stückige Tomaten",
      "1 Zwiebel",
      "2 Knoblauchzehen",
      "400 ml Gemüsebrühe",
      "1 Bund Basilikum",
      "1 TL Zucker",
      "Olivenöl"
    ],
    steps: [
      "Zwiebel und Knoblauch in Olivenöl andünsten.",
      "Tomaten und Brühe zugeben, 20 Minuten köcheln lassen.",
      "Mit Zucker, Salz und Pfeffer abschmecken.",
      "Pürieren und mit frischem Basilikum servieren."
    ]
  },
  {
    title: "Schokoladenmousse",
    category: "Dessert",
    badge: "Für Gäste",
    image: "images/schokomousse.jpg",
    time: "20 Min + 3 Std kühlen",
    portions: "4 Portionen",
    ingredients: [
      "200 g Zartbitterschokolade",
      "3 Eier",
      "200 ml Sahne",
      "2 EL Zucker",
      "1 Prise Salz"
    ],
    steps: [
      "Schokolade über dem Wasserbad schmelzen und leicht abkühlen lassen.",
      "Eigelb mit Zucker schaumig rühren, Schokolade unterheben.",
      "Eiweiß mit Salz und Sahne getrennt steif schlagen.",
      "Beides vorsichtig unterheben und mindestens 3 Stunden kühlen."
    ]
  },
  {
    title: "Apfelcrumble",
    category: "Dessert",
    badge: "Veggi",
    image: "images/apfelcrumble.jpg",
    time: "50 Min",
    portions: "4 Portionen",
    ingredients: [
      "5 Äpfel",
      "150 g Mehl",
      "100 g Butter",
      "80 g brauner Zucker",
      "50 g Haferflocken",
      "1 TL Zimt"
    ],
    steps: [
      "Äpfel schälen, würfeln und mit Zimt in eine Auflaufform geben.",
      "Mehl, Haferflocken, Zucker und kalte Butter zu Streuseln verkneten.",
      "Streusel auf den Äpfeln verteilen.",
      "Bei 180 °C ca. 35 Minuten goldbraun backen."
    ]
  }
];

/* ============================================================
   Ab hier: Logik – normalerweise nichts mehr zu ändern
   ============================================================ */

const grid        = document.getElementById("recipeGrid");
const catList     = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const emptyState  = document.getElementById("emptyState");
const headerCount = document.getElementById("headerCount");
const footerCount = document.getElementById("footerCount");
const randomBtn   = document.getElementById("randomBtn");
const modal       = document.getElementById("modal");

let activeCategory = "Alle Rezepte";
let searchTerm     = "";
let visibleRecipes = [];

/* Hilfsfunktionen -------------------------------------------------- */

// Umlaute/Groß-Klein egal machen
function norm(str){
  return (str || "")
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .trim();
}

// Suche prüft die Zutatenliste
function matchesSearch(recipe){
  if(!searchTerm) return true;
  const q = norm(searchTerm);
  return recipe.ingredients.some(i => norm(i).includes(q));
}

function matchesCategory(recipe){
  return activeCategory === "Alle Rezepte" || recipe.category === activeCategory;
}

function getFiltered(){
  return RECIPES.filter(r => matchesCategory(r) && matchesSearch(r));
}

/* Sidebar ---------------------------------------------------------- */

function renderCategories(){
  // Zähler berücksichtigen die aktuelle Suche
  const searchPool = RECIPES.filter(matchesSearch);

  catList.innerHTML = CATEGORIES.map(cat => {
    const count = cat === "Alle Rezepte"
      ? searchPool.length
      : searchPool.filter(r => r.category === cat).length;

    const active = cat === activeCategory ? " is-active" : "";
    return `<button type="button" class="filter${active}" data-cat="${cat}">
              ${cat} <span class="filter__count">${count}</span>
            </button>`;
  }).join("");
}

/* Kacheln ---------------------------------------------------------- */

function renderGrid(){
  visibleRecipes = getFiltered();

  grid.innerHTML = visibleRecipes.map((r, i) => `
    <button type="button" class="card" data-index="${i}">
      <span class="card__media" data-placeholder="${r.title}">
        <img src="${r.image}" alt="${r.title}" loading="lazy">
        ${r.badge ? `<span class="card__badge">${r.badge}</span>` : ""}
      </span>
      <span class="card__cat mono">${r.category}</span>
      <h3 class="card__title">${r.title}</h3>
      <p class="card__ing">${r.ingredients.slice(0, 4).join(", ")}</p>
      <span class="card__meta mono">${r.time}</span>
    </button>
  `).join("");

  // Fehlende Bilder → dezenter Platzhalter statt kaputtes Icon
  grid.querySelectorAll(".card__media img").forEach(img => {
    img.addEventListener("error", () => img.parentElement.classList.add("is-placeholder"));
    if(img.complete && img.naturalWidth === 0){
      img.parentElement.classList.add("is-placeholder");
    }
  });

  emptyState.hidden = visibleRecipes.length > 0;
  headerCount.textContent = `Rezepte ${visibleRecipes.length}`;
  footerCount.textContent = `${RECIPES.length} Rezepte insgesamt`;
}

function render(){
  renderCategories();
  renderGrid();
}

/* Detailansicht ---------------------------------------------------- */

function openRecipe(recipe){
  const img = document.getElementById("modalImg");
  img.src = recipe.image;
  img.alt = recipe.title;

  document.getElementById("modalCat").textContent   = recipe.category;
  document.getElementById("modalTitle").textContent = recipe.title;
  document.getElementById("modalMeta").textContent  =
    [recipe.time, recipe.portions].filter(Boolean).join("  ·  ");

  document.getElementById("modalIngredients").innerHTML =
    recipe.ingredients.map(i => `<li>${i}</li>`).join("");

  document.getElementById("modalSteps").innerHTML =
    recipe.steps.map(s => `<li>${s}</li>`).join("");

  modal.hidden = false;
  document.body.classList.add("is-locked");
  modal.querySelector(".modal__dialog").scrollTop = 0;
}

function closeModal(){
  modal.hidden = true;
  document.body.classList.remove("is-locked");
}

/* Events ----------------------------------------------------------- */

catList.addEventListener("click", e => {
  const btn = e.target.closest(".filter");
  if(!btn) return;
  activeCategory = btn.dataset.cat;
  render();
});

grid.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if(!card) return;
  openRecipe(visibleRecipes[Number(card.dataset.index)]);
});

searchInput.addEventListener("input", e => {
  searchTerm = e.target.value;
  searchClear.hidden = searchTerm.length === 0;
  render();
});

searchClear.addEventListener("click", () => {
  searchTerm = "";
  searchInput.value = "";
  searchClear.hidden = true;
  render();
});

randomBtn.addEventListener("click", () => {
  // Zufall aus der aktuell sichtbaren Auswahl, sonst aus allen Rezepten
  const pool = visibleRecipes.length ? visibleRecipes : RECIPES;
  openRecipe(pool[Math.floor(Math.random() * pool.length)]);
});

modal.addEventListener("click", e => {
  if(e.target.closest("[data-close]")) closeModal();
});

document.addEventListener("keydown", e => {
  if(e.key === "Escape" && !modal.hidden) closeModal();
});

render();
