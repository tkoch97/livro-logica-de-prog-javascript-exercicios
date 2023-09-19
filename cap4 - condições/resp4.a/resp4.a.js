const insertNumber = document.querySelector("#inNumero");
const submitButton = document.querySelector("#submitButton");
const resp = document.querySelector("h3");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const number = Number(insertNumber.value);

  const result = number % 2 == 0 ? "É par!" : "É ímpar!";


  resp.innerText = `O número ${number} ${result}`;
})