"use client";
import { useState, useEffect } from "react";

export default function Header({ title }: { title: string }) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    function setTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
      setCurrentTime(formattedTime);
    }

    setTime();
    const intervalId = setInterval(setTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header
      className={
        "absolute w-screen flex justify-between select-none top-0 left-0 z-20 bg-black/50 text-white px-5"
      }
    >
      <p>1</p>
      <p>{title}</p>
      <div>
        <p>{currentTime}</p>
      </div>
    </header>
  );
}
