function scaleContainer() {
  const container = document.querySelector('.container-container');
  const baseHeight = 620;
  const scale = window.innerHeight / baseHeight;
  container.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', scaleContainer);
scaleContainer();

 const simbolos = [
  "▲", "■", "▬", "◆", "⬣", "⬢", "⬡", "●", "◉", "◍",
  "◇", "⬟", "⬠", "⬢", "⬣", "⬤", "⬧", "⬨", "⌬", "⟁",
  "◬", "◭", "◮", "⚙", "☢", "☠", "☣", "⧫", "⍟",
  "⊗", "⊙", "◈", "◊", "⬣", "⧋", "⬚", "⧫", "⬘", "⩸"
];

const aleatorio = simbolos[Math.floor(Math.random() * simbolos.length)];

const userKey = document.getElementById('userKey');

userKey.addEventListener('input', () => {
  let val = userKey.value.replace(/[^a-zA-Z0-9]/g, '');

  val = val.slice(0, 13);

  let masked = val;
  if (val.length > 9) {
    masked = val.replace(/(.{3})(.{3})(.{3})(.{0,4})/, `$1.${aleatorio}$2.$3-$4`);
  } else if (val.length > 6) {
    masked = val.replace(/(.{3})(.{3})(.{0,3})/, `$1.${aleatorio}$2.$3`);
  } else if (val.length > 3) {
    masked = val.replace(/(.{3})(.{0,3})/, `$1.${aleatorio}$2`);
  }

  userKey.value = masked;
});

dnaHash.addEventListener('input', () => {
  let val = dnaHash.value;

  val = val.replace(/\D/g, '');

  if (val.length > 1) {
    val = val[0] + 'x' + val.slice(1);
  }

  val = val.slice(0, 11);

  dnaHash.value = val;
});

// vvvvvvvvvvvvvvvvvvvvvvv VALIDAÇÃO vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

const button = document.querySelector('.button');
const errorStrips = document.querySelectorAll('.errorStrip');
const errorSound = document.getElementById('errorSound');
const accessGranted = document.querySelector('.accessGranted');
const blurBg = document.querySelector('.blurBg');
const accessGrantedSound = document.getElementById('accessGrantedSound');

button.addEventListener('click', (e) => {
  e.preventDefault();

  let hasEmpty = false;

  const inputs = document.querySelectorAll('form input');

  inputs.forEach(input => {
    const label = document.querySelector(`label[for="${input.id}"]`);

    if (!input.value.trim()) {
      hasEmpty = true;

      label.classList.remove('errorAnimate');

      void label.offsetWidth;

      label.classList.add('errorAnimate');
    }
  });

  if (hasEmpty) {
    errorStrips.forEach(strip => {
      strip.classList.add('show');
    });
    
    errorSound.currentTime = 0;
    errorSound.play();
    
  } else {
    
    accessGrantedSound.currentTime = 0;
    accessGrantedSound.play();
    button.classList.add('accessGrantedBtn');

    errorStrips.forEach(strip => {
      strip.classList.remove('show');
    });

    setTimeout(() => {

      accessGranted.classList.add('show')
      blurBg.classList.add('show')

      setTimeout(() => {
        window.location.href = "../dashboard/dashboard.html";
      }, 6500);
    }, 1500)
    
  }
});

// vvvvvvvvvvvvvvvvvvvvvvv Testes vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
