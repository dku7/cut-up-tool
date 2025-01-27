import { memo } from "react";

interface CopyButtonProps {
  cutUpText: string[];
}

export const CopyButton = memo(function CopyButton({
  cutUpText,
}: CopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(cutUpText.join(" "));
  };

  return (
    <button
      onClick={handleCopy}
      className="border p-2 rounded hover:cursor-pointer">
      Copy
    </button>
  );
});
