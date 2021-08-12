import React from 'react';

export const themes = {
    light: {
        color: "#03dac5",
        backgroundColor: "#ffffff"
      },
    dark: {
        color: "#bb86fc",
        backgroundColor: "#121212"
      }
  };

export const ThemeContext = React.createContext(themes.light);
