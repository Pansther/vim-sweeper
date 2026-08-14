export interface KeyMap {
  key: string;
  label: string;
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
  },
  {
    key: "<C-u>",
    label: "scroll up",
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
    key: "m",
    label: "flag",
  },
];
