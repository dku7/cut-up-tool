import { useState } from "react";

interface cutUpLength {
  min: number;
  max: number;
}

const defaultCutUpLength: cutUpLength = {
  min: 3,
  max: 5,
};

export default function TextConsumer() {
  const [text, setText] = useState("");
  const [cutUpLength, setCutUpLength] =
    useState<cutUpLength>(defaultCutUpLength);
  const [cutUpText, setCutUpText] = useState<string[]>([]);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleMinWordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCutUpLength({ min: parseInt(event.target.value), max: cutUpLength.max });
  };

  const handleMaxWordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCutUpLength({ min: cutUpLength.min, max: parseInt(event.target.value) });
  };

  const handleCutUpText = () => {
    const words = text.split(" ");
    const cutUpText: string[] = [];

    while (words.length > 0) {
      const len = Math.floor(
        Math.random() * (cutUpLength.max - cutUpLength.min + 1) +
          cutUpLength.min
      );
      const cut = words.splice(0, len);
      cutUpText.push(cut.join(" "));
    }

    cutUpText.sort(() => Math.random() - 0.5);

    setCutUpText(cutUpText);
  };

  return (
    <>
      <p>Enter text:</p>
      <textarea
        className="border border-black w-96 pl-0.5"
        value={text}
        onChange={handleTextChange}></textarea>
      <div>
        <label htmlFor="min-words">min words:</label>
        <input
          type="number"
          id="min-words"
          onChange={handleMinWordsChange}
          value={cutUpLength.min}
        />
        <label htmlFor="max-words">max words:</label>
        <input
          type="number"
          id="max-words"
          onChange={handleMaxWordsChange}
          value={cutUpLength.max}
        />

        <button onClick={handleCutUpText}>Cut up text</button>

        <div>
          {cutUpText.map((words, index) => (
            <span key={index} className="border border-black m-2 font-mono">
              {words}{" "}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
