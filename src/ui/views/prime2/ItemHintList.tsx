import { Button } from "@/components/ui/button";
import { PrimitiveAtom, useAtom } from "jotai";
import {
  Prime2ItemHintSchema,
  Prime2ItemHint as Prime2ItemHintType,
} from "@/types/Prime2.types";
import { cn, createOptions } from "@/lib/utils";
import Hint from "../Hint";
import { PRIME_2_ALL_ITEMS_VALUES } from "@/data/Prime2.data";
import { AutoComplete } from "@/components/ui/autocomplete";

type Props = {
  name: string;
  hints: PrimitiveAtom<Prime2ItemHintType[]>;
  allowNew?: boolean;
  className?: string;
};

export default function Prime2ItemHintList(props: Props) {
  // !STATE
  const [hints, setHints] = useAtom(props.hints);

  // !FUNCTION
  function createNewHint() {
    setHints([
      ...(hints as Prime2ItemHintType[]),
      Prime2ItemHintSchema.parse({}),
    ]);
  }

  return (
    <div className={cn("bg-zinc-800", props.className)}>
      <h2 className={cn("font-bold bg-zinc-900 p-2 uppercase text-sm")}>
        {props.name}
      </h2>
      <div className={cn("flex flex-col gap-2")}>
        {hints.map((hint, idx) => (
          <Hint label={hint.label ?? ''} key={`hint-${idx}`}>
            <AutoComplete placeholder="Item..." emptyMessage="No matching items." options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)} />
          </Hint>
        ))}
        {props.allowNew && (
          <Button
            onClick={createNewHint}
            variant="ghost"
            className={cn(
              "w-4/5 place-self-center bg-zinc-900",
              !hints.length && "my-1"
            )}
          >
            + Add new hint
          </Button>
        )}
      </div>
    </div>
  );
}
