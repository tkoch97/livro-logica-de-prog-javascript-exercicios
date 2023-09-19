const insertAllowedSpeed = document.querySelector("#inAllowedSpeed");
const insertDriverSpeed = document.querySelector("#inDriverSpeed");
const submitButton = document.querySelector("#submitButton");
const resp = document.querySelector("h3");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const allowedSpeed = Number(insertAllowedSpeed.value);
  const driverSpeed = Number(insertDriverSpeed.value);

  if (driverSpeed <= allowedSpeed) {
    resp.innerText = `Situação: Sem multa`
  } else {
    const overTwentyPercent = allowedSpeed * 1.2
    if (driverSpeed <= overTwentyPercent) {
      resp.innerText = `Situação: Multa leve`
    } else if(driverSpeed > overTwentyPercent) {
      resp.innerText = `Situação: Multa grave`
    }
  }
})