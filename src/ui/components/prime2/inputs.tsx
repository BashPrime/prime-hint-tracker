import ComboBox from "@/components/ui/combo-box";
import { PRIME_2_ALL_ITEMS_VALUES, PRIME_2_ALL_LOCATIONS } from "@/data/Prime2.data";
import { createOptions } from "@/lib/utils";

export type Props = {
  value: string;
};

export function Prime2ItemInput() {
  const options = createOptions([...PRIME_2_ALL_ITEMS_VALUES]);
  return (
    <ComboBox
      options={options}
      text={{
        empty: "No item found.",
        select: "Select item...",
        search: "Search for item",
      }}
    />
  );
}

export function Prime2LocationInput() {
  const options = createOptions([...PRIME_2_ALL_LOCATIONS]);
  return (
    <ComboBox
      options={options}
      text={{
        empty: "No location found.",
        select: "Select location...",
        search: "Search for location",
      }}
    />
  );
}


