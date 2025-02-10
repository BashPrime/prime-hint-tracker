import { AutoComplete } from "@/components/ui/autocomplete";
import {
  PRIME_2_ALL_MAJOR_ITEMS,
  PRIME_2_REGION_OPTIONS,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { BossHints as BossHintsType, BossKeyHint } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom } from "jotai";

import umosImg from "@/assets/prime2/u-mos.jpg";
import amorbisImg from "@/assets/prime2/amorbis.jpg";
import chykkaImg from "@/assets/prime2/chykka.jpg";
import quadraxisImg from "@/assets/prime2/quadraxis.jpg";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import useRightClick from "@/hooks/useRightClick";

type HintProps = {
  keyHint: BossKeyHint;
  onKeyChange: (key: BossKeyHint) => void;
  className?: string;
};

function Hint({ keyHint, onKeyChange, className }: HintProps) {
  // !HOOKS
  const handleRightClick = useRightClick(() =>
    onKeyChange({ ...keyHint, checked: !keyHint.checked })
  );

  return (
    <div
      className={cn(
        "border-zinc-900 p-2",
        className,
        keyHint.checked && "bg-green-900"
      )}
      onMouseDown={handleRightClick}
    >
      <div className="flex flex-row gap-1.5">
        <p
          className={cn(
            "uppercase font-bold text-[13px] text-red-500",
            keyHint.checked && "text-green-400"
          )}
        >
          {keyHint.name}
        </p>
        <Check
          className={cn(
            "flex-none w-3 h-3 text-green-300 mt-1",
            !keyHint.checked && "opacity-0"
          )}
        />
      </div>
      <AutoComplete
        placeholder="Region"
        emptyMessage="No region found."
        value={{ label: keyHint.location, value: keyHint.location }}
        onInputChange={(value) => onKeyChange({ ...keyHint, location: value })}
        options={createOptions([...PRIME_2_REGION_OPTIONS], true)}
        tabIndex={1}
      />
    </div>
  );
}

type Props = {
  atom: PrimitiveAtom<BossHintsType>;
  variant: string;
  className?: string;
};

export function BossHints({ atom, variant, className }: Props) {
  // !JOTAI & STATE
  const [bossHints, setBossHints] = useAtom(atom);
  const [random, setRandom] = useState<number>(-1);

  // !LOCAL
  const DEAD_STR = "Dead";
  const isBossDead = bossHints.item === DEAD_STR;
  const isChykkaDead = isBossDead && bossHints.name === "Chykka";
  const displayChykkaEasterEgg = isChykkaDead && random === 0;
  let imgSrc: string;
  switch (variant) {
    case "temple":
      imgSrc = umosImg;
      break;
    case "agon":
      imgSrc = amorbisImg;
      break;
    case "torvus":
      imgSrc = chykkaImg;
      break;
    case "sanctuary":
      imgSrc = quadraxisImg;
      break;
    default:
      imgSrc = "https://picsum.photos/200";
  }

  // !FUNCTION
  function updateBossKey(key: BossKeyHint) {
    setBossHints((prev) => {
      const newKeys = [...prev.keys];
      const index = newKeys.findIndex((elem) => elem.id === key.id);
      newKeys[index] = key;

      return { ...prev, keys: newKeys };
    });
  }

  // !HOOKS
  const handleRightClick = useRightClick(() =>
    setBossHints((prev) => ({ ...prev, checked: !prev.checked }))
  );

  useEffect(() => {
    if (isChykkaDead) {
      setRandom(Math.floor(Math.random() * 1024));
    } else {
      setRandom(-1);
    }
  }, [isChykkaDead, setRandom]);

  return (
    <div
      className={cn("flex flex-row bg-zinc-800", className)}
      data-name="boss-hints-container"
    >
      <div
        className={cn(
          "flex flex-col flex-1 gap-1 border-r border-zinc-900 p-2",
          bossHints.checked && "bg-green-900"
        )}
        onMouseDown={handleRightClick}
        data-name="boss-item-container"
      >
        <div className="w-24" data-name="boss-img">
          <img src={imgSrc} title={bossHints.name} alt={bossHints.name} />
        </div>
        <div className="flex flex-row justify-between">
          <p
            className={cn(
              "uppercase font-bold text-sm text-red-500",
              bossHints.checked && "text-green-400"
            )}
            data-name="boss-name"
          >
            {bossHints.name}
            {displayChykkaEasterEgg && "'s"}
          </p>
          <Check
            className={cn(
              "flex-none w-3 h-3 text-green-300",
              !bossHints.checked && "opacity-0"
            )}
          />
        </div>
        <div data-name="boss-item">
          <div
            className={cn(
              displayChykkaEasterEgg && "flex flex-row items-center gap-2"
            )}
          >
            <AutoComplete
              placeholder="Item"
              emptyMessage="No item found."
              value={{ label: bossHints.item, value: bossHints.item }}
              onInputChange={(value) =>
                setBossHints((prev) => ({ ...prev, item: value }))
              }
              options={createOptions(
                [...PRIME_2_ALL_MAJOR_ITEMS, DEAD_STR],
                true
              )}
              tabIndex={1}
              className={cn("m-0", isBossDead && "text-red-200 italic")}
            />
            {displayChykkaEasterEgg && <p className="text-xs">Nice!</p>}
          </div>
        </div>
      </div>
      {bossHints.keys.length > 0 && (
        <div className="grid grid-rows-3 flex-1" data-name="boss-keys">
          {bossHints.keys.map((keyHint, idx) => (
            <Hint
              keyHint={keyHint}
              onKeyChange={(key) => updateBossKey(key)}
              key={`boss-key-${idx + 1}`}
              className="border-b last:border-0 border-zinc-900"
            />
          ))}
        </div>
      )}
    </div>
  );
}
