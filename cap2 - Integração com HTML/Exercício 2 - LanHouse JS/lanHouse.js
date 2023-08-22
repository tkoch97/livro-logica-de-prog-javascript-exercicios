const form = document.querySelector("form");
const payValue = document.getElementById("payValue");

form.addEventListener("submit", (e) => {

  const valueFor15Minutes = Number(form.in15Minutes.value);
  const useTime = Number(form.inUseTime.value);

  const completeBreak = Math.floor( useTime / 15 );
  const restOfUseTime = useTime % 15;

  const result = (completeBreak + (restOfUseTime > 0 ? 1 : 0)) * valueFor15Minutes;

  console.log(completeBreak);
  console.log(restOfUseTime);
  console.log(result);

  payValue.innerText = `Valor a pagar R$: ${result.toFixed(2)}.`

  e.preventDefault();

})