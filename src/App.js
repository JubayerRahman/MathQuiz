import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Quiz from './Components/Quizs/Quiz';
import Result from './Components/Resultpage/Result';
import { useState } from 'react';
import Dev from './Components/Dev/Dev';

function App() {
  const [questonNum, setQuestionNum] = useState("")
  const [rightAns, setRightAns] = useState("")
  const [wrongAns, setWrongAns] = useState("")
  const getQnum=(data)=>{setQuestionNum(data)}
  const getRightAns=(data)=>{setRightAns(data)}
  const getWrongAns=(data)=>{setWrongAns(data)}
  console.log({questonNum}, {rightAns}, {wrongAns})
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path='/quizs' element={<Quiz getQnum={getQnum} getRightAns={getRightAns} getWrongAns={getWrongAns} />}/>
          <Route path='/quizs/Result' element={<Result questions={questonNum} rights={rightAns} wrongs={wrongAns}/>}/>
        </Routes>
        <Dev/>
      </header>
    </div>
  );
}

export default App;
