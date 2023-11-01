import { ConversionArea } from "@/components/ConversionArea";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <div className="p-10 w-screen h-screen flex flex-col items-center bg-gray-dark">
      {/* Title */}
      <Title />

      {/* Conversion Area */}
      <ConversionArea />
    </div>
  );
}
