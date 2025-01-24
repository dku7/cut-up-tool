import { CutUpFormat, CutUpLength } from "../types/types";
import FormatOption from "./FormatOption";
import WordSetting from "./WordSetting";

interface SettingsProps {
  cutUpLength: CutUpLength;
  format: CutUpFormat;
  handleMinWordsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxWordsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormatChange: (format: CutUpFormat) => void;
}

export default function Settings(props: SettingsProps) {
  const {
    cutUpLength: { min, max },
    format,
    handleMinWordsChange,
    handleMaxWordsChange,
    handleFormatChange,
  } = props;

  return (
    <>
      <h2 className="ml-10 font-bold text-2xl">settings</h2>
      <div className="flex flex-col">
        <WordSetting
          settingType="min"
          initialValue={min}
          handleChange={handleMinWordsChange}
        />
        <WordSetting
          settingType="max"
          initialValue={max}
          handleChange={handleMaxWordsChange}
        />
      </div>
      show as:{" "}
      <FormatOption
        formatType={"verse"}
        currentValue={format}
        handleFormatChange={handleFormatChange}
      />
      <FormatOption
        formatType={"prose"}
        currentValue={format}
        handleFormatChange={handleFormatChange}
      />
    </>
  );
}
