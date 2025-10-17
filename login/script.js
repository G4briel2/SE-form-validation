function scaleContainer() {
  const container = document.querySelector('.container-container');
  const baseHeight = 620;
  const scale = window.innerHeight / baseHeight;
  container.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', scaleContainer);
scaleContainer();
