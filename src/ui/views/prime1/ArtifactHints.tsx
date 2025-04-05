import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_1_LOCATIONS_WITH_ITEMS } from "@/data/Prime1.data";
import useRightClick from "@/hooks/useRightClick";
import { cn, createOptions } from "@/lib/utils";
import {
  artifactHintsArraySelector,
  updateArtifactHintAtom,
} from "@/states/Prime1.states";
import {
  NewArtifactHint,
  NewArtifactHints,
} from "@/types/Prime1.types";
import { useAtomValue, useSetAtom } from "jotai";
import { Check } from "lucide-react";

type HintProps = {
  name: string;
  hint: NewArtifactHint;
  className?: string;
};

function Hint({ name, hint, className }: HintProps) {
  // !STATE
  const updateArtifact = useSetAtom(updateArtifactHintAtom);
  const artKey = name as keyof NewArtifactHints

  // !HOOKS
  const handleRightClick = useRightClick(() =>
    updateArtifact([artKey, {...hint, checked: !hint.checked}])
  );

  return (
    <div
      className={cn(
        "px-2 py-1 bg-zinc-800",
        className,
        hint.checked && "bg-yellow-900"
      )}
      onMouseDown={handleRightClick}
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <p
            className={cn(
              "uppercase font-bold text-sm text-cyan-400 tracking-wide select-none",
              hint.checked && "text-amber-400"
            )}
          >
            {name}
          </p>
          <Check
            className={cn(
              "flex-none w-3 h-3 text-amber-300",
              !hint.checked && "opacity-0"
            )}
          />
        </div>

        <AutoComplete
          placeholder="Location"
          emptyMessage="No location found."
          value={{ label: hint.location, value: hint.location }}
          onInputChange={(value) => updateArtifact([artKey, { ...hint, location: value }])}
          options={createOptions([...PRIME_1_LOCATIONS_WITH_ITEMS], true)}
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

export default function ArtifactHints({ className }: Props) {
  // !JOTAI
  const artifactsArray = useAtomValue(artifactHintsArraySelector);

  return (
    <div className={className} data-name="artifact-hints">
      <h2 className="font-bold px-2 bg-zinc-900 uppercase select-none">
        Artifacts
      </h2>
      <div className="grid grid-rows-6 grid-cols-2 grid-flow-col flex-1">
        {artifactsArray.map((artifact) => (
          <Hint
            name={artifact.name}
            hint={artifact}
            key={`artifact-${artifact.id}`}
            className="border-b md:border-r border-zinc-900"
          />
        ))}
      </div>
    </div>
  );
}
