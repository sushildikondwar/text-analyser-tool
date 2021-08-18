import React from 'react'
import { useState } from 'react'

export default function Inputbox() {

    // The value inside useState function parameter will be set as the value of text variable by default
    // Later on, if we want to change the value of text, then we cannot change its value directly by assigning the value
    // So, We have to use loadtext function
    // The value passed as the parameter inside loadtext function will get received by the text variable and the new value inside text variable get assigned

    const [text, loadtext] = useState("");

    const writetextbox = (event)=> {    // We are taking each value inside the textbox and passing it to the text variable using onChange event listener
        loadtext(event.target.value)        // As the text variable is getting updated,simultaneously its value is also getting passed inside
    }                                           //  textarea(as text is passed as a javascript variable inside 'value' property inside textarea tag)

    const capitalizerclick = ()=> {
        loadtext(text.toUpperCase());       //  Value inside text variable capitalized and again sent to loadtext function
    }                                           //  That'll update the text variable, also inside 'value' property of textarea tag

    return (
            <div className="textarea">
                <textarea className="form-control" id="text-box" rows="9" value={text} onChange={writetextbox}></textarea>
                <button className="btn btn-primary" id="form-button" onClick={capitalizerclick}>Capitalizer</button>
            </div>
    )
}
