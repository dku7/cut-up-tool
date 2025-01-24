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
    <div className="flex">
      <div>
        <div className="flex rotate-45 ml-20 text-4xl">
          <label htmlFor="min-words" className="border-b-2 border-b-black pl-2">
            min words:
          </label>
          <input
            type="number"
            id="min-words"
            onChange={handleMinWordsChange}
            value={cutUpLength.min}
            className="w-20 text-6xl"
          />
        </div>
        <div className="flex -rotate-45 font-serif text-4xl mt-20 ml-10 border-l-2 border-l-black pl-2">
          <label htmlFor="max-words">max words:</label>
          <input
            type="number"
            id="max-words"
            onChange={handleMaxWordsChange}
            value={cutUpLength.max}
            className="w-20"
          />
        </div>
      </div>
      <div className="mt-20">
        <select
          id="format"
          value={format}
          onChange={handleFormatChange}
          className="font-cursive text-4xl rotate-90">
          <option value="verse">Verse</option>
          <option value="prose">Prose</option>
        </select>
      </div>
    </div>
  );
}
