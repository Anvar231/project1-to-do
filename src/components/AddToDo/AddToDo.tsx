import {AddIconButton, AddToDoBox, AddTextField, Warning} from "./AddToDo.styles";
import AddIcon from "@mui/icons-material/Add";
import React, {useState} from "react";
import {addTodoToLocalStorage, getTodoId} from "../../utils/localStorage";
import type {Todo} from "../../types/todo";

interface AddToDoProps {
    onAdd: () => void;
}

export default function AddToDo({onAdd}: AddToDoProps) {
    const [ToDoName, setToDoName] = useState("");
    const [warningVisible, setWarningVisible] = useState(false);

    function handleClick() {
         if (!ToDoName.trim()) {
             setWarningVisible(true);
         }
         else{
             const todo: Todo = {
                 id: getTodoId(),
                 text: ToDoName,
                 completed: false,
                 createdAt: new Date().toISOString()
             }
             addTodoToLocalStorage(todo);
             setWarningVisible(false);
             onAdd();
             setToDoName("")
         }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setToDoName(e.target.value);
    }

    return (
        <>
            <AddToDoBox>
                <AddTextField label="Название задачи" value={ToDoName} onChange={handleChange} />

                <AddIconButton onClick={handleClick}>
                    <AddIcon></AddIcon>
                </AddIconButton>
                <Warning variant="body2" color="error" $visible={warningVisible}>Название не может быть пустым</Warning>
            </AddToDoBox>

        </>
    );
}