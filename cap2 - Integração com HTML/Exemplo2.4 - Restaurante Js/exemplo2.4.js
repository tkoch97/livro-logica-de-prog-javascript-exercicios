const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  const priceForKilo = Number(form.inPriceForKilo.value);
  const consumption = Number(form.inConsumption.value);

  console.log(consumption)
  
  const value = (priceForKilo / 1000) * consumption;
  console.log(value)
  resp.innerText = `Valor a ser pago: R$ ${value.toFixed(2)}`;

  e.preventDefault()
})