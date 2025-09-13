import "./styles.css";

import type ButtonType from "./button.types";

interface Props {
  title: string;
  type: ButtonType;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ title, type, onClick }) => {
  const typeClassName = `btn--${type.toLowerCase()}`;

  return (
    <button onClick={onClick} className={`btn ${typeClassName}`}>
      {title}
    </button>
  );
};

export default Button;
