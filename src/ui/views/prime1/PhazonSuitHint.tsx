import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_1_ALL_REGIONS, PRIME_1_LOCATIONS_WITH_ITEMS, PRIME_1_REGIONS_WITH_ITEMS } from "@/data/Prime1.data";
import useRightClick from "@/hooks/useRightClick";
import { cn, createOptions } from "@/lib/utils";
import { phazonSuitHintState } from "@/states/Prime1.states";
import { useAtom } from "jotai";
import { Check } from "lucide-react";

type Props = {
  className?: string;
};

export default function PhazonSuitHint({ className }: Props) {
  // !STATE
  const [hint, setHint] = useAtom(phazonSuitHintState);

  // !HOOKS
  const handleRightClick = useRightClick(() =>
    setHint((prev) => ({ ...prev, checked: !prev.checked }))
  );

  // !LOCAL
  const locationOptions = createOptions(
    [...PRIME_1_REGIONS_WITH_ITEMS],
    true
  );

  return (
    <div
      className={cn(
        "px-2 py-1 bg-zinc-800",
        className,
        hint.checked && "bg-green-900"
      )}
      onMouseDown={handleRightClick}
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <p
            className={cn(
              "uppercase font-bold text-sm text-red-400 tracking-wide select-none",
              hint.checked && "text-green-400"
            )}
          >
            Phazon Suit
          </p>
          <Check
            className={cn(
              "w-3 h-3 text-green-300 mt-1",
              !hint.checked && "opacity-0"
            )}
          />
        </div>
        <AutoComplete
          placeholder="Location"
          emptyMessage="No location found."
          value={{ label: hint.location, value: hint.location }}
          onInputChange={(value) =>
            setHint((prev) => ({ ...prev, location: value }))
          }
          options={locationOptions}
          tabIndex={1}
          className="text-[13px]"
        />
      </div>
    </div>
  );
}
