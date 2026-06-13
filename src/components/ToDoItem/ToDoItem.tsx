import {Card, Checkbox} from "@mui/material";
import {ToDoCard, ToDoCheckBox, ToDoInfo, ToDoActions, ToDoIconButton} from "./ToDoItem.styles";
import {Typography} from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ToDoItem() {
    return (
        <ToDoCard>
            <ToDoInfo>
                <ToDoCheckBox />
                <Typography variant="h6">Название</Typography>
                <Typography variant="h6">Дата</Typography>
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