import { AutoComplete } from "@/components/ui/autocomplete";
import {
  PRIME_3_ALL_REGIONS,
  PRIME_3_LOCATIONS_WITH_ITEMS,
} from "@/data/Prime3.data";
import useRightClick from "@/hooks/useRightClick";
import { cn, createOptions } from "@/lib/utils";
import {
  hyperGrappleHintState,
  hyperMissileHintState,
} from "@/states/Prime3.states";
import { ItemHint } from "@/types/common.types";
import { useAtom } from "jotai";
import { Check } from "lucide-react";

type HintProps = {
  name: string;
  value: ItemHint;
  onUpdate: (update: ItemHint) => void;
  className?: string;
};
export function Hint({ name, value, onUpdate, className }: HintProps) {
  // !LOCAL
  const locationOptions = createOptions([...PRIME_3_ALL_REGIONS], true);

  // !HOOKS
  const handleRightClick = useRightClick(() =>
    onUpdate({ ...value, checked: !value.checked })
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
      <div className={cn("flex flex-col")}>
        <div className="flex flex-row justify-between">
          <p
            className={cn(
              "uppercase font-bold text-sm text-blue-400 tracking-wide select-none",
              value.checked && "text-green-400"
            )}
          >
            {name}
          </p>
          <Check
            className={cn(
              "w-3 h-3 text-green-300 mt-1",
              !value.checked && "opacity-0"
            )}
          />
        </div>
        <AutoComplete
          placeholder="Location"
          emptyMessage="No location found."
          value={{ label: value.location, value: value.location }}
          onInputChange={(location) => onUpdate({ ...value, location })}
          options={locationOptions}
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

export default function Prime3Hints({ className }: Props) {
  // !STATE
  const [missileHint, setMissileHint] = useAtom(hyperMissileHintState);
  const [grappleHint, setGrappleHint] = useAtom(hyperGrappleHintState);

  return (
    <div className={cn("flex flex-col", className)}>
      <Hint
        name="Hyper Missile"
        value={missileHint}
        onUpdate={setMissileHint}
        className="border-b border-zinc-900"
      />
      <Hint
        name="Hyper Grapple"
        value={grappleHint}
        onUpdate={setGrappleHint}
      />
    </div>
  );
}
