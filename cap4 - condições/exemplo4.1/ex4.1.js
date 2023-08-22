const form = document.querySelector("form");
const outAverage = document.getElementById("outAverage");
const outSituation = document.getElementById("outSituation");

form.addEventListener("submit", (e) => {

  const studentName = form.inStudentName.value;
  const firstGrade = Number(form.inFirstGrade.value);
  const secondGrade = Number(form.inSecondGrade.value);

  const average = (firstGrade + secondGrade) / 2;

  outAverage.innerText = `Média do aluno: ${average.toFixed(1)}`;

  if(average >= 7) {

    outSituation.innerText = `Parabéns ${studentName}, você está aprovado(a)!`
    outSituation.style.color = "blue";

  }else{
    outSituation.innerText = `Poxa ${studentName}, você foi reprovado(a).`
    outSituation.style.color = "red";
  }

  e.preventDefault();

});