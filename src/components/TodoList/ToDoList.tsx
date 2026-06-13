import {getTodosFromLocalStorage} from "../../utils/localStorage";
import ToDoItem from "../ToDoItem/ToDoItem";
import {ListUl} from "./ToDoList.styles.ts";
import AddToDo from "../AddToDo/AddToDo";
import {useState} from "react";

export default function ToDoList() {
    const [todos, setToDos] = useState(getTodosFromLocalStorage())

    function handleAdd() {
        setToDos(getTodosFromLocalStorage())
    }

    return (
        <>
            <AddToDo onAdd={()=> handleAdd()}/>

            <ListUl>
                {todos.map(item => (
                    <ToDoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                        createdAt={item.createdAt}
                    ></ToDoItem>
                ))}
            </ListUl>
        </>
    );
}