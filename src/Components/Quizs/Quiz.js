import React, { useEffect, useState } from 'react'
import "./Quiz.css"
import { Link } from 'react-router-dom'

const Quiz = (props) => {
  const [symbols, setSymbols] = useState("")
  const [symbols1, setSymbols1] = useState("")
  const [mathNum1, setMathNum1] = useState("")
  const [mathNum2, setMathNum2] = useState("")
  const [Qnum , setQnum ] = useState(1)
  const [currectConnt , setcurrectConnt] = useState(0)
  const [wrongConnt , setwrongConnt] = useState(0)
  const [ans, setAns] = useState("")
  let Result=''
  const geneateSymbolls =()=>{
    const symNum =Math.floor( Math.random()*4)
    if(symNum===0){
      setSymbols("fa-solid fa-plus")  
      setSymbols1("+")
    }
    if(symNum===1){
      setSymbols("fa-solid fa-minus")
        setSymbols1("-")
      }
    if(symNum===2){
      setSymbols("fa-solid fa-xmark")
        setSymbols1("*")
      }
    // if(symNum===3){setSymbols("fa-solid fa-divide")
    // setSymbols1("/")}
 }
  const generetNumbers =()=>{
    const genetatNum1= Math.floor(Math.random()*100)
    const genetatNum2= Math.floor(Math.random()*100)
    setMathNum1(genetatNum1)
    setMathNum2(genetatNum2)
  }
  const nextQfunction=()=>{
    setAns("")
    if(ans===""){
      alert("moira js")
    }
    else{
      setQnum(Qnum+1)
      generetNumbers();
      geneateSymbolls(); 
      Result = eval(mathNum1 + symbols1 + mathNum2)
      console.log(Result)
      if(Result === parseFloat(ans)){
        setcurrectConnt(currectConnt+1)
      }
      if(Result!==parseFloat(ans)){
        setwrongConnt(wrongConnt + 1)
      }
    }
  }
  useEffect(()=>{
    generetNumbers();
    geneateSymbolls();
  },[])
  const quitFunction =()=>{
    props.getQnum(Qnum)
    props.getRightAns(currectConnt)
    props.getWrongAns(wrongConnt)
  }
  return (
    <div>
      <div className='QuizSection'>
        <h1 className='quizTitle'>Question: #{Qnum}</h1>
        <h1>{mathNum1} <i className={symbols}></i> {mathNum2}</h1>
        <div className='inputSecion'>
        <input type='number' placeholder='Answer Here' value={ans} onChange={(e)=>{setAns(e.target.value)}}/>
        <div className='inputButtons'>
        <Link onClick={quitFunction} className='quitLink'  to='Result'>Quit</Link>
        <button onClick={nextQfunction}>Next</button>
        </div>
        </div>
      <p><b>Ps:</b> If you reload the page the quiz will be expired automatically. </p>
      </div>
    </div>
  )
}

export default Quiz
