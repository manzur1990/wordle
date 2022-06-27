import Board from './components/Board';
import './App.css';

function App() {
    return (
        <div className='App'>
            <nav>
                <h1>Wordle</h1>
                <Board />
            </nav>
        </div>
    );
}

export default App;
