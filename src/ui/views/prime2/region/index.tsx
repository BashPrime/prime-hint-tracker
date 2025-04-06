import { PrimitiveAtom, WritableAtom } from "jotai";
import { BossHints } from "./BossHints";
import KeybearerHints from "./KeybearerHints";
import {
  BossHints as BossHintsType,
  KeybearerHintsUpdate,
  NewRegionKeybearerHints,
} from "@/types/Prime2.types";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  variant: string;
  bossHintsAtom: PrimitiveAtom<BossHintsType>;
  keybearerHintsAtom: WritableAtom<
    NewRegionKeybearerHints,
    [update: KeybearerHintsUpdate],
    void
  >;
  className?: string;
};

export default function Region({
  name,
  variant,
  bossHintsAtom,
  keybearerHintsAtom,
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
        {/* <TranslatorHints atom={translatorHintsAtom} variant={variant} className="flex-1" /> */}
      </div>
    </div>
  );
}
