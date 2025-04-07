import { AutoComplete } from "@/components/ui/autocomplete";
import { Input } from "@/components/ui/input";
import {
  PRIME_2_ALL_MAJOR_ITEMS,
  PRIME_2_ALL_LOCATIONS,
  PRIME_2_REGION_OPTIONS,
  PRIME_2_PICKUP_FEATURES,
  PRIME_2_MAJOR_UPGRADES,
  PRIME_2_LOCATIONS_WITH_ITEMS,
  PRIME_2_LOCATION_FEATURES,
  PRIME_2_PROGRESSIVE_MAJORS,
  PRIME_2_LEGACY_MAJORS_CATEGORIES,
  PRIME_2_EXPANSIONS,
} from "@/data/Prime2.data";
import useRightClick from "@/hooks/useRightClick";
import { cn, createOptions } from "@/lib/utils";
import { legacyHintsEnabledState } from "@/states/App.states";
import { translatorHintsNamesAtom } from "@/states/Prime2.states";
import {
  NewRegionTranslatorHints,
  NewTranslatorHint,
} from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

type TranslatorHintProps = {
  name: string;
  value: NewTranslatorHint;
  onHintUpdate: (update: NewTranslatorHint) => void;
  headerColor?: string;
  className?: string;
};

function Hint({
  name,
  value,
  onHintUpdate,
  headerColor,
  className,
}: TranslatorHintProps) {
  // !STATE
  const legacyHintsEnabled = useAtomValue(legacyHintsEnabledState);
  const [proximity, setProximity] = useState<string>("");

  // !LOCAL
  const JOKE_HINT_STR = "Joke Hint";
  const BOSS_KEY_HINTS = [
    "Dark Agon Temple Keys",
    "Dark Torvus Temple Keys",
    "Ing Hive Temple Keys",
  ];
  const BOSS_ITEM_HINTS = [
    "Amorbis Item",
    "Chykka Item",
    "Quadraxis Item",
    "U-Mos Reward Item",
  ];
  const BOSSES = ["U-Mos Reward", "Amorbis", "Chykka", "Quadraxis"];
  const itemFeaturalOptions = createOptions(
    [
      ...PRIME_2_MAJOR_UPGRADES,
      ...PRIME_2_PROGRESSIVE_MAJORS,
      ...PRIME_2_PICKUP_FEATURES,
      ...PRIME_2_EXPANSIONS,
      ...BOSS_KEY_HINTS,
      ...BOSS_ITEM_HINTS,
      JOKE_HINT_STR,
    ],
    true
  );
  const itemLegacyOptions = createOptions(
    [
      ...PRIME_2_MAJOR_UPGRADES,
      ...PRIME_2_PROGRESSIVE_MAJORS,
      ...PRIME_2_LEGACY_MAJORS_CATEGORIES,
      ...BOSS_KEY_HINTS,
      ...BOSS_ITEM_HINTS,
      JOKE_HINT_STR,
    ],
    true
  );
  const firstValueOptions = legacyHintsEnabled
    ? itemLegacyOptions
    : itemFeaturalOptions;
  const locationFeaturalOptions = createOptions(
    [...PRIME_2_LOCATIONS_WITH_ITEMS, ...PRIME_2_LOCATION_FEATURES, ...BOSSES],
    true
  );
  const locationLegacyOptions = createOptions([
    ...(!value.proximity
      ? PRIME_2_LOCATIONS_WITH_ITEMS
      : PRIME_2_ALL_LOCATIONS),
    ...(!value.proximity ? [] : PRIME_2_ALL_MAJOR_ITEMS),
    ...PRIME_2_REGION_OPTIONS,
    ...BOSSES,
  ]);
  const secondValueOptions = legacyHintsEnabled
    ? locationLegacyOptions
    : locationFeaturalOptions;
  const isJokeHint = value.firstValue === JOKE_HINT_STR;
  const isBossKeyHint = BOSS_KEY_HINTS.includes(value.firstValue);
  const isBossItemHint = BOSS_ITEM_HINTS.includes(value.firstValue);
  const hideSecondary = isJokeHint || isBossItemHint || isBossKeyHint;
  const proximityPlaceholder = !BOSSES.includes(value.secondValue)
    ? "in"
    : "on";
  const secondValuePlaceholder =
    legacyHintsEnabled && value.proximity ? "Location or Item" : "Location";
  const secondValueEmptyStr =
    legacyHintsEnabled && value.proximity
      ? "No value found."
      : "No location found.";

  // !HOOKS
  const handleRightClick = useRightClick(() =>
    onHintUpdate({ ...value, checked: !value.checked })
  );

  useEffect(() => {
    setProximity(value.proximity ?? "");
  }, [value.proximity]);

  return (
    <div
      className={cn(
        "bg-zinc-800 p-2",
        className,
        value.checked && "bg-green-900"
      )}
      onMouseDown={handleRightClick}
      data-name="translator-hint"
    >
      <div className="flex flex-row justify-between">
        <p
          className={cn(
            "uppercase font-bold text-xs tracking-wide select-none",
            headerColor,
            value.checked && "text-green-400"
          )}
        >
          {name}
        </p>
        <Check
          className={cn(
            "flex-none w-3 h-3 text-green-300",
            !value.checked && "opacity-0"
          )}
        />
      </div>

      <div className="flex flex-col">
        <AutoComplete
          placeholder="Item"
          emptyMessage="No item found."
          value={{ label: value.firstValue, value: value.firstValue }}
          onInputChange={(update) =>
            onHintUpdate({ ...value, firstValue: update })
          }
          options={firstValueOptions}
          tabIndex={1}
          className={cn(
            isJokeHint && "font-bold text-green-400",
            (isBossItemHint || isBossKeyHint) && "font-bold text-red-400"
          )}
          data-name="first-value"
        />
        {!hideSecondary && (
          <>
            {legacyHintsEnabled && (
              <Input
                type="text"
                placeholder={proximityPlaceholder}
                value={proximity}
                onChange={(e) => setProximity(e.target.value)}
                onBlur={() => onHintUpdate({ ...value, proximity })}
                data-name="proximity"
                tabIndex={-1}
                className="-my-2"
              />
            )}
            <AutoComplete
              placeholder={secondValuePlaceholder}
              emptyMessage={secondValueEmptyStr}
              value={{ label: value.secondValue, value: value.secondValue }}
              onInputChange={(update) =>
                onHintUpdate({ ...value, secondValue: update })
              }
              options={secondValueOptions}
              tabIndex={1}
              data-name="second-value"
            />
          </>
        )}
      </div>
    </div>
  );
}

