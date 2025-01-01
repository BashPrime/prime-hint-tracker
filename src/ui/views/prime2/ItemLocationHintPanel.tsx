import { Button } from "@/components/ui/button";
import { PrimitiveAtom, useAtom } from "jotai";
import {
  Prime2ItemLocationHintSchema,
  Prime2ItemLocationHint as Prime2ItemLocationHintType,
} from "@/types/Prime2.types";
import { cn } from "@/lib/utils";
import Prime2ItemLocationHint from "./ItemLocationHint";
import Hint from "../Hint";

type Props = {
  name: string;
  hints: PrimitiveAtom<Prime2ItemLocationHintType[]>;
  allowNew?: boolean;
  className?: string;
};

export default function Prime2ItemLocationHintPanel(props: Props) {
  // !STATE
  const [hints, setHints] = useAtom(props.hints);

  // !FUNCTION
  function createNewHint() {
    setHints([
      ...(hints as Prime2ItemLocationHintType[]),
      Prime2ItemLocationHintSchema.parse({}),
    ]);
  }

  return (
    <div className={cn("bg-zinc-800", props.className)}>
      <h2 className={cn("font-bold bg-zinc-900 p-2 uppercase text-sm")}>
        {props.name}
      </h2>
      <div className={cn("flex flex-col gap-2")}>
        {hints.map((hint, idx) => (
          <Hint key={`hint-${idx}`}>
            <Prime2ItemLocationHint hint={hint} />
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
