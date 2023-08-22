const form = document.querySelector("form");
const model = document.getElementById("model");
const valueOpening = document.getElementById("opening");
const valueParse = document.getElementById("parse");

form.addEventListener("submit", (e) => {
  const carModel = form.inVeicle.value;
  const price = Number(form.inPrice.value);

  const opening = price * 0.20;
  const parse = (price * 0.80) / 12;

  model.innerText = `Modelo do Veículo: ${carModel}`;
  valueOpening.innerText = `Valor da entrada de 20%: R$ ${opening.toFixed(2)}`
  valueParse.innerText = `+12 parcelas de: R$ ${parse.toFixed(2)}`
  
  e.preventDefault();

})