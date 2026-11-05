// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Show a labeled placeholder for any photo that hasn't been added yet
document.querySelectorAll('.photo img').forEach((img) => {
  const mark = () => img.parentElement.classList.add('missing');
  if (img.complete && img.naturalWidth === 0) mark();
  img.addEventListener('error', mark);
});

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
