import { AutoComplete } from "@/components/ui/autocomplete";
import {
  PRIME_2_LOCATIONS_WITH_ITEMS,
  PRIME_2_MAJORS_VALUES,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { skyTempleKeyHintsState } from "@/states/Prime2.states";
import { useAtomValue } from "jotai";

type Props = {
  className?: string;
};

export default function UnhintedItems({ className }: Props) {
  // !JOTAI
  const hints = useAtomValue(skyTempleKeyHintsState);
  return (
    <div className={cn("flex flex-col flex-1", className)} data-name="unhinted-items">
      <h2 className="font-bold px-2 bg-zinc-900 uppercase">Unhinted Items</h2>
      <div className="flex-[1_0_0] overflow-y-auto">
        {...hints.map((_, idx) => (
          <div className="m-1" key={`stk-${idx + 1}`}>
            <AutoComplete
              placeholder="Item..."
              emptyMessage="No item found."
              options={createOptions([...PRIME_2_MAJORS_VALUES], true)}
              tabIndex={1}
            />
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
