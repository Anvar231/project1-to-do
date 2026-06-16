import ToDoItem from "../ToDoItem/ToDoItem";
import {ListUl, StyledTypography} from "./SortedToDoList.styles";
import type {Todo} from "../../types/todo";
import {useState, useCallback, memo} from "react";
import type {Dispatch, SetStateAction} from "react";

interface SortedToDoListProps {
    sortedTodos: Todo[];
    setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const SortedToDoList = memo(function ({sortedTodos, setTodos} : SortedToDoListProps) {
    const [editId, setEditId] = useState(-1);

    const handleDelete = useCallback(
        (id: number) => {
            setTodos((list: Todo[]) => (
                list.filter(item => item.id !== id)
            ));
        },
        [setTodos],
    );

    const handleToggle = useCallback(
        (id: number) => {
            setTodos((list: Todo[]) => (
                list.map(item => (
                    item.id === id?
                        {
                            ...item,
                            completed: !item.completed,
                        }
                        :
                        item
                ))
            ));
        },
        [setTodos],
    );

    const handleEditId = useCallback(
        (id: number) => {
            setEditId(id);
        },
        [],
    );

    const handleEdit = useCallback(
        (id: number, editedText: string) => {
            setTodos((list: Todo[]) => (
                list.map(item => (
                    item.id !== id?
                        item
                        :
                        {
                            ...item,
                            text: editedText
                        }
                ))
            ))
            setEditId(-1);
        },
        [setTodos],
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