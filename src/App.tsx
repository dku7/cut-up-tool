import { useState } from "react";
import Header from "./components/Header";
import { Settings } from "./components/Settings";
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
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleMinWordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCutUpLength({ ...cutUpLength, min: Number(event.target.value) });
  };

  const handleMaxWordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCutUpLength({ ...cutUpLength, max: Number(event.target.value) });
  };

  const handleFormatChange = (format: CutUpFormat) => {
    setCutUpFormat(format);
  };

  const handleToggleSideBar = (open: boolean) => {
    setIsSideBarOpen(open);
  };

  return (
    <>
      <div id="container" className="flex h-screen relative">
        <aside
          id="side-bar"
          className={`fixed top-0 left-0 h-screen text-white bg-gray-800 p-5 pt-8 w-[250px] 
          md:relative md:translate-x-0 md:w-[250px] transition-transform duration-300 ${
            isSideBarOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          <div className="px-10">
            <Settings
              cutUpLength={cutUpLength}
              format={cutUpFormat}
              isSideBarOpen={isSideBarOpen}
              handleMinWordsChange={handleMinWordsChange}
              handleMaxWordsChange={handleMaxWordsChange}
              handleFormatChange={handleFormatChange}
              handleToggleSideBar={handleToggleSideBar}
            />
          </div>
        </aside>
        <main
          id="content"
          className="flex-1 h-screen p-5 ml-0 transition-all duration-300">
          <div className="flex justify-center">
            {!isSideBarOpen && (
              <button
                className="absolute top-5 left-5 text-red-700 md:hidden cursor-pointer"
                onClick={() => {
                  handleToggleSideBar(true);
                }}>
                <FiMenu size={24} />
              </button>
            )}
            <Header />
          </div>
          <TextConsumer cutUpLength={cutUpLength} cutUpFormat={cutUpFormat} />
        </main>
      </div>
    </>
  );
}
