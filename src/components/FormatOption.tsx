import { CutUpFormat } from "../types/types";

interface FormatOptionProps {
  formatType: CutUpFormat;
  currentValue: CutUpFormat;
  handleFormatChange: (format: CutUpFormat) => void;
}

export default function FormatOption({
  formatType,
  currentValue,
  handleFormatChange,
}: FormatOptionProps) {
  return (
    <div className="font-mono">
      <input
        type="radio"
        name="format"
        id={formatType}
        onChange={() => {
          handleFormatChange(formatType);
        }}
        checked={currentValue === formatType}
      />
      <label htmlFor={formatType} className="px-2">
        {formatType}
      </label>
    </div>
  );
}
