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
    if (lastIndex === undefined)
        return 0;
    const result = lastIndex + 1;
    return result;
}

export const deleteTodoFromLocalStorage = (id: number): void => {
    const result = getTodosFromLocalStorage().filter((item: Todo) => item.id !== id );
    saveTodosToLocalStorage(result);
}

export const editTodoFromLocalStorage = (id: number, text: string): void => {
    const result = getTodosFromLocalStorage().map((item: Todo) => {
        if (item.id !== id)
            return item;

        item.text = text;
        return item;
    })
    saveTodosToLocalStorage(result);
}

export const toggleCompleted = (id: number): void => {
    const result = getTodosFromLocalStorage().map((item: Todo) => {
        if (item.id !== id)
            return item;

        item.completed = !item.completed;
        return item;
    })
    saveTodosToLocalStorage(result);
}

export const todosFirstNew = (): Todo[] => {
    return getTodosFromLocalStorage().sort((a: Todo, b: Todo) => {
        return new Date(a.createdAt) - new Date(b.createdAt)
    })
}

export const todosFirstOld = (): Todo[] => {
    return todosFirstNew().reverse();
}