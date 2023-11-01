export function ResultArea(props: {resultText: string}) {
  const resultText = props.resultText;

  return (
      <textarea
        id="result-text"
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
        flex-1
        md:w-1/2
        md:h-full
      hover:border-primary/25
        focus:outline-none
        focus:border-2
      focus:border-primary/75
      resize-none"
        spellCheck="false"
        placeholder="Result will appear here!"
        readOnly
        value={resultText}
      />
  )
}
