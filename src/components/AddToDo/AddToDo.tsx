import {AddIconButton, AddToDoBox, AddTextField, Warning} from "./AddToDo.styles";
import AddIcon from "@mui/icons-material/Add";
import React, {useState, useCallback, memo} from "react";

interface AddToDoProps {
    onAdd: (text: string) => void;
}

const AddToDo = memo(function({onAdd}: AddToDoProps) {
    const [toDoName, setToDoName] = useState("");
    const [warningVisible, setWarningVisible] = useState(false);

    const handleClick = useCallback(
        () => {
            if (!toDoName.trim()) {
                setWarningVisible(true);
            }
            else{
                setWarningVisible(false);
                onAdd(toDoName);
                setToDoName("");

            }
        },
        [toDoName, onAdd],
    );

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setToDoName(e.target.value);
        },
        [],
    );

    return (
        <>
            <AddToDoBox>
                <AddTextField label="Название задачи" value={toDoName} onChange={handleChange}/>

                <AddIconButton onClick={handleClick}>
                    <AddIcon></AddIcon>
                </AddIconButton>
                <Warning variant="body2" color="error" $visible={warningVisible}>Название не может быть пустым</Warning>
            </AddToDoBox>

        </>
    );
})

export default AddToDo;