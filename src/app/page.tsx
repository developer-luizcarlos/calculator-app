"use client";

import { ThemeContext } from "@/context/ThemeProvider";
import { ThemeContextType } from "@/types/Theme";
import { useContext } from "react";

import Screen from "@/components/Screen/Screen";
import Toggle from "@/components/Toggle/Toggle";

const Home: React.FC = () => {
  const { theme } = useContext<ThemeContextType | null>(ThemeContext)!;

  const themeClassName = `theme-${theme}`;

  return (
    <div className={`calculator ${themeClassName}`}>
      <div className="calculator__body">
        <header className="calculator__header">
          <h3 className="title--md">calc</h3>
          <div className="toggle-theme-container">
            <h4 className="title-sm">THEME</h4>
            <Toggle />
          </div>
        </header>
        <Screen value={0} />
      </div>
    </div>
  );
};

export default Home;
