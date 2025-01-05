import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_LOCATIONS_WITH_ITEMS } from "@/data/Prime2.data";
import { createOptions } from "@/lib/utils";
import { skyTempleKeyHintsState } from "@/states/Prime2.states";
import { SkyTempleKeyHint } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import { splitAtom } from "jotai/utils";

type HintProps = {
  hintAtom: PrimitiveAtom<SkyTempleKeyHint>;
};

function Hint({ hintAtom }: HintProps) {
  const [hint, setHint] = useAtom(hintAtom);

  return (
    <div className="m-1">
      <p className="uppercase font-bold text-sm text-lime-400 tracking-wide">
        {hint.name}
      </p>
      <AutoComplete
        placeholder="Location..."
        emptyMessage="No location found."
        value={{ label: hint.location, value: hint.location }}
        onValueChange={(o) =>
          setHint((prev) => ({ ...prev, location: o.label }))
        }
        options={createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)}
        tabIndex={1}
        className="text-xs"
      />
    </div>
  );
}

type Props = {
  className?: string;
};

export default function SkyTempleKeyHints({ className }: Props) {
  // !JOTAI
  const splitHints = splitAtom(skyTempleKeyHintsState);
  const hints = useAtomValue(splitHints);

  return (
    <div className={className} data-name="stkHints">
      <h2 className="font-bold px-2 bg-zinc-900 uppercase">Sky Temple Keys</h2>
      <div className="md:flex-[0_0_initial] md:grid md:grid-rows-5 md:grid-flow-col bg-zinc-800">
        {hints.map((hint, idx) => (
          <Hint hintAtom={hint} key={`stk-${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}
