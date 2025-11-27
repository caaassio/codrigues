"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AwesomeToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(pathname === "/awesome");
  }, [pathname]);

  function handleChange(e) {
    const newChecked = e.target.checked;
    setChecked(newChecked);

    if (newChecked) {
      router.push("/awesome"); 
    } else {
      router.push("/"); 
    }
  }

  return (
    <label className="toggle-awesome">
      <input
        type="checkbox"
        id="toggleAwesome"
        checked={checked}
        onChange={handleChange}
      />
      <span className="slider-awesome"></span>
    </label>
  );
}