type Props = {
  atom: PrimitiveAtom<NewRegionTranslatorHints>;
  variant: string;
  className?: string;
};

export default function TranslatorHints({ atom, variant, className }: Props) {
  // !JOTAI
  const [hints, setHints] = useAtom(atom);
  const names = useAtomValue(translatorHintsNamesAtom);

  // !FUNCTION
  function buildHintsEntries(hints: NewRegionTranslatorHints) {
    const final = [];
    const entries = Object.entries(hints);

    for (const [key, value] of entries) {
      const namesMatch = names[key as keyof typeof names];
      final.push({
        key,
        name: namesMatch,
        value,
      });
    }

    return final.sort((a, b) => (a.name < b.name ? -1 : 1));
  }

  function updateHint(key: string, update: NewTranslatorHint) {
    const newHints = { ...hints };
    newHints[key] = update;
    setHints(newHints);
  }

  // !LOCAL
  const hintsEntries = buildHintsEntries(hints);
  let headerColor: string | undefined;

  switch (variant) {
    case "temple":
      headerColor = "text-purple-400";
      break;
    case "agon":
      headerColor = "text-amber-400";
      break;
    case "torvus":
      headerColor = "text-emerald-400";
      break;
    case "sanctuary":
      headerColor = "text-sky-400";
      break;
    default:
  }

  return (
    <div
      className={cn(
        "grid sm:grid-cols-none md:grid-rows-3 md:grid-cols-2 md:grid-flow-col",
        className
      )}
      data-name="translator-hints"
    >
      {hintsEntries.map((hint, idx) => (
        <Hint
          name={hint.name}
          value={hint.value}
          onHintUpdate={(update) => updateHint(hint.key, update)}
          headerColor={headerColor}
          key={`${variant}-hint-${idx}`}
          className="border-b md:border-r border-zinc-900"
        />
      ))}
    </div>
  );
}
