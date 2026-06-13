import {ToDoCard, ToDoCheckBox, ToDoInfo, ToDoActions, ToDoIconButton} from "./ToDoItem.styles";
import {Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import type {Todo} from "../../types/todo";
import {formatDate} from "../../utils/formatDate";

export default function ToDoItem({id, text, completed, createdAt}: Todo) {
    const date = formatDate(createdAt);

    return (
        <ToDoCard>
            <ToDoInfo>
                <ToDoCheckBox checked={completed}/>
                <Typography variant="h6">{text}</Typography>
                <Typography variant="h6">{date}</Typography>
            </ToDoInfo>

            <ToDoActions>
                <ToDoIconButton>
                    <EditIcon />
                </ToDoIconButton>

                <ToDoIconButton>
                    <DeleteIcon />
                </ToDoIconButton>
            </ToDoActions>
        </ToDoCard>
    );
}