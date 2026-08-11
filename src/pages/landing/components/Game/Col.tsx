import cx from "clsx";

import useGameContext from "../context";

import { THEME } from "./theme";
import { countAdjacentMines, checkIsAdjacent } from "./helper";

import { ItemType, GameState } from "./type";

const { Flag, Open } = ItemType;
const { Play, Fail } = GameState;

interface ColProps {
	col: ItemType;
	rowIndex: number;
	colIndex: number;
}

const Col = ({ col, rowIndex, colIndex }: ColProps) => {
	const [{ isPlay, playState, playRows, mines, selectedIndex, hintIndex }] =
		useGameContext();

	const sRow = selectedIndex.row;
	const sCol = selectedIndex.col;

	const isSelected = sRow === rowIndex && sCol === colIndex;
	const isSelectedOpen = playRows[sRow][sCol] === Open;

	const isOpen = col === Open;
	const isFlag = col === Flag;
	const isMine = mines?.[rowIndex]?.[colIndex] || false;
	const isShowMine = isMine && (isOpen || playState === Fail);
	const amount = countAdjacentMines(mines, rowIndex, colIndex);
	const isHint = rowIndex === hintIndex[0] && colIndex === hintIndex[1];
	const isAdjacent = checkIsAdjacent(
		rowIndex,
		colIndex,
		[selectedIndex.row, selectedIndex.col],
		playRows,
	);

	const isShowAdjacent = isSelectedOpen && playState === Play && isAdjacent;

	const { close, hint, dangers, flag, mine, open, selected, adjacent } = THEME;

	const backgroundColor = cx({
		[close]: !isSelected || !isPlay,
		[adjacent]: isShowAdjacent,
		[open]: isOpen,
		[mine]: isShowMine,
		[flag]: isFlag,
		[hint]: isHint,
		[selected]: isSelected && isPlay,
	})
		?.split(" ")
		?.at(-1);

	const color = cx("black", {
		[dangers?.[amount - 1]]: isOpen,
		black: isSelected || isHint,
	})
		?.split(" ")
		?.at(-1);

	return (
		<div
			className="px-1 flex w-8 h-8 items-center justify-center"
			style={{ backgroundColor }}
		>
			<p className="font-bold" style={{ color }}>
				{isOpen && amount && !isMine
					? amount
					: isFlag
						? "F"
						: isShowMine
							? "*"
							: " "}
				{/* {amount} */}
			</p>
		</div>
	);
};

export default Col;
