import { AutoComplete } from "@/components/ui/autocomplete";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_RELATED_UPGRADES_HINTS,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { FlyingIngCacheHint } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom } from "jotai";

type HintProps = {
  hint: FlyingIngCacheHint;
  onHintChange: (hint: FlyingIngCacheHint) => void
};

function Hint({ hint, onHintChange }: HintProps) {
  return (
    <div>
      <p className="uppercase font-bold text-xs text-orange-500 tracking-wide">
        {hint.name}
      </p>
      <AutoComplete
        placeholder="Item..."
        emptyMessage="No item found."
        value={{ label: hint.value, value: hint.value }}
        onValueChange={(o) => onHintChange({ ...hint, value: o.label })}
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
  const [hints, setHints] = useAtom(atom)

  // !FUNCTION
  function updateCacheHint(hint: FlyingIngCacheHint) {
    setHints((prev) => {
      const newHints = [...prev];
      const index = newHints.findIndex((elem) => elem.id === hint.id);
      newHints[index] = hint;

      return newHints;
    });
  }

  return (
    <div
      className={cn(
        "sm:grid sm:grid-cols-none md:grid-cols-2 bg-zinc-800 px-2 pt-1",
        className
      )}
      data-name="flying-ing-cache-hints"
    >
      {hints.map((keyHint, idx) => (
        <Hint hint={keyHint} onHintChange={(hint) => updateCacheHint(hint)} key={`${variant}-cache-${idx}`} />
      ))}
    </div>
  );
}
