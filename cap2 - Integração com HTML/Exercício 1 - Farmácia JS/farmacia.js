const form = document.querySelector("form");
const promoTitle = document.getElementById("promoTitle");
const promoValue = document.getElementById("promoValue");

form.addEventListener("submit", (e) => {

  const mediName = (form.inMedi.value);
  const mediPrice = Number(form.inPrice.value);

  const promoResult = Math.floor(mediPrice * 2);

  promoTitle.innerText = `Promoção de ${mediName}.`;
  promoValue.innerText = `Leve 2 por apenas R$: ${promoResult.toFixed(2)}.`;

  e.preventDefault()
})