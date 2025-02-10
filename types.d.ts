interface Window {
  electronApi: {
    onResetTracker: (callback: () => void) => void;
    onSetLegacyHintsEnabled: (callback: (checked: boolean) => void) => void;
    onRequestAppState: (callback: (action: string) => void) => void;
    resetSize: (game: string, isLegacyHints: boolean) => void;
    onLoadAppConfig: (callback: (json: string) => void) => void;
    onSaveAppConfig: (callback: () => void) => void;
    saveAppConfig: (json: string) => void;
  };
}
