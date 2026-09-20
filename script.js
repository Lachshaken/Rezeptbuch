{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const recipes = [\
  \{\
    id: 1,\
    title: "Pancake Stapel",\
    category: "Breakfast",\
    ingredients: ["Mehl", "Milch", "Eier", "Zucker", "Ahornsirup"],\
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500",\
    instructions: "1. Zutaten verquirlen.\\n2. In der Pfanne goldbraun braten."\
  \},\
  \{\
    id: 2,\
    title: "Tomatensuppe",\
    category: "Suppen",\
    ingredients: ["Tomate", "Knoblauch", "Basilikum", "Sahne"],\
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",\
    instructions: "1. Tomaten anr\'f6sten und p\'fcrieren.\\n2. Mit Sahne verfeinern."\
  \}\
];\
\
const grid = document.getElementById("recipeGrid");\
const searchInput = document.getElementById("searchInput");\
const categorySelect = document.getElementById("categorySelect");\
const randomBtn = document.getElementById("randomBtn");\
const modal = document.getElementById("recipeModal");\
const modalBody = document.getElementById("modalBody");\
const closeBtn = document.querySelector(".close-btn");\
\
function renderRecipes(items) \{\
  grid.innerHTML = "";\
  items.forEach(recipe => \{\
    const card = document.createElement("div");\
    card.className = "recipe-card";\
    card.innerHTML = `\
      <img src="$\{recipe.image\}" alt="$\{recipe.title\}">\
      <div class="title-overlay">\
        <h3>$\{recipe.title\}</h3>\
        <small>$\{recipe.category\}</small>\
      </div>\
    `;\
    card.addEventListener("click", () => openRecipe(recipe));\
    grid.appendChild(card);\
  \});\
\}\
\
function filterRecipes() \{\
  const query = searchInput.value.toLowerCase();\
  const cat = categorySelect.value;\
\
  const filtered = recipes.filter(r => \{\
    const matchesCategory = (cat === "All" || r.category === cat);\
    const matchesIngredient = r.ingredients.some(ing => ing.toLowerCase().includes(query));\
    return matchesCategory && matchesIngredient;\
  \});\
\
  renderRecipes(filtered);\
\}\
\
function openRecipe(recipe) \{\
  modalBody.innerHTML = `\
    <h2>$\{recipe.title\}</h2>\
    <p><strong>Kategorie:</strong> $\{recipe.category\}</p>\
    <p><strong>Zutaten:</strong> $\{recipe.ingredients.join(", ")\}</p>\
    <hr>\
    <p style="white-space: pre-line;">$\{recipe.instructions\}</p>\
  `;\
  modal.style.display = "flex";\
\}\
\
closeBtn.onclick = () => modal.style.display = "none";\
window.onclick = (e) => \{ if (e.target === modal) modal.style.display = "none"; \};\
\
randomBtn.addEventListener("click", () => \{\
  const randomIndex = Math.floor(Math.random() * recipes.length);\
  openRecipe(recipes[randomIndex]);\
\});\
\
searchInput.addEventListener("input", filterRecipes);\
categorySelect.addEventListener("change", filterRecipes);\
\
// Initiales Rendern\
renderRecipes(recipes);}