import { useCallback, useState } from "react";
import { CutUpOutput } from "./CutUpOutput";
import { CopyButton } from "./CopyButton";
import { cutUpAndFormatText } from "../utils/utils";
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
    const cutUpText = cutUpAndFormatText(inputText, cutUpLength, cutUpFormat);
    setCutUpText(cutUpText);
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
