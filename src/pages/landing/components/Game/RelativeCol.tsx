import cx from "clsx";

import useGameContext from "../context";

import { THEME } from "./theme";

interface RelativeColProps {
  rowIndex: number;
}

const RelativeCol = ({ rowIndex }: RelativeColProps) => {
  const [{ selectedIndex }] = useGameContext();

  return (
    <div
      style={{ color: THEME.selected }}
      className={cx("absolute w-8 -left-12 opacity-50 text-right", {
        ["font-bold opacity-100"]: rowIndex === selectedIndex.row,
      })}
    >
      {Math.abs(rowIndex - selectedIndex.row) || rowIndex + 1}
    </div>
  );
};

export default RelativeCol;
