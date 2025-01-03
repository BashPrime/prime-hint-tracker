import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_LOCATIONS_WITH_ITEMS } from "@/data/Prime2.data";
import { createOptions } from "@/lib/utils";
import { skyTempleKeyHintsState } from "@/states/Prime2.states";
import { useAtomValue } from "jotai";

type Props = {
  className?: string;
};

export default function SkyTempleKeyHints({ className }: Props) {
  // !JOTAI
  const hints = useAtomValue(skyTempleKeyHintsState);
  return (
    <div className={className} data-name="stkHints">
      <h2 className="font-bold px-2 bg-zinc-900 uppercase">Sky Temple Keys</h2>
      <div className="md:flex-[0_0_initial] md:grid md:grid-rows-5 md:grid-flow-col bg-zinc-800">
        {...hints.map((hint, idx) => (
          <div className="m-1" key={`stk-${idx + 1}`}>
            <p className="uppercase font-bold text-xs text-lime-400 tracking-wide">
              {hint?.item}
            </p>
            <AutoComplete
              placeholder="Location..."
              emptyMessage="No location found."
              options={createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)}
              tabIndex={1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
