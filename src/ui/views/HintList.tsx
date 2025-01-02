import { Button } from "@/components/ui/button";
import { PrimitiveAtom, useAtom } from "jotai";
import { cn } from "@/lib/utils";
import { AutoComplete, Option } from "@/components/ui/autocomplete";
import Hint from "./Hint";
import { z } from "zod";

type Props = {
  hints: PrimitiveAtom<any[]>;
  hintType: z.AnyZodObject;
  options: Option[];
  placeholder: string;
  emptyMessage: string;
  allowNew?: boolean;
};

export default function HintList(props: Props) {
  // !STATE
  const [hints, setHints] = useAtom(props.hints);

  // !FUNCTION
  function createNewHint() {
    setHints([
      ...hints,
      props.hintType.parse({}),
    ]);
  }

  return (
    <>
      {hints.map((hint, idx) => (
        <Hint label={hint.label ?? ''} key={`hint-${idx}`}>
          <AutoComplete placeholder={props.placeholder} emptyMessage={props.emptyMessage} options={props.options} />
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
