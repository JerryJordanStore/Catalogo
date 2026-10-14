// ============================================================
//  CATÁLOGO DESDE GOOGLE SHEETS (reemplaza el array "products")
// ============================================================

// 1) Pega aquí el link CSV que te da Google Sheets (Archivo > Compartir > Publicar en la web > CSV)
const CATALOG_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTaQG87LuRr5B2HF_jleAp0zy7XwbbWOvBmrmD5oO-yQyUH9zAuOUVUyo4NDUFVAw/pub?gid=951185511&single=true&output=csv";

const CATALOG_CACHE_KEY = "jerryjordan_catalog_v1";

function readCachedCatalog() {
  try {
    const cached = JSON.parse(localStorage.getItem(CATALOG_CACHE_KEY) || "null");
    return Array.isArray(cached) ? cached : [];
  } catch (e) { return []; }
}

let products = readCachedCatalog();   // copia de la última visita (se muestra al instante)

// ---- Parser CSV (soporta comas y saltos de línea dentro de comillas) ----
function parseCSV(text) {
  const rows = [];
  let row = [], cell = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') inQuotes = false;
      else cell += ch;
    } else if (ch === '"') inQuotes = true;
    else if (ch === ",") { row.push(cell); cell = ""; }
    else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell); cell = "";
      if (row.some(c => c.trim() !== "")) rows.push(row);
      row = [];
    } else cell += ch;
  }
  row.push(cell);
  if (row.some(c => c.trim() !== "")) rows.push(row);
  return rows;
}

const splitList = s => String(s || "").split(",").map(x => x.trim()).filter(Boolean);

function toNumber(v) {
  if (v === undefined || v === null || String(v).trim() === "") return null;
  const n = parseFloat(String(v).replace(/[^\d.,-]/g, "").replace(",", "."));
  return isNaN(n) ? null : n;
}

// Acepta rutas locales (assets/...), links https://... y links de "compartir" de Google Drive.
function normalizeImage(url) {
  const u = String(url).trim();
  const drive = u.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=view&)?id=)([\w-]+)/);
  if (drive) return `https://drive.google.com/thumbnail?id=${drive[1]}&sz=w1000`;
  return u;
}

// Convierte las filas (1 fila = 1 color) en la estructura que ya usa tu web.
function rowsToProducts(rows) {
  const head = rows[0].map(h => h.trim().toLowerCase());
  const idx = name => head.indexOf(name);
  const col = {};
  ["visible","id","categorias","nombre","precio","precio_antes","etiqueta",
   "descripcion","color","hex","imagenes","tallas","agotadas"].forEach(n => col[n] = idx(n));

  const get = (r, n) => (col[n] >= 0 ? (r[col[n]] || "").trim() : "");
  const map = new Map();   // id -> producto (respeta el orden de la hoja)

  rows.slice(1).forEach(r => {
    const id = get(r, "id");
    if (!id) return;
    if (get(r, "visible").toUpperCase() === "NO") return;

    if (!map.has(id)) {
      const cats = splitList(get(r, "categorias"));
      map.set(id, {
        id,
        cat: cats.length > 1 ? cats : (cats[0] || "Otros"),
        name: get(r, "nombre"),
        price: toNumber(get(r, "precio")) ?? 0,
        old: toNumber(get(r, "precio_antes")),
        badge: get(r, "etiqueta") || null,
        desc: get(r, "descripcion"),
        colors: []
      });
    }

    const colorName = get(r, "color");
    const images = splitList(get(r, "imagenes")).map(normalizeImage);
    if (!colorName || images.length === 0) return;   // fila incompleta: se ignora

    const all = splitList(get(r, "tallas"));
    const out = splitList(get(r, "agotadas"));
    map.get(id).colors.push({
      name: colorName,
      hex: get(r, "hex") || "#3A3A3A",
      images,
      sizes: all.map(t => ({ t, stock: !out.includes(t) }))
    });
  });

  // descarta productos que quedaron sin colores válidos
  return [...map.values()].filter(p => p.colors.length > 0);
}

