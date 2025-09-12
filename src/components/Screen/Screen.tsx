import "./styles.css";

const Screen: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <input type="text" disabled className="screen" value={props.value} />;
};

export default Screen;
