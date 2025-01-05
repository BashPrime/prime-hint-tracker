import { AutoComplete } from "@/components/ui/autocomplete";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_REGION_OPTIONS,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { BossHints, RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtom, useAtomValue, useSetAtom } from "jotai";

import umosImg from "@/assets/prime2/u-mos.jpg";
import amorbisImg from "@/assets/prime2/amorbis.jpg";
import chykkaImg from "@/assets/prime2/chykka.jpg";
import quadraxisImg from "@/assets/prime2/quadraxis.jpg";
import { focusAtom } from "jotai-optics";
import { splitAtom } from "jotai/utils";

type BossKeyHintProps = {
  name: string;
  atom: PrimitiveAtom<string>;
};

function BossKeyHint({ name, atom }: BossKeyHintProps) {
  const [hint, setHint] = useAtom(atom);
  return (
    <div>
      <p className="uppercase font-bold text-[13px] text-red-500">{name}</p>
      <AutoComplete
        placeholder="Region..."
        emptyMessage="No region found."
        value={{ label: hint, value: hint }}
        onValueChange={(o) => setHint(o.value)}
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
  const bossHints = useAtomValue(atom);
  const setItem = useSetAtom(
    focusAtom(atom, (optic) => optic.prop("item"))
  );
  const keyAtomAtoms = splitAtom(
    focusAtom(atom, (optic) => optic.prop("keys"))
  );
  const keysAtoms = useAtomValue(keyAtomAtoms)

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
            onValueChange={(o) => setItem(o.value)}
            options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)}
            tabIndex={1}
            className="h-6"
          />
        </div>
      </div>
      {keysAtoms.length > 0 && (
        <div className="flex flex-col" data-name="boss-keys">
          {keysAtoms.map((keyAtom, idx) => (
            <BossKeyHint
              name={`Key ${idx + 1}`}
              key={`boss-key-${idx + 1}`}
              atom={keyAtom}
            />
          ))}
        </div>
      )}
    </div>
  );
}
