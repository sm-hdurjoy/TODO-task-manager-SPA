// Library Imports
import { useEffect, useState } from "react";

// Components Imports
import Logo from "../assets/gamer.png";

// Styles Imports
import "../styles/Header.css"

export const Header = () => {
  // State Variable for Theme
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );

  // Everytime theme updates, local storage is also updated accordingly
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      {/* Logo and App Title container */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>TODO Task Manager</span>
      </div>

      {/* Theme Container */}
      <div className="themeSelector">
        {/* Light Theme Span */}
        <span
          className={theme === "light" ? "light activeTheme" : "light"}
          onClick={() => setTheme("light")}
        ></span>

        {/* Medium Theme Span */}
        <span
          className={theme === "medium" ? "medium activeTheme" : "medium"}
          onClick={() => setTheme("medium")}
        ></span>

        {/* Dark Theme Span */}
        <span
          className={theme === "dark" ? "dark activeTheme" : "dark"}
          onClick={() => setTheme("dark")}
        ></span>

        {/* gOne Theme Span */}
        <span
          className={theme === "gOne" ? "gOne activeTheme" : "gOne"}
          onClick={() => setTheme("gOne")}
        ></span>

        {/* gTwo Theme Span */}
        <span
          className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}
          onClick={() => setTheme("gTwo")}
        ></span>

        {/* gThree Theme Span */}
        <span
          className={theme === "gThree" ? "gThree activeTheme" : "gThree"}
          onClick={() => setTheme("gThree")}
        ></span>
      </div>
    </header>
  );
};
