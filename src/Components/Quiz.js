import React, { useState ,useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';
import {Question} from "../Helpers/Questions";
const Quiz = () => {
    const {score,setScore,setGame}=useContext(QuizContext)
    const [current,setCurrent]=useState(0);
    const [option,setOption]=useState("");
    const nextQuestion=()=>{
        if(Question[current].answer === option){
            setScore(score+1);
        }
        //alert(score)
        setCurrent(current+1);
    }
    const finishQuiz=()=>{
        if(Question[current].answer === option){
            setScore(score+1);
        }
        setGame("scores")
    }
    return (
        <div className='Quiz'>
            <h1>{Question[current].prompt}</h1>
            <div className='options'>
                <button onClick={()=>setOption("A")}>{Question[current].optionA}{" "}</button>
                <button onClick={()=>setOption("B")}>{Question[current].optionB}{" "}</button>
                <button onClick={()=>setOption("C")}>{Question[current].optionC}{" "}</button>
                <button onClick={()=>setOption("D")}>{Question[current].optionD}{" "}</button>
            </div>
            {current === Question.length-1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ):(
                <button onClick={nextQuestion}>Next Question</button>
            )
            }
            
        </div>
    );
};

export default Quiz;