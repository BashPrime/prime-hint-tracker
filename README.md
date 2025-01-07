# Metroid Prime Hint Tracker

A hint tracker for Metroid Prime 2: Echoes Randomizer which helps organize the hints that players write down during a play session.

![echoestracker](https://github.com/user-attachments/assets/e5bf8eb4-f0b6-4f54-a056-9cac4c9d4463)

## Installation

If you're looking to use the tracker, go to the **Releases** page.

## Build from Source

### Prerequisites

You will need `pnpm`. I recommend installing Node.js and then installing it via `corepack`:

```bash
corepack enable pnpm
```

### Instructions

Install the project dependencies.

```bash
pnpm install
```

Run the tracker in development mode:

```bash
pnpm run dev
```

Build an executable of the tracker:

**NOTE**: You need to be using the operating system you intend to build for.

i.e. you must build the macOS distribution on a macOS computer.

```bash
pnpm run dist:win # Windows 64-bit
pnpm run dist:mac # macOS ARM
pnpm run dist:linux # Linux 64-bit
```
