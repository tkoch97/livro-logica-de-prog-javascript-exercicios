const form = document.querySelector("form");
const outResult = document.getElementById("outResult");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inSqrt = Number(form.inSqrt.value);

 const sqrt = Math.sqrt(inSqrt);

  if(Number.isInteger(sqrt)) {
    outResult.innerText = `Raíz: ${sqrt}`
  } else {
    outResult.innerText = `O número ${inSqrt} não tem raíz quadrada exata.`
  }

})