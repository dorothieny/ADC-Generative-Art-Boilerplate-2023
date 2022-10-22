document.addEventListener('DOMContentLoaded', () => {

  const container = document.getElementById('prototype_3')
  const canvas = document.createElement('canvas')
  canvas.id = "tutorial"
  canvas.width = '700'
  canvas.height = '700'

  var scaleX = window.innerWidth / canvas.width;
  var scaleY = window.innerHeight / canvas.height;

  var scaleToFit = Math.min(scaleX, scaleY);
  var scaleToCover = Math.max(scaleX, scaleY);
  const button = document.createElement('button')
  button.classList.add('awesome-btn')

  button.innerText = 'smth'
  container.appendChild(button)
  container.style.transformOrigin = '0 0'; //scale from top left
  container.style.transform = 'scale(' + scaleToFit + ')';
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(10, 20, 1000, 600);


    ctx.strokeStyle = "rgba(133, 255, 103)";
    ctx.strokeRect(50, 50, 600, 200);


    ctx.fillStyle = "rgba(133, 255, 103)";
    ctx.strokeStyle = "rgba(0, 0, 0)";
    ctx.beginPath();
    ctx.arc(100, 100, 100, 0, Math.PI * 2, true); // Внешняя окружность
    ctx.fill();
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // рот (по часовой стрелке)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Левый глаз
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Правый глаз
    ctx.stroke();

  } else {
    // canvas-unsupported code here
  }
  container.appendChild(canvas)
})