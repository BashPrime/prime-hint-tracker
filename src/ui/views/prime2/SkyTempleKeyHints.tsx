import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_LOCATIONS_WITH_ITEMS } from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { skyTempleKeyHintsState } from "@/states/Prime2.states";
import { SkyTempleKeyHint } from "@/types/Prime2.types";
import { useAtom } from "jotai";
import { Check } from "lucide-react";
import { MouseEvent, useCallback } from "react";

type UpdateValue = {
  location?: string;
  checked?: boolean;
};

type HintProps = {
  hint: SkyTempleKeyHint;
  onUpdate: (update: UpdateValue) => void;
  className?: string
};

function Hint({ hint, onUpdate, className }: HintProps) {
  // !FUNCTION
  const handleMouseDown = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      // right click
      if (event.nativeEvent.button === 2) {
        onUpdate({ checked: !hint.checked });
      }
    },
    [onUpdate, hint.checked]
  );
  return (
    <div
      className={cn(
        "px-2 py-1 bg-zinc-800",
        className,
        hint.checked && "bg-green-900"
      )}
      onMouseDown={handleMouseDown}
    >
      <div className="flex flex-row gap-1.5">
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <p
              className={cn(
                "uppercase font-bold text-sm text-lime-400 tracking-wide",
                hint.checked && "text-green-400"
              )}
            >
              {hint.name}
            </p>
            <Check
              className={cn(
                "flex-none w-3 h-3 text-green-300 mt-1",
                !hint.checked && "opacity-0"
              )}
            />
          </div>

          <AutoComplete
            placeholder="Location"
            emptyMessage="No location found."
            value={{ label: hint.location, value: hint.location }}
            onInputChange={(value) => onUpdate({ location: value })}
            options={createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)}
            tabIndex={1}
            className="text-[13px]"
          />
        </div>
      </div>
    </div>
  );
}

type Props = {
  className?: string;
};

export default function SkyTempleKeyHints({ className }: Props) {
  // !JOTAI
  const [keys, setKeys] = useAtom(skyTempleKeyHintsState);

  // !FUNCTION
  function updateKey(id: number, update: UpdateValue) {
    setKeys((prev) => {
      const newKeys = [...prev];

      return newKeys.map((key) => {
        if (key.id === id) {
          return {
            ...key,
            ...update,
          };
        }

        return { ...key };
      });
    });
  }

  return (
    <div className={className} data-name="stkHints">
      <h2 className="font-bold px-2 bg-zinc-900 uppercase">Sky Temple Keys</h2>
      <div className="md:flex-[0_0_initial] md:grid md:grid-rows-5 md:grid-cols-2 md:grid-flow-col">
        {keys.map((key, idx) => (
          <Hint
            hint={key}
            onUpdate={(update) => updateKey(key.id, update)}
            key={`stk-${idx + 1}`}
            className="border-b md:border-r border-zinc-900"
          />
        ))}
      </div>
    </div>
  );
}
