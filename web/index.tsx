// @togo-framework/widget-clock — a DRIVER. Imports only the base and registers
// itself at load. The board never imports this file.
import { useEffect, useState } from "react";
import { registerWidget } from "@togo-framework/widget";

function Clock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="clock">
      <div className="clock-time">{now.toLocaleTimeString([], { hour12: false })}</div>
      <div className="clock-date">{now.toLocaleDateString([], { weekday: "long", day: "numeric", month: "short" })}</div>
    </div>
  );
}

registerWidget({ key: "clock", title: "Clock", defaultZone: "sidebar", Comp: Clock });
