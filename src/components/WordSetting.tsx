import { WordSettingType } from "../types/types";

interface WordSettingProps {
  settingType: WordSettingType;
  initialValue: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function WordSetting({
  settingType,
  initialValue,
  handleChange,
}: WordSettingProps) {
  return (
    <div className="flex font-mono my-2">
      <label htmlFor={settingType}>{`${settingType} words:`}</label>
      <input
        type="number"
        id={settingType}
        onChange={handleChange}
        value={initialValue}
        className="border rounded w-10 pl-2.5"
      />
    </div>
  );
}
