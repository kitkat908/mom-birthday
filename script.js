/* =========================
   OPEN SURPRISE BUTTON
========================= */

const openSurpriseBtn = document.getElementById("openSurpriseBtn");

openSurpriseBtn.addEventListener("click", () => {
  document.getElementById("message").scrollIntoView({
    behavior: "smooth"
  });
});

/* =========================
   PHOTO LIGHTBOX
   Replace image paths in index.html inside the gallery section.
========================= */

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightbox.classList.add("active");
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

/* Close lightbox using Escape key */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightbox.classList.remove("active");
  }
});

/* =========================
   SPECIAL MESSAGE + CONFETTI
========================= */

const specialMessageBtn = document.getElementById("specialMessageBtn");
const hiddenMessage = document.getElementById("hiddenMessage");

specialMessageBtn.addEventListener("click", () => {
  hiddenMessage.classList.add("show");
  createConfetti();

  specialMessageBtn.textContent = "You are loved forever ❤️";
});

/* Simple confetti animation without external libraries */
function createConfetti() {
  const colors = ["#e98aa7", "#d9a441", "#ffffff", "#c7a4ff", "#ffbfd2", "#ffe7a3"];

  for (let i = 0; i < 90; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 0.8 + "s";
    confetti.style.animationDuration = Math.random() * 2 + 2.5 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4500);
  }
}

/* =========================
   FLOATING HEARTS / STARS / BALLOONS
========================= */

const floatingContainer = document.getElementById("floatingContainer");
const floatingSymbols = ["❤️", "💖", "✨", "⭐", "🎈", "🌸"];

function createFloatingItem() {
  const item = document.createElement("div");
  item.classList.add("floating-item");

  item.textContent = floatingSymbols[Math.floor(Math.random() * floatingSymbols.length)];
  item.style.left = Math.random() * 100 + "vw";
  item.style.fontSize = Math.random() * 16 + 16 + "px";
  item.style.animationDuration = Math.random() * 6 + 7 + "s";

  floatingContainer.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 13000);
}

/* Create floating elements repeatedly */
setInterval(createFloatingItem, 650);

/* Create a few immediately on page load */
for (let i = 0; i < 12; i++) {
  setTimeout(createFloatingItem, i * 250);
}
