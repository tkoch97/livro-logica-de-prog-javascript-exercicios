const form = document.querySelector("form");
const outResult = document.getElementById("outResult");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = String(form.inName.value);
  const masc = form.inMasc.checked;
  const height = Number(form.inHeight.value);

  const peso = masc ? 22 * Math.pow( height, 2 ) : 21 * Math.pow( height, 2 ); // Com operador ternário

  // let peso

  // if(masc) {
  //   peso = 22 * Math.pow( height, 2 )
  // } else {
  //   peso = 21 * Math.pow( height, 2 )
  // }

  outResult.innerText = `${name}: Seu peso ideial é de ${Math.ceil(peso)} Kg.`
})