import { AutoComplete } from "@/components/ui/autocomplete";
import { PRIME_2_LOCATIONS_WITH_ITEMS } from "@/data/Prime2.data";
import { createOptions } from "@/lib/utils";
import { skyTempleKeyHintsState } from "@/states/Prime2.states";
import { SkyTempleKeyHint } from "@/types/Prime2.types";
import { useAtom } from "jotai";

type HintProps = {
  keyHint: SkyTempleKeyHint;
  onKeyChange: (key: SkyTempleKeyHint) => void;
};

function Hint({ keyHint, onKeyChange }: HintProps) {
  return (
    <div className="m-1">
      <p className="uppercase font-bold text-sm text-lime-400 tracking-wide">
        {keyHint.name}
      </p>
      <AutoComplete
        placeholder="Location..."
        emptyMessage="No location found."
        value={{ label: keyHint.location, value: keyHint.location }}
        onInputChange={(value) => onKeyChange({ ...keyHint, location: value })}
        options={createOptions([...PRIME_2_LOCATIONS_WITH_ITEMS], true)}
        tabIndex={1}
        className="text-xs"
      />
    </div>
  );
}

type Props = {
  className?: string;
};

export default function SkyTempleKeyHints({ className }: Props) {
  // !JOTAI
  const [keys, setKeys] = useAtom(skyTempleKeyHintsState);

  // !FUNCTION
  function setKey(key: SkyTempleKeyHint) {
    setKeys((prev) => {
      const newKeys = [...prev];
      const keyIndex = newKeys.findIndex((elem) => elem.id === key.id);
      newKeys[keyIndex] = key;

      return newKeys;
    });
  }

  return (
    <div className={className} data-name="stkHints">
      <h2 className="font-bold px-2 bg-zinc-900 uppercase">Sky Temple Keys</h2>
      <div className="md:flex-[0_0_initial] md:grid md:grid-rows-5 md:grid-flow-col bg-zinc-800">
        {keys.map((key, idx) => (
          <Hint
            keyHint={key}
            onKeyChange={(key) => setKey(key)}
            key={`stk-${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
