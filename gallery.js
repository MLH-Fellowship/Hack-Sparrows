const current = document.querySelector("#selected");
const thumbs = document.querySelectorAll(".thumbs img");
const opacity = 0.5;

// Set opacity of first image
thumbs[0].style.opacity = opacity;

thumbs.forEach(img => img.addEventListener("click", imgActivate));

function imgActivate(e) {
  // Reset opacity on all thumbs
  thumbs.forEach(img => (img.style.opacity = 1));

  // Change current image to source of clicked image
  current.src = e.target.src;

  // Set title to clicked image title
  current.title = e.target.title;

  // Add fadeIn class
  current.classList.add("fade-in");

  // Remove fadeIn class after animation time elapsed
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change opacity to variable value
  e.target.style.opacity = opacity;
}