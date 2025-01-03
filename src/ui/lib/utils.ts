import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createOptions(arr: string[], sort?: boolean) {
  let base = sort ? arr.sort() : arr

  // Remove duplicate entries
  base = base.filter((item, idx, array) => array.indexOf(item) === idx)
  return base.map((option) => ({ label: option, value: option }))
}
