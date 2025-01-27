import { memo } from "react";
import { getRandomFont, getRandomFontStyle } from "../utils/utils";

interface CutUpOutputProps {
  cutUpText: string[];
  cutUpFormat: string;
}

export const CutUpOutput = memo(function CutUpOutput({
  cutUpText,
}: CutUpOutputProps) {
  return (
    <p className="leading-10">
      {cutUpText.map((words, index) => (
        <span
          key={index}
          className={`border border-black m-4 text-xl ${getRandomFont()} ${getRandomFontStyle()}`}>
          {words}
          {words.endsWith("\n") ? <br /> : ""}
        </span>
      ))}
    </p>
  );
});
