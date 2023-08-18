const form = document.querySelector("form");
const outPromo = document.getElementById("outPromo");
const outThirdProductValue = document.getElementById("outThirdProductValue");

form.addEventListener("submit", (e) => {
  const inProduct = String(form.inProduct.value);
  const inPrice = Number(form.inPrice.value);
  const priceFromThirdProduct = inPrice/2;

  const promoResult = (inPrice*2) + (priceFromThirdProduct);

  outPromo.innerText = `${inProduct} - Promoção: Leve 3 por R$: ${promoResult.toFixed(2)}`;
  outThirdProductValue.innerText = `O terceiro produto sai por anpenas R$: ${priceFromThirdProduct.toFixed(2)}`;

  e.preventDefault()
})