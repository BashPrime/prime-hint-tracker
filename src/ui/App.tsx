import "./App.css";
import LayoutSelector from "./views/LayoutSelector";
import useResetTracker from "./hooks/useResetTracker";
import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { featuralHintsEnabledAtom } from "./states/App.states";

export default function App() {
  const resetTracker = useResetTracker();
  const setFeaturalHintsEnabled = useSetAtom(featuralHintsEnabledAtom);

  useEffect(() => {
    window.electronApi.onResetTracker(() => resetTracker());
    window.electronApi.onSetFeaturalHints((checked) =>
      setFeaturalHintsEnabled(checked)
    );
  }, [resetTracker]);

  return (
    <>
      <LayoutSelector />
    </>
  );
}
