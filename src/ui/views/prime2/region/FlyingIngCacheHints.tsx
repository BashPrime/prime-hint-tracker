import { AutoComplete } from "@/components/ui/autocomplete";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_RELATED_UPGRADES_HINTS,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { FlyingIngCacheHint, RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import { splitAtom } from "jotai/utils";

type HintProps = {
  atom: PrimitiveAtom<FlyingIngCacheHint>;
};

function Hint({ atom }: HintProps) {
  // !JOTAI
  const [hint, setHint] = useAtom(atom);

  return (
    <div>
      <p className="uppercase font-bold text-xs text-orange-500 tracking-wide">
        {hint.name}
      </p>
      <AutoComplete
        placeholder="Item..."
        emptyMessage="No item found."
        value={{ label: hint.value, value: hint.value }}
        onValueChange={(o) => setHint((prev) => ({ ...prev, value: o.label }))}
        options={createOptions(
          [...PRIME_2_ALL_ITEMS_VALUES, ...PRIME_2_RELATED_UPGRADES_HINTS],
          true
        )}
        tabIndex={1}
      />
    </div>
  );
}

type Props = {
  atom: PrimitiveAtom<FlyingIngCacheHint[]>;
  variant: string;
  className?: string;
};

export default function FlyingIngCacheHints({
  atom,
  variant,
  className,
}: Props) {
  // !JOTAI
  const keyAtomAtoms = splitAtom(atom);
  const keyAtoms = useAtomValue(keyAtomAtoms);

  return (
    <div
      className={cn(
        "sm:grid sm:grid-cols-none md:grid-cols-2 bg-zinc-800 px-2 pt-1",
        className
      )}
      data-name="flying-ing-cache-hints"
    >
      {keyAtoms.map((keyAtom, idx) => (
        <Hint atom={keyAtom} key={`${variant}-cache-${idx}`} />
      ))}
    </div>
  );
}
