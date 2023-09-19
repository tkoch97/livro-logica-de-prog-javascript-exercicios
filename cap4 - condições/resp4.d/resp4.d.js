const sideA = document.querySelector("#inLadoA");
const sideB = document.querySelector("#inLadoB");
const sideC = document.querySelector("#inLadoC");
const yesOrNot = document.querySelector("#outSimNao");
const triangleType = document.querySelector("#outTipo");
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const sideAValue = Number(sideA.value);
  const sideBValue = Number(sideB.value);
  const sideCValue = Number(sideC.value);
  
  if (sideAValue > sideBValue + sideCValue || 
    sideBValue > sideCValue + sideAValue || 
    sideCValue > sideAValue + sideBValue ) {
    yesOrNot.innerText = "Não é possível formar um triângulo.";
    triangleType.innerText = null;
  } else {
    yesOrNot.innerText = "Lados podem formar um triângulo.";

    if(sideAValue === sideBValue && sideAValue === sideCValue) {
      triangleType.innerText = "Tipo: Triângulo equilátero.";
    } else if (sideAValue === sideBValue || sideBValue === sideCValue || sideCValue === sideAValue) {
      triangleType.innerText = "Tipo: Triângulo isósceles.";
    } else {
      triangleType.innerText = "Tipo: Triângulo escaleno.";
    }
  }

})