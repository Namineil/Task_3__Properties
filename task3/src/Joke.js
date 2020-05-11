import React from 'react'

function Joke(props) {
    return(
        <div>
            <p className="question" style={{display: !props.question && "none"}}>Question: {props.question}</p>
            <p className="answer">Answer: {props.punchLine}</p>
        </div>
    )
}

export default Joke