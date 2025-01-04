import { AutoComplete } from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import {
  PRIME_2_LOCATIONS_WITH_ITEMS,
  PRIME_2_MAJORS_VALUES,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { unhintedItemsState } from "@/states/Prime2.states";
import {
  Prime2ItemLocationHint,
  Prime2ItemLocationHintSchema,
  UnhintedItem,
} from "@/types/Prime2.types";
import { PrimitiveAtom } from "jotai";
import { atom, useAtom } from "jotai";

type HintInputProps = {
  hintAtom: PrimitiveAtom<Prime2ItemLocationHint>;
  onDelete: () => void;
  className?: string;
};

export function Hint({
  hintAtom,
  onDelete: onDeleteHint,
  className,
}: HintInputProps) {
  // !JOTAI
  const [hint, setHint] = useAtom(hintAtom);

  return (
    <div className={className}>
      <AutoComplete
        placeholder="Item..."
        emptyMessage="No item found."
        value={{ label: hint.item ?? "", value: hint.item ?? "" }}
        onValueChange={(o) => setHint((prev) => ({ ...prev, item: o.value }))}
        options={createOptions([...PRIME_2_MAJORS_VALUES], true)}
        tabIndex={1}
        className="uppercase font-bold tracking-wide placeholder:normal-case h-6"
      />
      <AutoComplete
        placeholder="Location..."
        emptyMessage="No location found."
        value={{ label: hint.location ?? "", value: hint.location ?? "" }}
        onValueChange={(o) =>
          setHint((prev) => ({ ...prev, location: o.value }))
        }
        options={createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)}
        tabIndex={1}
        className="text-xs h-6"
      />
      <Button
        onClick={onDeleteHint}
        className={cn("hover:brightness-110 active:brightness-75")}
      >
        X
      </Button>
    </div>
  );
}

type Props = {
  className?: string;
};

export default function UnhintedItems({ className }: Props) {
  // !JOTAI
  const [hints, setHints] = useAtom(unhintedItemsState);

  function addNewHint() {
    const newHint = {
      id: hints.length,
      hint: atom(Prime2ItemLocationHintSchema.parse({})),
    };
    console.log('created new hint with id ', newHint.id)
    setHints((prev) => [...prev, newHint]);
    console.log(hints);
  }

  function deleteHint(hintToDelete: UnhintedItem) {
    const filtered = hints.filter((hint) => hint.id !== hintToDelete.id);
    console.log(filtered, hints)
    setHints(filtered);
  }

  return (
    <div
      className={cn("flex flex-col md:flex-1", className)}
      data-name="unhinted-items"
    >
      <h2 className="font-bold px-2 bg-zinc-900 uppercase">Unhinted Items</h2>
      <div className="flex flex-col md:flex-[1_0_0] overflow-y-auto">
        {...hints.map((item, idx) => (
          <Hint
            hintAtom={item.hint}
            onDelete={() => deleteHint(item)}
            className="m-1 bg-zinc-800"
            key={`unhinted-elem-${idx}`}
          />
        ))}
        <Button
          onClick={addNewHint}
          className={cn(
            "w-2/5 place-self-center outline-none focus:outline-none",
            "hover:brightness-110 active:brightness-75",
            !hints.length && "mt-2"
          )}
        >
          + Add
        </Button>
      </div>
    </div>
  );
}
