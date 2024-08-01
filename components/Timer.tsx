"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());
  const hours = time.getHours();
  const displayTime = `${hours.toString().padStart(2, "0")}:${time
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
  const isOpen =
    time.getDay() !== 7 &&
    hours >= Number(process.env.NEXT_PUBLIC_OPEN_FROM) &&
    hours < Number(process.env.NEXT_PUBLIC_OPEN_TO)
      ? true
      : false;

  useEffect(function () {
    let innerTimer: ReturnType<typeof setInterval>;
    const secondsLeft = 60 - time.getSeconds() - 2; // -2 for accuracy

    const timer = setInterval(() => {
      innerTimer = setInterval(() => setTime(new Date()), 60 * 1000);
      setTime(new Date());
      clearInterval(timer);
    }, secondsLeft * 1000);

    return () => clearInterval(innerTimer);
  }, []);
  return (
    <>
      <div className="text-8xl neon font-extrabold ">{displayTime}</div>

      <div className="text-6xl tracking-wider neon font-bold uppercase">
        {isOpen ? "Otvoreno" : "Zatvoreno"}
      </div>
    </>
  );
}
