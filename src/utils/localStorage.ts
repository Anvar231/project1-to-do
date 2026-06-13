import {Todo} from "../types/todo";

const TODOS_KEY = "todos";

export const getTodosFromLocalStorage = ():Todo[] => {
    const todos = localStorage.getItem(TODOS_KEY);
    return todos?JSON.parse(todos):[];
}