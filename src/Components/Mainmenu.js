import React,{useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';
import "../App.css";


const Mainmenu = () => {
    const {game,setGame}=useContext(QuizContext)
    return (
        <div className='Menu'>
            <h1>REACT BASED QUESTIONS</h1>
            <button onClick={()=>setGame("quiz")}>Start Quiz</button>
        </div>
    );
};

export default Mainmenu;