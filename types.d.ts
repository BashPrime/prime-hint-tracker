interface Window {
  electronApi: {
    onResetTracker: (callback: () => void) => void;
    setLegacyHints: (callback: (checked: boolean) => void) => void;
    onRequestAppState: (callback: (action: string) => void) => void;
    resetSize: (game: string, isLegacyHints: boolean) => void;
    requestLoadAppSession: () => void;
    loadAppSession: (callback: (config: object) => void) => void;
    saveAppSession: (config: object) => void;
  };
}
