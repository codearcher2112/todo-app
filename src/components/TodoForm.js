import { useContext, useState, useEffect } from 'react';
import { TodoListContext } from '../context/TodoListContext';

const TodoForm = () => {
    const { addTodo, clearTodoList, editTodoItem, editTodo } = useContext(TodoListContext);
    const [title, setTitle] = useState('');

    const handleChange = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (!editTodoItem) {
            addTodo(title);
            setTitle('');
        } else {
            editTodo(title, editTodoItem.id)
        }
    }

    useEffect(() => {
        if (editTodoItem) {
            setTitle(editTodoItem.title);
        } else {
            setTitle('');
        }
    }, [editTodoItem]);

    return (
        <form onSubmit={handleSubmit} className="todo__form">
            <input
                onChange={handleChange}
                value={title}
                type="text"
                className="todo__input"
                placeholder="Add Todo..."
                required
            />
            
            <div className="todo__form-controls">
                <button type="submit" className="todo__form-btn todo__form-btn--add">
                    {editTodoItem ? 'Edit Todo' : 'Add Todo'}
                </button>

                <button onClick={() => clearTodoList()} className="todo__form-btn todo__form-btn--clear">
                    Clear Todos
                </button>
            </div>
        </form>
    )
}

export default TodoForm;