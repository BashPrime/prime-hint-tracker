import "./App.css";
import LayoutSelector from "./views/LayoutSelector";
import { useAtomValue } from "jotai";
import { appLoadingMsgAtom, appSessionLoadedState } from "./states/App.states";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import { cn } from "./lib/utils";
import useIpcHandlers from "./hooks/useIpcHandlers";

export default function App() {
  // !STATE
  const appSessionLoaded = useAtomValue(appSessionLoadedState);
  const appLoadingMsg = useAtomValue(appLoadingMsgAtom);

  // !HOOKS
  useIpcHandlers();

  return (
    <>
      {appSessionLoaded && <LayoutSelector />}
      {!appSessionLoaded && (
        <div
          className={cn(
            "flex flex-col justify-center items-center w-full h-full"
          )}
          data-name="tracker-session-loading-wrapper"
        >
          <div className={cn("flex flex-col items-center gap-4")}>
            <h1 className={cn("text-5xl text-center font-semibold")}>
              Metroid Prime Hint Tracker
            </h1>
            <p className={cn("text-2xl")}>{appLoadingMsg}</p>
            <LoadingSpinner size={100} />
          </div>
        </div>
      )}
    </>
  );
}
