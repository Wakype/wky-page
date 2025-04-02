import { CardContent } from "@/components/ui/card";

export function SpinningCard() {
  return (
      <CardContent className="flex items-center justify-center gap-x-1">
        <p className="group-hover:animate-spin transition-all ease-in-out font-bold -rotate-45">
          ?
        </p>
        <p className="group-hover:animate-spin transition-all ease-in-out font-bold">
          ?
        </p>
        <p className="group-hover:animate-spin transition-all ease-in-out font-bold rotate-45">
          ?
        </p>
      </CardContent>
  );
}