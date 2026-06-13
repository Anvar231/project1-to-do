import {getTodosFromLocalStorage} from "../../utils/localStorage";
import ToDoItem from "../ToDoItem/ToDoItem";
import {ListUl, SortBox} from "./ToDoList.styles.ts";
import AddToDo from "../AddToDo/AddToDo";
import {useState} from "react";
import {MenuItem, Select} from "@mui/material";

export default function ToDoList() {
    const [todos, setToDos] = useState(getTodosFromLocalStorage());

    const [sortByDate, setSortByDate] = useState("new");
    const [sortByCompleted, setSortByCompleted] = useState("all");

    const [editTodo, setEditMode] = useState(-1);


    function handleAdd() {
        setToDos(getTodosFromLocalStorage())
    }

    function handleChangeSortByDate(e) {
        setSortByDate(e.target.value);
    }

    function handleChangeSortByCompleted(e) {
        setSortByCompleted(e.target.value);
    }

    return (
        <>
            <AddToDo onAdd={handleAdd}/>

            <SortBox>
                <Select
                    value={sortByDate}
                    onChange={handleChangeSortByDate}
                >
                    <MenuItem value="new">Сначала новые</MenuItem>
                    <MenuItem value="old">Сначала старые</MenuItem>
                </Select>

                <Select
                    value={sortByCompleted}
                    onChange={handleChangeSortByCompleted}
                >
                    <MenuItem value="all">Все</MenuItem>
                    <MenuItem value="completed">Готовые</MenuItem>
                    <MenuItem value="non-completed">Не готовые</MenuItem>
                </Select>
            </SortBox>

            <ListUl>
                {todos.map(item => (
                    <ToDoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                        createdAt={item.createdAt}
                        onChange={handleAdd}
                        editMode={item.id === editTodo}
                        onEdit={setEditMode}
                    ></ToDoItem>
                ))}
            </ListUl>
        </>
    );
}