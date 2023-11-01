export function ConvertButton(props: {disable: boolean, conversion: () => void}) {
  return (
    <button
      id="convert-button"
      className="p-3
      my-5
      md:mx-20
      md:p-8
      transition-all
      ease-in-out
      duration-300
      bg-primary/70
      disabled:bg-primary/50
      disabled:opacity-50
      shadow-sm
      focus:shadow-xl
      rounded-md border-primary/0
      border-2
      w-1/2
      md:w-auto
      enabled:hover:border-gray-light
      enabled:hover:bg-primary/90
      focus:outline-none
      focus:border-2
      focus:border-primary/75
      uppercase
      font-bold
      text-gray-lighter"
      disabled={props.disable}
      onClick={props.conversion}
    >
      Convert
    </button>
  )
}
