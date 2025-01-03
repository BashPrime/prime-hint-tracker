import { AutoComplete } from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import {
  PRIME_2_LOCATIONS_WITH_ITEMS,
  PRIME_2_MAJORS_VALUES,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { unhintedItemsState } from "@/states/Prime2.states";
import { Prime2ItemLocationHintSchema } from "@/types/Prime2.types";
import { useAtom } from "jotai";

type Props = {
  className?: string;
};

export default function UnhintedItems({ className }: Props) {
  // !JOTAI
  const [hints, setHints] = useAtom(unhintedItemsState);

  function createNewHint() {
    setHints([
      ...hints,
      Prime2ItemLocationHintSchema.parse({})
    ])
  }

  return (
    <div
      className={cn("flex flex-col md:flex-1", className)}
      data-name="unhinted-items"
    >
      <h2 className="font-bold px-2 bg-zinc-900 uppercase">Unhinted Items</h2>
      <div className="flex flex-col md:flex-[1_0_0] overflow-y-auto">
        {...hints.map((_, idx) => (
          <div className="m-1 bg-zinc-800" key={`stk-${idx + 1}`}>
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
        <Button
          onClick={createNewHint}
          className={cn(
            "w-4/5 place-self-center outline-none focus:outline-none",
            "hover:brightness-110 active:brightness-75",
            !hints.length && "mt-2"
          )}
        >
          + Add new hint
        </Button>
      </div>
    </div>
  );
}
