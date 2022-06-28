import './App.css';
import Board from './components/Board';
import { boardDefualt } from './Words';
import Keyboard from './components/Keyboard';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
    const [board, setBoard] = useState(boardDefualt);
    return (
        <div className='App'>
            <nav>
                <h1>Wordle</h1>
            </nav>
            <AppContext.Provider value={{ board, setBoard }}>
                <Board />
                <Keyboard />
            </AppContext.Provider>
        </div>
    );
}

export default App;
