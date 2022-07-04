import { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos } = useContext(TodoListContext);

    return (
        <>
            {todos.length ? (
                <ul className="todo__list">
                    {todos.map((todo) => {
                        return <TodoItem todo={todo} key={todo.id} />
                    })}
                </ul>
            ) : (
                <h3 className="todo__no-todos">
                    No Todos
                </h3>
            )}
        </>
    )
}

export default TodoList