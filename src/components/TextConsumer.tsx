import { useCallback, useState } from "react";
import { CutUpOutput } from "./CutUpOutput";
import { CopyButton } from "./CopyButton";
import { getRandomLineLength } from "../utils/utils";
import { CutUpFormat, CutUpLength } from "../types/types";
import { CutUpButton } from "./CutUpButton";

interface TextConsumerProps {
  cutUpLength: CutUpLength;
  cutUpFormat: CutUpFormat;
}
export default function TextConsumer({
  cutUpLength,
  cutUpFormat,
}: TextConsumerProps) {
  const [inputText, setInputText] = useState("");
  const [cutUpText, setCutUpText] = useState<string[]>([]);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
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
      <p>Enter text:</p>

      <textarea
        className="border border-gray-800 border-dashed pl-0.5 w-full font-mono flex-grow min-h-96 resize-none min-w-96"
        value={inputText}
        onChange={handleTextChange}></textarea>

      <CutUpButton disabled={!inputText} handleCutUpText={handleCutUpText} />
      <CopyButton disabled={cutUpText.length === 0} cutUpText={cutUpText} />

      <CutUpOutput cutUpText={cutUpText} cutUpFormat={cutUpFormat} />
    </main>
  );
}
