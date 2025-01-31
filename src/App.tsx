import { useState } from "react";
import Header from "./components/Header";
import Settings from "./components/Settings";
import TextConsumer from "./components/TextConsumer";
import { CutUpFormat, CutUpLength } from "./types/types";
import { FiMenu } from "react-icons/fi";

const defaultCutUpLength: CutUpLength = {
  min: 1,
  max: 5,
};

export default function App() {
  const [cutUpLength, setCutUpLength] =
    useState<CutUpLength>(defaultCutUpLength);
  const [cutUpFormat, setCutUpFormat] = useState<CutUpFormat>("verse");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMinWordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCutUpLength({ ...cutUpLength, min: Number(event.target.value) });
  };

  const handleMaxWordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCutUpLength({ ...cutUpLength, max: Number(event.target.value) });
  };

  const handleFormatChange = (format: CutUpFormat) => {
    setCutUpFormat(format);
  };

  const handleToggleSideBar = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] min-h-screen">
      <div className="mt-2 mb-10 ml-10">
        <Settings
          cutUpLength={cutUpLength}
          format={cutUpFormat}
          isSidebarOpen={isSidebarOpen}
          handleMinWordsChange={handleMinWordsChange}
          handleMaxWordsChange={handleMaxWordsChange}
          handleFormatChange={handleFormatChange}
          handleToggleSideBar={handleToggleSideBar}
        />
      </div>
      <div className="p-5 md:ml-64">
        <button
          onClick={() => {
            handleToggleSideBar(true);
          }}
          className="md:hidden mb-4 text-gray-700">
          <FiMenu size={24} />
        </button>
        <Header />
        <TextConsumer cutUpLength={cutUpLength} cutUpFormat={cutUpFormat} />
      </div>
    </div>
  );
}
