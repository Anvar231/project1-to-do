import {createContext,
        useState,
        useEffect,
        type Dispatch,
        type ReactNode,
        type SetStateAction} from "react";
import {GlobalStyle} from "./GlobalStyle";
import {getThemeFromLocalStorage, saveThemToLocalStorage} from "../utils/localStorage";

export type Theme = "light" | "dark";

type ThemeContextType = [
    Theme,
    Dispatch<SetStateAction<Theme>>
];

const initialTheme = getThemeFromLocalStorage() || "light";

export const ThemeContext = createContext<ThemeContextType>([
    initialTheme,
    () => {},
])

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({children}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(initialTheme)

    useEffect(() => {
        saveThemToLocalStorage(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <GlobalStyle $lightMode={theme === "light"}/>
            {children}
        </ThemeContext.Provider>
    );
}