import { agonHintsState, sanctuaryHintsState, templeGroundsHintsState, torvusHintsState } from "@/states/Prime2.states";
import { cn } from "../../lib/utils";
import Region from "./region";

export default function Prime2Layout() {
  return (
    <div className={cn("grid grid-cols-4 h-full")}>
      <Region name="Temple" hints={templeGroundsHintsState} className={cn("bg-violet-950/50")} />
      <Region name="Agon" hints={agonHintsState} className={cn("bg-amber-600/25")} />
      <Region name="Torvus" hints={torvusHintsState} className={cn("bg-emerald-950/50")} />
      <Region name="Sanctuary" hints={sanctuaryHintsState} className={cn("bg-sky-950/50")} />
    </div>
  );
}
