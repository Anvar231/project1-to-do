import {SortBox, StyledSelect, StyledPagination} from "./ToDoList.styles.ts";
import AddToDo from "../AddToDo/AddToDo";
import {useCallback, useMemo, useState} from "react";
import type {SelectChangeEvent} from "@mui/material"
import {MenuItem} from "@mui/material";
import {sortTodos} from "../../utils/sortTodos";
import {LimitCount, SortByCompleted, SortByDate} from "../../types/sortTypes";
import SortedToDoList from "../SortedToDoList/SortedToDoList";
import {useSearchParams} from "react-router-dom";
import {useGetTodosQuery, usePostTodoMutation} from "../../store/api";

export default function ToDoList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page") ?? 1);
    const limit = Number(searchParams.get("limit") ?? LimitCount.ten);
    const [limitCount, setLimitCount] = useState<LimitCount>(limit);

    const {data} = useGetTodosQuery({page, limit: limitCount});
    const [addTodo] = usePostTodoMutation();

    const [sortByDate, setSortByDate] = useState<SortByDate>(SortByDate.new);
    const [sortByCompleted, setSortByCompleted] = useState<SortByCompleted>(SortByCompleted.all);

    const todosData = data ? data.data : [];
    const totalPages = data?.totalPages ?? 1;



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

    const handleLimitCountChange = useCallback(
        (e: SelectChangeEvent<unknown>) => {
            const value = e.target.value;
            if (value === LimitCount.five || value === LimitCount.ten || value === LimitCount.fifteen)
                setLimitCount(value);
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

                <StyledSelect
                    value={limitCount}
                    onChange={handleLimitCountChange}
                >
                    <MenuItem value={LimitCount.five}>5</MenuItem>
                    <MenuItem value={LimitCount.ten}>10</MenuItem>
                    <MenuItem value={LimitCount.fifteen}>15</MenuItem>
                </StyledSelect>
            </SortBox>

            <SortedToDoList sortedTodos={sortedTodos} />

            {totalPages > 1 && (
                <StyledPagination
                    count={totalPages}
                    page={page}
                    onChange={(_, nextPage) => {
                        setSearchParams({
                            page: String(nextPage),
                        })
                    }}
                />
            )}
        </>
    );
}
