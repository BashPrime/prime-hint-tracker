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

// heights use a +65px offset
export const WINDOW_SIZE: WindowSize = {
  echoes: {
    width: 1345,
    height: 802,
  },
  echoesLegacy: {
    width: 1345,
    height: 862,
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
    width: 1366,
    height: 768,
  },
};
