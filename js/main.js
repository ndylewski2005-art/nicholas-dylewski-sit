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

// Contact form: build the message, then let the visitor send it with Gmail, Outlook or their email app
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const to = form.dataset.email;
    const subject = `Website message from ${d.get('name')}: ${d.get('reason')}`;
    const body = `${d.get('message')}\n\n${d.get('name')}\n${d.get('email')}`;
    const q = (k, v) => `${k}=${encodeURIComponent(v)}`;
    document.getElementById('send-gmail').href =
      `https://mail.google.com/mail/?view=cm&fs=1&${q('to', to)}&${q('su', subject)}&${q('body', body)}`;
    document.getElementById('send-outlook').href =
      `https://outlook.live.com/mail/0/deeplink/compose?${q('to', to)}&${q('subject', subject)}&${q('body', body)}`;
    document.getElementById('send-app').href = `mailto:${to}?${q('subject', subject)}&${q('body', body)}`;
    const box = document.getElementById('send-options');
    box.hidden = false;
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
