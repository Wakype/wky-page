import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { JSX } from "react";

interface SocialMediaCardProps {
  name: string;
  url: string;
  icon: JSX.Element;
}

export function SocialMediaCard({ name, url, icon }: SocialMediaCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <Card className="group cursor-pointer">
        <CardContent>
          <div className="flex items-center gap-x-2 justify-center">
            {icon}
            <p>{name}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}