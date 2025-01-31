import { useState } from "react";
import Header from "./components/Header";
import Settings from "./components/Settings";
import TextConsumer from "./components/TextConsumer";
import { CutUpFormat, CutUpLength } from "./types/types";

const defaultCutUpLength: CutUpLength = {
  min: 1,
  max: 5,
};

export default function App() {
  const [cutUpLength, setCutUpLength] =
    useState<CutUpLength>(defaultCutUpLength);
  const [cutUpFormat, setCutUpFormat] = useState<CutUpFormat>("verse");

  const handleMinWordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCutUpLength({ ...cutUpLength, min: Number(event.target.value) });
  };

  const handleMaxWordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCutUpLength({ ...cutUpLength, max: Number(event.target.value) });
  };

  const handleFormatChange = (format: CutUpFormat) => {
    setCutUpFormat(format);
  };

  return (
    <>
      <Header />
      <div className="mt-2 mb-10 ml-10">
        <Settings
          cutUpLength={cutUpLength}
          format={cutUpFormat}
          handleMinWordsChange={handleMinWordsChange}
          handleMaxWordsChange={handleMaxWordsChange}
          handleFormatChange={handleFormatChange}
        />
      </div>
      <TextConsumer cutUpLength={cutUpLength} cutUpFormat={cutUpFormat} />
    </>
  );
}
