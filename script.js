// Beispieldaten
const recipes = [
  {
    id: 1,
    title: "Pancake Stapel",
    category: "Frühstück",
    ingredients: ["Mehl", "Milch", "Eier", "Zucker", "Ahornsirup"],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500",
    instructions: "1. Zutaten verquirlen.\n2. In der Pfanne goldbraun braten."
  },
  {
    id: 2,
    title: "Cremige Tomatensuppe",
    category: "Suppen",
    ingredients: ["Tomate", "Knoblauch", "Basilikum", "Sahne"],
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
    instructions: "1. Tomaten anrösten und pürieren.\n2. Mit Sahne verfeinern."
  },
  {
    id: 3,
    title: "Sommerlicher Salat",
    category: "Beilagen",
    ingredients: ["Gurke", "Tomate", "Olivenöl", "Feta"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
    instructions: "1. Gemüse schneiden.\n2. Mit Feta und Olivenöl anrichten."
  }
];

let selectedCategory = "All";

const grid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const categoryList = document.getElementById("categoryList");
const randomBtn = document.getElementById("randomBtn");
const modal = document.getElementById("recipeModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close-btn");

// Rendert die Kacheln nach dem genauen Bildaufbau
function renderRecipes(items) {
  grid.innerHTML = "";
  items.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <div class="card-image-box">
        <img src="${recipe.image}" alt="${recipe.title}">
      </div>
      <span class="category-tag">${recipe.category}</span>
      <h3 class="recipe-title">${recipe.title}</h3>
    `;
    card.addEventListener("click", () => openRecipe(recipe));
    grid.appendChild(card);
  });
}

// Filtert nach Zutaten und Kategorie
function filterRecipes() {
  const query = searchInput.value.toLowerCase();

  const filtered = recipes.filter(r => {
    const matchesCategory = (selectedCategory === "All" || r.category === selectedCategory);
    const matchesIngredient = r.ingredients.some(ing => ing.toLowerCase().includes(query));
    return matchesCategory && matchesIngredient;
  });

  renderRecipes(filtered);
}

// Klick auf Kategorien in der Sidebar
categoryList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    document.querySelectorAll(".category-list li").forEach(li => li.classList.remove("active"));
    e.target.classList.add("active");
    selectedCategory = e.target.getAttribute("data-category");
    filterRecipes();
  }
});

// Öffnen der Rezeptdetails
function openRecipe(recipe) {
  modalBody.innerHTML = `
    <h2 style="color: #d94e34; margin-top: 0; text-transform: uppercase;">${recipe.title}</h2>
    <p><strong>Kategorie:</strong> ${recipe.category}</p>
    <p><strong>Zutaten:</strong> ${recipe.ingredients.join(", ")}</p>
    <hr style="border: 0; border-top: 1px solid #ddd; margin: 15px 0;">
    <p style="white-space: pre-line;">${recipe.instructions}</p>
  `;
  modal.style.display = "flex";
}

// Modal schließen
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

// Zufallsbutton
randomBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  openRecipe(recipes[randomIndex]);
});

// Sucheingabe
searchInput.addEventListener("input", filterRecipes);

// Initiales Rendern
renderRecipes(recipes);
