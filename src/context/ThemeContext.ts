import {createContext, type Dispatch, type SetStateAction} from "react";

export type Theme = "light" | "dark";

type ThemeContextType = [
    Theme,
    Dispatch<SetStateAction<Theme>>
];

export const ThemeContext = createContext<ThemeContextType>([
    "light",
    () => {},
]);
