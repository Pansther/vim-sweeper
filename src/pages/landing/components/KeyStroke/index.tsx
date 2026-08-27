import { useEffect, useRef, useState } from "react";
import useGameContext from "../context";
import { GameState } from "../Game/type";

const REGEX = /(^[a-zA-Z0-9$\ ]$)|(^Escape|Control|Space)/;

const KeyStroke = () => {
  const timeoutRef = useRef<number>(undefined);

  const [keys, setKeys] = useState("");
  const [historyKeys, setHistoryKeys] = useState<string[]>([]);

  const [{ playState }] = useGameContext();

  useEffect(() => {
    if (playState === GameState.Idle) {
      setKeys("");
      setHistoryKeys([]);
    }

    if (playState !== GameState.Play) return;

    const listenNavigateKey = (event: KeyboardEvent) => {
      let key = event.key;

      if (!REGEX.test(key)) return;

      if (key === " ") key = "Space";

      clearTimeout(timeoutRef.current);

      setKeys((prevKeys) => {
        if (prevKeys?.length > 30) {
          setHistoryKeys((prev) => [prevKeys, ...prev]);
          return "";
        }

        return prevKeys + key + " ";
      });

      timeoutRef.current = setTimeout(() => {
        setKeys((prevKeys) => {
          setHistoryKeys((prev) => [prevKeys, ...prev]);
          return "";
        });
      }, 1000);
    };

    document.addEventListener("keydown", listenNavigateKey);

    return () => {
      clearTimeout(timeoutRef.current);
      document.removeEventListener("keydown", listenNavigateKey);
    };
  }, [playState]);

  return (
    <aside className="flex flex-col border-t bg-card lg:border-t-0 lg:border-l">
      <h2 className="border-b px-5 py-3 font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground">
        Keystroke
      </h2>
      <ul
        className="max-h-64 min-h-40 overflow-auto p-5 font-mono text-base lg:max-h-[70vh]"
        aria-live="polite"
      >
        {playState === GameState.Idle && (
          <li className="text-center text-muted-foreground">Press any key.</li>
        )}
        {keys?.length > 0 && (
          <li className="text-center font-semibold text-primary border-b border-border/60 py-2 last:border-0">
            {keys}
          </li>
        )}
        {historyKeys
          ?.filter((key) => key?.length > 0)
          ?.map((key, i) => (
            <li
              key={`${key}_${i}`}
              className="border-b border-border/60 py-2 text-center text-muted-foreground last:border-0"
            >
              {key}
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default KeyStroke;
