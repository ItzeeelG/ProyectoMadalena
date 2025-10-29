// Primer modal
const btn1 = document.getElementById('btn1');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

btn1.addEventListener('click', () => {
  modal.style.display = 'block';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});


// Segundo modal
const btn2 = document.getElementById('btn2');
const modal2 = document.getElementById('modal2');
const close2 = document.getElementById('close2');

btn2.addEventListener('click', () => {
  modal2.style.display = 'block';
});

close2.addEventListener('click', () => {
  modal2.style.display = 'none';
});