async function loadCatalog() {
  // Pide la versión más reciente a Google Sheets
  try {
    const res = await fetch(CATALOG_CSV_URL);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const fresh = rowsToProducts(parseCSV(await res.text()));
    if (fresh.length) {
      products = fresh;
      try { localStorage.setItem(CATALOG_CACHE_KEY, JSON.stringify(fresh)); } catch (e) {}
    }
  } catch (err) {
    console.warn("No se pudo cargar el catálogo online:", err);
  }
}


  (function() {
    const track = document.getElementById('tickerTrack');
    if (!track) return;

    // Texto que quieres repetir
    const baseText = "WEAR YOUR LEGACY · ENVÍOS A TODO EL PERÚ";

    // Función para crear un elemento span con el texto
    const createItem = () => {
      const s = document.createElement('span');
      s.textContent = baseText;
      return s;
    };

    // 1. Insertamos un bloque inicial
    track.appendChild(createItem());
    const oneBlockWidth = track.scrollWidth;
    const screenWidth = window.innerWidth;

    // 2. Calculamos cuántas copias se necesitan para llenar el doble de la pantalla
    const copiesNeeded = Math.max(2, Math.ceil((screenWidth * 2) / oneBlockWidth));

    // 3. Agregamos las copias necesarias
    for (let i = 1; i < copiesNeeded; i++) {
      track.appendChild(createItem());
    }

    // 4. Duplicamos todo el contenido (Bloque A + Bloque B) para lograr el salto invisible
    const clone = track.innerHTML;
    track.innerHTML = clone + clone;

    // 5. Calculamos la velocidad uniforme en píxeles por segundo
    const totalWidth = track.scrollWidth / 2;
    const pxPerSecond = 50; // Puedes subirlo para ir más rápido o bajarlo para ir más lento
    const duration = totalWidth / pxPerSecond;

    // Aplicamos la duración dinámicamente al CSS
    track.style.setProperty('--marquee-time', `${duration}s`);
  })();

// ---- Configuración de contacto ----
const WHATSAPP_NUMBER = "51973758234"; // 51 = código de Perú + número sin espacios ni símbolos

// ---- Estado del carrito ----
// Se guarda en localStorage para que no se pierda si el usuario recarga la página.
let cart = loadCart();

function loadCart() {
  try {
    const raw = localStorage.getItem("jerryjordan_cart");
    const parsed = raw ? JSON.parse(raw) : [];
    // Descarta carritos guardados con el formato antiguo (sin talla)
    return Array.isArray(parsed) ? parsed.filter(i => i.cartKey && i.size) : [];
  } catch (e) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("jerryjordan_cart", JSON.stringify(cart));
}

