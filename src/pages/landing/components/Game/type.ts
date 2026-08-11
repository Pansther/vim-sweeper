export const ItemType = {
	Blank: 0,
	Open: 1,
	Flag: 2,
} as const;

export const MineType = {
	Empty: 0,
	Mine: 1,
} as const;

export const Difficulty = {
	Easy: 1,
	Medium: 2,
	Hard: 3,
} as const;

export const GameState = {
	Idle: "idle",
	Play: "play",
	Fail: "fail",
	Complete: "complete",
} as const;

export type ItemType = Enum<typeof ItemType>;
export type MineType = Enum<typeof MineType>;
export type Difficulty = Enum<typeof Difficulty>;
export type GameState = Enum<typeof GameState>;
