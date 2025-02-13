interface Window {
  electronApi: {
    onResetTracker: (callback: () => void) => void;
    setLegacyHintsEnabled: (callback: (checked: boolean) => void) => void;
    onRequestRendererState: (callback: (action: string) => void) => void;
    rendererTrackerState: (config: object) => void;
    resetSize: (game: string, isLegacyHints: boolean) => void;
    requestMainState: () => void;
    loadTrackerSession: (
      callback: (config: object, legacyHintsEnabled: boolean) => void
    ) => void;
    saveTrackerSession: (config: object) => void;
  };
}