function formatSoles(n) {
  return "S/ " + n.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function badgeLabel(b) {
  return b === "new" ? "Nuevo"
    : b === "sale" ? "Oferta"
    : b === "pack" ? "Pack"
    : b === "liquidacion" ? "Liquidación"
    : b === "soldout" ? "Agotado"
    : "Pocas unidades";
}

// ---- Colores reales del catálogo (vienen del arreglo "products", campo "colors") ----

// Genera los botones de talla en base a un color ya elegido.
function sizeButtonsHTML(sizesArr, preselected) {
  return sizesArr
    .map(s => `<button type="button" class="size-btn ${s.t === preselected ? "selected" : ""}" data-size="${s.t}" ${!s.stock ? "disabled title=\"Talla agotada\"" : ""}>${s.t}</button>`)
    .join("");
}

// Fila compacta de colores para la tarjeta del producto (antes de abrir el modal).
// Muestra hasta "max" cuadraditos y, si hay más, agrega un "+N".
function colorPreview(p) {
  const colors = p.colors;
  return `
    <div class="mini-colors" title="Colores disponibles">
      ${colors.map((c, idx) => `<button type="button" class="mini-swatch" data-id="${p.id}" data-idx="${idx}" style="background:${c.hex}" title="${c.name}"></button>`).join("")}
    </div>
  `;
}

// ---- Render de las grillas de producto ----
function renderGrid(containerId, list) {
  const el = document.getElementById(containerId);
  el.innerHTML = list.map(p => {
    const soldOut = p.colors.every(c => c.sizes.every(s => !s.stock));
    const defaultImg = p.colors[0].images[0];

    return `
    <div class="product-card ${soldOut ? "is-soldout" : ""}" data-id="${p.id}">
      <div class="product-media">
        ${soldOut ? `<span class="badge soldout">Agotado</span>` : (p.badge ? `<span class="badge ${p.badge}">${badgeLabel(p.badge)}</span>` : "")}
        <img class="product-photo" src="${defaultImg}" alt="${p.name}" width="400" height="400">
      </div>
      <div class="product-info">
        <div class="brand">${Array.isArray(p.cat) ? p.cat.join(" · ") : p.cat}</div>
        <div class="name-row">
          <h4 class="product-name-link" data-id="${p.id}" title="Ver más información">${p.name}</h4>
        </div>
        ${colorPreview(p)}
        <div class="size-select" data-empty="true">
          <span class="size-hint">Elige un color</span>
        </div>
        <div class="price-row">
          <div>
            ${p.old ? `<span class="price-old">${formatSoles(p.old)}</span>` : ""}
            <span class="price">${formatSoles(p.price)}</span>
          </div>
          <button class="add-btn" data-id="${p.id}" data-size="" data-color="" data-color-name="" data-img="" title="Elige color y talla" disabled>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
  }).join("");

  // Si un producto tiene un solo color, no tiene sentido pedirle al usuario
  // que lo "elija" — se selecciona automáticamente para que ya vea sus tallas y fotos.
  list.forEach(p => {
    if (p.colors.length === 1) {
      const card = el.querySelector(`.product-card[data-id="${p.id}"]`);
      if (card) selectCardColor(card, p, 0);
    }
  });
}

// Aplica la selección de un color dentro de una tarjeta: cambia la foto, reconstruye
// las tallas disponibles para ese color y habilita "Agregar" si corresponde.
// La usan tanto el click del usuario como la auto-selección (color único).
function selectCardColor(card, product, idx) {
  const colorObj = product.colors[idx];
  if (!colorObj) return;

  card.querySelectorAll(".mini-swatch").forEach(b => b.classList.toggle("selected", Number(b.dataset.idx) === idx));

  const photoEl = card.querySelector(".product-photo");
  if (photoEl && colorObj.images && colorObj.images[0]) {
    photoEl.src = colorObj.images[0];
  }

  /*const availableSizes = colorObj.sizes.filter(s => s.stock);
  const preselected = availableSizes.length === 1 ? availableSizes[0].t : null;

  const sizeContainer = card.querySelector(".size-select");
  sizeContainer.removeAttribute("data-empty");
  sizeContainer.innerHTML = sizeButtonsHTML(colorObj.sizes, preselected);

  const addBtn = card.querySelector(".add-btn");
  addBtn.dataset.color = colorObj.hex;
  addBtn.dataset.colorName = colorObj.name;
  addBtn.dataset.img = colorObj.images[0] || "";
  addBtn.dataset.size = preselected || "";
  addBtn.title = preselected ? "Agregar al carrito" : "Elige una talla";
  addBtn.disabled = !preselected;*/

  const availableSizes = colorObj.sizes.filter(s => s.stock);

  // Los productos en liquidación NO tienen talla preseleccionada
  const isPack = product.badge === "pack";
  const preselected = !isPack && availableSizes.length === 1
    ? availableSizes[0].t
    : null;

  const sizeContainer = card.querySelector(".size-select");
  sizeContainer.removeAttribute("data-empty");
  sizeContainer.innerHTML = sizeButtonsHTML(colorObj.sizes, preselected);

  const addBtn = card.querySelector(".add-btn");
  addBtn.dataset.color = colorObj.hex;
  addBtn.dataset.colorName = colorObj.name;
  addBtn.dataset.img = colorObj.images[0] || "";

  if (isPack) {
    addBtn.dataset.size = "";
    addBtn.dataset.shortSize = "";
    addBtn.dataset.poloSize = "";
    addBtn.title = "Elige talla de short y polo";
    addBtn.disabled = true;
  } else {
    addBtn.dataset.size = preselected || "";
    addBtn.title = preselected ? "Agregar al carrito" : "Elige una talla";
    addBtn.disabled = !preselected;
  }
}


// ---- Sección "Novedades" (drops nuevos) ----
// Comentada junto con su bloque en index.html: se conserva el código por si se
// quiere reactivar más adelante, pero por ahora no se muestra en la página.
// const newArrivals = products.filter(p => p.badge === "new");
// renderGrid("product-grid", newArrivals);

// ---- Estado de los filtros del catálogo completo ----
const filters = {
  cat: "Todos",
  sizes: new Set(),   // tallas seleccionadas, ej: {"S","M"}
  price: "todos",     // "todos" | "0-30" | "30-60" | "60-100" | "100-99999"
  sort: "relevancia", // "relevancia" | "price-asc" | "price-desc"
};

function matchesFilters(p) {
  //if (filters.cat !== "Todos" && p.cat !== filters.cat) return false;

  if (filters.cat !== "Todos") {

    // Liquidación: filtra por badge
    if (filters.cat === "Liquidacion") {
      if (p.badge !== "liquidacion") return false;
    }

    // Las demás categorías: filtra normalmente
    else {
      if (Array.isArray(p.cat)) {
        if (!p.cat.includes(filters.cat)) return false;
      } else {
        if (p.cat !== filters.cat) return false;
      }
    }
  }

  if (filters.cat !== "Todos" && !(Array.isArray(p.cat) ? p.cat.includes(filters.cat) : p.cat === filters.cat)) return false;

  if (filters.sizes.size > 0) {
    const hasSelectedSize = p.colors.some(c => c.sizes.some(s => s.stock && filters.sizes.has(s.t)));
    if (!hasSelectedSize) return false;
  }

  if (filters.price !== "todos") {
    const [min, max] = filters.price.split("-").map(Number);
    if (p.price < min || p.price > max) return false;
  }

  return true;
}

function sortProducts(list) {
  const sorted = list.slice();
  if (filters.sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
  else if (filters.sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
  return sorted;
}

function renderCatalog() {
  const filtered = sortProducts(products.filter(matchesFilters));

  const grid = document.getElementById("product-grid-2");
  const emptyState = document.getElementById("empty-state");
  const countEl = document.getElementById("filter-count");

  if (filtered.length === 0) {
    grid.style.display = "none";
    emptyState.style.display = "block";
  } else {
    grid.style.display = "grid";
    emptyState.style.display = "none";
    renderGrid("product-grid-2", filtered);
  }

  const total = products.length;
  countEl.textContent = filtered.length === total
    ? `Mostrando los ${total} productos`
    : `Mostrando ${filtered.length} de ${total} productos`;
}
if (products.length) renderCatalog();     // pinta la copia guardada (si existe)
loadCatalog().then(renderCatalog);        // y luego la versión actualizada del Excel

// Tabs de categoría
document.getElementById("filter-cat").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-tab");
  if (!btn) return;
  document.querySelectorAll("#filter-cat .filter-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  filters.cat = btn.dataset.cat;
  renderCatalog();
});

// Chips de talla (selección múltiple)
document.getElementById("filter-size").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  const size = chip.dataset.size;
  if (filters.sizes.has(size)) {
    filters.sizes.delete(size);
    chip.classList.remove("active");
  } else {
    filters.sizes.add(size);
    chip.classList.add("active");
  }
  renderCatalog();
});

// Precio
document.getElementById("filter-price").addEventListener("change", (e) => {
  filters.price = e.target.value;
  renderCatalog();
});

// Orden
document.getElementById("filter-sort").addEventListener("change", (e) => {
  filters.sort = e.target.value;
  renderCatalog();
});

// Limpiar todos los filtros
function clearFilters() {
  filters.cat = "Todos";
  filters.sizes.clear();
  filters.price = "todos";
  filters.sort = "relevancia";

  document.querySelectorAll("#filter-cat .filter-tab").forEach(t => t.classList.toggle("active", t.dataset.cat === "Todos"));
  document.querySelectorAll("#filter-size .chip").forEach(c => c.classList.remove("active"));
  document.getElementById("filter-price").value = "todos";
  document.getElementById("filter-sort").value = "relevancia";

  renderCatalog();
}
document.getElementById("filter-clear").addEventListener("click", clearFilters);
document.getElementById("empty-clear").addEventListener("click", clearFilters);

// Las tarjetas de categoría llevan directo al catálogo filtrado por esa categoría
document.querySelectorAll(".cat-card[data-cat]").forEach(card => {
  card.addEventListener("click", () => {
    const cat = card.dataset.cat;
    document.querySelectorAll("#filter-cat .filter-tab").forEach(t => {
      t.classList.toggle("active", t.dataset.cat === cat);
    });
    filters.cat = cat;
    renderCatalog();
    document.getElementById("destacados").scrollIntoView({ behavior: "smooth" });
  });
});

// ---- Selección de color dentro de cada tarjeta ----
// Al elegir un color se reconstruyen las tallas disponibles PARA ESE color
// (cada color puede tener sus propias tallas, según el catálogo real).
document.addEventListener("click", (e) => {
  const swatch = e.target.closest(".mini-swatch");
  if (!swatch) return;
  const card = swatch.closest(".product-card");
  const product = products.find(p => p.id === swatch.dataset.id);
  if (!product) return;
  selectCardColor(card, product, Number(swatch.dataset.idx));
});

// ---- Selección de talla dentro de cada tarjeta ----
// El selector exige ".product-card .size-btn" para no interferir nunca con
// los botones de talla del modal de detalle (que tienen su propio manejador).
/*document.addEventListener("click", (e) => {
  const sizeBtn = e.target.closest(".product-card .size-btn");
  if (!sizeBtn || sizeBtn.disabled) return;
  const card = sizeBtn.closest(".product-card");
  card.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
  sizeBtn.classList.add("selected");
  const addBtn = card.querySelector(".add-btn");
  addBtn.dataset.size = sizeBtn.dataset.size;
  addBtn.disabled = !addBtn.dataset.color; // ya se exige el color primero
}); */

// ---- Selección de talla dentro de cada tarjeta ----
document.addEventListener("click", (e) => {
  const sizeBtn = e.target.closest(".product-card .size-btn");
  if (!sizeBtn || sizeBtn.disabled) return;

  const card = sizeBtn.closest(".product-card");
  const product = products.find(p => p.id === card.dataset.id);
  if (!product) return;

  const addBtn = card.querySelector(".add-btn");

  // ---- PRODUCTOS EN LIQUIDACIÓN: Polo + Short ----
  if (product.badge === "pack") {

    const size = sizeBtn.dataset.size;

    // Short: 30, 32, 34
    if (["30", "32", "34"].includes(size)) {

      card.querySelectorAll(".size-btn").forEach(b => {
        if (["30", "32", "34"].includes(b.dataset.size)) {
          b.classList.remove("selected");
        }
      });

      sizeBtn.classList.add("selected");
      addBtn.dataset.shortSize = size;
    }

    // Polo: S, M, L
    if (["S", "M", "L"].includes(size)) {

      card.querySelectorAll(".size-btn").forEach(b => {
        if (["S", "M", "L"].includes(b.dataset.size)) {
          b.classList.remove("selected");
        }
      });

      sizeBtn.classList.add("selected");
      addBtn.dataset.poloSize = size;
    }

    // Solo permite agregar cuando eligió ambos
    if (addBtn.dataset.shortSize && addBtn.dataset.poloSize) {
      addBtn.dataset.size =
        `Short ${addBtn.dataset.shortSize} · Polo ${addBtn.dataset.poloSize}`;

      addBtn.disabled = !addBtn.dataset.color;
      addBtn.title = "Agregar al carrito";
    } else {
      addBtn.dataset.size = "";
      addBtn.disabled = true;
      addBtn.title = "Elige talla de short y polo";
    }

    return;
  }

  // ---- PRODUCTOS NORMALES: funcionamiento actual ----
  card.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
  sizeBtn.classList.add("selected");

  addBtn.dataset.size = sizeBtn.dataset.size;
  addBtn.disabled = !addBtn.dataset.color;
});

// ---- Delegación de clicks para "Agregar al carrito" ----
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;

  if (btn.disabled) return;

  const id = btn.dataset.id;
  const size = btn.dataset.size;
  const color = btn.dataset.color;
  const colorName = btn.dataset.colorName;
  const img = btn.dataset.img;
  const product = products.find(p => p.id === id);
  if (!product) return;

  if (!color) {
    showToast("Selecciona un color primero");
    return;
  }
  if (!size) {
    showToast("Selecciona una talla primero");
    return;
  }

  addToCart(product, size, color, colorName, img);

  // micro-feedback visual en el botón
  btn.classList.add("added");
  setTimeout(() => btn.classList.remove("added"), 700);

  showToast(`${product.name} (${colorName}, Talla ${size}) agregado al carrito`);
  bumpBadge();
});

function addToCart(product, size, selectedColorHex, selectedColorName, selectedImg) {
  const cartKey = `${product.id}__${size}__${selectedColorHex || "base"}`;
  const existing = cart.find(item => item.cartKey === cartKey);
  if (existing) {
    existing.qty += 1;
  } else {
    const fallbackColor = product.colors[0] || { hex: "#3A3A3A", name: "Estándar", images: [] };
    cart.push({
      cartKey,
      id: product.id,
      name: product.name,
      cat: product.cat,
      price: product.price,
      qty: 1,
      img: selectedImg || fallbackColor.images[0] || "",
      color: selectedColorHex || fallbackColor.hex,
      colorName: selectedColorName || fallbackColor.name,
      size,
    });
  }
  saveCart();
  renderCart();
}

function removeFromCart(cartKey) {
  cart = cart.filter(item => item.cartKey !== cartKey);
  saveCart();
  renderCart();
}

function changeQty(cartKey, delta) {
  const item = cart.find(i => i.cartKey === cartKey);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(cartKey);
  } else {
    saveCart();
    renderCart();
  }
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function bumpBadge() {
  const badge = document.getElementById("cart-badge");
  badge.classList.remove("bump");
  void badge.offsetWidth; // reinicia la animación
  badge.classList.add("bump");
}

// ---- Render del panel del carrito ----
function renderCart() {
  const itemsEl = document.getElementById("cart-items");
  const emptyEl = document.getElementById("cart-empty");
  const footerEl = document.getElementById("cart-footer");
  const badge = document.getElementById("cart-badge");
  const totalEl = document.getElementById("cart-total");
  const whatsappBtn = document.getElementById("whatsapp-btn");

  badge.textContent = cartCount();

  if (cart.length === 0) {
    itemsEl.style.display = "none";
    footerEl.style.display = "none";
    emptyEl.style.display = "flex";
    return;
  }

  itemsEl.style.display = "block";
  footerEl.style.display = "block";
  emptyEl.style.display = "none";

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-media"><img src="${item.img}" alt="${item.name}"></div>
      <div class="cart-item-info">
        <div class="brand">${item.cat} · ${item.colorName || "Color"} · Talla ${item.size}</div>
        <div class="name-row">
          <h4>${item.name}</h4>
          <span class="color-swatch small" style="background:${item.color}" title="${item.colorName || "Color de la prenda"}"></span>
        </div>
        <div class="cart-item-row">
          <div class="qty-control">
            <button data-action="dec" data-key="${item.cartKey}" aria-label="Restar">−</button>
            <span>${item.qty}</span>
            <button data-action="inc" data-key="${item.cartKey}" aria-label="Sumar">+</button>
          </div>
          <span class="cart-item-price">${formatSoles(item.price * item.qty)}</span>
          <button class="cart-item-remove" data-action="remove" data-key="${item.cartKey}" aria-label="Eliminar">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join("");

  totalEl.textContent = formatSoles(cartTotal());
  whatsappBtn.href = buildWhatsAppLink();
}

// ---- Convierte un color (hex o hsl) al emoji de color más parecido ----
function parseColorToHSL(str) {
  if (!str) return null;
  str = str.trim();
  if (str.startsWith("hsl")) {
    const m = /hsl\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*\)/i.exec(str);
    return m ? { h: parseFloat(m[1]), s: parseFloat(m[2]), l: parseFloat(m[3]) } : null;
  }
  if (str.startsWith("#")) {
    let hex = str.replace("#", "");
    if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        default: h = (r - g) / d + 4;
      }
      h *= 60;
    }
    return { h, s: s * 100, l: l * 100 };
  }
  return null;
}

function colorToEmoji(colorStr) {
  const hsl = parseColorToHSL(colorStr);
  if (!hsl) return "🎨";
  const { h, s, l } = hsl;
  if (s < 12) return l < 18 ? "⚫" : "⚪";
  if (h < 15 || h >= 345) return "🔴";
  if (h < 45) return "🟠";
  if (h < 70) return "🟡";
  if (h < 170) return "🟢";
  if (h < 255) return "🔵";
  return "🟣";
}

// ---- Convierte un color (hex o hsl) al nombre de color en español más parecido ----
function colorToName(colorStr) {
  const hsl = parseColorToHSL(colorStr);
  if (!hsl) return "Color";
  const { h, s, l } = hsl;
  if (s < 12) return l < 18 ? "Negro" : "Blanco";
  if (h < 15 || h >= 345) return "Rojo";
  if (h < 45) return "Naranja";
  if (h < 70) return "Amarillo";
  if (h < 170) return "Verde";
  if (h < 255) return "Azul";
  return "Morado";
}

function buildWhatsAppLink() {
  let msg = "¡Hola Jerry Jordan! Quiero consultar disponibilidad de estos productos:\n\n";
  cart.forEach((item, i) => {
    // Usa el nombre real del color guardado en el carrito; si por algún motivo
    // no existe (carritos guardados antes de este cambio), lo estima por tono.
    const colorLabel = item.colorName || colorToName(item.color);
    msg += `${i + 1}. ${item.name} — Color: ${colorLabel} — Talla: ${item.size} — Cantidad: ${item.qty} — ${formatSoles(item.price * item.qty)}\n`;
  });
  msg += `\nTotal estimado: ${formatSoles(cartTotal())}\n\n¿Me confirman tallas y stock disponible?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// clicks dentro del carrito (sumar, restar, eliminar)
document.getElementById("cart-items").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const key = btn.dataset.key;
  const action = btn.dataset.action;
  if (action === "inc") changeQty(key, 1);
  if (action === "dec") changeQty(key, -1);
  if (action === "remove") removeFromCart(key);
});

// ---- Modal "Sobre nosotros" ----
const aboutBtn = document.getElementById("about-btn");
const aboutModal = document.getElementById("about-modal");
const aboutModalOverlay = document.getElementById("about-modal-overlay");
const aboutModalClose = document.getElementById("about-modal-close");

function openAboutModal() {
  aboutModal.classList.add("open");
  aboutModalOverlay.classList.add("open");
  aboutModal.setAttribute("aria-hidden", "false");
}
function closeAboutModal() {
  aboutModal.classList.remove("open");
  aboutModalOverlay.classList.remove("open");
  aboutModal.setAttribute("aria-hidden", "true");
}

if (aboutBtn) {
  aboutBtn.addEventListener("click", openAboutModal);
  aboutModalClose.addEventListener("click", closeAboutModal);
  aboutModalOverlay.addEventListener("click", closeAboutModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAboutModal(); });
}

// ---- Menú móvil (hamburguesa) ----
const burgerBtn = document.getElementById("burger-btn");
const navLinks = document.getElementById("nav-links");

function closeMobileMenu() {
  navLinks.classList.remove("mobile-open");
  burgerBtn.setAttribute("aria-expanded", "false");
}

if (burgerBtn && navLinks) {
  burgerBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("mobile-open");
    burgerBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Cierra el menú al tocar un enlace
  navLinks.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMobileMenu();
  });

  // Cierra el menú si se toca fuera de él
  document.addEventListener("click", (e) => {
    if (!navLinks.classList.contains("mobile-open")) return;
    if (navLinks.contains(e.target) || burgerBtn.contains(e.target)) return;
    closeMobileMenu();
  });
}

