import { cn } from "@/lib/utils";
import SkyTempleKeyHints from "./SkyTempleKeyHints";
import UnhintedItems from "./UnhintedItems";

type Props = {
  className?: string;
};

export default function CoreHints({ className }: Props) {
  return (
    <div className={cn("flex flex-col", className)} data-name="core-hints">
      <UnhintedItems className="border-l-2 border-red-600" />
      <SkyTempleKeyHints className="border-l-2 border-lime-600" />
    </div>
  );
}
