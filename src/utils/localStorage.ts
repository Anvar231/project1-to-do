import type {Theme} from "../context/ThemeContext";

const THEME_KEY = "theme";

export const getThemeFromLocalStorage = (): Theme | undefined => {
    const theme = localStorage.getItem(THEME_KEY);
    if (theme === "light" || theme === "dark")
        return theme;
}

export const saveThemToLocalStorage = (theme: Theme) => {
    localStorage.setItem(THEME_KEY, theme);
}
