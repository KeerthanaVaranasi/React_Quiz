import React, { useState,useContext } from 'react';
import Mainmenu from './Components/Mainmenu';
import Quiz from './Components/Quiz';
import Scorescreen from './Components/Scorescreen';
import { QuizContext } from './Helpers/Contexts';
import "./App.css"



const App = () => {
    const [game,setGame]=useState("menu")
    const [score,setScore]=useState(0)

    return (
        <div className='App'>
            <h1>Quiz App</h1>
            <QuizContext.Provider value={{game,setGame,score,setScore}}>
            {game==="menu" && <Mainmenu/>}
            {game==="quiz" && <Quiz/>}
            {game==="scores" && <Scorescreen/>}
            </QuizContext.Provider>
        </div>
    );
};

export default App;