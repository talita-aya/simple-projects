let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let mountains_front = document.getElementById("mountains_front");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
  let value = this.window.scrollY;
  stars.style.left = value * 0.25 + 'px'; //fazer as estrelas se mexerem para a direita conforme desce a página
  moon.style.top = value * 1.05 + 'px'; //fazer a lua se mexer para baixo
  mountains_behind.style.top = value * 0.5 + 'px'; //fazer as montanhas do fundo se mexerem para baixo
  mountains_front.style.top = value * 0 + 'px'; //montanhas da frente
  text.style.marginRight = value * 4 + 'px'; //fazer o título ir para a esquerda
  text.style.marginTop = value * 1.5 + 'px'; //fazer o título descer
  btn.style.marginTop = value * 1.5 + 'px'; //fazer o botão descer
  header.style.top = value * 0.5 + 'px'; //fazer o header descer
})