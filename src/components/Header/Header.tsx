import "./styles.css";

import Toggle from "../Toggle/Toggle";

const Header: React.FC = () => {
  return (
    <header className="calculator__header">
      <h3 className="title--md">calc</h3>
      <div className="toggle-theme-container">
        <h4 className="title-sm">THEME</h4>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
