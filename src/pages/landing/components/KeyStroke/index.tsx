import { useEffect, useRef, useState } from "react";

const REGEX = /(^[a-zA-Z0-9$]$)|(^Escape|Control)/;

const KeyStroke = () => {
  const timeoutRef = useRef<number>(undefined);

  const [keys, setKeys] = useState("");
  const [historyKeys, setHistoryKeys] = useState<string[]>([]);

  useEffect(() => {
    const listenNavigateKey = (event: KeyboardEvent) => {
      const key = event.key;

      if (!REGEX.test(key)) return;

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
    <div className="flex w-full justify-center flex-col items-center">
      <div>{keys}</div>
      <ul className="min-w-64 max-h-32 overflow-auto">
        {historyKeys.map((key, i) => (
          <li key={`${key}_${i}`} className="text-center">
            {key}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyStroke;
