import React, { useState } from 'react'
import "./fanComments.css"

export default function Comments(){

      const [inputText, setInputText] = useState("");

  function handleInput(e){
    setInputText(e.target.value)
  }



  const [submitted, setSubmitted] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    setSubmitted([...submitted, inputText])
    setInputText("");}



    return (
        <>
        
        <div>
          <header> Fan Comments </header>
          <form onSubmit = {handleSubmit}>
          <input onChange = {handleInput} type = "text" value = {inputText}></input>
          <button type = "submit"> Add to List
          </button>
          </form>

          <ul>
          {submitted.map((comment) => (
            <li>{comment}</li>
          ))}
        </ul>
        </div>
        </>
    )
}
