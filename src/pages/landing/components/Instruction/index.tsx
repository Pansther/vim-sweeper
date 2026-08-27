"use client";

import { useState } from "react";

import { actionKeys, navigateKeys, type KeyMap } from "./config";

const Instruction = () => {
  const [isShowOptional, setShowOptional] = useState(false);

  return (
    <aside className="border-b bg-card lg:border-r lg:border-b-0">
      <h2 className="border-b px-5 py-3 font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground">
        Instruction
      </h2>
      <div className="flex max-h-80 flex-col gap-5 overflow-auto p-5 lg:max-h-[70vh]">
        <Keys keys={navigateKeys} isShowOptional={isShowOptional} />
        <Keys keys={actionKeys} isShowOptional={isShowOptional} />

        <button
          className="rounded-md border border-primary/35 bg-primary/10 px-3 py-2 font-mono text-sm text-primary transition-colors hover:border-primary/60 hover:bg-primary/15 motion-reduce:transition-none"
          onClick={() => setShowOptional((prev) => !prev)}
        >
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
    <ul className="space-y-2 text-base">
      {keys
        .filter(({ isOptional }) => (isShowOptional ? true : !isOptional))
        .map(({ key, label }) => (
          <li key={key} className="flex items-center gap-3">
            <kbd className="w-20 shrink-0 rounded border border-surface-2 bg-surface-1 px-2 py-1 text-center font-mono text-sm font-semibold text-warning shadow-sm shadow-crust/25">
              {key}
            </kbd>
            <span className="text-muted-foreground">{label}</span>
          </li>
        ))}
    </ul>
  );
};
