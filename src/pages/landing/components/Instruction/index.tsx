"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { actionKeys, navigateKeys, type KeyMap } from "./config";

const Instruction = () => {
  return (
    <div className="h-full">
      <Collapsible>
        <CollapsibleTrigger>Open</CollapsibleTrigger>
        <CollapsibleContent className="w-90 flex flex-col gap-4 p-5">
          <Keys keys={navigateKeys} />
          <Keys keys={actionKeys} />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Instruction;

const Keys = ({ keys }: { keys: KeyMap[] }) => {
  return (
    <ul>
      {keys.map(({ key, label }) => (
        <li key={key} className="flex">
          <div className="w-20">{key}</div>
          <div>{label}</div>
        </li>
      ))}
    </ul>
  );
};
