"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./Knob.css"; // ← muda o nome do CSS se quiser

export default function Knob() {
  const router = useRouter();
  const pathname = usePathname();

  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isHome = pathname === "/";
  const isAwesome = pathname === "/awesome";

  // === VISIBILIDADE (só no contato ou no /awesome) ===
  useEffect(() => {
    if (!isHome) {
      setIsVisible(false);
      return;
    }

    const target = document.getElementById("contato");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.2);
      },
      { threshold: [0, 0.2, 0.5], rootMargin: "-15% 0px -15% 0px" }
    );

    observer.observe(target);

    // checa se já tá visível
    const rect = target.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }

    return () => observer.disconnect();
  }, [isHome]);

  // === CHECKED STATE ===
  useEffect(() => setIsChecked(isAwesome), [isAwesome]);

  // === NAVEGAÇÃO ===
  const handleChange = () => {
    if (isAwesome) {
      router.push("/#spawn-contato"); // volta pro contato com scroll
    } else {
      router.push("/awesome");
    }
  };

  // === MOSTRA O KNOB? ===
  const shouldShow = (isHome && isVisible) || isAwesome;
  if (!shouldShow) return null;

  // === O KNOB LINDO ===
  return (
    <label className={`knob-wrapper ${shouldShow ? "visible" : ""}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <div className="knob"></div>
    </label>
  );
}