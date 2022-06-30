import './App.css';
import Board from './components/Board';
import { boardDefualt } from './Words';
import Keyboard from './components/Keyboard';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
    const [board, setBoard] = useState(boardDefualt);
    const [currentAttempt, setCurrentAttempt] = useState({
        attempt: 0,
        letterPos: 0,
    });
    return (
        <div className='App'>
            <nav>
                <h1>Wordle Clone</h1>
            </nav>
            <AppContext.Provider
                value={{ board, setBoard, currentAttempt, setCurrentAttempt }}>
                <div className='game'>
                    <Board />
                    <Keyboard />
                </div>
            </AppContext.Provider>
        </div>
    );
}

export default App;
