import ToDoList from "./components/TodoList/ToDoList";
import ThemeProvider from "./context/ThemeContext";
import ThemeButton from "./components/ThemeButton/ThemeButton";

export default function App() {
    return (
        <>
            <ThemeProvider>
                <ThemeButton />
                <ToDoList />
            </ThemeProvider>
        </>
    );
}