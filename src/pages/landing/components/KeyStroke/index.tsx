import { useEffect, useRef, useState } from "react";

const REGEX = /(^[a-zA-Z0-9$\ ]$)|(^Escape|Control|Space)/;

const KeyStroke = () => {
  const timeoutRef = useRef<number>(undefined);

  const [keys, setKeys] = useState("");
  const [historyKeys, setHistoryKeys] = useState<string[]>([]);

  useEffect(() => {
    const listenNavigateKey = (event: KeyboardEvent) => {
      let key = event.key;

      if (!REGEX.test(key)) return;

      if (key === " ") key = "Space";

      if (key === "r" || key === "R") {
        setKeys("");
        setHistoryKeys([]);
        return;
      }

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
  }, []);

  return (
    <aside className="flex min-w-72 flex-col items-center">
      <div>Keystroke</div>
      <ul className="max-h-[70vh] overflow-auto p-5">
        {!keys?.length && !historyKeys?.length && (
          <li className="text-center">Press any key.</li>
        )}
        <li className="text-center">{keys}</li>
        {historyKeys.map((key, i) => (
          <li key={`${key}_${i}`} className="text-center">
            {key}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default KeyStroke;
