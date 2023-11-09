"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <div className="dropdown dropdown-hover btn dropdown-end">
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
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
        >
          <li>
            <button
              onClick={() => {
                setTheme("light");
              }}
              data-set-theme="light"
              data-act-class="ACTIVECLASS"
            >
              <Image src="/icons/sun.svg" alt="icon-sun" width={20} height={20} />
              Light
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setTheme("dark");
              }}
              data-set-theme="dark"
              data-act-class="ACTIVECLASS"
            >
              <Image src="/icons/moon.svg" alt="icon-moon" width={20} height={20} />
              Dark
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setTheme("cupcake");
              }}
              data-set-theme="cupcake"
              data-act-class="ACTIVECLASS"
            >
              <Image src="/icons/cupcake.svg" alt="icon-cupcake" width={20} height={20} />
              Cupcake
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setTheme("retro");
              }}
              data-set-theme="retro"
              data-act-class="ACTIVECLASS"
            >
              <Image src="/icons/retro.svg" alt="icon-retro" width={20} height={20} />
              Retro
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setTheme("luxury");
              }}
              data-set-theme="luxury"
              data-act-class="ACTIVECLASS"
            >
              <Image src="/icons/luxury.svg" alt="icon-luxury" width={20} height={20} />
              Luxury
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setTheme("dracula");
              }}
              data-set-theme="dracula"
              data-act-class="ACTIVECLASS"
            >
              <Image src="/icons/dracula.svg" alt="icon-dracula" width={20} height={20} />
              Dracula
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
