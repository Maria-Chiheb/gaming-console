const colorButtons = document.querySelectorAll('.red, .blue, .green, .yellow');

const redElements = [
  document.querySelector('.red-rec'),
  ...document.querySelectorAll('.rond1, .rond2, .rond3'),
  document.querySelector('button')
];

const consoleImages = document.querySelectorAll('#console1, #console2');
const likeIcon = document.getElementById('like');

// Associer chaque classe à une teinte et couleur précise
const hueMap = {
  red: '0deg',
  blue: '190deg',
  green: '95deg',
  yellow: '55deg'
};

const colorMap = {
  red: '#C74A52',
  blue: '#408DD4',
  green: '#99D959',
  yellow: '#ECC127'
};

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const className = button.classList[0];
    const hue = hueMap[className];
    const newColor = colorMap[className];

    // Changer la couleur des éléments rouges
    redElements.forEach(el => {
      if (el) el.style.backgroundColor = newColor;
    });

    // Ne pas toucher aux h1 "GAMING" pour garder leur opacité originale

    // Modifier le bouton
    const btn = document.querySelector('button');
    if (btn) {
      btn.style.borderColor = newColor;
      btn.style.filter = `drop-shadow(0 0 2rem ${newColor})`;
    }

    // Appliquer filtre de teinte à la console
    consoleImages.forEach(img => {
      img.style.filter = `hue-rotate(${hue}) drop-shadow(0 0 0.75rem #0f1225)`;
    });

    // Appliquer une teinte à l'image PNG like
    if (likeIcon) {
      likeIcon.style.filter = `hue-rotate(${hue}) brightness(1.2)`;
    }
  });
});

