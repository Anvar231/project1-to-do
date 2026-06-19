import type {Todo} from "./todo";
import {LimitCount} from "./sortTypes";

export interface SuccessResponse {
    data: Todo[];
    total: number;
    page: number;
    limit: LimitCount;
    totalPages: number;
}

export interface GetTodosProps {
    page: number,
    limit: number,
}

export interface PostTodoProps {
    text: string,
}

export interface PutTodoProps {
    id: number,
    text: string,
    completed: boolean,
}

export interface DeleteTodoProps {
    id: number,
}

export interface ToggleTodoProps {
    id: number,
}