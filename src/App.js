import './App.css';
import TodoTitle from './components/TodoTitle';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
        <div className="todo">
            <TodoTitle />
            <TodoForm />
            <TodoList />
        </div>
    </div>
  );
}

export default App;
