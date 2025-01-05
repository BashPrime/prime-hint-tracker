import { AutoComplete } from "@/components/ui/autocomplete";
import { Input } from "@/components/ui/input";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_ALL_LOCATIONS,
  PRIME_2_REGION_OPTIONS,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import {
  TranslatorHint,
} from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import { focusAtom } from "jotai-optics";
import { splitAtom } from "jotai/utils";

type TranslatorHintProps = {
  atom: PrimitiveAtom<TranslatorHint>;
  headerColor?: string;
};

function Hint({ atom, headerColor }: TranslatorHintProps) {
  // !JOTAI
  const hint = useAtomValue(atom);
  const [firstValue, setFirstValue] = useAtom(focusAtom(atom, (optic) => optic.prop("firstValue")));
  const [secondValue, setSecondValue] = useAtom(focusAtom(atom, (optic) => optic.prop("secondValue")));
  const [proximity, setProximity] = useAtom(focusAtom(atom, (optic) => optic.prop("proximity")));

  // !LOCAL
  const JOKE_HINT_STR = "Joke Hint";
  const itemOptions = createOptions(
    [...PRIME_2_ALL_ITEMS_VALUES, JOKE_HINT_STR],
    true
  );
  const secondValueOptions = createOptions(
    [
      ...PRIME_2_ALL_ITEMS_VALUES,
      ...PRIME_2_ALL_LOCATIONS,
      ...PRIME_2_REGION_OPTIONS,
    ],
    true
  );
  const isJokeHint = firstValue === JOKE_HINT_STR;

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
          value={{ label: firstValue, value: firstValue }}
          onValueChange={(o) => setFirstValue(o.value)}
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
              placeholder="in..."
              value={proximity}
              onChange={(e) => setProximity(e.target.value)}
              className="text-sm h-6"
              data-name="proximity"
              tabIndex={-1}
            />
            <AutoComplete
              placeholder="Location or Item..."
              emptyMessage="No location found."
              value={{ label: secondValue, value: secondValue }}
              onValueChange={(o) => setSecondValue(o.value)}
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
  const hintAtomAtoms = splitAtom(atom);
  const hintAtoms = useAtomValue(hintAtomAtoms);

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

  return (
    <div
      className={cn(
        "grid sm:grid-cols-none md:grid-rows-3 md:grid-flow-col gap-2 bg-zinc-800 px-2 pt-1",
        className
      )}
      data-name="translator-hints"
    >
      {hintAtoms.map((hintAtom, idx) => (
        <Hint
          atom={hintAtom}
          headerColor={headerColor}
          key={`${variant}-hint-${idx}`}
        />
      ))}
    </div>
  );
}
