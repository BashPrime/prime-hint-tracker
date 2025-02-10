interface Window {
  electronApi: {
    onResetTracker: (callback: () => void) => void;
    onSetFeaturalHints: (callback: (checked: boolean) => void) => void;
    onRequestAppState: (callback: (action: string) => void) => void;
    resetSize: (game: string, isLegacyHints: boolean) => void;
  };
}
