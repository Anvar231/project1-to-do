import {getTodosFromLocalStorage, saveTodosToLocalStorage,} from "../../utils/localStorage";
import {SortBox, StyledSelect} from "./ToDoList.styles.ts";
import AddToDo from "../AddToDo/AddToDo";
import {useCallback, useEffect, useMemo, useState} from "react";
import type {SelectChangeEvent} from "@mui/material"
import {MenuItem} from "@mui/material";
import {sortTodos} from "../../utils/sortTodos";
import type {Todo} from "../../types/todo";
import {SortByCompleted, SortByDate} from "../../types/sortTypes";
import SortedToDoList from "../SortedToDoList/SortedToDoList";

export default function ToDoList() {
    const [todos, setTodos] = useState(() => getTodosFromLocalStorage());

    const [sortByDate, setSortByDate] = useState<SortByDate>(SortByDate.new);
    const [sortByCompleted, setSortByCompleted] = useState<SortByCompleted>(SortByCompleted.all);

    const sortedTodos = useMemo(
        () => sortTodos(todos, sortByCompleted, sortByDate),
        [todos, sortByCompleted, sortByDate]
    );


    useEffect(() => {
        saveTodosToLocalStorage(todos)
    }, [todos]);

    const  handleChangeSortByDate = useCallback(
        (e: SelectChangeEvent<unknown>) => {
            const value = e.target.value;
            if (value === SortByDate.old || value === SortByDate.new)
                setSortByDate(value);
        },
        [],
    );

    const  handleChangeSortByCompleted = useCallback(
        (e: SelectChangeEvent<unknown>) => {
            const value = e.target.value;
            if (value === SortByCompleted.all || value === SortByCompleted.completed || value === SortByCompleted.nonCompleted)
                setSortByCompleted(value);
        },
        [],
    );

    const handleAdd = useCallback(
        (text: string) => {
            setTodos(list => {
                const todo: Todo = {
                    id: list.length ? Math.max(...list.map(item => item.id)) + 1 : 0,
                    text,
                    completed: false,
                    createdAt: new Date().toISOString(),
                };

                return [...list, todo];
            });
        },
        [],
    );

    return (
        <>
            <AddToDo onAdd={handleAdd}/>

            <SortBox>
                <StyledSelect
                    value={sortByDate}
                    onChange={handleChangeSortByDate}
                >
                    <MenuItem value={SortByDate.new}>Сначала новые</MenuItem>
                    <MenuItem value={SortByDate.old}>Сначала старые</MenuItem>
                </StyledSelect>

                <StyledSelect
                    value={sortByCompleted}
                    onChange={handleChangeSortByCompleted}
                >
                    <MenuItem value={SortByCompleted.all}>Все</MenuItem>
                    <MenuItem value={SortByCompleted.completed}>Готовые</MenuItem>
                    <MenuItem value={SortByCompleted.nonCompleted}>Не готовые</MenuItem>
                </StyledSelect>
            </SortBox>

            <SortedToDoList sortedTodos={sortedTodos} setTodos={setTodos}/>
        </>
    );
}
