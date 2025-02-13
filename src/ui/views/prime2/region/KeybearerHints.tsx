import { AutoComplete } from "@/components/ui/autocomplete";
import {
  PRIME_2_ALL_MAJOR_ITEMS,
  PRIME_2_EXPANSIONS,
  PRIME_2_MAJOR_UPGRADES,
  PRIME_2_PICKUP_FEATURES,
  PRIME_2_PROGRESSIVE_MAJORS,
  PRIME_2_LEGACY_KEYBEARER_CATEGORIES,
  PRIME_2_TEMPLE_KEYS,
} from "@/data/Prime2.data";
import useRightClick from "@/hooks/useRightClick";
import { cn, createOptions } from "@/lib/utils";
import { legacyHintsEnabledState } from "@/states/App.states";
import { keybearerRoomsState } from "@/states/Prime2.states";
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
  const legacyHintsEnabled = useAtomValue(legacyHintsEnabledState);
  const keybearerRooms = useAtomValue(keybearerRoomsState);

  // !HOOKS
  const handleRightClick = useRightClick(() =>
    onUpdate({ checked: !hint.checked })
  );

  // !LOCAL
  const legacyOptions = createOptions(
    [...PRIME_2_ALL_MAJOR_ITEMS, ...PRIME_2_LEGACY_KEYBEARER_CATEGORIES],
    true
  );
  const featuralOptions = createOptions(
    [
      ...PRIME_2_PICKUP_FEATURES,
      ...PRIME_2_MAJOR_UPGRADES,
      ...PRIME_2_PROGRESSIVE_MAJORS,
      ...PRIME_2_EXPANSIONS,
      ...PRIME_2_TEMPLE_KEYS,
    ],
    true
  );
  const optionsToUse = legacyHintsEnabled ? legacyOptions : featuralOptions;

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
        <div
          className={cn(
            "flex flex-col gap-0.5 uppercase font-bold text-xs tracking-wide select-none"
          )}
        >
          {(keybearerRooms === "aether" || keybearerRooms === "both") && (
            <p
              className={cn("text-[#4fa0ff]", hint.checked && "text-green-400")}
            >
              {hint.lightWorldLocation}
            </p>
          )}
          {(keybearerRooms === "darkAether" || keybearerRooms === "both") && (
            <p
              className={cn(
                "text-violet-400",
                hint.checked && "text-indigo-200"
              )}
            >
              {hint.darkWorldLocation}
            </p>
          )}
        </div>
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
