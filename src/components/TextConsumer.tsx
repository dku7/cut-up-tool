import { useCallback, useState } from "react";

import { CutUpFormat, CutUpLength } from "../types/types";
import Settings from "./Settings";
import { CutUpOutput } from "./CutUpOutput";
import { CopyButton } from "./CopyButton";
import { getRandomLineLength } from "../utils/utils";

const defaultCutUpLength: CutUpLength = {
  min: 1,
  max: 5,
};

export default function TextConsumer() {
  const [inputText, setInputText] = useState("");
  const [cutUpLength, setCutUpLength] =
    useState<CutUpLength>(defaultCutUpLength);
  const [cutUpText, setCutUpText] = useState<string[]>([]);
  const [cutUpFormat, setCutUpFormat] = useState<CutUpFormat>("verse");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleMinWordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCutUpLength({ ...cutUpLength, min: Number(event.target.value) });
  };

  const handleMaxWordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCutUpLength({ ...cutUpLength, max: Number(event.target.value) });
  };

  const handleFormatChange = (format: CutUpFormat) => {
    setCutUpFormat(format);
  };

  const handleCutUpText = useCallback(() => {
    const words = inputText.split(" ");
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

    if (cutUpFormat === "verse") {
      const formattedCutUpText = cutUpText.map((words, index) => {
        return index % getRandomLineLength() === 0 ? words + "\n" : words;
      });

      setCutUpText(formattedCutUpText);
    } else setCutUpText(cutUpText);
  }, [cutUpFormat, cutUpLength, inputText]);

  return (
    <main>
      <div className="flex flex-col lg:flex-row px-10 md:px-20 lg:px-40">
        <p>Enter text:</p>
        <textarea
          className="border border-gray-800 border-dashed pl-0.5 w-full font-mono flex-grow min-h-96 resize-none"
          value={inputText}
          onChange={handleTextChange}></textarea>
        <div className="mt-2 mb-10 ml-10">
          <Settings
            cutUpLength={cutUpLength}
            format={cutUpFormat}
            handleMinWordsChange={handleMinWordsChange}
            handleMaxWordsChange={handleMaxWordsChange}
            handleFormatChange={handleFormatChange}
          />
          <button
            onClick={handleCutUpText}
            className="border p-2 rounded hover:cursor-pointer mr-4 mb-4">
            Cut up
          </button>
          <CopyButton cutUpText={cutUpText} />
        </div>
      </div>

      <div className="flex px-10 md:px-20 lg:px-40 flex-col">
        <CutUpOutput cutUpText={cutUpText} cutUpFormat={cutUpFormat} />
      </div>
    </main>
  );
}
