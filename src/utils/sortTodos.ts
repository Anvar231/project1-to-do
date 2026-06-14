import type {Todo} from "../types/todo";
import type {SortByCompleted, SortByDate} from "../types/sortTypes";

export const sortTodos = (list: Todo[], sortByCompleted: SortByCompleted, sortByDate: SortByDate) => {
    return (
        list.filter(todo => {
            if (sortByCompleted === "completed") return todo.completed;
            if (sortByCompleted === "non-completed") return !todo.completed;
            return true;
        })
            .sort((a, b) => {
                if (sortByDate === "new") {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                }

                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            })
    )
}