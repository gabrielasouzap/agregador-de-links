function toggleMode(){
  const html = document.documentElement

  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else{
  //   html.classList.add('light')}
  // a função TOGGLE faz a mesma coisa que o codigo acima
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector('#profile img')
  // substituir a imagem
  if(html.classList.contains('light')){
    // se tiver sem ligth mode, manter a imagem padrão
    img.setAttribute('src', './assets/avatar-light.png')
  
  } else{
    // se tiver ligth mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
  }

  
  
}