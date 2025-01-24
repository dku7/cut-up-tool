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
  return Math.floor(Math.random() * 10) + 2;
}
