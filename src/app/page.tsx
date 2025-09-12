"use client";

import { ThemeContext } from "@/context/ThemeProvider";
import { ThemeContextType } from "@/types/Theme";
import { useContext } from "react";

import Header from "@/components/Header/Header";
import Screen from "@/components/Screen/Screen";

const Home: React.FC = () => {
  const { theme } = useContext<ThemeContextType | null>(ThemeContext)!;

  const themeClassName = `theme-${theme}`;

  return (
    <div className={`calculator ${themeClassName}`}>
      <div className="calculator__body">
        <Header />
        <Screen value={0} />
      </div>
    </div>
  );
};

export default Home;
