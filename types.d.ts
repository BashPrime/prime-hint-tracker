interface Window {
  electronApi: {
    onResetTracker: (callback: () => void) => void;
    onSetFeaturalHints: (callback: (checked: boolean) => void) => void;
  };
}
