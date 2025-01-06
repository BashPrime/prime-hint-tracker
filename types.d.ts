interface Window {
  electronApi: {
    onResetTracker: (callback: () => void) => void;
  };
}
