const hoy = new Date(), meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let mes = hoy.getMonth(), año = hoy.getFullYear(), selected = null;

const datesDiv = document.getElementById("dates");
const monthYearDiv = document.getElementById("mesDelAño");

function showCalendar(m, y) {
  datesDiv.innerHTML = "";
  monthYearDiv.textContent = `${meses[m]} ${y}`;
  const primerDia = new Date(y, m, 1).getDay();
  const diasMes = new Date(y, m + 1, 0).getDate();

  for (let i = 0; i < primerDia; i++) datesDiv.appendChild(document.createElement("div"));

  for (let d = 1; d <= diasMes; d++) {
    const celda = document.createElement("div");
    celda.textContent = d;
    celda.onclick = () => {
      selected?.classList.remove("selected");
      celda.classList.add("selected");
      selected = celda;
    };
    datesDiv.appendChild(celda);
  }
}


//boton anterior
document.getElementById("prev").onclick = () => {
  mes = mes > 0 ? mes - 1 : 11;
  if (mes === 11) año--;
  showCalendar(mes, año);
};

//boton siguiente
document.getElementById("next").onclick = () => {
  mes = mes < 11 ? mes + 1 : 0;
  if (mes === 0) año++;
  showCalendar(mes, año);
};

showCalendar(mes, año);
