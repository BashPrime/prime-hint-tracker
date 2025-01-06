import { AutoComplete } from "@/components/ui/autocomplete";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_RELATED_UPGRADES_HINTS,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { KeybearerHint } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom } from "jotai";

type HintProps = {
  hint: KeybearerHint;
  onHintChange: (hint: KeybearerHint) => void
};

function Hint({ hint, onHintChange }: HintProps) {
  return (
    <div>
      <p className="uppercase font-bold text-xs text-[#4fa0ff] tracking-wide">
        {hint.lightWorldLocation}
      </p>
      <AutoComplete
        placeholder="Item"
        emptyMessage="No item found."
        value={{ label: hint.value, value: hint.value }}
        onInputChange={(value) => onHintChange({ ...hint, value })}
        options={createOptions(
          [...PRIME_2_ALL_ITEMS_VALUES, ...PRIME_2_RELATED_UPGRADES_HINTS],
          true
        )}
        tabIndex={1}
      />
      <p className="text-sm text-zinc-400">in <span className="uppercase text-xs font-bold text-violet-400 tracking-wide">{hint.darkWorldLocation}</span></p>
    </div>
  );
}

type Props = {
  atom: PrimitiveAtom<KeybearerHint[]>;
  variant: string;
  className?: string;
};

export default function KeybearerHints({
  atom,
  variant,
  className,
}: Props) {
  // !JOTAI
  const [hints, setHints] = useAtom(atom)

  // !FUNCTION
  function updateCacheHint(hint: KeybearerHint) {
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
        "sm:grid sm:grid-cols-none md:grid-cols-2 bg-zinc-800 p-2 gap-3",
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
