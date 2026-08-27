import { ToastContainer, toast } from "react-toastify";

import Col from "./Col";
import RelativeCol from "./RelativeCol";

import useGameContext from "../context";
import useNavigate from "../../hooks/useNavigate";
import useInteract from "../../hooks/useInteract";

import { countMinesAmount } from "./helper";

import { GameState, type ItemType } from "./type";

const Game = () => {
  const [{ playRows, playState, mines }] = useGameContext();

  const remaining = countMinesAmount(playRows, mines);

  useNavigate();
  useInteract();

  const renderHelper = () => {
    switch (playState) {
      case GameState.Idle:
        return "Press 'x' to start.";
      case GameState.Play:
        return `Remaining: ${remaining}`;
      default:
        return "Press 'r' to restart.";
    }
  };

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 overflow-x-auto py-1">
        <div className="mx-auto flex w-max min-w-max flex-col px-12">
          <div className="flex flex-col items-center justify-center rounded-md border border-surface-1 shadow-lg shadow-crust/35">
            {playRows.map((rows, rowIndex) => (
              <div
                key={rowIndex}
                className="flex relative"
                onClick={() => toast("Oops! Keyboard Only", { type: "info" })}
              >
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
        <div className="flex justify-center font-mono text-base text-muted-foreground">
          <span className="rounded-full border border-border bg-card px-3 py-1.5">
            {renderHelper()}
          </span>
        </div>
      </div>

      <ToastContainer position="bottom-center" theme="dark" autoClose={1800} />
    </div>
  );
};

export default Game;
