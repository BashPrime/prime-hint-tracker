import { AutoComplete } from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import {
  PRIME_2_ALL_MAJOR_ITEMS,
  PRIME_2_LEGACY_MAJORS_CATEGORIES,
  PRIME_2_LOCATIONS_WITH_ITEMS,
  PRIME_2_MAJOR_UPGRADES,
  PRIME_2_PICKUP_FEATURES,
} from "@/data/Prime2.data";
import useRightClick from "@/hooks/useRightClick";
import { cn, createOptions } from "@/lib/utils";
import { featuralHintsEnabledAtom } from "@/states/App.states";
import { unhintedItemsState } from "@/states/Prime2.states";
import { UnhintedItem, UnhintedItemSchema } from "@/types/Prime2.types";
import { useAtom, useAtomValue } from "jotai";
import { Check, Plus, X } from "lucide-react";
import { v4 as uuidV4 } from "uuid";

type UpdateHintValue = {
  name?: string;
  item?: string;
  location?: string;
  checked?: boolean;
};

type HintInputProps = {
  hint: UnhintedItem;
  onUpdate: (update: UpdateHintValue) => void;
  onDelete: () => void;
  className?: string;
};

export function Hint({ hint, onUpdate, onDelete, className }: HintInputProps) {
  // !STATE
  const featuralHintsEnabled = useAtomValue(featuralHintsEnabledAtom)
  // !HOOKS
  const handleRightClick = useRightClick(() =>
    onUpdate({ checked: !hint.checked })
  );
  // !LOCAL
  const itemFeaturalOptions = createOptions([
    ...PRIME_2_MAJOR_UPGRADES,
    ...PRIME_2_PICKUP_FEATURES,
  ], true)
  const itemLegacyOptions = createOptions([
    ...PRIME_2_MAJOR_UPGRADES,
    ...PRIME_2_LEGACY_MAJORS_CATEGORIES,
  ], true)
  const itemOptions = featuralHintsEnabled ? itemFeaturalOptions : itemLegacyOptions
  const locationOptions = createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)

  return (
    <div
      onMouseDown={handleRightClick}
      className={cn(
        "flex flex-row justify-between gap-2 px-1",
        className,
        hint.checked && "bg-green-900"
      )}
    >
      <Check
        className={cn(
          "w-3 h-3 text-green-300 mt-1",
          !hint.checked && "opacity-0"
        )}
      />
      <div className={cn("flex flex-col flex-1")}>
        <AutoComplete
          placeholder="Item"
          emptyMessage="No item found."
          value={{ label: hint.item, value: hint.item }}
          onInputChange={(value) => onUpdate({ item: value })}
          options={itemOptions}
          tabIndex={1}
          openOnCreate
          className={cn(
            "font-bold text-red-400 my-0",
            hint.checked && "text-green-400"
          )}
        />
        <AutoComplete
          placeholder="Location"
          emptyMessage="No location found."
          value={{ label: hint.location ?? "", value: hint.location ?? "" }}
          onInputChange={(value) => onUpdate({ location: value })}
          options={locationOptions}
          tabIndex={1}
          className="text-[13px]"
        />
      </div>
      <X
        onClick={onDelete}
        tabIndex={-1}
        className={cn(
          "w-5 h-5 text-red-500 cursor-pointer",
          "hover:brightness-125 active:brightness-75",
          hint.checked && "text-red-400"
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

  // !FUNCTION
  function addNewHint() {
    const newHint = UnhintedItemSchema.parse({
      id: uuidV4(),
    });
    setHints((prev) => [...prev, newHint]);
  }

  function updateHint(id: string, update: UpdateHintValue) {
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
      <div className="flex flex-col md:flex-[1_0_0] overflow-y-auto gap-2">
        {...hints.map((hint) => (
          <Hint
            hint={hint}
            onUpdate={(value) => updateHint(hint.id, value)}
            onDelete={() => deleteHint(hint)}
            className="pl-1 bg-zinc-800"
            key={`unhinted-${hint.id}`}
          />
        ))}
        <Button
          onClick={addNewHint}
          className={cn(
            "place-self-center outline-none focus:outline-none",
            "hover:brightness-110 active:brightness-75",
            !hints.length && "mt-2"
          )}
        >
          <Plus /> Add new...
        </Button>
      </div>
    </div>
  );
}
