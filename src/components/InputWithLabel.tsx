interface InputWithLabelProps {
  inputValue: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputWithLabel({
  inputValue,
  handleChange,
}: InputWithLabelProps) {
  return (
    <>
      <label htmlFor="min-words">min words:</label>
      <input
        type="number"
        id="min-words"
        onChange={handleChange}
        value={inputValue}
      />
    </>
  );
}
