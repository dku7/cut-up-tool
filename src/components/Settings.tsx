import { memo } from "react";
import { CutUpFormat, CutUpLength } from "../types/types";
import FormatOption from "./FormatOption";
import WordSetting from "./WordSetting";

interface SettingsProps {
  cutUpLength: CutUpLength;
  format: CutUpFormat;
  isSideBarOpen: boolean;
  handleMinWordsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxWordsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormatChange: (format: CutUpFormat) => void;
  handleToggleSideBar: (open: boolean) => void;
}

export const Settings = memo(function Settings(props: SettingsProps) {
  const {
    cutUpLength: { min, max },
    format,
    isSideBarOpen,
    handleMinWordsChange,
    handleMaxWordsChange,
    handleFormatChange,
    handleToggleSideBar,
  } = props;

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        {isSideBarOpen && (
          <button
            className="text-white cursor-pointer"
            onClick={() => {
              handleToggleSideBar(false);
            }}>
            X
          </button>
        )}
      </div>
      <h2 className="font-bold text-2xl">settings</h2>
      <div>
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
    </div>
  );
});
