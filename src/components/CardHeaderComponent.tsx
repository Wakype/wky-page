import React from "react";
import { CardHeader, CardTitle } from "@/components/ui/card";

interface CardHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const CardHeaderComponent: React.FC<CardHeaderProps> = ({ icon, title, subtitle }) => {
  return (
    <CardHeader className="text-white">
      <CardTitle className="flex items-center justify-between">
        <div className="flex items-center gap-x-2 font-extrabold text-lg">{icon} {title}</div>
        {subtitle && <p className="text-sm font-normal text-gray-400 cursor-pointer">{subtitle}</p>}
      </CardTitle>
    </CardHeader>
  );
};