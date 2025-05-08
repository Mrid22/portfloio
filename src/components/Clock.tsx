"use client";
import { useState, useEffect } from "react";

export default function Clock() {
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
    <div>
      <p>{currentTime}</p>
    </div>
  );
}
