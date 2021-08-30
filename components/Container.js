import React from 'react'

export default function Container(props) {
    return (
        <div className="container">
            <h5>Summary: </h5>
            <p>Characters: {props.text.length}</p>
            <p>Words: {props.text.trim() === "" ? 0 : props.text.split(" ").length}</p>
            <p>{(props.text.trim() === "" ? 0 : (props.text.split(" ").length) * 0.004).toFixed(3)} Minutes to Read</p>
        </div>
    )
}
