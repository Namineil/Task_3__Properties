import React from 'react'

function Joke(props) {
    return(
        <div className="joke">
            <p className="question" style={{display: !props.question && "none"}}>{props.question}</p>
            <p className="answer">{props.punchLine}</p>
        </div>
    )
}

export default Joke