import { AutoComplete } from "@/components/ui/autocomplete";
import {
  PRIME_2_ALL_ITEMS_VALUES,
  PRIME_2_REGION_OPTIONS,
} from "@/data/Prime2.data";
import { cn, createOptions } from "@/lib/utils";
import { RegionHints } from "@/types/Prime2.types";
import { PrimitiveAtom, useAtomValue } from "jotai";

import umosImg from "@/assets/prime2/u-mos.jpg";
import amorbisImg from "@/assets/prime2/amorbis.jpg";
import chykkaImg from "@/assets/prime2/chykka.jpg";
import quadraxisImg from "@/assets/prime2/quadraxis.jpg";

type Props = {
  regionHints: PrimitiveAtom<RegionHints>;
  className?: string;
};

export function BossHintContainer({ regionHints, className }: Props) {
  // !JOTAI
  const hints = useAtomValue(regionHints);

  // !LOCAL
  let imgSrc: string;
  switch (hints.variant) {
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
          <img src={imgSrc} title={hints.bossName} alt={hints.bossName} />
        </div>
        <div data-name="boss-item">
          <p className="uppercase font-bold text-sm text-red-500">
            {hints.bossName}
          </p>
          <AutoComplete
            placeholder="Item..."
            emptyMessage="No item found."
            options={createOptions([...PRIME_2_ALL_ITEMS_VALUES], true)}
            tabIndex={1}
            className="h-6"
          />
        </div>
      </div>
      {hints.bossKeys.length > 0 && (
        <div className="flex flex-col" data-name="boss-keys">
          {hints.bossKeys.map((_, idx) => (
            <div key={`${hints.variant}-key-${idx + 1}`}>
              <p className="uppercase font-bold text-[13px] text-red-500">
                Key {idx + 1}
              </p>
              <AutoComplete
                placeholder="Region..."
                emptyMessage="No region found."
                options={createOptions(
                  [...PRIME_2_REGION_OPTIONS, "Either"],
                  true
                )}
                tabIndex={1}
                className="text-[13px]"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
