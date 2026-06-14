import {createContext,
        useState,
        type Dispatch,
        type ReactNode,
        type SetStateAction,} from "react";

type Theme = "light" | "dark";

type ThemeContextType = [
    Theme,
    Dispatch<SetStateAction<Theme>>
];

const ThemeContext = createContext<ThemeContextType>([
    "light",
    () => {},
])

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({children}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>("light")

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}