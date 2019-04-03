import React from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

/*ThemeContext and "createContext" should be avilable 
everywher you desire to apply the theme. That is whye we need "export"*/
export const TodoThemeContext = React.createContext(
  themes.dark // default value
);
