import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './index.css'
import App from './App.tsx'
import {saveTodosToLocalStorage} from "./utils/localStorage";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
* export interface Todo {
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
}
* */