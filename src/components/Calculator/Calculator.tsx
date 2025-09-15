"use client";

import "./styles.css";

import { ThemeContext } from "@/context/ThemeProvider";
import { ThemeContextType } from "@/types/Theme";
import { useContext, useState } from "react";

import Header from "@/components/Header/Header";
import Screen from "@/components/Screen/Screen";
import Button from "../Button/Button";

import { isEmptyString, isLastCharNumber } from "@/utils/utils";

const Calculator: React.FC = () => {
  const { theme } = useContext<ThemeContextType | null>(ThemeContext)!;

  const themeClassName = `theme-${theme}`;

  const [expression, setExpression] = useState("0");

  const addValue = (value: string, type: "Numeric" | "Operator") => {
    switch (type) {
      case "Operator":
        if (isEmptyString(expression)) return;

        if (isLastCharNumber(expression)) {
          setExpression((exp) => exp + value);
        }
        break;
      case "Numeric":
        setExpression((exp) => (exp.trim() === "0" ? value : exp + value));
    }
  };

  const deleteValue = () =>
    setExpression((exp) => {
      const newValueWithoutLastChar = exp.slice(0, exp.length - 1);

      return isEmptyString(newValueWithoutLastChar)
        ? "0"
        : newValueWithoutLastChar;
    });

  return (
    <div className={`calculator ${themeClassName}`}>
      <div className="calculator__body">
        <Header />
        <Screen value={expression} />
        <div className="calculator__keypad">
          <div className="keypad__num-keys-container">
            <Button
              title="7"
              type="Numeric"
              onClick={() => addValue("7", "Numeric")}
            />
            <Button
              title="8"
              type="Numeric"
              onClick={() => addValue("8", "Numeric")}
            />
            <Button
              title="9"
              type="Numeric"
              onClick={() => addValue("9", "Numeric")}
            />
            <Button title="del" type="Delete" onClick={deleteValue} />
            <Button
              title="4"
              type="Numeric"
              onClick={() => addValue("4", "Numeric")}
            />
            <Button
              title="5"
              type="Numeric"
              onClick={() => addValue("5", "Numeric")}
            />
            <Button
              title="6"
              type="Numeric"
              onClick={() => addValue("6", "Numeric")}
            />
            <Button
              title="+"
              type="Operator"
              onClick={() => addValue("+", "Operator")}
            />
            <Button
              title="3"
              type="Numeric"
              onClick={() => addValue("3", "Numeric")}
            />
            <Button
              title="2"
              type="Numeric"
              onClick={() => addValue("2", "Numeric")}
            />
            <Button
              title="1"
              type="Numeric"
              onClick={() => addValue("1", "Numeric")}
            />
            <Button
              title="-"
              type="Operator"
              onClick={() => addValue("-", "Operator")}
            />
            <Button
              title="."
              type="Numeric"
              onClick={() => addValue(".", "Operator")}
            />
            <Button
              title="0"
              type="Numeric"
              onClick={() => addValue("0", "Numeric")}
            />
            <Button
              title="/"
              type="Numeric"
              onClick={() => addValue("/", "Operator")}
            />
            <Button
              title="x"
              type="Operator"
              onClick={() => addValue("*", "Operator")}
            />
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
