import type {Todo} from "../types/todo";

const TODOS_KEY = "todos";

export const getTodosFromLocalStorage = ():Todo[] => {
    const todos = localStorage.getItem(TODOS_KEY);
    return todos?JSON.parse(todos):[];
}

export const saveTodosToLocalStorage = (todos: Todo[]):void => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

export const addTodoToLocalStorage = (todo: Todo): void => {
    const result:Todo[] = getTodosFromLocalStorage();
    result.push(todo);
    saveTodosToLocalStorage(result);
}

export const getTodoId = (): number => {
    const lastIndex = getTodosFromLocalStorage().pop()?.id;
    if (!lastIndex)
        return 0;
    const result = lastIndex + 1;
    return result;
}