// ---- Abrir / cerrar el drawer del carrito ----
const cartBtn = document.getElementById("cart-btn");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartClose = document.getElementById("cart-close");

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

cartBtn.addEventListener("click", () => { renderCart(); openCart(); });
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCart(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && navLinks && navLinks.classList.contains("mobile-open")) closeMobileMenu(); });

// ---- Toast de confirmación ----
let toastTimeout;
function showToast(text) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "toast";
    toast.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector("span").textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ---- Inicializar carrito al cargar ----
renderCart();

// ---- Reveal on scroll ----
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ==========================================================
// ---- MODAL DE DETALLE DE PRODUCTO (se abre sin salir de la página) ----
// ==========================================================
const productModal = document.getElementById("product-modal");
const productModalOverlay = document.getElementById("product-modal-overlay");
const productModalClose = document.getElementById("product-modal-close");
const productModalBody = document.getElementById("product-modal-body");

function openProductModal(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;

  const soldOut = p.colors.every(c => c.sizes.every(s => !s.stock));
  const defaultImg = p.colors[0].images[0];

  productModalBody.innerHTML = `
    <div class="pm-media">
      <div class="pm-zoom-frame" id="pm-zoom-frame">
        <img id="pm-main-image" src="${defaultImg}" alt="${p.name}">
      </div>
      <div class="pm-thumbs" id="pm-thumbs"></div>
    </div>
    <div class="pm-info">
      <div class="brand">${Array.isArray(p.cat) ? p.cat.join(" · ") : p.cat}</div>
      ${soldOut ? `<span class="badge soldout">Agotado</span>` : (p.badge ? `<span class="badge ${p.badge}">${badgeLabel(p.badge)}</span>` : "")}
      <div class="name-row">
        <h2>${p.name}</h2>
      </div>
      <div class="price-row">
        ${p.old ? `<span class="price-old">${formatSoles(p.old)}</span>` : ""}
        <span class="price">${formatSoles(p.price)}</span>
      </div>
      <p class="desc">${p.desc || "Prenda Jerry Jordan de edición streetwear."}</p>
      ${soldOut ? `
        <div class="pm-soldout-note">Este producto está agotado por el momento. Escríbenos por WhatsApp para avisarte cuando vuelva al stock.</div>
      ` : `
        <div class="pm-sizes-label">Seleccionar color</div>
        <div class="pm-color-select">
          ${p.colors.map((c, idx) => `<button type="button" class="pm-color-swatch" data-idx="${idx}" style="background:${c.hex}" title="${c.name}"></button>`).join("")}
        </div>
        <div class="pm-color-name" id="pm-color-name">Elige un color para ver sus tallas</div>

        <div class="pm-sizes-label">Elige tu talla</div>
        <div class="size-select" id="pm-size-select" data-empty="true">
          <span class="size-hint">Elige un color primero</span>
        </div>
        <div class="add-to-cart-row">
          <button class="btn btn-primary pm-add-btn" data-id="${p.id}" data-size="" data-color="" data-color-name="" data-img="" title="Elige color y talla" disabled>
            Agregar al carrito
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      `}
    </div>
  `;

  productModal.classList.add("open");
  productModalOverlay.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");

  setupImageZoom();

  // Si el producto tiene un solo color, no hace falta que el usuario lo "elija":
  // se selecciona automáticamente para que ya vea sus tallas y fotos de una vez.
  if (!soldOut && p.colors.length === 1) {
    selectModalColor(p, 0);
  }
}

