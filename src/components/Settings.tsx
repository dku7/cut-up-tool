import { CutUpFormat, CutUpLength } from "../types/types";

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
    <div className="flex">
      <div>
        <div className="flex ml-10">
          <label htmlFor="min-words" className="pl-2">
            <span className="lowercase font-mono text-5xl">min</span>
            <span className="font-serif text-2xl"> words:</span>
          </label>
          <input
            type="number"
            id="min-words"
            onChange={handleMinWordsChange}
            value={cutUpLength.min}
            className="w-20 text-6xl font-extrabold font-serif"
          />
        </div>
        <div className="flex mt-10 ml-14 pl-2">
          <label htmlFor="max-words">
            <span className="uppercase font-sans text-6xl">max</span>
            <span className="font-serif text-2xl"> words:</span>
          </label>
          <input
            type="number"
            id="max-words"
            onChange={handleMaxWordsChange}
            value={cutUpLength.max}
            className="w-20 text-6xl font-extrabold font-serif"
          />
        </div>
      </div>
      <div className="mt-20">
        I like:
        <input
          type="radio"
          name="format"
          id="Verse"
          className="appearance-none"
        />
        <label htmlFor="Verse">Verse</label>
        <input
          type="radio"
          name="format"
          id="Prose"
          className="appearance-none"
        />
        <label htmlFor="Prose">Prose</label>
      </div>
    </div>
  );
}
