import {ToDoCard, ToDoCheckBox, ToDoInfo, ToDoActions, ToDoIconButton, TodoTextField} from "./ToDoItem.styles";
import {Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import type {Todo} from "../../types/todo";
import {formatDate} from "../../utils/formatDate";
import {deleteTodoFromLocalStorage, editTodoFromLocalStorage, toggleCompleted} from "../../utils/localStorage";
import React, {useState, useEffect, useRef} from "react";

interface ToDoItemProps extends Todo{
    onChange: () => void;
    editMode: boolean;
    onEdit: (id: number) => void;
}

export default function ToDoItem({id, text, completed, createdAt, onChange, editMode, onEdit}: ToDoItemProps) {
    const [editText, setEditText] = useState(text);
    const [error, setError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const date = formatDate(createdAt);

    useEffect(() => {
        if (editMode)
            inputRef.current?.focus();
    }, [editMode]);



    function handleDelete() {
        deleteTodoFromLocalStorage(id);
        onChange();
    }

    function handleEdit() {
        onEdit(id);
    }

    function handleConfirm() {
        if (!editText.trim()) {
            setError(true);
            return;
        }
        editTodoFromLocalStorage(id, editText);
        onEdit(-1);
        onChange();
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEditText(e.target.value);
    }

    function handleToggle() {
        toggleCompleted(id);
        onChange();
    }

    return (
        <ToDoCard>
            <ToDoInfo>
                <ToDoCheckBox checked={completed} onClick={handleToggle}/>

                {
                    editMode?
                    <TodoTextField
                        value={editText}
                        onChange={handleChange}
                        error={error}
                        inputRef={inputRef}
                    ></TodoTextField>
                    :
                    <Typography variant="h6">{text}</Typography>
                }

                <Typography variant="h6">{date}</Typography>
            </ToDoInfo>

            <ToDoActions>
                {
                    editMode?
                        <ToDoIconButton onClick={handleConfirm}>
                            <CheckIcon />
                        </ToDoIconButton>
                    :
                        <>
                            <ToDoIconButton onClick={handleEdit}>
                                <EditIcon/>
                            </ToDoIconButton>
                            <ToDoIconButton onClick={handleDelete}>
                                <DeleteIcon />
                            </ToDoIconButton>
                        </>
                }

            </ToDoActions>
        </ToDoCard>
    );
}