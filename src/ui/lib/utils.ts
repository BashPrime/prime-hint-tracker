import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createOptions(arr: string[], sort?: boolean) {
  const base = sort ? arr.sort() : arr
  return base.map((option) => ({ label: option, value: option }))
}
