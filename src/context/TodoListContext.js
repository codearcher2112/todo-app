import { createContext, useState, useEffect } from 'react';
import {  v4 as uuid } from 'uuid';

export const TodoListContext = createContext();

const TodoListContextProvider = props => {
    const initialState = JSON.parse(localStorage.getItem('todos')) || []
    const [todos, setTodos] = useState(initialState);
    const [editTodoItem, setEditTodoItem] = useState(null);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addTodo = title => {
        setTodos([...todos, {title, id: uuid()}]);
    }

    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const clearTodoList = () => setTodos([]);

    const findTodoItem = id => {
        const item = todos.find(todo => todo.id === id);
        setEditTodoItem(item);
    }

    const editTodo = (title, id) => {
        const newTodos = todos.map(todo => (todo.id === id ? { title, id } : todo));
        setTodos(newTodos);
        setEditTodoItem(null);
    }

    return (
        <TodoListContext.Provider
            value={{
                todos,
                addTodo,
                removeTodo,
                clearTodoList,
                findTodoItem,
                editTodo,
                editTodoItem
            }}
        >
            {props.children}
        </TodoListContext.Provider>
    );
}

export default TodoListContextProvider;
