import { AutoComplete } from "@/components/ui/autocomplete";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_EXPANSIONS_VALUES,
  PRIME_2_MAJORS_VALUES,
  PRIME_2_PICKUP_FEATURES,
  PRIME_2_PROGRESSIVE_MAJORS_VALUES,
  PRIME_2_RELATED_UPGRADES_HINTS,
  PRIME_2_TEMPLE_KEYS_VALUES,
} from "@/data/Prime2.data";
import useRightClick from "@/hooks/useRightClick";
import { cn, createOptions } from "@/lib/utils";
import { featuralHintsEnabledAtom } from "@/states/App.states";
import { KeybearerHint } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import { Check } from "lucide-react";

type UpdateValue = {
  value?: string;
  checked?: boolean;
};

type HintProps = {
  hint: KeybearerHint;
  onUpdate: (update: UpdateValue) => void;
  className?: string;
};

function Hint({ hint, onUpdate, className }: HintProps) {
  // !STATE
  const featuralHintsEnabled = useAtomValue(featuralHintsEnabledAtom);
  // !HOOKS
  const handleRightClick = useRightClick(() =>
    onUpdate({ checked: !hint.checked })
  );

  // !LOCAL
  const legacyOptions = createOptions(
    [...PRIME_2_ALL_ITEMS_VALUES, ...PRIME_2_RELATED_UPGRADES_HINTS],
    true
  );
  const featuralOptions = createOptions(
    [
      ...PRIME_2_PICKUP_FEATURES,
      ...PRIME_2_MAJORS_VALUES,
      ...PRIME_2_PROGRESSIVE_MAJORS_VALUES,
      ...PRIME_2_EXPANSIONS_VALUES,
      ...PRIME_2_TEMPLE_KEYS_VALUES,
    ],
    true
  );
  const optionsToUse = featuralHintsEnabled ? featuralOptions : legacyOptions;

  return (
    <div
      onMouseDown={handleRightClick}
      className={cn(
        "bg-zinc-800 p-2",
        className,
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
        options={optionsToUse}
        tabIndex={1}
      />
      <p className="text-xs text-zinc-400 font-bold uppercase tracking-wide">
        {"in "}
        <span className="text-violet-400">{hint.darkWorldLocation}</span>
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
          className="border-b md:border-r border-zinc-900"
        />
      ))}
    </div>
  );
}
