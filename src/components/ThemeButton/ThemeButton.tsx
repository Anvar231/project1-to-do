import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";
import {ThemeIconButton} from "./ThemeButton.styles";

export default function ThemeButton() {
    const [currentTheme, setTheme] = useContext(ThemeContext);

    function handleClick() {
        setTheme(prev => prev === "light"? "dark" : "light");
    }

    return (
        <>
            <ThemeIconButton onClick={handleClick} $lightMode={currentTheme === "light"}>
                {currentTheme === "light"?
                    <DarkModeIcon />
                    :
                    <LightModeIcon />
                }
            </ThemeIconButton>
        </>
    );
}