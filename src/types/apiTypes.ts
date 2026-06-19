export interface Data {
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
}

export interface SuccessResponse {
    data: Data[];
    total: number;
    page: number;
    limit: number;
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