import { createContext, useContext } from "react";
import { useImmer } from "use-immer";

import { CONFIG, createEmptyGrid } from "../Game/helper";

import type { GameContextType } from "./type";
import { GameState, Difficulty } from "../Game/type";

const { Idle, Play } = GameState;

const DEFAULT_PLAYROWS_CONFIG = CONFIG[Difficulty.Hard];

const DEFAULT_VALUE: GameContextType = [
	{
		selectedIndex: {
			row: Math.floor(DEFAULT_PLAYROWS_CONFIG.rows / 2),
			col: Math.floor(DEFAULT_PLAYROWS_CONFIG.cols / 2),
		},
		hintAmount: 3,
		hintIndex: [],
		mines: [] as number[][],
		playState: GameState.Idle,
		playRows: createEmptyGrid(
			DEFAULT_PLAYROWS_CONFIG.rows,
			DEFAULT_PLAYROWS_CONFIG.cols,
		),
		isPlay: false,
		initTime: 0,
		restart: () => null,
	},
	() => {},
];

const GameContext = createContext<GameContextType>(DEFAULT_VALUE);

export const GameContextProvider = ({
	children,
}: {
	children?: React.ReactNode;
}) => {
	const difficulty = Difficulty.Medium;

	const config = CONFIG[difficulty];

	let defaultState = {
		...DEFAULT_VALUE[0],
		selectedIndex: {
			row: Math.floor(config.rows / 2),
			col: Math.floor(config.cols / 2),
		},
		playRows: createEmptyGrid(config.rows, config.cols),
	};

	const [state, setState] = useImmer(defaultState);

	const isPlay = state.playState === Idle || state.playState === Play;

	const restart = () => {
		setState(defaultState);
	};

	return (
		<GameContext.Provider value={[{ ...state, isPlay, restart }, setState]}>
			{children}
		</GameContext.Provider>
	);
};

const useGameContext = () => useContext(GameContext);

export default useGameContext;
