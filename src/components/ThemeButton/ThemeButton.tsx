import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {useCallback, useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";
import {ThemeIconButton} from "./ThemeButton.styles";

enum Theme {
    light = "light",
    dark = "dark",
}

export default function ThemeButton() {
    const [currentTheme, setCurrentTheme] = useContext(ThemeContext);

    const handleClick = useCallback(
        () => {
            setCurrentTheme(prev => prev === Theme.light? Theme.dark : Theme.light);
        },
        [setCurrentTheme],
    );

    return (
        <>
            <ThemeIconButton onClick={handleClick}>
                {currentTheme === Theme.light?
                    <DarkModeIcon />
                    :
                    <LightModeIcon />
                }
            </ThemeIconButton>
        </>
    );
}
