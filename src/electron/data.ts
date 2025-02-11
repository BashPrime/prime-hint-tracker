type WindowSize = {
  prime: Size;
  echoes: Size;
  echoesLegacy: Size;
  corruption: Size;
  default: Size;
};

type Size = {
  width: number;
  height: number;
};

export const WINDOW_SIZE: WindowSize = {
  echoes: {
    width: 1345,
    height: 794,
  },
  echoesLegacy: {
    width: 1345,
    height: 860,
  },
  prime: {
    width: 1024,
    height: 768,
  },
  corruption: {
    width: 1024,
    height: 768,
  },
  default: {
    width: 1024,
    height: 768,
  },
};
