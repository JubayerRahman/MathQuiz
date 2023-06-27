import React, { useEffect, useState } from 'react'
import "./Result.css"
import { Link } from 'react-router-dom'

const Result = (props) => {
  const [Accuracy, setAccuracy]= useState()
  const [Dialog, setDialog]= useState()
  useEffect(()=>{
    const percent = ((parseFloat(props.rights)/parseFloat(parseFloat(props.questions)-1))*100).toFixed(1)
    setAccuracy(percent)
    if(percent>60){
      setDialog("God Job!")
    }
    if(percent==="NaN"){
      setAccuracy("0.00")
      setDialog("Better luck next time!")
    }
    else{
      setDialog("Better luck next time!")
    }
  },[])
  return (
    <div className='resultSection'>
      <p>Your Accuracy was {Accuracy}%, {Dialog}</p>
      <h2>Total Question Asked: {parseFloat(props.questions)-1}</h2>
      <h2>Right Answers: {props.rights}</h2>
      <h2>Wrong Answers: {props.wrongs}</h2>
      <Link className='returnButton' to="/"><i class="fa-solid fa-rotate-left"></i></Link>
    </div>
  )
}

export default Result
