const inputValue = document.querySelector("#inValue");
const submitButton = document.querySelector("#submitButton");
const outTime = document.querySelector("#outTime");
const outChange = document.querySelector("#outChange");

submitButton.addEventListener("click", (e) => {
  e.preventDefault()

  const depositedValue = Number(inputValue.value)

  if(depositedValue < 1.00) {
    alert("O valor mínimo é de R$ 1.00")
    inputValue.focus()
  }

  let time
  let change

  if(depositedValue >= 3.00){
    time = 120;
    change = depositedValue - 3.00;
  } else if(depositedValue >= 1.75) {
    time = 60;
    change = depositedValue - 1.75;
  } else {
    time = 30;
    change = depositedValue - 1.00;
  }

   
  if(time) {
    if (time === 120) {
      outTime.innerText = `Tempo para permanecer estacionado: ${time/60} horas`;
    } else {
      outTime.innerText = `Tempo para permanecer estacionado: ${time} min`;
    }
  }
  if (change && change > 0) {
    outChange.innerText = `Troco: R$${change.toFixed(2)}`;
  } else {
    outChange.innerText = null
  }
})