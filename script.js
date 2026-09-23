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
  "Dessert",
  "Drinks"
];

const RECIPES = [
  {
    title: "Tagliatelle mit Salsiccia-Soße",
    category: "Hauptgericht",
    badge: "Meat",
    image: "images/Tagliatelle_Salsiccia.jpeg",
    time: "60 Min + 60 Min ruhen lassen",
    portions: "3-5 Portionen",
    ingredients: [
      "400g Mehl Typ 0",
      "4 Eier",
      "15ml Olivenöl",
      "400ml Passata",
      "Pancetta/Guanciale",
      "Salsiccia",
      "1 Zwiebel",
      "1,5 Zehen Knoblauch",
      "Salz",
      "Pfeffer",
      "etwas Rotwein"
    ],
    steps: [
      "Mehl, Eier, Olivenöl und etwas Salz ca. 20 Minuten zu einem Teig verkneten und ggf etwas Wasser hinzufügen. Teig im Anschluss 1 Stunde ruhen lassen.",
       "Teig mit der Nudelmaschine glätten und in dünne Streifen schneiden. Nudeln ca. 3-4 Minuten kochen und etwas Nudelwasser beiseite stellen.",
       "Etwas Pancetta/Guancale in kleine Würfel schneiden, Salsiccia (ca. 1 Wurst pro Portion) von der Haut befreien, Zwiebel würfeln, Knoblauch klein schneiden.",
       "Etwas Pancetta/Guancale für das Topping cross anbraten. Aus der Pfanne nehmen und Salciccia in der gleichen Pfanne braten.",
       "Zwiebelwürfel und Knoblauch hinzugeben und weiter anbraten. Wahlweise mit Rotwein und etwas Nudelwasser ablöschen und die Passata hinzugeben. Im Anschluss mit Salz und Pfeffer würzen.",
       "Die Tagliatelle und die Soße auf den Tellern anrichten, Pancetta/Guancale und etwas Parmesan darüber streuen - et finito.",
    ]
  },
  {
    title: "Eingelegter Feta mit Oliven",
    category: "Beilage",
    badge: "Veggi",
    image: "images/eingelegter_Feta.jpeg",
    time: "10 Min",
    portions: "5 Portionen",
    ingredients: [
      "Feta",
      "Oliven",
      "Olivenöl",
      "1 Zehe Knoblauch",
      "Limettensaft",
      "Basilikum",
      "Oregano"
    ],
    steps: [
      "Feta in Würfel schneiden, Oliven halbieren, Knoblauch pressen.",
      "Alle Zutaten nach einem freien Mischverhältnis in ein gefäß geben und mit Olivenöl, Knoblauch und den Gewürzen toppen. Mit Limettensaft abschmecken.",
    ]
  },
  {
    title: "Halloumi Carbonara",
    category: "Hauptgericht",
    badge: "Veggi",
    image: "images/fehlt.jpeg",
    time: "30 Min",
    portions: "2 Portionen",
    ingredients: [
      "Spaghetti",
      "3 Eier",
      "Parmesan gerieben",
      "Halloumi",
      "Öl",
      "1 Zehe Knoblauch",
      "Pfeffer",
      "Salz",
      "Muskat",
      "Honig"
    ],
    steps: [
      "Nudeln kochen, Halloumi in Würfel schneiden und in einer Pfanne mit zugabe von Honig braten.",
      "Eigelb, Parmesan, Öl und etwas Wasser verführen, mit Salz und Pfeffer würzen und ggf. noch Muskat hinzufügen.",
      "Temperatur der Pfanne stark reduzieren, Spaghetti dazu geben und mit angerührter Soße toppen. Mit Deckel kurz stehen lassen, damit die Soße etwas bindet.",
      "Auf Teller geben und mit weiterem Parmesan und ggf. frischem Basilikum toppen.",
    ]
  },
  {
    title: "Mais-Feta-Salat",
    category: "Beilage",
    badge: "Veggi",
    image: "images/fehlt.jpeg",
    time: "15 Min",
    portions: "4 Portionen",
    ingredients: [
     "250g Mais",
      "Feta",
      "1/2 rote Zwiebel",
      "1 Zehe Knoblauch",
      "Griechischer Joghurt",
      "Mayo",
      "Koriander",
      "1 Limette",
      "1TL Salz",
      "1TL Pfeffer",
      "1/2TL Chili",
      "1TL Paprikapulver",
       "Öl"
    ],
    steps: [
      "Ziewbel in dünne Würfel schneiden, Koriander fein hacken.",
      "Mais mit Paprikapulver in einer Pfanne in Öl anbraten und im Anschluss mit der geschnittenen Zwiebel, gepresstem Knoblauch, Koriander, Feta, Joghurt und Mayo vermischen.",
      "Mit Salz und Pfeffer abschmecken, nach belieben Chili hinzufügen und Limette darüber pressen.",
    ]
  },
  {
    title: "Eingelegter Mozzarella mit getrockneten Tomaten",
    category: "Beilage",
    badge: "Veggi",
    image: "images/fehlt.jpg",
    time: "15 Min",
    portions: "5 Portionen",
    ingredients: [
      "250g Mozzarelle Kugeln",
      "20g getrocknete Tomaten",
      "1 Zehe Knoblauch",
      "1TL Oregano",
      "1TL italienische Kräuter",
      "frischer Basilikum",
       "Öl"
    ],
    steps: [
      "Mozarella Kugeln, geschnittene getrocknete Tomaten und fein geschnittenen Knoblauch mit den restlichen Zutaten in ein Gefäß geben und vermischen.",
    ]
  },
  {
    title: "Basilikum Presto",
    category: "Dips",
    badge: "Veggi",
    image: "images/fehlt.jpeg",
    time: "15 Min",
    portions: "2 Portionen",
    ingredients: [
      "60g frischer Basilikum",
      "60g geriebener Parmesan",
      "2 Zehen Knoblauch",
      "120ml Olivenöl",
      "Salz",
       "1-2TL Zitronensaft",
       "Pinienkerne"
    ],
    steps: [
      "Alle Zutaten mit einem Mixer vermengen.",
    ]
  },
  {
    title: "Creamy Zucchini-Butterbohnen Bowl",
    category: "Hauptgericht",
    badge: "Veggi",
    image: "images/fehlt.jpg",
    time: "30 Min",
    portions: "4 Portionen",
    ingredients: [
      "2 Zucchini",
      "6 Knoblauchzehen",
      "800g weiße Bohnen",
      "Cashew Nüsse",
      "1 Limette",
      "Salz",
      "Pfeffer",
       "60ml Wasser",
       "Brot",
       "Öl"
    ],
    steps: [
      "Cashews in Wasser einlegen.",
       "Ofen bei 160C Umluft vorheizen. Zucchini in Stücke schneiden und mit 4 abgezogenen Knoblauchzehen, Öl und Salz in eine Ofenform mit Deckel geben und 35-40 Minuten mit Deckel kochen. Im Anschluss weitere 10 Minuten ohne backen, bis die Zucchini leicht braun wird.",
       "Für die Soße: Cashews, Limettensaft, Salz, Pfeffer, 2 Knoblauchzehen und etwa 60-80ml Wasser im Mixer vermengen.",
       "Zucchini aus dem Ofen nehmen, mit einer Gabel zerdrücken, weiße Bohnen inklusive Bohnenwasser und dem Nuss-Mix hinzugeben und servieren.",
       "Brot mit etwas Öl anbraten oder Toasten und mit der Zucchini-Bohnen Bowl servieren.",
    ]
  },
  {
    title: "Platzhalter",
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
    title: "Platzhalter",
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
    title: "Platzhalter",
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
    title: "Platzhalter",
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
    title: "Platzhalter",
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
    title: "Platzhalter",
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
