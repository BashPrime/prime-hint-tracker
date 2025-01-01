import HintPanel from "./HintPanel";
import { cn } from "../lib/utils";
import {
  prime2AmberHintsState,
  prime2CobaltHintsState,
  prime2EmeraldHintsState,
  prime2ItemHintsState,
  prime2KeybearerHintsState,
  prime2StkHintsState,
  prime2VioletHintsState,
} from "@/states/Prime2.states";

export default function Prime2Layout() {
  // !STATE

  return (
    <div className={cn("grid grid-cols-5 gap-x-2 h-full")}>
      <HintPanel
        name="Items"
        hints={prime2ItemHintsState}
        allowNew
        className={cn("flex-auto")}
      />
      <div className={cn("flex flex-col flex-auto gap-2")}>
        <HintPanel
          name="Violet Hints"
          hints={prime2VioletHintsState}
          className={cn("border-l-2 border-violet-600 h-full")}
        />
        <HintPanel
          name="Emerald Hints"
          hints={prime2EmeraldHintsState}
          className={cn("border-l-2 border-emerald-600 h-full")}
        />
      </div>
      <div className={cn("flex flex-col flex-auto gap-2")}>
        <HintPanel
          name="Amber Hints"
          hints={prime2AmberHintsState}
          className={cn("border-l-2 border-amber-600 h-full")}
        />
        <HintPanel
          name="Cobalt Hints"
          hints={prime2CobaltHintsState}
          className={cn("border-l-2 border-sky-600 h-full")}
        />
      </div>
      <HintPanel
        name="Keybearer Hints"
        hints={prime2KeybearerHintsState}
        className={cn("flex-auto border-l-2 border-rose-600")}
      />
      <HintPanel
        name="Sky Temple Keys"
        hints={prime2StkHintsState}
        className={cn("flex-auto border-l-2 border-lime-600")}
      />
      {/* <p>Bosses and Temple Keys</p> */}
    </div>
  );
}
