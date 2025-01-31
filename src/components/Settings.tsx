import { CutUpFormat, CutUpLength } from "../types/types";
import FormatOption from "./FormatOption";
import WordSetting from "./WordSetting";

interface SettingsProps {
  cutUpLength: CutUpLength;
  format: CutUpFormat;
  isSidebarOpen: boolean;
  handleMinWordsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxWordsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormatChange: (format: CutUpFormat) => void;
  handleToggleSideBar: (isOpen: boolean) => void;
}

export default function Settings(props: SettingsProps) {
  const {
    cutUpLength: { min, max },
    format,
    isSidebarOpen,
    handleMinWordsChange,
    handleMaxWordsChange,
    handleFormatChange,
    handleToggleSideBar,
  } = props;

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-20 w-64 bg-gray-800 text-white p-5 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}>
      <div className="flex justify-between items-center">
        <h2 className="ml-10 font-bold text-2xl">settings</h2>
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => {
            handleToggleSideBar(false);
          }}>
          X
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5">
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
    </aside>
  );
}
