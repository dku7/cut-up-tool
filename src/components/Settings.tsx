import { cutUpFormat, cutUpLength } from "../types/types";

interface SettingsProps {
  cutUpLength: cutUpLength;
  format: cutUpFormat;
  handleMinWordsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxWordsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormatChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
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
    <>
      <label htmlFor="min-words">min words:</label>
      <input
        type="number"
        id="min-words"
        onChange={handleMinWordsChange}
        value={cutUpLength.min}
      />
      <label htmlFor="max-words">max words:</label>
      <input
        type="number"
        id="max-words"
        onChange={handleMaxWordsChange}
        value={cutUpLength.max}
      />
      <label htmlFor="format">Format:</label>
      <select id="format" value={format} onChange={handleFormatChange}>
        <option value="verse">Verse</option>
        <option value="prose">Prose</option>
      </select>
    </>
  );
}
