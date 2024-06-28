const caixablanca = document.querySelector('.caixablanca');
const caixablancaAberta = document.querySelector('.caixablancaAberta');
const caixablancabutton = document.querySelector('.caixablanca button');
const caixablancaAbertabutton = document.querySelector('.caixablancaAberta button');
const caixablancaAbertap = document.querySelector('.arreyados')

caixablancabutton.addEventListener('click', handleClick);
caixablancaAbertabutton.addEventListener('click', handleResetClick);

var array = ["Se alguém está tão cansado que não possa te dar um sorriso,deixa-lhe o teu","Não se mata carlos, hoje é domingo ainda da para ver o sol","Você é mais corajoso do que acredita, mais forte do que parece e está mais preparado do que imagina.","Nada é tão bom que não possa melhorar", "Para que serve os sentimentos, se for para guardalos em voçê","Hoje é seu dia"]


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



