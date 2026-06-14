import {AddIconButton, AddToDoBox, AddTextField, Warning} from "./AddToDo.styles";
import AddIcon from "@mui/icons-material/Add";
import React, {useContext, useState} from "react";
import {ThemeContext} from "../../context/ThemeContext";

interface AddToDoProps {
    onAdd: (text: string) => void;
}

export default function AddToDo({onAdd}: AddToDoProps) {
    const [ToDoName, setToDoName] = useState("");
    const [warningVisible, setWarningVisible] = useState(false);
    const [currentTheme] = useContext(ThemeContext);

    function handleClick() {
         if (!ToDoName.trim()) {
             setWarningVisible(true);
         }
         else{
             setWarningVisible(false);
             onAdd(ToDoName);
             setToDoName("");

         }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setToDoName(e.target.value);
    }

    return (
        <>
            <AddToDoBox>
                <AddTextField label="Название задачи" value={ToDoName} onChange={handleChange} $lightMode={currentTheme === "light"}/>

                <AddIconButton onClick={handleClick} $lightMode={currentTheme === "light"}>
                    <AddIcon></AddIcon>
                </AddIconButton>
                <Warning variant="body2" color="error" $visible={warningVisible}>Название не может быть пустым</Warning>
            </AddToDoBox>

        </>
    );
}