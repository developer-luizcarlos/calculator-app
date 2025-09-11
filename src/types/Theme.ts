export interface ThemeContextType {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

type ThemeType = "light" | "dark" | "purple";

export default ThemeType;
