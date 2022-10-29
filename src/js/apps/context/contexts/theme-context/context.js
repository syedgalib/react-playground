import { createContext } from "react";

const ThemeContext = createContext({
    theme: '',
    changeTheme: () => {},
    switchTheme: () => {},
});

export default ThemeContext;