const links = document.querySelectorAll(".sidebar nav a");
const current = window.location.pathname;

links.forEach(link => {
  if (current.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});
