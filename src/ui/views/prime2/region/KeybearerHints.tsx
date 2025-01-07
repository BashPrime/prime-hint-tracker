import { AutoComplete } from "@/components/ui/autocomplete";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_RELATED_UPGRADES_HINTS,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { KeybearerHint } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom } from "jotai";
import { Check } from "lucide-react";
import { MouseEvent, useCallback } from "react";

type UpdateValue = {
  value?: string;
  checked?: boolean;
};

type HintProps = {
  hint: KeybearerHint;
  onUpdate: (update: UpdateValue) => void;
};

function Hint({ hint, onUpdate }: HintProps) {
  // !FUNCTION
  const handleMouseDown = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      // right click
      if (event.nativeEvent.button === 2) {
        onUpdate({ checked: !hint.checked });
      }
    },
    [onUpdate, hint.checked]
  );
  return (
    <div
      onMouseDown={handleMouseDown}
      className={cn(
        "bg-zinc-800 border border-zinc-900 p-2",
        hint.checked && "bg-green-900"
      )}
    >
      <div className="flex flex-row justify-between">
        <p
          className={cn(
            "uppercase font-bold text-xs text-[#4fa0ff] tracking-wide",
            hint.checked && "text-green-400"
          )}
        >
          {hint.lightWorldLocation}
        </p>
        <Check
          className={cn(
            "flex-none w-3 h-3 text-green-300",
            !hint.checked && "opacity-0"
          )}
        />
      </div>
      <AutoComplete
        placeholder="Item"
        emptyMessage="No item found."
        value={{ label: hint.value, value: hint.value }}
        onInputChange={(value) => onUpdate({ value })}
        options={createOptions(
          [...PRIME_2_ALL_ITEMS_VALUES, ...PRIME_2_RELATED_UPGRADES_HINTS],
          true
        )}
        tabIndex={1}
      />
      <p className="text-xs text-zinc-400 font-bold uppercase tracking-wide">
        {"in "}
        <span className="text-violet-400">
          {hint.darkWorldLocation}
        </span>
      </p>
    </div>
  );
}

type Props = {
  atom: PrimitiveAtom<KeybearerHint[]>;
  variant: string;
  className?: string;
};

export default function KeybearerHints({ atom, variant, className }: Props) {
  // !JOTAI
  const [hints, setHints] = useAtom(atom);

  // !FUNCTION
  function updateHint(id: number, update: UpdateValue) {
    setHints((prev) => {
      const newHints = [...prev];
      return newHints.map((hint) => {
        if (hint.id === id) {
          return {
            ...hint,
            ...update,
          };
        }

        return { ...hint };
      });
    });
  }

  return (
    <div
      className={cn("sm:grid sm:grid-cols-none md:grid-cols-2", className)}
      data-name="flying-ing-cache-hints"
    >
      {hints.map((hint, idx) => (
        <Hint
          hint={hint}
          onUpdate={(update) => updateHint(hint.id, update)}
          key={`${variant}-cache-${idx}`}
        />
      ))}
    </div>
  );
}
