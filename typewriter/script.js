const title = document.querySelector('h1');
console.log(title)

function typeWriter(element) {
  //separar letra por letra
  const textArray = element.innerHTML.split('');

  element.innerHTML = '' //limpar texto da tela para começar animação

  //para cada letra irá adicionar a próxima
  textArray.forEach((letter, i) => {

    setTimeout(() => {
      element.innerHTML += letter
    }, 75*i); //75 * i = ir adicionando uma a uma como uma máquina de escrever
 
  });
}

typeWriter(title)