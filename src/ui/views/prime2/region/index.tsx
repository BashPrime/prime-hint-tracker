import { PrimitiveAtom, useAtomValue } from "jotai";
import { focusAtom } from "jotai-optics";
import { BossHints } from "./BossHints";
import KeybearerHints from "./KeybearerHints";
import TranslatorHints from "./TranslatorHints";
import { RegionHints } from "@/types/Prime2.types";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  atom: PrimitiveAtom<RegionHints>;
  className?: string;
};

export default function Region({ name, atom, className }: Props) {
  const { variant } = useAtomValue(atom)
  const bossHintsAtom = focusAtom(atom, (optic) => optic.prop("bossHints"));
  const keybearerHintsAtom = focusAtom(atom, (optic) => optic.prop("keybearerHints"));
  const translatorHintsAtom = focusAtom(atom, (optic) => optic.prop("translatorHints"));

  return (
    <div className={cn("flex flex-col", className)} data-name="region">
      <h2 className="font-bold px-2 bg-zinc-900 uppercase select-none">{name}</h2>
      <div className="flex flex-col gap-2 h-full flex-1">
        <BossHints atom={bossHintsAtom} variant={variant} />
        <KeybearerHints atom={keybearerHintsAtom} variant={variant} />
        <TranslatorHints atom={translatorHintsAtom} variant={variant} className="flex-1" />
      </div>
    </div>
  );
}
