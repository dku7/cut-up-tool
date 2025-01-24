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
    <>
      <h2 className="ml-10 font-extrabold text-3xl">settings</h2>

      <div className="flex">
        <div>
          <div className="flex ml-10 mt-10">
            <label htmlFor="min-words" className="pl-2 text-right">
              <span className="lowercase font-mono text-5xl ">min</span>
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
          <span className="italic mb-10">show</span> as:{" "}
          <div className="flex flex-col space-y-2">
            {" "}
            <div className="flex items-center">
              <input
                type="radio"
                name="format"
                id="verse"
                onChange={() => handleFormatChange("verse")}
                checked={format === "verse"}
                className="appearance-none"
              />
              <label
                htmlFor="verse"
                className={`hover:cursor-pointer border rounded-xl p-1 ${
                  format !== "verse"
                    ? "text-black bg-white"
                    : "text-white bg-black font-bold text-2xl"
                }`}>
                verse
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="format"
                id="prose"
                onChange={() => handleFormatChange("prose")}
                checked={format === "prose"}
                className="appearance-none"
              />
              <label
                htmlFor="prose"
                className={`hover:cursor-pointer border rounded-xl p-1 ${
                  format !== "prose"
                    ? "text-black bg-white"
                    : "text-white bg-black font-bold text-2xl"
                }`}>
                prose
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
