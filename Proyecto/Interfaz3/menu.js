const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu-items');

menuIcon.addEventListener('click', () => {
  if (menuItems.style.display === 'flex') {
    menuItems.style.display = 'none';
  } else {
    menuItems.style.display = 'flex';
  }
});
