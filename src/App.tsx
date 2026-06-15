import ToDoList from "./components/TodoList/ToDoList";
import ThemeContextProvider from "./context/ThemeContextProvider";
import ThemeButton from "./components/ThemeButton/ThemeButton";

export default function App() {
    return (
        <>
            <ThemeContextProvider>
                <ThemeButton />
                <ToDoList />
            </ThemeContextProvider>
        </>
    );
}
