import {useState,
        useEffect,
        type ReactNode} from "react";
import {AppTheme, darkMode, lightMode} from "./AppTheme";
import {getThemeFromLocalStorage, saveThemToLocalStorage} from "../utils/localStorage";
import {ThemeProvider} from "styled-components";
import {ThemeContext, type Theme} from "./ThemeContext";

const initialTheme = getThemeFromLocalStorage() || "light";

interface ThemeContextProviderProps {
    children: ReactNode;
}

export default function ThemeContextProvider({children}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>(initialTheme)

    const currentTheme = theme === "light" ? lightMode : darkMode;

    useEffect(() => {
        saveThemToLocalStorage(theme);
    }, [theme]);

    return (
        <ThemeContext value={[theme, setTheme]}>
            <ThemeProvider theme={currentTheme} >
                <AppTheme />
                {children}
            </ThemeProvider>
        </ThemeContext>
    );
}
