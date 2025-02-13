import { atom } from "jotai";
import { Game } from "../../shared/types";
import { atomWithReset } from "jotai/utils";

export const appSessionLoadedState = atom<boolean>(false);
export const selectedGameState = atom<Game>("echoes");
export const legacyHintsEnabledState = atom<boolean>(true);

export const appLoadingMsgAtom = atomWithReset<string>("Getting Ready...");
