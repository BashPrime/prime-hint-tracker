import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import { focusAtom } from "jotai-optics";
import { BossHintContainer } from "./BossHintContainer";
import FlyingIngCacheHints from "./FlyingIngCacheHints";
import TranslatorHints from "./TranslatorHints";
import { RegionHints } from "@/types/Prime2.types";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  name: string;
  atom: PrimitiveAtom<RegionHints>;
  className?: string;
};

export default function Region({ name, atom, className }: Props) {
  const { variant } = useAtomValue(atom)
  const bossHintsAtom = focusAtom(atom, (optic) => optic.prop("bossHints"));
  const flyingIngCacheHintsAtom = focusAtom(atom, (optic) => optic.prop("flyingCacheHints"));
  const translatorHintsAtom = focusAtom(atom, (optic) => optic.prop("translatorHints"));

  return (
    <div className={cn("flex flex-col", className)} data-name="region">
      <h2 className="font-bold px-2 bg-zinc-900 uppercase">{name}</h2>
      <div className="flex flex-col gap-2 h-full flex-1">
        <BossHintContainer atom={bossHintsAtom} variant={variant} className="flex-initial" />
        <FlyingIngCacheHints atom={flyingIngCacheHintsAtom} variant={variant} className="flex-initial" />
        <TranslatorHints atom={translatorHintsAtom} variant={variant} className="flex-1" />
      </div>
    </div>
  );
}
