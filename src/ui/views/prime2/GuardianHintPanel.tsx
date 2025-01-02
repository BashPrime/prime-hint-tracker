import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function Prime2GuardianHintPanel(props: Props) {
  return (
    <div className={cn("bg-zinc-800", props.className)}>
      <h2 className={cn("font-bold bg-zinc-900 p-2 uppercase text-sm")}>
        Major Guardians
      </h2>
      <div className={cn("flex flex-col gap-2")}>
        
      </div>
    </div>
  );
}
