const body = document.querySelector('body'),
  modeToggle = body.querySelector('.mode-toggle');
sidebar = body.querySelector('nav');
sidebarToggle = body.querySelector('.sidebar-toggle');

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});
