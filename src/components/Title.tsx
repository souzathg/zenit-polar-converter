export function Title() {

  const classConfig = "transition-all duration-[3s] hover:duration-0 hover:text-primary";

  return (
      <h1 className="uppercase text-4xl md:text-6xl font-bold text-center pb-10">
        <span className={classConfig}>Z</span>
        <span className={classConfig}>e</span>
        <span className={classConfig}>n</span>
        <span className={classConfig}>i</span>
        <span className={classConfig}>t </span>
        <span className={classConfig}>P</span>
        <span className={classConfig}>o</span>
        <span className={classConfig}>l</span>
        <span className={classConfig}>a</span>
        <span className={classConfig}>r</span>
        <br />
        <span className="text-2xl">Converter</span>
      </h1>
  )
}
