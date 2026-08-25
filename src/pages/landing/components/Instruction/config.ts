export interface KeyMap {
  key: string;
  label: string;
  isOptional?: boolean;
}

export const navigateKeys: KeyMap[] = [
  {
    key: "h",
    label: "left",
  },
  {
    key: "j",
    label: "down",
  },
  {
    key: "k",
    label: "up",
  },
  {
    key: "l",
    label: "right",
  },
  {
    key: "1-9",
    label: "digit for motion",
  },
  {
    key: "w",
    label: "jump forward",
  },
  {
    key: "b",
    label: "jump backward",
  },
  {
    key: "<C-d>",
    label: "scroll down",
    isOptional: true,
  },
  {
    key: "<C-u>",
    label: "scroll up",
    isOptional: true,
  },
  {
    key: "<C-f>",
    label: "screen down",
    isOptional: true,
  },
  {
    key: "<C-b>",
    label: "screen up",
    isOptional: true,
  },
  {
    key: "0",
    label: "start",
  },
  {
    key: "$",
    label: "end",
  },
  {
    key: "g",
    label: "top",
  },
  {
    key: "G",
    label: "bottom",
  },
  {
    key: "M",
    label: "center",
  },
  // {
  //   key: 'backspace',
  //   label: 'hint',
  // },
  // {
  //   key: 'r',
  //   label: 'restart',
  // },
];

export const actionKeys: KeyMap[] = [
  {
    key: "x",
    label: "open",
  },
  {
    key: "space",
    label: "open",
    isOptional: true,
  },
  {
    key: "m",
    label: "flag",
  },
  {
    key: "f",
    label: "flag",
    isOptional: true,
  },
];
