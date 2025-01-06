import { AutoComplete } from "@/components/ui/autocomplete";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_REGION_OPTIONS,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { BossHints, BossKeyHint } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom } from "jotai";

import umosImg from "@/assets/prime2/u-mos.jpg";
import amorbisImg from "@/assets/prime2/amorbis.jpg";
import chykkaImg from "@/assets/prime2/chykka.jpg";
import quadraxisImg from "@/assets/prime2/quadraxis.jpg";

type HintProps = {
  keyHint: BossKeyHint;
  onKeyChange: (key: BossKeyHint) => void;
};

function Hint({ keyHint: key, onKeyChange }: HintProps) {
  return (
    <div>
      <p className="uppercase font-bold text-[13px] text-red-500">{key.name}</p>
      <AutoComplete
        placeholder="Region..."
        emptyMessage="No region found."
        value={{ label: key.location, value: key.location }}
        onInputChange={(value) => onKeyChange({ ...key, location: value })}
        options={createOptions([...PRIME_2_REGION_OPTIONS, "Either"], true)}
        tabIndex={1}
        className="text-[13px]"
      />
    </div>
  );
}

type Props = {
  atom: PrimitiveAtom<BossHints>;
  variant: string;
  className?: string;
};

export function BossHintContainer({ atom, variant, className }: Props) {
  // !JOTAI
  const [bossHints, setBossHints] = useAtom(atom);

  // !LOCAL
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

  return (
    <div
      className={cn(
        "flex sm:flex-col md:flex-row gap-2 p-2 bg-zinc-800 flex-none",
        className
      )}
      data-name="boss-container"
    >
      <div className="flex flex-col gap-2 w-3/5" data-name="boss-img-item">
        <div className="w-24" data-name="boss-img">
          <img src={imgSrc} title={bossHints.name} alt={bossHints.name} />
        </div>
        <div data-name="boss-item">
          <p className="uppercase font-bold text-sm text-red-500">
            {bossHints.name}
          </p>
          <AutoComplete
            placeholder="Item..."
            emptyMessage="No item found."
            value={{ label: bossHints.item, value: bossHints.item }}
            onInputChange={(value) =>
              setBossHints((prev) => ({ ...prev, item: value }))
            }
            options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)}
            tabIndex={1}
            className="h-6"
          />
        </div>
      </div>
      {bossHints.keys.length > 0 && (
        <div className="flex flex-col" data-name="boss-keys">
          {bossHints.keys.map((keyHint, idx) => (
            <Hint
              keyHint={keyHint}
              onKeyChange={(key) => updateBossKey(key)}
              key={`boss-key-${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
