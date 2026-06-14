import {
    getTodosFromLocalStorage, saveTodosToLocalStorage,
} from "../../utils/localStorage";
import ToDoItem from "../ToDoItem/ToDoItem";
import {ListUl, SortBox, StyledSelect} from "./ToDoList.styles.ts";
import AddToDo from "../AddToDo/AddToDo";
import {useState, useEffect, useContext} from "react";
import {MenuItem, Typography} from "@mui/material";
import type {SelectChangeEvent} from "@mui/material"
import {sortTodos} from "../../utils/sortTodos";
import type {Todo} from "../../types/todo";
import type {SortByCompleted, SortByDate} from "../../types/sortTypes";
import {ThemeContext} from "../../context/ThemeContext";

export default function ToDoList() {
    const [todos, setTodos] = useState(() => getTodosFromLocalStorage());

    const [sortByDate, setSortByDate] = useState<SortByDate>("new");
    const [sortByCompleted, setSortByCompleted] = useState<SortByCompleted>("all");

    const [editId, setEditId] = useState(-1);
    const [currenTheme] = useContext(ThemeContext);

    const sortedTodos = sortTodos(todos, sortByCompleted, sortByDate);

    useEffect(() => {
        saveTodosToLocalStorage(todos)
    }, [todos]);


    function handleChangeSortByDate(e: SelectChangeEvent<unknown>) {
        const value = e.target.value;
        if (value === "old" || value === "new")
            setSortByDate(value);
    }

    function handleChangeSortByCompleted(e: SelectChangeEvent<unknown>) {
        const value = e.target.value;
        if (value === "all" || value === "completed" || value === "non-completed")
            setSortByCompleted(value);
    }


    function handleDelete(id:number) {
        setTodos(list => (
            list.filter(item => item.id !== id)
        ));
    }

    function handleToggle(id: number) {
        setTodos(list => (
            list.map(item => (
                item.id === id?
                    {
                        ...item,
                        completed: !item.completed,
                    }
                    :
                    item
            ))
        ));
    }

    function handleEditId(id: number) {
        setEditId(id);
    }

    function handleEdit(id: number, editedText: string) {
        setTodos(list => (
            list.map(item => (
                item.id !== id?
                    item
                    :
                    {
                        ...item,
                        text: editedText
                    }
            ))
        ))
        setEditId(-1);
    }

    function handleAdd(text: string) {
        const todo: Todo = {
            id: todos.length ? Math.max(...todos.map(item => item.id)) + 1 : 0,
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        }
        setTodos(list => [
            ...list,
            todo,
        ])
    }

    return (
        <>
            <AddToDo onAdd={handleAdd}/>

            <SortBox>
                <StyledSelect
                    value={sortByDate}
                    onChange={handleChangeSortByDate}
                    $lightMode={currenTheme === "light"}
                >
                    <MenuItem value="new">Сначала новые</MenuItem>
                    <MenuItem value="old">Сначала старые</MenuItem>
                </StyledSelect>

                <StyledSelect
                    value={sortByCompleted}
                    onChange={handleChangeSortByCompleted}
                    $lightMode={currenTheme === "light"}
                >
                    <MenuItem value="all">Все</MenuItem>
                    <MenuItem value="completed">Готовые</MenuItem>
                    <MenuItem value="non-completed">Не готовые</MenuItem>
                </StyledSelect>
            </SortBox>

            <ListUl>
                {sortedTodos.length > 0 ? (
                    sortedTodos.map(item => (
                    <ToDoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                        createdAt={item.createdAt}
                        isEditing={item.id === editId}
                        onEditId={handleEditId}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onToggle={handleToggle}
                    ></ToDoItem>
                    )))
                        :
                    (
                        <Typography>Нет задач</Typography>
                    )
                }
            </ListUl>
        </>
    );
}