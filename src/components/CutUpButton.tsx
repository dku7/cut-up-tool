import { memo } from "react";

interface CutUpButtonProps {
  disabled: boolean;
  handleCutUpText: () => void;
}

export const CutUpButton = memo(function CutUpButton({
  disabled,
  handleCutUpText,
}: CutUpButtonProps) {
  return (
    <button
      onClick={handleCutUpText}
      disabled={disabled}
      className={`border p-2 rounded hover:cursor-pointer mr-4 mb-4  ${
        disabled
          ? "text-gray-400"
          : "text-black hover:bg-gray-400 hover:text-white"
      }`}>
      Cut up
    </button>
  );
});
