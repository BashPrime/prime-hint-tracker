import { SetStateAction, WritableAtom } from "jotai";
import { BossHints } from "./BossHints";
import KeybearerHints from "./KeybearerHints";
import {
  BossHints as BossHintsType,
  RegionKeybearerHints,
  RegionTranslatorHints,
} from "@/types/Prime2.types";
import { cn } from "@/lib/utils";
import TranslatorHints from "./TranslatorHints";

type Props = {
  name: string;
  variant: string;
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  bossHintsAtom: WritableAtom<BossHintsType, [SetStateAction<any>], void>;
  keybearerHintsAtom: WritableAtom<
    RegionKeybearerHints,
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    [SetStateAction<any>],
    void
  >;
  translatorHintsAtom: WritableAtom<
    RegionTranslatorHints,
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    [SetStateAction<any>],
    void
  >;
  className?: string;
};

export default function Region({
  name,
  variant,
  bossHintsAtom,
  keybearerHintsAtom,
  translatorHintsAtom,
  className,
}: Props) {
  return (
    <div className={cn("flex flex-col", className)} data-name="region">
      <h2 className="font-bold px-2 bg-zinc-900 uppercase select-none">
        {name}
      </h2>
      <div className="flex flex-col gap-2 h-full flex-1">
        <BossHints atom={bossHintsAtom} variant={variant} />
        <KeybearerHints atom={keybearerHintsAtom} variant={variant} />
        <TranslatorHints
          atom={translatorHintsAtom}
          variant={variant}
          className="flex-1"
        />
      </div>
    </div>
  );
}
