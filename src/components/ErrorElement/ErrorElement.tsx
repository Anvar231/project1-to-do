import {Box} from "./ErrorElement.styles";

interface ErrorElementProps {
    error: string;
}

export default function ErrorElement({error}: ErrorElementProps) {
    return (
        <Box>Возникла ошибка при запросе данных: {error}</Box>
    );
}