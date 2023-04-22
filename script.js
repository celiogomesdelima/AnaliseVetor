let num = document.getElementById("inum");
let lista = document.getElementById("iselvet");
let res = document.getElementById("res");
let cons = document.getElementsByTagName("aside")[0];
var vetor = [];

function adicionar() {
  res.innerHTML = "";
  if (validarAdicao(num.value, vetor) == true) {
    vetor.push(Number(num.value));
    res.innerHTML = "<p class='sucesso'>Inclusão realizada com sucesso</p>";
  } else {
    res.innerHTML =
      "<p class='erro'>O número informado não está dentro do intervalo permitido ou já está presente no vetor.</p>";
  }
  num.value = "";
  num.focus();
  exibir();
  consolidar();
}
function excluir() {
  res.innerHTML = "";
  if (validarExclusao(num.value, vetor) == true) {
    indice = vetor.indexOf(Number(num.value));
    vetor.splice(indice, 1);
    res.innerHTML = "<p class='sucesso'>Exclusão realizada com sucesso</p>";
  } else {
    res.innerHTML =
      "<p class='erro'>O número informado não está dentro do intervalo permitido ou não está presente no vetor.</p>";
  }
  num.value = "";
  num.focus();
  exibir();
  consolidar();
}
function validarAdicao(n, v) {
  if (Number(n) >= 1 && Number(n) <= 100 && v.indexOf(Number(n)) == -1) {
    return true;
  } else {
    return false;
  }
}
function validarExclusao(n, v) {
  if (Number(n) >= 1 && Number(n) <= 100 && v.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}
function exibir() {
  lista.innerHTML = "";
  for (let v in vetor) {
    let item = document.createElement("option");
    item.text = vetor[v];
    lista.appendChild(item);
  }
}
function consolidar() {
  if (vetor.length == 0) {
    cons.innerHTML = "<span>O vetor não possui elementos</span>";
  } else {
    let tot = vetor.length;
    let soma = 0;
    let vetord = vetor.sort();
    for (let v in vetor) {
      soma += vetor[v];
    }
    let media = (soma / tot);

    cons.innerHTML = `<span>O vetor possui ${tot} elemento(s)<br/>O menor número é: ${vetord[0]}<br/>O maior número é: ${vetord[tot-1]} <br/>A soma dos números do vetor é: ${soma}<br/>A média dos números do vetor é: ${media.toFixed(1)}<br/></span>`;
  }
}
