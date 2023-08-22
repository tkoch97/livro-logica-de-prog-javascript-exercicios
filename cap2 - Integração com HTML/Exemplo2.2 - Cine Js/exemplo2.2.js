const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
  const title = form.inTitle.value;
  const duration = Number(form.inDuration.value);

  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  resp1.innerText = title;
  if(minutes > 0) {
    resp2.innerText = `${hours} hora(s) e ${minutes} minutos de duração`;
} else {
    resp2.innerText = `${hours} hora(s) de duração`;
};
  
  e.preventDefault();

})