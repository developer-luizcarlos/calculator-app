"use client";

import "./styles.css";

import { ThemeContext } from "@/context/ThemeProvider";
import { ThemeContextType } from "@/types/Theme";
import { useContext } from "react";

import Header from "@/components/Header/Header";
import Screen from "@/components/Screen/Screen";
import Button from "../Button/Button";

const Calculator: React.FC = () => {
  const { theme } = useContext<ThemeContextType | null>(ThemeContext)!;

  const themeClassName = `theme-${theme}`;

  return (
    <div className={`calculator ${themeClassName}`}>
      <div className="calculator__body">
        <Header />
        <Screen value={0} />
        <div className="calculator__keypad">
          <div className="keypad__num-keys-container">
            <Button title="7" type="Numeric" onClick={() => ""} />
            <Button title="8" type="Numeric" onClick={() => ""} />
            <Button title="9" type="Numeric" onClick={() => ""} />
            <Button title="del" type="Delete" onClick={() => ""} />
            <Button title="4" type="Numeric" onClick={() => ""} />
            <Button title="5" type="Numeric" onClick={() => ""} />
            <Button title="6" type="Numeric" onClick={() => ""} />
            <Button title="+" type="Operator" onClick={() => ""} />
            <Button title="3" type="Numeric" onClick={() => ""} />
            <Button title="2" type="Numeric" onClick={() => ""} />
            <Button title="1" type="Numeric" onClick={() => ""} />
            <Button title="-" type="Operator" onClick={() => ""} />
            <Button title="." type="Numeric" onClick={() => ""} />
            <Button title="0" type="Numeric" onClick={() => ""} />
            <Button title="/" type="Numeric" onClick={() => ""} />
            <Button title="x" type="Operator" onClick={() => ""} />
          </div>
          <div className="keypad__calc-state-btns-container">
            <Button title="reset" type="Reset" onClick={() => ""} />
            <Button title="=" type="Result" onClick={() => ""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
