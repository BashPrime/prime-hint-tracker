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
import {
  keybearerHintsNamesAtom,
  keybearerRoomsState,
} from "@/states/Prime2.states";
import {
  KeybearerHint,
  RegionKeybearerHints,
} from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import { Check } from "lucide-react";

type HintProps = {
  value: KeybearerHint;
  onUpdate: (update: KeybearerHint) => void;
  lightWorldName?: string;
  darkWorldName?: string;
  className?: string;
};

function Hint({
  value,
  onUpdate,
  lightWorldName,
  darkWorldName,
  className,
}: HintProps) {
  // !STATE
  const legacyHintsEnabled = useAtomValue(legacyHintsEnabledState);
  const keybearerRooms = useAtomValue(keybearerRoomsState);

  // !HOOKS
  const handleRightClick = useRightClick(() =>
    onUpdate({ ...value, checked: !value.checked })
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
        value.checked && "bg-green-900"
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
              className={cn(
                "text-[#4fa0ff]",
                value.checked && "text-green-400"
              )}
            >
              {lightWorldName}
            </p>
          )}
          {(keybearerRooms === "darkAether" || keybearerRooms === "both") && (
            <p
              className={cn(
                "text-violet-400",
                value.checked && "text-indigo-200"
              )}
            >
              {darkWorldName}
            </p>
          )}
        </div>
        <Check
          className={cn(
            "flex-none w-3 h-3 text-green-300",
            !value.checked && "opacity-0"
          )}
        />
      </div>
      <AutoComplete
        placeholder="Item"
        emptyMessage="No item found."
        value={{ label: value.item, value: value.item }}
        onInputChange={(item) => onUpdate({ ...value, item })}
        options={optionsToUse}
        tabIndex={1}
      />
    </div>
  );
}

type Props = {
  atom: PrimitiveAtom<RegionKeybearerHints>;
  variant: string;
  className?: string;
};

export default function KeybearerHints({ atom, variant, className }: Props) {
  // !JOTAI
  const [hints, setHints] = useAtom(atom);
  const names = useAtomValue(keybearerHintsNamesAtom);
  const keybearerRooms = useAtomValue(keybearerRoomsState);

  // !FUNCTION
  function buildHintsEntries(hints: RegionKeybearerHints) {
    const final = [];
    const entries = Object.entries(hints);

    for (const [key, value] of entries) {
      const namesMatch = names[key as keyof typeof names];
      final.push({
        key,
        value,
        lightWorld: namesMatch.lightWorld,
        darkWorld: namesMatch.darkWorld,
      });
    }

    return final.sort((a, b) => {
      if (keybearerRooms === "darkAether") {
        return a.darkWorld < b.darkWorld ? -1 : 1;
      }

      return a.lightWorld < b.lightWorld ? -1 : 1;
    });
  }

  function updateHint(key: string, update: KeybearerHint) {
    const newHints = { ...hints };
    newHints[key] = update;
    setHints(newHints);
  }

  // !LOCAL
  const hintsEntries = buildHintsEntries(hints);

  return (
    <div
      className={cn("sm:grid sm:grid-cols-none md:grid-cols-2", className)}
      data-name="flying-ing-cache-hints"
    >
      {hintsEntries.map((hint, idx) => {
        return (
          <Hint
            lightWorldName={hint.lightWorld}
            darkWorldName={hint.darkWorld}
            value={hint.value}
            onUpdate={(update) => updateHint(hint.key, update)}
            key={`${variant}-cache-${idx}`}
            className="border-b md:border-r border-zinc-900"
          />
        );
      })}
    </div>
  );
}
