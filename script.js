const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('.menu')?.addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  if (nav.style.display === 'flex') {
    nav.style.position='absolute'; nav.style.top='86px'; nav.style.left='0'; nav.style.right='0';
    nav.style.padding='20px'; nav.style.background='#0b0b0b'; nav.style.flexDirection='column'; nav.style.borderBottom='1px solid #292929';
  }
});
