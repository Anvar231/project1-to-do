import {getTodosFromLocalStorage} from "../../utils/localStorage";
import ToDoItem from "../ToDoItem/ToDoItem";
import {ListUl} from "./ToDoList.styles.ts";

export default function ToDoList() {
    const todos = getTodosFromLocalStorage();

    return (
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
    );
}