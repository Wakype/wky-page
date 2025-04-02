"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

export function TimeCard() {
  const [currentTime, setCurrentTime] = useState<dayjs.Dayjs | null>(null);

  useEffect(() => {
    setCurrentTime(dayjs());

    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!currentTime) {
    return null;
  }

  return (
    <div className="flex items-center justify-between gap-x-5">
      <p className="text-2xl w-fit font-extrabold">
        {currentTime.format("HH:mm:ss")}
      </p>
      <div className="w-1/2 h-px bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]" />
      <p className="text-base">
        {currentTime.format("dddd, DD MMMM YYYY")}
      </p>
    </div>
  );
}
