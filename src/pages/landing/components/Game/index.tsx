import Col from "./Col";
import KeyStroke from "../KeyStroke";
import RelativeCol from "./RelativeCol";

import useGameContext from "../context";
import useNavigate from "../../hooks/useNavigate";
import useInteract from "../../hooks/useInteract";

import type { ItemType } from "./type";

const Game = () => {
  const [{ playRows }] = useGameContext();

  useNavigate();
  useInteract();

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 flex items-center justify-center">
        <div className="flex flex-col w-full p-1">
          <div className="flex w-full h-full items-center justify-center flex-col">
            {playRows.map((rows, rowIndex) => (
              <div key={rowIndex} className="flex relative">
                <RelativeCol rowIndex={rowIndex} />
                {rows.map((col, colIndex) => (
                  <Col
                    key={colIndex}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                    col={col as ItemType}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-12">
        <KeyStroke />
      </div>
    </div>
  );
};

export default Game;
