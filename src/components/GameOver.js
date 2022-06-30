import React, { useContext } from 'react';
import { AppContext } from '../App';

function GameOver() {
    const { curreAttempt, correctWord } = useContext(AppContext);

    return (
        <div className='gameOver'>
            <h3>
                {GameOver.guessWord
                    ? 'You Correctly Guessed the Wordle'
                    : 'You Failed to Guess the Word'}
            </h3>
            <h1>Correct Word: {correctWord}</h1>
            {GameOver.guessedWord && (
                <h3>You guessed in {curreAttempt.attempt} attempts</h3>
            )}
        </div>
    );
}

export default GameOver;
