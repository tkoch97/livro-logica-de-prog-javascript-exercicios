const form = document.querySelector("form");
const outResult = document.getElementById("outResult");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const hourInBrasil = Number(form.inHourInBrasil.value);

 let hourInFrance = hourInBrasil + 5;

  if(hourInFrance > 24) {
    hourInFrance = hourInFrance - 24;
  }

  outResult.innerText = `Agora na França são ${hourInFrance.toFixed(2)} horas.`
})