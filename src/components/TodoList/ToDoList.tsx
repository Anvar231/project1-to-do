import {SortBox, StyledSelect} from "./ToDoList.styles.ts";
import AddToDo from "../AddToDo/AddToDo";
import {useCallback, useMemo, useState} from "react";
import type {SelectChangeEvent} from "@mui/material"
import {MenuItem} from "@mui/material";
import {sortTodos} from "../../utils/sortTodos";
import {SortByCompleted, SortByDate} from "../../types/sortTypes";
import SortedToDoList from "../SortedToDoList/SortedToDoList";
import {useSearchParams} from "react-router-dom";
import {useGetTodosQuery, usePostTodoMutation} from "../../store/api";

export default function ToDoList() {
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get("page") ?? 1);
    const limit = Number(searchParams.get("limit") ?? 10);

    const {data} = useGetTodosQuery({page, limit});
    const [addTodo] = usePostTodoMutation();

    const [sortByDate, setSortByDate] = useState<SortByDate>(SortByDate.new);
    const [sortByCompleted, setSortByCompleted] = useState<SortByCompleted>(SortByCompleted.all);

    const todosData = data ? data.data : []

    const sortedTodos = useMemo(
        () => sortTodos(todosData, sortByCompleted, sortByDate),
        [todosData, sortByCompleted, sortByDate]
    );

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
        async (text: string) => {
            await addTodo({text})
        },
        [addTodo],
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

            <SortedToDoList sortedTodos={sortedTodos} />
        </>
    );
}