// Zoom con el mouse: al mover el cursor sobre la foto del modal, la imagen se
// amplía siguiendo la posición del cursor. Se vuelve a llamar cada vez que se
// abre el modal, ya que la foto (y su elemento) se reconstruyen desde cero.
function setupImageZoom() {
  const frame = document.getElementById("pm-zoom-frame");
  const img = document.getElementById("pm-main-image");
  if (!frame || !img) return;

  frame.addEventListener("mousemove", (e) => {
    const rect = frame.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2.2)";
  });

  frame.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center center";
  });
}

// Aplica la selección de un color dentro del modal: resalta el cuadradito,
// actualiza la galería de fotos y reconstruye las tallas disponibles para ese color.
// La usan tanto el click del usuario como la auto-selección (color único).
function selectModalColor(product, idx) {
  const colorObj = product.colors[idx];
  if (!colorObj) return;

  productModalBody.querySelectorAll(".pm-color-swatch").forEach(b => b.classList.toggle("selected", Number(b.dataset.idx) === idx));

  const nameEl = document.getElementById("pm-color-name");
  if (nameEl) nameEl.textContent = colorObj.name;

  renderPmGallery(colorObj.images);

  const availableSizes = colorObj.sizes.filter(s => s.stock);
  const preselected = availableSizes.length === 1 ? availableSizes[0].t : null;

  const sizeContainer = document.getElementById("pm-size-select");
  sizeContainer.removeAttribute("data-empty");
  sizeContainer.innerHTML = sizeButtonsHTML(colorObj.sizes, preselected);

  const addBtn = productModalBody.querySelector(".pm-add-btn");
  if (addBtn) {
    addBtn.dataset.color = colorObj.hex;
    addBtn.dataset.colorName = colorObj.name;
    addBtn.dataset.img = colorObj.images[0] || "";
    addBtn.dataset.size = preselected || "";
    addBtn.disabled = !preselected; // falta talla si el color tiene más de una opción
  }
}

