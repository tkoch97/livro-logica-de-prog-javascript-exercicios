const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const number = Number(form.inNumero.value);

  let result=`Entre ${number} e 1: ${number}`;

  // Essa solução não é recomendada, pois o número de comparações realizadas pelo programa é mt alto caso o usuário digite um número alto, e a solução pouco eficiente.
  // for(let i = number; i >= 1; i--) {
  //   if(i == 1) {
  //     result += `${i}.`
  //   } else {
  //     result += `${i}, `
  //   }
  // }
  
  // for(let i = number; i > 1; i--) {
  //     result += `${i}, `
  //   }

  // result += `1.`

  for(let i = number - 1; i > 0; i--) {
    result = result + ',' + i;
  }


  resp.innerText = result;
})