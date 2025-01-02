import { cn } from "../../lib/utils";
import Region from "./region";

export default function Prime2Layout() {
  return (
    <div className={cn("grid grid-cols-4 h-full")}>
      <Region name="Temple" className={cn("bg-violet-950/50")} />
      <Region name="Agon" className={cn("bg-amber-950/50")} />
      <Region name="Torvus" className={cn("bg-emerald-950/50")} />
      <Region name="Sanctuary" className={cn("bg-sky-950/50")} />
    </div>
  );
}
