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
  UnhintedItemSchema,
} from "@/types/Prime2.types";
import { atom, useAtom, PrimitiveAtom } from "jotai";
import { Plus, X } from "lucide-react";
import { v4 as uuidV4 } from "uuid";

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
    <div className={cn("flex flex-row", className)}>
      <div className="flex flex-col flex-1">
        <AutoComplete
          placeholder="Item..."
          emptyMessage="No item found."
          value={{ label: hint.item ?? "", value: hint.item ?? "" }}
          onValueChange={(o) => setHint((prev) => ({ ...prev, item: o.value }))}
          options={createOptions([...PRIME_2_MAJORS_VALUES], true)}
          tabIndex={1}
          className="font-bold h-6"
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
          className="h-6"
        />
      </div>
      <X
        onClick={onDeleteHint}
        tabIndex={-1}
        className={cn(
          "w-8 text-red-500 cursor-pointer content-end",
          "hover:brightness-125 active:brightness-75"
        )}
      />
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
    const newHint = UnhintedItemSchema.parse({
      id: uuidV4(),
      hint: atom(Prime2ItemLocationHintSchema.parse({})),
    });
    setHints((prev) => [...prev, newHint]);
  }

  function deleteHint(hintToDelete: UnhintedItem) {
    const filtered = hints.filter((hint) => hint.id !== hintToDelete.id);
    setHints(filtered);
  }

  return (
    <div
      className={cn("flex flex-col md:flex-1", className)}
      data-name="unhinted-items"
    >
      <h2 className="font-bold px-2 bg-zinc-900 uppercase">Unhinted Items</h2>
      <div className="flex flex-col md:flex-[1_0_0] overflow-y-auto">
        {...hints.map((item) => (
          <Hint
            hintAtom={item.hint}
            onDelete={() => deleteHint(item)}
            className="m-1 bg-zinc-800"
            key={`unhinted-${item.id}`}
          />
        ))}
        <Button
          onClick={addNewHint}
          className={cn(
            "text-xs place-self-center outline-none focus:outline-none",
            "hover:brightness-110 active:brightness-75",
            !hints.length && "mt-2"
          )}
        >
          <Plus /> Add new hint...
        </Button>
      </div>
    </div>
  );
}
