"use client";

import { useState } from "react";

import { actionKeys, navigateKeys, type KeyMap } from "./config";

const Instruction = () => {
  const [isShowOptional, setShowOptional] = useState(false);

  return (
    <aside>
      <h2>Toggle Instruction</h2>
      <div className="w-90 flex flex-col gap-4 p-5 max-h-[70vh] overflow-auto">
        <Keys keys={navigateKeys} isShowOptional={isShowOptional} />
        <Keys keys={actionKeys} isShowOptional={isShowOptional} />

        <button onClick={() => setShowOptional((prev) => !prev)}>
          {isShowOptional ? "Hide Optional" : "Show Optional"}
        </button>
      </div>
    </aside>
  );
};

export default Instruction;

const Keys = ({
  keys,
  isShowOptional = false,
}: {
  keys: KeyMap[];
  isShowOptional?: boolean;
}) => {
  return (
    <ul>
      {keys
        .filter(({ isOptional }) => (isShowOptional ? true : !isOptional))
        .map(({ key, label }) => (
          <li key={key} className="flex">
            <div className="w-24">{key}</div>
            <div>{label}</div>
          </li>
        ))}
    </ul>
  );
};
