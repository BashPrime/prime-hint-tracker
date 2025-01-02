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
  hints: PrimitiveAtom<Prime2ItemLocationHintType[]>;
  allowNew?: boolean;
  className?: string;
};

export default function Prime2ItemLocationHintList(props: Props) {
  // !STATE
  const [hints, setHints] = useAtom(props.hints);

  // !FUNCTION
  function createNewHint() {
    setHints([
      ...hints,
      Prime2ItemLocationHintSchema.parse({}),
    ]);
  }

  return (
    <>
      {hints.map((hint, idx) => (
        <Hint label={hint.label ?? ''} key={`prime-il-hint-${idx}`}>
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
    </>
  );
}
