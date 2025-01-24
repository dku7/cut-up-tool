export function getRandomFont() {
  const fonts = [
    "font-mono",
    "font-serif",
    "font-sans",
    "font-cursive",
    "font-display",
  ];

  return fonts[Math.floor(Math.random() * fonts.length)];
}

export function getRandomLineLength() {
  const min = 2;
  const max = 4;

  return Math.floor(Math.random() * (max - min + 1) + min);
}
