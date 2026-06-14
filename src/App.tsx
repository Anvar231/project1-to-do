import ToDoList from "./components/TodoList/ToDoList";
import ThemeProvider from "./context/ThemeContext";

export default function App() {
    return (
        <>
            <ThemeProvider>
                <ToDoList />
            </ThemeProvider>
        </>
    );
}