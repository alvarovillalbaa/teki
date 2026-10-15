const formats = {
  build: {
    category: "01 / CREAR",
    title: "Build & coffee",
    description:
      "Un rato para avanzar en eso que te ronda la cabeza. Trae tu portátil o tu cuaderno, comparte en qué estás y encuentra otra perspectiva.",
    expectations: [
      "Tiempo para trabajar en tu propio proyecto.",
      "Conversaciones para desbloquear ideas y aprender de otros.",
      "Una puesta en común breve, sin presentaciones perfectas.",
    ],
  },
  meet: {
    category: "02 / CONECTAR",
    title: "Demo & drinks",
    description:
      "Un encuentro para enseñar lo que estás creando y hablar de cómo lo has hecho. Prototipos, experimentos y aprendizajes tienen sitio aquí.",
    expectations: [
      "Demos cortas y preguntas de verdad.",
      "Espacio para proyectos en cualquier fase.",
      "Tiempo para conversar después; cada cual elige su bebida.",
    ],
  },
  move: {
    category: "03 / MOVERSE",
    title: "teki run",
    description:
      "Salir a movernos, conversar y volver con la cabeza más despejada. La idea es un recorrido tranquilo y terminar con un café.",
    expectations: [
      "Un ritmo social para poder hablar.",
      "Ruta, distancia y punto de encuentro acordados antes de salir.",
      "Una conversación que puede seguir en la sobremesa.",
    ],
  },
};

const header = document.querySelector(".header");
const navigation = document.querySelector("#navigation");
const menuToggle = document.querySelector(".menu-toggle");
header.classList.add("no-js");
if (navigation && menuToggle) {
  header.classList.remove("no-js");
  const mobile = window.matchMedia("(max-width: 620px)");
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.hidden = mobile.matches;
  };
  const syncMenu = () => {
    menuToggle.hidden = !mobile.matches;
    closeMenu();
  };
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navigation.hidden = expanded;
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuToggle.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menuToggle.focus();
    }
  });
  mobile.addEventListener("change", syncMenu);
  syncMenu();
}

const filters = document.querySelector(".filters");
const cards = [...document.querySelectorAll(".plan[data-category]")];
if (filters) {
  filters.hidden = false;
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    const filter = button.dataset.filter;
    if (filter !== "all" && !Object.hasOwn(formats, filter)) return;
    filters.querySelectorAll("button").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    let count = 0;
    cards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
      if (!card.hidden) count += 1;
    });
    document.querySelector("#filter-status").textContent =
      `${count} ${count === 1 ? "plan disponible" : "planes disponibles"}. Fechas por confirmar.`;
  });
}

const dialog = document.querySelector("#format-dialog");
if (dialog && typeof dialog.showModal === "function") {
  let trigger;
  document.querySelectorAll("[data-format]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const format = formats[link.dataset.format];
      if (!format) return;
      event.preventDefault();
      trigger = link;
      document.querySelector("#dialog-category").textContent = format.category;
      document.querySelector("#dialog-title").textContent = format.title;
      document.querySelector("#dialog-description").textContent =
        format.description;
      const expectations = format.expectations.map((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        return item;
      });
      document
        .querySelector("#dialog-expectations")
        .replaceChildren(...expectations);
      dialog.showModal();
      document.body.classList.add("dialog-open");
    });
  });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    trigger?.focus();
  });
}
