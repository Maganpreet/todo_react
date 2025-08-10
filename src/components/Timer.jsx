import { useEffect, useState } from "react";

const Timer = () => {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = now.toLocaleString('default', {month: 'long'});
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      console.log("Rendering timer...");
      setTimeString(`${day} ${month} ${year} ${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{timeString}</span>;
};

export default Timer;
