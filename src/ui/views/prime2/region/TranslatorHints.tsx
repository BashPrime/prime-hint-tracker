import { AutoComplete } from "@/components/ui/autocomplete";
import { Input } from "@/components/ui/input";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_ALL_LOCATIONS,
  PRIME_2_REGION_OPTIONS,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { TranslatorHint } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom } from "jotai";
import { useEffect, useState } from "react";

type HintUpdate = {
  firstValue?: string;
  secondValue?: string;
  proximity?: string;
};

type TranslatorHintProps = {
  hint: TranslatorHint;
  onHintUpdate: (update: HintUpdate) => void;
  headerColor?: string;
};

function Hint({ hint, onHintUpdate, headerColor }: TranslatorHintProps) {
  // !STATE
  const [proximity, setProximity] = useState<string>("");
  // !LOCAL
  const JOKE_HINT_STR = "Joke Hint";
  const BOSSES = ["U-Mos Reward", "Amorbis", "Chykka", "Quadraxis"];
  const itemOptions = createOptions(
    [...PRIME_2_ALL_ITEMS_VALUES, JOKE_HINT_STR],
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
  const proximityPlaceholder = BOSSES.includes(hint.secondValue)
    ? "on"
    : "in";

  // !HOOKS
  useEffect(() => {
    if (!hint.proximity) {
      setProximity("")
    }
  }, [hint.proximity])

  return (
    <div>
      <p
        className={cn("uppercase font-bold text-xs tracking-wide", headerColor)}
      >
        {hint.name}
      </p>
      <div className="flex flex-col">
        <AutoComplete
          placeholder="Item..."
          emptyMessage="No item found."
          value={{ label: hint.firstValue, value: hint.firstValue }}
          onInputChange={(value) => onHintUpdate({ firstValue: value })}
          options={itemOptions}
          tabIndex={1}
          className={cn(
            "text-sm h-6",
            isJokeHint && "font-bold text-green-400"
          )}
          data-name="first-value"
        />
        {!isJokeHint && (
          <>
            <Input
              type="text"
              placeholder={proximityPlaceholder}
              value={proximity}
              onChange={(e) => setProximity(e.target.value)}
              onBlur={() => onHintUpdate({ proximity })}
              className="text-sm h-6"
              data-name="proximity"
              tabIndex={-1}
            />
            <AutoComplete
              placeholder="Location or Item..."
              emptyMessage="No location found."
              value={{ label: hint.secondValue, value: hint.secondValue }}
              onInputChange={(value) => onHintUpdate({ secondValue: value })}
              options={secondValueOptions}
              tabIndex={1}
              className="text-sm h-6"
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
        "grid sm:grid-cols-none md:grid-rows-3 md:grid-flow-col gap-2 bg-zinc-800 px-2 pt-1",
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
        />
      ))}
    </div>
  );
}
