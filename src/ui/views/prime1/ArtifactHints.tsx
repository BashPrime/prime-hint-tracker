import { AutoComplete } from "@/components/ui/autocomplete";
import useRightClick from "@/hooks/useRightClick";
import { cn, createOptions } from "@/lib/utils";
import { artifactHintsState } from "@/states/Prime1.states";
import { ArtifactHint } from "@/types/Prime1.types";
import { useAtom } from "jotai";
import { Check } from "lucide-react";

type UpdateValue = {
  location?: string;
  checked?: boolean;
};

type HintProps = {
  hint: ArtifactHint;
  onUpdate: (update: UpdateValue) => void;
  className?: string;
};

function Hint({ hint, onUpdate, className }: HintProps) {
  // !HOOKS
  const handleRightClick = useRightClick(() =>
    onUpdate({ checked: !hint.checked })
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
            {hint.name}
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
          onInputChange={(value) => onUpdate({ location: value })}
          options={createOptions([])}
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
  const [artifacts, setArtifacts] = useAtom(artifactHintsState);

  // !FUNCTION
  function updateArtifact(id: number, update: UpdateValue) {
    setArtifacts((prev) => {
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
    <div className={className} data-name="artifact-hints">
      <h2 className="font-bold px-2 bg-zinc-900 uppercase select-none">Artifacts</h2>
      <div className="md:flex-[0_0_initial] md:grid md:grid-rows-6 md:grid-cols-2 lg:grid-rows-4 lg:grid-cols-3 grid-flow-col">
        {artifacts.map((key, idx) => (
          <Hint
            hint={key}
            onUpdate={(update) => updateArtifact(key.id, update)}
            key={`stk-${idx + 1}`}
            className="border-b md:border-r border-zinc-900"
          />
        ))}
      </div>
    </div>
  );
}
