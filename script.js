const form = document.querySelector("#exercise-form");
const imgAprovaded = "<img src='./images/aprovado.png' alt='emoji triste' />";
const imgReprovaded = "<img src='./images/reprovado.png' alt='emoji feliz' />";
const spanAprovaded = "<span class='aprovado'>Aprovado</span>";
const spanReprovaded = "<span class='reprovado'>Reprovado</span>";
const notes = [];
const execises = [];
const minNote = parseFloat(prompt("Digite a nota mínima de 0 à 100: "));

let lines = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addLines();
  updateTable();
  calculaMediaFinal();
  updateMedia();
});

function addLines() {
  const exName = document.querySelector("#exercise-name");
  const exNote = document.querySelector("#exercise-note");

  if (execises.includes(exName.value)) {
    alert(`${exName.value} já foi inserida.`);
  } else {
    execises.push(exName.value);
    notes.push(parseFloat(exNote.value));

    let line = "<tr>";
    line += `<td>${exName.value}</td>`;
    line += `<td>${exNote.value}</td>`;
    line += `<td>${
      exNote.value >= minNote ? imgAprovaded : imgReprovaded
    }</td>`;
    line += "</tr>";

    lines += line;
  }

  exName.value = "";
  exNote.value = "";
}

function updateTable() {
  const bodyTable = document.querySelector("tbody");
  bodyTable.innerHTML = lines;
}

function updateMedia() {
  const mediaFinal = calculaMediaFinal();

  document.querySelector("#media-final-valor").innerHTML = mediaFinal;
  document.querySelector("#media-final-resultado").innerHTML =
    mediaFinal >= minNote ? spanAprovaded : spanReprovaded;
}

function calculaMediaFinal() {
  let somaNotes = 0;
  for (let i = 0; i < notes.length; i++) {
    somaNotes += notes[i];
  }
  return somaNotes / notes.length;
}