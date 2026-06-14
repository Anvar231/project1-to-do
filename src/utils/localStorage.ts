import type {Todo} from "../types/todo";

const TODOS_KEY = "todos";

export const getTodosFromLocalStorage = ():Todo[] => {
    const todos = localStorage.getItem(TODOS_KEY);
    return todos?JSON.parse(todos):[];
}

export const saveTodosToLocalStorage = (todos: Todo[]):void => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};