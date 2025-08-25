const starContainer = document.getElementById("stars");

// Generate 150 stars
for (let i = 0; i < 150; i++) {
  let star = document.createElement("div");
  star.className = "star";
  // Random position
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  // Random size
  let size = Math.random() * 3 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";
  // Random animation duration
  star.style.animationDuration = (1.5 + Math.random() * 2) + "s";
  starContainer.appendChild(star);
}

// Generate shooting stars (meteors)
function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.className = "shooting-star";
  
  // Random start position
  shootingStar.style.top = Math.random() * 50 + "vh";  // upper half of screen
  shootingStar.style.left = Math.random() * 100 + "vw";

  // Random delay so they don't all fall at once
  shootingStar.style.animationDelay = Math.random() * 5 + "s";

  starContainer.appendChild(shootingStar);

  // Remove after animation to keep DOM clean
  setTimeout(() => {
    shootingStar.remove();
  }, 3000);
}

// Create a new shooting star every few seconds
setInterval(createShootingStar, 2000);

