import "./App.css";
import LayoutSelector from "./views/LayoutSelector";
import useResetTracker from "./hooks/useResetTracker";
import { useEffect } from "react";

export default function App() {
  const resetTracker = useResetTracker();
  
  useEffect(() => {
    window.electronApi.onResetTracker(() => resetTracker());
  }, [resetTracker]);

  return (
    <>
      <LayoutSelector />
    </>
  );
}
