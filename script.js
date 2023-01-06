function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem, no caso esta a mesma imagem paraa os dois modos escuro e o normal
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light(estão a mesma imagem para ambos)
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
