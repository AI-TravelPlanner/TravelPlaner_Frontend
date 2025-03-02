/* eslint-disable no-unused-vars */
import { useTheme } from "../_contextapi/ThemeContext";
import { Button } from "../components/ui/button"; // Ensure Button is imported

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme}>
      {/* Switch to {theme === "light" ? "dark" : "light"} mode */}
      switch
    </Button>
  );
};

export default ThemeToggleButton;
