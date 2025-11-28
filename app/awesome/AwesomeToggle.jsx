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

  function scrollToContato() {
    const tryScroll = () => {
      const el = document.getElementById("contato");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    if (tryScroll()) return;

    let attempts = 0;
    const id = setInterval(() => {
      attempts += 1;
      if (tryScroll() || attempts > 40) {
        clearInterval(id);
      }
    }, 50);
  }

  async function handleChange(e) {
    const newChecked = e.target.checked;
    setChecked(newChecked);

    if (newChecked) {
      await router.push("/awesome");
      return;
    }

    if (history.length > 1) {
      router.back(); 
      return;
    }

    router.replace("/#contato");
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
