"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AwesomeToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const isAwesome = pathname === "/awesome";

  // Estado local só pra animação (o truque!)
  const [isChecked, setIsChecked] = useState(false);

  // Primeira montagem: define o estado inicial sem animação
  useEffect(() => {
    setIsChecked(isAwesome);
  }, []);

  // Quando a rota muda (volta do awesome), atualiza SEM animação
  useEffect(() => {
    if (isAwesome !== isChecked) {
      // Força sem transição
      const label = document.querySelector(".toggle-awesome");
      label?.classList.add("no-transition");

      setIsChecked(isAwesome);

      // Remove a classe no próximo frame pra animação voltar
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

  return (
    <label className="toggle-awesome">
      <input
        type="checkbox"
        id="toggleAwesome"
        checked={isChecked}           // ← agora usa estado local
        onChange={handleChange}
      />
      <span className="slider-awesome"></span>
    </label>
  );
}