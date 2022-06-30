import './App.css';
import Board from './components/Board';
import { boardDefualt } from './Words';
import Keyboard from './components/Keyboard';
import { useState, useEffect, createContext } from 'react';

export const AppContext = createContext();

function App() {
    // State
    const [board, setBoard] = useState(boardDefualt);
    const [currentAttempt, setCurrentAttempt] = useState({
        attempt: 0,
        letterPos: 0,
    });
    const [wordSet, setWordSet] = useState(new Set());
    const [correctWord, setCorrectWord] = useState('');
    const [disbledLetter, setDisabledLetter] = useState([]);
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessWord: false,
    });

    // Generator
    useEffect(() => {
        generateWordSet().then((words) => {
            setWordSet(words.wordSet);
            setCorrectWord(words.todaysWord);
        });
    }, []);
    // Handler Functions
    const onEnter = () => {
        if (currentAttempt.letter !== 5) return;

        let currWord;
    };
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
