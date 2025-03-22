export function toggleMenu() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const body = document.body;
  const menu = document.getElementById('navbarSupportedContent');

  if (!navbarToggler) return;

  navbarToggler.addEventListener('click', () => {
    if (body.classList.contains('fixed')) {
      body.classList.remove('fixed');
    } else {
      body.classList.add('fixed');
    }
  });

  menu.addEventListener('click', () => {
    body.classList.remove('fixed');
    menu.classList.remove('show');
  });
}
