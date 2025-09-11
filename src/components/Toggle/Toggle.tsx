"use client";

import { ThemeContext } from "@/context/ThemeProvider";
import { ThemeContextType } from "@/types/Theme";
import { useContext } from "react";

import "./styles.css";

const Toggle: React.FC = () => {
  const { theme, setTheme } = useContext<ThemeContextType | null>(
    ThemeContext
  )!;

  const thumbPositionClassName = `theme-${theme}`;

  return (
    <div className="toggle">
      <div className="toggle__label-container">
        <label htmlFor="theme-1" className="label--theme">
          1
        </label>
        <label htmlFor="theme-2" className="label--theme">
          2
        </label>
        <label htmlFor="theme-3" className="label--theme">
          3
        </label>
      </div>
      <div className="toggle__track">
        <span className={`thumb ${thumbPositionClassName}`}></span>
        <input
          type="radio"
          name="theme"
          id="theme-1"
          className="input--radio"
          onInput={() => setTheme("dark")}
        />
        <input
          type="radio"
          name="theme"
          id="theme-2"
          className="input--radio"
          onInput={() => setTheme("light")}
        />
        <input
          type="radio"
          name="theme"
          id="theme-3"
          className="input--radio"
          onInput={() => setTheme("purple")}
        />
      </div>
    </div>
  );
};

export default Toggle;
