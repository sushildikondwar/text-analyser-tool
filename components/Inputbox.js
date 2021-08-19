import React from 'react'
import { useState } from 'react'

export default function Inputbox() {

    // The value inside useState function parameter will be set as the value of text variable by default
    // Later on, if we want to change the value of text, then we cannot change its value directly by assigning the value
    // So, We have to use loadtext function
    // The value passed as the parameter inside loadtext function will get received by the text variable and the new value inside text variable get assigned

    const [text, loadtext] = useState("");
    const [button, loadbutton] = useState("Capitalizer");

    const writetextbox = (event) => {    // We are taking each value inside the textbox and passing it to the text variable using onChange event listener
        loadtext(event.target.value)        // As the text variable is getting updated,simultaneously its value is also getting passed inside
    }                                           //  textarea(as text is passed as a javascript variable inside 'value' property inside textarea tag)

    const capitalizerclick = () => {        //  update the State of text variable, also inside 'value' property of textarea tag and also change State of Button
        if (text !== text.toUpperCase()) {      //  Checking if text inside input box is in Uppercase
            loadtext(text.toUpperCase());       //  Value inside text variable capitalized and again sent to loadtext function
            loadbutton("De-Capitalizer");
        }
        else {
            loadtext(text.toLowerCase());       //  If text is in Uppercase
            loadbutton("Capitalizer");      
        }
    }
    
    const cleartext = () => {       //  Clear Text-Box
        loadtext("");
    }

    return (
        <>
            <div className="container">
                <button className="btn btn-danger" id="clear-button" onClick={cleartext}>X</button>
                <div className="textarea">
                    <textarea className="form-control" id="text-box" rows="7" value={text} onChange={writetextbox}></textarea>
                    <button className="btn btn-primary" id="form-button" onClick={capitalizerclick}>{button}</button>
                </div>
            </div>
            <div className="container">
                <h5>Summary: </h5>
                <p>Characters: {text.length}</p>      {/*number of Characters/*/}
                <p>Words: {text.split(" ").length - 1}</p>      {/*number of space-separated words (it was calculating an empty space as 1, therefore wordcount = totalwordcount-1)*/}
                <p>{((text.split(" ").length - 1) * 0.004).toFixed(3)} Minutes to Read</p>      {/*Avg. reading speed 250 wpm, [wordlength*(time-to-read-one-word)], fixed upto 3 decimal values*/}
            </div>
        </>
    )
}
