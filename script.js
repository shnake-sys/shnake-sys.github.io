
const container = document.querySelector('.snow-container');

function createSnowflake() {
  const flake = document.createElement('div');
  flake.classList.add('snowflake');

  const size = Math.random() * 3 + 2; // ļoti mazas
  flake.style.width = size + 'px';
  flake.style.height = size + 'px';

  flake.style.left = Math.random() * 100 + 'vw';
  flake.style.animationDuration = (Math.random() * 4 + 4) + 's';
  flake.style.opacity = Math.random();

  container.appendChild(flake);

  setTimeout(() => flake.remove(), 8000);
}

setInterval(createSnowflake, 120); // jo mazāk skaitlis, jo vairāk sniega

