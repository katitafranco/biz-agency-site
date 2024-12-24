/* Navbar  */

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});

/* Fin Navbar */

/* Video */
const video = document.querySelector(".video");
const btn = document.querySelector(".buttons button i");
const bar = document.querySelector(".video-bar");

//Funcin para reproducir o pausar el video y cambiar el icono y  la opacidad
const playPause = () => {
  if (video.pause) {
    video.play();
    btn.className = "far fa-pause-circle";
    //cambiar el icono de play al de pausa
    video.style.opacity = "0.7";
    //cambiar la opacidad del video a menos
  } else {
    video.pause();
    btn.className = "far fa-play-circle";
    video.style.opacity = "0.3";
  }
};
//agregar un event listener al boton para activar la funcion playpause
btn.addEventListener("click", () => {
  playPause();
});
//agregar un event listener al video para actualizar la barra de progreso y realizar acciones al finalizar
video.addEventListener("timeupdate", () => {
  //tiempo actual y duraccion del video
  /* console.log(video.currentTime, video.duration);
   */

  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%`;
  //Establecer el ancho de la barra de progreso en porcentaje

  //Verificar si el video ha finalizado
  if (video.ended) {
    btn.className = "far fa-play-circle";
    video.style.opacity = "0.3";
  }
});
/* End Video */
