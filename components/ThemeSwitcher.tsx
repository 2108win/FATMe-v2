"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const themeData = [
  {
    name: "light",
    icon: "/icons/sun.svg",
  },
  {
    name: "dark",
    icon: "/icons/moon.svg",
  },
  {
    name: "cupcake",
    icon: "/icons/cupcake.svg",
  },
  {
    name: "retro",
    icon: "/icons/retro.svg",
  },
  {
    name: "valentine",
    icon: "/icons/heart.svg",
  },
  {
    name: "luxury",
    icon: "/icons/luxury.svg",
  },
  {
    name: "dracula",
    icon: "/icons/dracula.svg",
  },
];

export const ThemeSwitcher = () => {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    themeChange(false);
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <>
      <div className="dropdown dropdown-hover btn dropdown-bottom dropdown-end">
        <label tabIndex={0} className="m-1">
          {theme === "light" && (
            <Image src="/icons/sun.svg" alt="icon-sun" width={20} height={20} />
          )}
          {theme === "dark" && (
            <Image src="/icons/moon.svg" alt="icon-moon" width={20} height={20} />
          )}
          {theme === "retro" && (
            <Image src="/icons/retro.svg" alt="icon-retro" width={20} height={20} />
          )}
          {theme === "valentine" && (
            <Image src="/icons/heart.svg" alt="icon-heart" width={20} height={20} />
          )}
          {theme === "luxury" && (
            <Image src="/icons/luxury.svg" alt="icon-luxury" width={20} height={20} />
          )}
          {theme === "dracula" && (
            <Image src="/icons/dracula.svg" alt="icon-dracula" width={20} height={20} />
          )}
          {theme === "cupcake" && (
            <Image src="/icons/cupcake.svg" alt="icon-cupcake" width={20} height={20} />
          )}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content border border-neutral-content z-20 menu p-2 shadow bg-base-100 rounded-box w-40"
        >
          {themeData.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => {
                  setTheme(item.name);
                }}
                data-set-theme={item.name}
                data-act-class="ACTIVECLASS"
              >
                <Image src={item.icon} alt={item.name} width={20} height={20} />
                <span className="capitalize">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
