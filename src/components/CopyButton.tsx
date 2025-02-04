import { memo } from "react";

interface CopyButtonProps {
  disabled: boolean;
  cutUpText: string[];
}

export const CopyButton = memo(function CopyButton({
  disabled,
  cutUpText,
}: CopyButtonProps) {
  const handleCopy = () => {
    void navigator.clipboard.writeText(cutUpText.join(" "));
  };

  return (
    <button
      onClick={handleCopy}
      disabled={disabled}
      className={`border p-2 rounded hover:cursor-pointer ${
        disabled
          ? "text-gray-400"
          : "text-black hover:bg-gray-400 hover:text-white"
      }`}>
      Copy
    </button>
  );
});
