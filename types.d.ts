interface Window {
  electronApi: {
    onResetTracker: (callback: () => void) => void;
    setLegacyHints: (callback: (checked: boolean) => void) => void;
    onRequestAppState: (callback: (action: string) => void) => void;
    resetSize: (game: string, isLegacyHints: boolean) => void;
    requestLoadTrackerSession: () => void;
    loadTrackerSession: (
      callback: (config: object, legacyHintsEnabled: boolean) => void
    ) => void;
    saveTrackerSession: (config: object) => void;
  };
}
