import { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';

const TodoItem = ({todo}) => {
    const { removeTodo, findTodoItem } = useContext(TodoListContext);

    return (
        <li className="todo__list-item">
            <div className="todo__list-item-title">
                {todo.title}
            </div>
            
            <div className="todo__list-item-controls">
                <button onClick={() => removeTodo(todo.id)} className="todo__list-item-btn todo__list-item-btn--delete">
                    <i className="fas fa-trash-alt"></i>
                </button>

                <button onClick={() => findTodoItem(todo.id)} className="todo__list-item-btn todo__list-item-btn--edit">
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default TodoItem;