// Actualiza la foto principal del modal y arma la fila de miniaturas
// (solo aparece si ese color tiene más de una foto).
function renderPmGallery(images) {
  const mainImg = document.getElementById("pm-main-image");
  const thumbsEl = document.getElementById("pm-thumbs");
  if (!images || images.length === 0) return;

  if (mainImg) mainImg.src = images[0];

  if (thumbsEl) {
    if (images.length > 1) {
      thumbsEl.innerHTML = images
        .map((img, i) => `<button type="button" class="pm-thumb ${i === 0 ? "active" : ""}" data-img="${img}"><img src="${img}" alt="Foto ${i + 1}"></button>`)
        .join("");
    } else {
      thumbsEl.innerHTML = "";
    }
  }
}

function closeProductModal() {
  productModal.classList.remove("open");
  productModalOverlay.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
}

// Abrir modal al hacer click en el nombre de un producto (en cualquier grilla)
document.addEventListener("click", (e) => {
  const nameLink = e.target.closest(".product-name-link");
  if (nameLink) {
    openProductModal(nameLink.dataset.id);
    return;
  }

  // También se abre al hacer click en la foto del producto
  const media = e.target.closest(".product-media");
  if (media) {
    const card = media.closest(".product-card");
    if (card) openProductModal(card.dataset.id);
  }
});

