import ToDoItem from "../ToDoItem/ToDoItem";
import {ListUl, StyledTypography} from "./SortedToDoList.styles";
import type {Todo} from "../../types/todo";
import {useState, useCallback, memo} from "react";
import {useDeleteTodoMutation, usePutTodoMutation, useToggleTodoMutation} from "../../store/api";

interface SortedToDoListProps {
    sortedTodos: Todo[];
}

const SortedToDoList = memo(function ({sortedTodos} : SortedToDoListProps) {
    const [editId, setEditId] = useState(-1);

    const [deleteTodo] = useDeleteTodoMutation();
    const [toggleTodo] = useToggleTodoMutation();
    const [putTodo] = usePutTodoMutation();

    const handleDelete = useCallback(
        async (id: number) => {
            await deleteTodo({id});
        },
        [deleteTodo],
    );

    const handleToggle = useCallback(
        async (id: number) => {
            await toggleTodo({id})
        },
        [toggleTodo],
    );

    const handleEditId = useCallback(
        (id: number) => {
            setEditId(id);
        },
        [],
    );

    const handleEdit = useCallback(
        async (id: number, editedText: string, completed: boolean) => {
            await putTodo({id, text: editedText, completed})
            setEditId(-1);
        },
        [putTodo],
    );

    return (
        <ListUl>
            {sortedTodos.length > 0 ? (
                    sortedTodos.map(item => (
                        <ToDoItem
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            completed={item.completed}
                            createdAt={item.createdAt}
                            isEditing={item.id === editId}
                            onEditId={handleEditId}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            onToggle={handleToggle}
                        ></ToDoItem>
                    )))
                :
                (
                    <StyledTypography>Нет задач</StyledTypography>
                )
            }
        </ListUl>
    );
})

export default SortedToDoList;