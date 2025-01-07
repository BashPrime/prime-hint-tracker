import { AutoComplete } from "@/components/ui/autocomplete";
import { Input } from "@/components/ui/input";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_ALL_LOCATIONS,
  PRIME_2_REGION_OPTIONS,
} from "@/data/Prime2.data";
import useRightClick from "@/hooks/useRightClick";
import { cn, createOptions } from "@/lib/utils";
import { TranslatorHint } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom } from "jotai";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

type HintUpdate = {
  firstValue?: string;
  secondValue?: string;
  proximity?: string;
  checked?: boolean;
};

type TranslatorHintProps = {
  hint: TranslatorHint;
  onHintUpdate: (update: HintUpdate) => void;
  headerColor?: string;
  className?: string;
};

function Hint({
  hint,
  onHintUpdate,
  headerColor,
  className,
}: TranslatorHintProps) {
  // !STATE
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
  const itemOptions = createOptions(
    [
      ...PRIME_2_ALL_ITEMS_VALUES,
      ...BOSS_KEY_HINTS,
      ...BOSS_ITEM_HINTS,
      JOKE_HINT_STR,
      "Major Upgrade",
    ],
    true
  );
  const secondValueOptions = createOptions(
    [
      ...PRIME_2_ALL_ITEMS_VALUES,
      ...PRIME_2_ALL_LOCATIONS,
      ...PRIME_2_REGION_OPTIONS,
      ...BOSSES,
    ],
    true
  );
  const isJokeHint = hint.firstValue === JOKE_HINT_STR;
  const isBossKeyHint = BOSS_KEY_HINTS.includes(hint.firstValue);
  const isBossItemHint = BOSS_ITEM_HINTS.includes(hint.firstValue);
  const hideSecondary = isJokeHint || isBossItemHint || isBossKeyHint;
  const proximityPlaceholder = !BOSSES.includes(hint.secondValue) ? "in" : "on";

  // !HOOKS
  const handleRightClick = useRightClick(() =>
    onHintUpdate({ checked: !hint.checked })
  );

  useEffect(() => {
    if (!hint.proximity) {
      setProximity("");
    }
  }, [hint.proximity]);

  return (
    <div
      className={cn(
        "bg-zinc-800 p-2",
        className,
        hint.checked && "bg-green-900"
      )}
      onMouseDown={handleRightClick}
      data-name="translator-hint"
    >
      <div className="flex flex-row justify-between">
        <p
          className={cn(
            "uppercase font-bold text-xs tracking-wide",
            headerColor,
            hint.checked && "text-green-400"
          )}
        >
          {hint.name}
        </p>
        <Check
          className={cn(
            "flex-none w-3 h-3 text-green-300",
            !hint.checked && "opacity-0"
          )}
        />
      </div>

      <div className="flex flex-col">
        <AutoComplete
          placeholder="Item"
          emptyMessage="No item found."
          value={{ label: hint.firstValue, value: hint.firstValue }}
          onInputChange={(value) => onHintUpdate({ firstValue: value })}
          options={itemOptions}
          tabIndex={1}
          className={cn(
            isJokeHint && "font-bold text-green-400",
            (isBossItemHint || isBossKeyHint) && "font-bold text-red-400"
          )}
          data-name="first-value"
        />
        {!hideSecondary && (
          <>
            <Input
              type="text"
              placeholder={proximityPlaceholder}
              value={proximity}
              onChange={(e) => setProximity(e.target.value)}
              onBlur={() => onHintUpdate({ proximity })}
              data-name="proximity"
              tabIndex={-1}
              className="-my-2"
            />
            <AutoComplete
              placeholder="Location or Item"
              emptyMessage="No location found."
              value={{ label: hint.secondValue, value: hint.secondValue }}
              onInputChange={(value) => onHintUpdate({ secondValue: value })}
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
  atom: PrimitiveAtom<TranslatorHint[]>;
  variant: string;
  className?: string;
};

export default function TranslatorHints({ atom, variant, className }: Props) {
  // !JOTAI
  const [hints, setHints] = useAtom(atom);

  // !LOCAL
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

  // !FUNCTION
  function updateHint(id: number, update: HintUpdate) {
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
      className={cn(
        "grid sm:grid-cols-none md:grid-rows-3 md:grid-cols-2 md:grid-flow-col",
        className
      )}
      data-name="translator-hints"
    >
      {hints.map((hint) => (
        <Hint
          hint={hint}
          onHintUpdate={(update) => updateHint(hint.id, update)}
          headerColor={headerColor}
          key={`${variant}-hint-${hint.id}`}
          className="border-b md:border-r border-zinc-900"
        />
      ))}
    </div>
  );
}
