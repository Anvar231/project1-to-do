import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {
    DeleteTodoProps,
    GetTodosProps,
    PostTodoProps,
    PutTodoProps,
    SuccessResponse,
    ToggleTodoProps
} from "../types/apiTypes";
import type {Todo} from "../types/todo";

const API_URL = import.meta.env.VITE_API_URL;

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    tagTypes: ["Todos"],

    endpoints: (builder) => ({
        getTodos: builder.query<SuccessResponse<Todo>, GetTodosProps> ({
            query: ({page, limit}) => ({
                url: "/todos",
                params: {
                    page,
                    limit,
                }
            }),
            providesTags: ["Todos"]
        }),

        postTodo: builder.mutation<Todo, PostTodoProps> ({
            query: (body) => ({
                url: "/todos",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Todos"]
        }),

        updateTodo: builder.mutation<Todo, PutTodoProps> ({
            query: ({id, ...body}) => ({
                url: `/todos/${id}`,
                method: "PUT",
                body: body
            }),
            invalidatesTags: ["Todos"]
        }),

        deleteTodo: builder.mutation<Todo, DeleteTodoProps> ({
            query: ({id}) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Todos"]
        }),

        toggleTodo: builder.mutation<Todo, ToggleTodoProps> ({
            query: ({id}) => ({
                url: `/todos/${id}/toggle`,
                method: "PATCH",
            }),
            invalidatesTags: ["Todos"]
        })
    })
})

export const {
    useGetTodosQuery,
    usePostTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
    useToggleTodoMutation} = api;