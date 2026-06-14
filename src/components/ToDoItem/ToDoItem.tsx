import {ToDoCard, ToDoCheckBox, ToDoInfo, ToDoActions, ToDoIconButton, TodoTextField} from "./ToDoItem.styles";
import {Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import type {Todo} from "../../types/todo";
import {formatDate} from "../../utils/formatDate";
import React, {useState, useEffect, useRef, useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";

interface ToDoItemProps extends Todo{
    isEditing: boolean;
    onEditId: (id: number) => void;
    onEdit: (id: number, editedText: string) => void;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

export default function ToDoItem({id, text, completed, createdAt, onEditId, isEditing, onEdit, onDelete, onToggle}: ToDoItemProps) {
    const [editText, setEditText] = useState(text);
    const [error, setError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [currentTheme] = useContext(ThemeContext);
    const date = formatDate(createdAt);

    useEffect(() => {
        if (isEditing)
            inputRef.current?.focus();
    }, [isEditing]);


    function handleEditId() {
        setEditText(text);
        onEditId(id);
    }

    function handleConfirmEdit() {
        if (!editText.trim()) {
            setError(true);
            return;
        }
        setError(false);
        onEdit(id, editText);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEditText(e.target.value);
    }

    return (
        <ToDoCard $lightMode={currentTheme === "light"}>
            <ToDoInfo>
                <ToDoCheckBox
                    checked={completed}
                    onChange={() => onToggle(id)}
                />

                {
                    isEditing?
                    <TodoTextField
                        value={editText}
                        onChange={handleChange}
                        error={error}
                        inputRef={inputRef}
                        $lightMode={currentTheme === "light"}
                    ></TodoTextField>
                    :
                    <Typography variant="h6">{text}</Typography>
                }

                <Typography variant="h6">{date}</Typography>
            </ToDoInfo>

            <ToDoActions>
                {
                    isEditing?
                        <ToDoIconButton onClick={handleConfirmEdit} $lightMode={currentTheme === "light"}>
                            <CheckIcon />
                        </ToDoIconButton>
                    :
                        <>
                            <ToDoIconButton onClick={handleEditId} $lightMode={currentTheme === "light"}>
                                <EditIcon/>
                            </ToDoIconButton>
                            <ToDoIconButton onClick={() => onDelete(id)} $lightMode={currentTheme === "light"}>
                                <DeleteIcon />
                            </ToDoIconButton>
                        </>
                }

            </ToDoActions>
        </ToDoCard>
    );
}