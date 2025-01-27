import { useCallback, useState } from "react";

import { CutUpFormat, CutUpLength } from "../types/types";
import Settings from "./Settings";
import scissorsSVG from "../assets/scissors.svg";
import { CutUpOutput } from "./CutUpOutput";

const defaultCutUpLength: CutUpLength = {
  min: 1,
  max: 5,
};

export default function TextConsumer() {
  const [text, setText] = useState("");
  const [cutUpLength, setCutUpLength] =
    useState<CutUpLength>(defaultCutUpLength);
  const [cutUpText, setCutUpText] = useState<string[]>([]);
  const [cutUpFormat, setCutUpFormat] = useState<CutUpFormat>("verse");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
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
  }, [text, cutUpLength]);

  return (
    <main>
      <div className="flex flex-col lg:flex-row px-10 md:px-20 lg:px-40">
        <p>Enter text:</p>
        <textarea
          className="border border-gray-800 border-dashed pl-0.5 w-full font-mono flex-grow min-h-96"
          value={text}
          onChange={handleTextChange}></textarea>
        <div className="mt-2 mb-10">
          <Settings
            cutUpLength={cutUpLength}
            format={cutUpFormat}
            handleMinWordsChange={handleMinWordsChange}
            handleMaxWordsChange={handleMaxWordsChange}
            handleFormatChange={handleFormatChange}
          />
          <button
            onClick={handleCutUpText}
            className="hover:cursor-pointer w-32 mt-10 ml-10 border rounded-md border-dotted border-black hover:shadow-lg hover:border-solid hover:border-2">
            <img src={scissorsSVG} alt="scissors" />
            snip snip
          </button>
        </div>
      </div>

      <div className="flex px-10 md:px-20 lg:px-40 flex-col">
        <CutUpOutput cutUpText={cutUpText} cutUpFormat={cutUpFormat} />
      </div>
    </main>
  );
}
