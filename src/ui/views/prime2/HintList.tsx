import { Button } from "@/components/ui/button";
import { PrimitiveAtom, useAtom } from "jotai";
import {
  Prime2ItemLocationHintSchema,
  Prime2ItemLocationHint as Prime2ItemLocationHintType,
  Prime2Location,
  Prime2RelatedUpgradesHint,
} from "@/types/Prime2.types";
import { cn } from "@/lib/utils";
import Prime2ItemLocationHint from "./ItemLocationHint";
import { Atom } from "jotai";

type Props = {
  name: string;
  variant: "item-location" | "location" | "related-upgrade";
  hints: Atom<
    Prime2ItemLocationHintType[] | Prime2Location[] | Prime2RelatedUpgradesHint[]
  >;
  allowNew?: boolean;
  className?: string;
};

export default function Prime2HintList(props: Props) {
  // !STATE
  const [hints, setHints] = useAtom(props.hints);

  // !FUNCTION
  function createNewHint() {
    switch (props.variant) {
      case "item-location":
        setHints([
          ...(hints as Prime2ItemLocationHintType[]),
          Prime2ItemLocationHintSchema.parse({}),
        ]);
        break;
      case "location":
        setHints([...(hints as Prime2Location[]), null]);
        break;
      case "related-upgrade":
        setHints([...(hints as Prime2RelatedUpgradesHint[]), null]);
        break;
      default:
    }
  }

  return (
    <div className={cn("bg-zinc-800", props.className)}>
      <h2 className={cn("font-bold bg-zinc-900 p-2 uppercase text-sm")}>
        {props.name}
      </h2>
      <div className={cn("flex flex-col gap-2")}>
        {props.variant === "item-location" && (
          <Prime2ItemLocationHint />
        )}
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
