import type {Todo} from "../types/todo";
import type {Theme} from "../context/ThemeContext";

const TODOS_KEY = "todos";
const THEME_KEY = "theme";

export const getTodosFromLocalStorage = ():Todo[] => {
    const todos = localStorage.getItem(TODOS_KEY);
    return todos?JSON.parse(todos):[];
}

export const saveTodosToLocalStorage = (todos: Todo[]):void => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

export const getThemeFromLocalStorage = (): Theme | undefined => {
    const theme = localStorage.getItem(THEME_KEY);
    if (theme === "light" || theme === "dark")
        return theme;
}

export const saveThemToLocalStorage = (theme: Theme) => {
    localStorage.setItem(THEME_KEY, theme);
}
