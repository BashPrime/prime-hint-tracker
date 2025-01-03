import { agonHintsState, sanctuaryHintsState, templeGroundsHintsState, torvusHintsState } from "@/states/Prime2.states";
import { cn } from "../../lib/utils";
import Region from "./region";

export default function Prime2Layout() {
  return (
    <div className={cn("grid sm:grid-cols-2 md:grid-cols-4 h-full bg-[#1f1f1f]")}>
      <Region name="Temple Grounds" hints={templeGroundsHintsState} className="border-l-2 border-violet-600" />
      <Region name="Agon Wastes" hints={agonHintsState} className="border-l-2 border-amber-600" />
      <Region name="Torvus Bog" hints={torvusHintsState} className="border-l-2 border-emerald-600" />
      <Region name="Sanctuary Fortress" hints={sanctuaryHintsState} className="border-l-2 border-sky-600" />
    </div>
  );
}
