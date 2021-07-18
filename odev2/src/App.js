import './App.css';
import TodoBuilder from './container/TodoBuilder';
import Info from './components/Info/Info';

function App() {
  return (
    <div className='App'>
      <TodoBuilder></TodoBuilder>
      <Info></Info>
    </div>
  );
}

export default App;
