"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./AwesomeToggle.css";

export default function AwesomeToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const showToggle = pathname === "/" || pathname === "/awesome";

  const isAwesome = pathname === "/awesome";
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(isAwesome);
  }, []);

  useEffect(() => {
    if (isAwesome !== isChecked) {
      const label = document.querySelector(".toggle-awesome");
      label?.classList.add("no-transition");

      setIsChecked(isAwesome);

      requestAnimationFrame(() => {
        label?.classList.remove("no-transition");
      });
    }
  }, [isAwesome]);

  const handleChange = () => {
    if (isAwesome) {
      router.replace("/#spawn-contato", { scroll: false });
    } else {
      router.push("/awesome");
    }
  };

  if (!showToggle) return null;

  return (
    <label className="toggle-awesome">
      <input
        type="checkbox"
        id="toggleAwesome"
        checked={isChecked}
        onChange={handleChange}
      />
      <span className="slider-awesome"></span>
    </label>
  );
}
