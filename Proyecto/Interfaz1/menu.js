 const menuIcon = document.querySelector('.menu-icon');
  const menuItems = document.querySelector('.menu-items');

  menuIcon.addEventListener('click', () => {
    // alterna mostrar u ocultar el menú
    if (menuItems.style.display === 'flex') {
      menuItems.style.display = 'none';
    } else {
      menuItems.style.display = 'flex';
    }
  });