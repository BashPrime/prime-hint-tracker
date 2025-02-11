let toggles: Toggles | null = null;

export class Toggles {
  legacyHintsEnabled: boolean = true;

  setLegacyHintsEnabled(enabled: boolean) {
    this.legacyHintsEnabled = enabled;
  }
}

export function createToggles() {
  toggles = new Toggles();
  return toggles;
}

export function getToggles() {
  return toggles;
}