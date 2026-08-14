import { useHotkeys } from "react-hotkeys-hook";

import useGameContext from "../components/context";

import { AvailableNavigateKey } from "./type";
import { GameState } from "../components/Game/type";

const { Idle, Play } = GameState;
const {
  Up,
  Down,
  Left,
  Right,
  Top,
  Bottom,
  Start,
  End,
  Middle,
  ScrollDown,
  ScrollUp,
  Forward,
  Backward,
} = AvailableNavigateKey;

const useNavigate = () => {
  const [{ restart }, setGame] = useGameContext();

  const navigate = (key: AvailableNavigateKey) => {
    setGame((s) => {
      const isPlay = s.playState === Idle || s.playState === Play;

      if (!isPlay) return;

      switch (key) {
        case Up:
          if (s.selectedIndex.row <= 0) {
            s.selectedIndex.row = s.playRows[0].length - 1;
          } else {
            s.selectedIndex.row -= 1;
          }
          break;
        case Down:
          s.selectedIndex.row += 1;
          s.selectedIndex.row %= s.playRows[0].length;
          break;
        case Left:
          if (s.selectedIndex.col <= 0) {
            s.selectedIndex.col = s.playRows[1].length - 1;
          } else {
            s.selectedIndex.col -= 1;
          }
          break;
        case Right:
          s.selectedIndex.col += 1;
          s.selectedIndex.col %= s.playRows[1].length;
          break;
        case Top:
          s.selectedIndex.row = 0;
          break;
        case Bottom:
          s.selectedIndex.row = s.playRows.length - 1;
          break;
        case Start:
          s.selectedIndex.col = 0;
          break;
        case End:
          s.selectedIndex.col = s.playRows[s.selectedIndex.row].length - 1;
          break;
        case Middle:
          s.selectedIndex.row = Math.floor(s.playRows.length / 2);
          s.selectedIndex.col = Math.floor(s.playRows.length / 2);
          break;
        case ScrollDown:
          s.selectedIndex.row += 4;

          if (s.selectedIndex.row >= s.playRows[0].length) {
            s.selectedIndex.row = s.playRows.length - 1;
          }
          break;
        case ScrollUp:
          s.selectedIndex.row -= 4;

          if (s.selectedIndex.row <= 0) {
            s.selectedIndex.row = 0;
          }
          break;
        case Forward: {
          let isFound = false;
          let row = s.selectedIndex.row;
          let col = s.selectedIndex.col;
          const type = s.playRows[row][col];

          while (!isFound) {
            col += 1;

            if (s.playRows[row][col] !== type) {
              isFound = true;
            }

            if (col >= s.playRows[row].length) {
              col = 0;
              row += 1;
            }

            if (row >= s.playRows.length) {
              row = s.playRows.length - 1;
              col = s.playRows[row].length - 1;
              isFound = true;
            }

            s.selectedIndex.row = row;
            s.selectedIndex.col = col;
          }

          break;
        }
        case Backward: {
          let isFound = false;
          let row = s.selectedIndex.row;
          let col = s.selectedIndex.col;
          const type = s.playRows[row][col];

          while (!isFound) {
            col -= 1;

            if (s.playRows[row][col] !== type) {
              isFound = true;
            }

            if (col < 0) {
              col = s.playRows[row].length - 1;
              row -= 1;
            }

            if (row <= 0) {
              row = 0;
              col = 0;
              isFound = true;
            }

            s.selectedIndex.row = row;
            s.selectedIndex.col = col;
          }

          break;
        }
      }
    });
  };

  useHotkeys("j", () => navigate(Down));
  useHotkeys("k", () => navigate(Up));
  useHotkeys("h", () => navigate(Left));
  useHotkeys("l", () => navigate(Right));
  useHotkeys("w", () => navigate(Forward));
  useHotkeys("b", () => navigate(Backward));
  useHotkeys("g", () => navigate(Top));
  useHotkeys("shift+g", () => navigate(Bottom));
  useHotkeys("0", () => navigate(Start));
  useHotkeys("shift+4", () => navigate(End));
  useHotkeys("shift+m", () => navigate(Middle));
  useHotkeys("ctrl+d", () => navigate(ScrollDown));
  useHotkeys("ctrl+u", () => navigate(ScrollUp));
  useHotkeys("r", restart);
};

export default useNavigate;
