import React, { useState } from 'react'



function Body() {
    const [text,setText]=useState('')
    function showText(){
        setText('Hello')
    }

    function hideText(){
        setText('')
    }
  return (
    <>
      <div className="container">
        <div className="first_box">
            <img src="https://cdn.dribbble.com/users/1551941/screenshots/6346538/thankyoudribble.gif" alt="" height='300px' width='400px'/>
        </div>
        <div className="second_box">
            <p className='text-center fs-3 fw-600'>{text}</p>
            <button className='btn btn-success mx-3' onClick={showText}>Show</button>
            <button className='btn btn-danger' onClick={hideText}>Hide</button>
        </div>
        </div>  
    </>
  )
}

export default Body