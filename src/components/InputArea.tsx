export function InputArea(props: {inputText: string, setInputText: (text: string) => void}) {
  const inputText = props.inputText;
  const setInputText = props.setInputText;

  return (
      <textarea
        id="input-text"
        className="p-5
        transition-colors
        ease-in-out
        duration-300
      bg-gray-medium
        shadow-sm
        focus:shadow-xl
        rounded-md border-primary/0
        border-2
        w-full
        md:h-full
        flex-1
        md:w-1/2
      hover:border-primary/25
        focus:outline-none
        focus:border-2
      focus:border-primary/75
      resize-none"
        spellCheck="false"
        placeholder="Enter your text here!"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
  )
}