// Selección de color, talla y miniaturas de foto dentro del modal
productModalBody.addEventListener("click", (e) => {
  // Cambiar de foto dentro del mismo color (miniaturas de galería)
  const thumbBtn = e.target.closest(".pm-thumb");
  if (thumbBtn) {
    productModalBody.querySelectorAll(".pm-thumb").forEach(b => b.classList.remove("active"));
    thumbBtn.classList.add("active");
    const mainImg = document.getElementById("pm-main-image");
    if (mainImg) mainImg.src = thumbBtn.dataset.img;
    const addBtn = productModalBody.querySelector(".pm-add-btn");
    if (addBtn && addBtn.dataset.color) addBtn.dataset.img = thumbBtn.dataset.img;
    return;
  }

  // Seleccionar color: reconstruye las tallas Y las fotos disponibles para ESE color
  const colorBtn = e.target.closest(".pm-color-swatch");
  if (colorBtn) {
    const addBtn = productModalBody.querySelector(".pm-add-btn");
    const id = addBtn ? addBtn.dataset.id : null;
    const product = products.find(p => p.id === id);
    if (!product) return;
    selectModalColor(product, Number(colorBtn.dataset.idx));
    return;
  }

  const sizeBtn = e.target.closest(".size-btn");
  if (sizeBtn && !sizeBtn.disabled) {
    productModalBody.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
    sizeBtn.classList.add("selected");
    const addBtn = productModalBody.querySelector(".pm-add-btn");
    if (addBtn) {
      addBtn.dataset.size = sizeBtn.dataset.size;
      addBtn.disabled = !addBtn.dataset.color; // el color ya es obligatorio antes de esto
    }
    return;
  }

  // Agregar al carrito desde el modal
  const addBtn = e.target.closest(".pm-add-btn");
  if (addBtn && !addBtn.disabled) {
    const id = addBtn.dataset.id;
    const size = addBtn.dataset.size;
    const color = addBtn.dataset.color;
    const colorName = addBtn.dataset.colorName;
    const img = addBtn.dataset.img;
    const product = products.find(p => p.id === id);
    if (!product) return;
    if (!color) {
      showToast("Selecciona un color primero");
      return;
    }
    if (!size) {
      showToast("Selecciona una talla primero");
      return;
    }
    addToCart(product, size, color, colorName, img);
    showToast(`${product.name} (${colorName}, Talla ${size}) agregado al carrito`);
    bumpBadge();
    closeProductModal();
  }
});


productModalClose.addEventListener("click", closeProductModal);
productModalOverlay.addEventListener("click", closeProductModal);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeProductModal(); });