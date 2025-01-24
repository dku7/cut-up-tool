import { CutUpFormat, CutUpLength } from "../types/types";
import InputWithLabel from "./InputWithLabel";

interface SettingsProps {
  cutUpLength: CutUpLength;
  format: CutUpFormat;
  handleMinWordsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxWordsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormatChange: (format: CutUpFormat) => void;
}

export default function Settings(props: SettingsProps) {
  const {
    cutUpLength,
    format,
    handleMinWordsChange,
    handleMaxWordsChange,
    handleFormatChange,
  } = props;

  return (
    <div className="border-2 border-black p-10">
      <h2 className="ml-10 font-extrabold text-3xl">settings</h2>
      <InputWithLabel
        inputValue={cutUpLength.min}
        handleChange={handleMinWordsChange}
      />
      <InputWithLabel
        inputValue={cutUpLength.max}
        handleChange={handleMaxWordsChange}
      />
      show as:
      <input
        type="radio"
        name="format"
        id="verse"
        onChange={() => handleFormatChange("verse")}
        checked={format === "verse"}
      />
      <label htmlFor="verse">verse</label>
      <input
        type="radio"
        name="format"
        id="prose"
        onChange={() => handleFormatChange("prose")}
        checked={format === "prose"}
      />
      <label htmlFor="prose">prose</label>
    </div>
  );
}
