const caixablanca = document.querySelector('.caixablanca');
const caixablancaAberta = document.querySelector('.caixablancaAberta');
const caixablancabutton = document.querySelector('.caixablanca button');
const caixablancaAbertabutton = document.querySelector('.caixablancaAberta button');
const caixablancaAbertap = document.querySelector('.arreyados')

caixablancabutton.addEventListener('click', handleClick);
caixablancaAbertabutton.addEventListener('click', handleResetClick);

var array = ["Se alguém está tão cansado que\n não possa te dar um sorriso,\ndeixa-lhe o teu","Não se mata carlos,\n hoje é domingo ainda da para ver o sol","procure ascender uma vela em vez\n de amaldiçoar a escuridão","Nada é tão bom que não possa melhorar", "Não seja tão fraco quanto parece","Hoje é seu dia"]


function handleClick(){
  let i = (Math.floor(Math.random() * array.length))
  caixablancaAbertap.innerText = `${array[i]}`
  caixablanca.classList.add('hide');
  caixablancaAberta.classList.remove('hide');
}
function handleResetClick(){
  caixablanca.classList.remove('hide');
  caixablancaAberta.classList.add('hide');
}





