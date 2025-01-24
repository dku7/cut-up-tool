import { cutUpLength } from "../types/types";

interface SettingsProps {
  cutUpLength: cutUpLength;
  handleMinWordsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxWordsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Settings(props: SettingsProps) {
  const { cutUpLength, handleMinWordsChange, handleMaxWordsChange } = props;

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
    </>
  );
}
