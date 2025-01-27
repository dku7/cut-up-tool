import { memo } from "react";
import {
  getRandomFont,
  getRandomFontStyle,
  getRandomLineLength,
} from "../utils/utils";

interface CutUpOutputProps {
  cutUpText: string[];
  cutUpFormat: string;
}

export const CutUpOutput = memo(function CutUpOutput({
  cutUpText,
  cutUpFormat,
}: CutUpOutputProps) {
  return (
    <p className="leading-10">
      {cutUpText.map((words, index) => (
        <span
          key={index}
          className={`border border-black m-4 text-xl ${getRandomFont()} ${getRandomFontStyle()}`}>
          {words}
          {cutUpFormat === "verse" && index % getRandomLineLength() === 0 ? (
            <br />
          ) : (
            " "
          )}
        </span>
      ))}
    </p>
  );
});
