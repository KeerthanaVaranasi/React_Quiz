import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Question } from '../Helpers/Questions';
const Scorescreen = () => {
    const {score,setScore,setGame}=useContext(QuizContext)
    const restartQuiz=()=>{
        setScore(0)
        setGame("menu")
    }
    return (
        <div className='Scorescreen'>
            <h1>Quiz Finished</h1>
            <h3>{" "}{score} / {Question.length} {" "}</h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
};

export default Scorescreen;