import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  name: string;
  className?: string;
};

export default function HintListWrapper(props: Props) {
  return (
    <div className={cn("bg-stone-900", props.className)}>
      <h2 className={cn("font-bold bg-zinc-950 p-2 uppercase text-sm")}>
        {props.name}
      </h2>
      <div className={cn("flex flex-col gap-2")}>
        {props.children}
      </div>
    </div>
  );
}
