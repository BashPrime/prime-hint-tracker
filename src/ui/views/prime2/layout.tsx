import HintPanel from "../HintPanel";
import { cn } from "../../lib/utils";
import {
  prime2VioletHintsState,
  prime2AmberHintsState,
  prime2CobaltHintsState,
  prime2EmeraldHintsState,
  prime2ItemLocationHintsState,
  prime2KeybearerHintsState,
  prime2StkHintsState,
} from "@/states/Prime2.states";
import Prime2ItemLocationHintList from "./ItemLocationHintList";

export default function Prime2Layout() {
  return (
    <div className={cn("grid grid-cols-5 gap-x-2 h-full bg-slate-900")}>
      <Prime2ItemLocationHintList
        name="Items"
        hints={prime2ItemLocationHintsState}
        allowNew
        className={cn("flex-auto")}
      />
      <div className={cn("flex flex-col flex-auto gap-2")}>
        <Prime2ItemLocationHintList
          name="Violet Hints"
          hints={prime2VioletHintsState}
          className={cn("border-l-2 border-violet-600 h-full")}
        />
        <Prime2ItemLocationHintList
          name="Emerald Hints"
          hints={prime2EmeraldHintsState}
          className={cn("border-l-2 border-emerald-600 h-full")}
        />
      </div>
      <div className={cn("flex flex-col flex-auto gap-2")}>
        <Prime2ItemLocationHintList
          name="Amber Hints"
          hints={prime2AmberHintsState}
          className={cn("border-l-2 border-amber-600 h-full")}
        />
        <Prime2ItemLocationHintList
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
    </div>
  );
}
