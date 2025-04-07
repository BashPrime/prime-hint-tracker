import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_LOCATIONS_WITH_ITEMS } from "@/data/Prime2.data";
import useRightClick from "@/hooks/useRightClick";
import { cn, createOptions } from "@/lib/utils";
import {
  skyTempleKeyHintsArraySelector,
  updateSkyTempleKeyHintAtom,
} from "@/states/Prime2.states";
import {
  SkyTempleKeyHint,
  SkyTempleKeyHints as SkyTempleKeyHintsType,
} from "@/types/Prime2.types";
import { useAtomValue, useSetAtom } from "jotai";
import { Check } from "lucide-react";

type HintProps = {
  name: string;
  value: SkyTempleKeyHint;
  className?: string;
};

function Hint({ name, value, className }: HintProps) {
  // !STATE
  const updateSkyTempleKey = useSetAtom(updateSkyTempleKeyHintAtom);
  const stkKey = name as keyof SkyTempleKeyHintsType;
  // !HOOKS
  const handleRightClick = useRightClick(() =>
    updateSkyTempleKey([stkKey, { ...value, checked: !value.checked }])
  );

  return (
    <div
      className={cn(
        "px-2 py-1 bg-zinc-800",
        className,
        value.checked && "bg-green-900"
      )}
      onMouseDown={handleRightClick}
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <p
            className={cn(
              "uppercase font-bold text-sm text-lime-400 tracking-wide select-none",
              value.checked && "text-green-400"
            )}
          >
            {name}
          </p>
          <Check
            className={cn(
              "flex-none w-3 h-3 text-green-300",
              !value.checked && "opacity-0"
            )}
          />
        </div>

        <AutoComplete
          placeholder="Location"
          emptyMessage="No location found."
          value={{ label: value.location, value: value.location }}
          onInputChange={(location) =>
            updateSkyTempleKey([stkKey, { ...value, location }])
          }
          options={createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)}
          tabIndex={1}
          className="text-[13px]"
        />
      </div>
    </div>
  );
}

type Props = {
  className?: string;
};

export default function SkyTempleKeyHints({ className }: Props) {
  // !JOTAI
  const stkHints = useAtomValue(skyTempleKeyHintsArraySelector);

  return (
    <div className={className} data-name="stkHints">
      <h2 className="font-bold px-2 bg-zinc-900 uppercase select-none">
        Sky Temple Keys
      </h2>
      <div className="md:flex-[0_0_initial] md:grid md:grid-rows-5 md:grid-cols-2 md:grid-flow-col">
        {stkHints.map((stkHint) => (
          <Hint
            name={stkHint.key}
            value={stkHint.value}
            key={`stk-${stkHint.id}`}
            className="border-b md:border-r border-zinc-900"
          />
        ))}
      </div>
    </div>
  );
}
