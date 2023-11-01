"use client"
import { useState } from "react";
import { ConvertButton } from "./ConvertButton";
import { ResultArea } from "./ResultArea";
import { InputArea } from "./InputArea";

export function ConversionArea() {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");

  const zenitPolarMap: {[key: string]: string} = {
    z: "p",
    Z: "P",
    e: "o",
    E: "O",
    n: "l",
    N: "L",
    i: "a",
    I: "A",
    t: "r",
    T: "R",
    p: "z",
    P: "Z",
    o: "e",
    O: "E",
    l: "n",
    L: "N",
    a: "i",
    A: "I",
    r: "t",
    R: "T"
  }

  function convert() {
    const normalizedInputText = inputText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let translatedText = "";

    for (let i = 0; i < normalizedInputText.length; i++) {
      const char = normalizedInputText[i];

      if (zenitPolarMap[char]) {
        translatedText += zenitPolarMap[char];
      } else {
        translatedText += char;
      }
    }

    setResultText(translatedText);
  }


  return (
    <div className="w-full h-full flex flex-col items-center justify-between md:flex-row md:p-20">
      <InputArea inputText={inputText} setInputText={setInputText} />

      <ConvertButton disable={inputText.length === 0} conversion={convert} />

      <ResultArea resultText={resultText} />
    </div>
  )
}
