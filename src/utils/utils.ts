import { CutUpFormat, CutUpLength } from "../types/types";

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

export function getRandomFontStyle() {
  const styles = ["font-semibold", "font-normal", "font-light"];

  return styles[Math.floor(Math.random() * styles.length)];
}

export function cutUpAndFormatText(
  inputText: string,
  cutUpLength: CutUpLength,
  cutUpFormat: CutUpFormat
) {
  const words = inputText.split(" ");
  const cutUpText: string[] = [];

  while (words.length > 0) {
    const len = Math.floor(
      Math.random() * (cutUpLength.max - cutUpLength.min + 1) + cutUpLength.min
    );
    const cut = words.splice(0, len);

    cutUpText.push(cut.join(" "));
  }

  cutUpText.sort(() => Math.random() - 0.5);

  if (cutUpFormat === "verse") {
    const formattedCutUpText = cutUpText.map((words, index) => {
      return index % getRandomLineLength() === 0 ? words + "\n" : words;
    });

    return formattedCutUpText;
  }

  return cutUpText;
}
