import React from 'react'
import { useState } from 'react'
import { ImCopy } from 'react-icons/im'
import { FcCheckmark } from 'react-icons/fc'

export default function Inputbox(props) {

    const [text, loadtext] = useState("");
    const [button, loadbutton] = useState("Capitalizer");
    const [copybutton, loadcopybutton] = useState(<ImCopy />);

    const writetextbox = (event) => {    
        loadtext(event.target.value)        
    }                                          

    const capitalizerclick = () => {        
        if (text !== text.toUpperCase()) {      
            loadtext(text.toUpperCase());      
            loadbutton("De-Capitalizer");
        }
        else {
            loadtext(text.toLowerCase());       
            loadbutton("Capitalizer");
        }
    }

    const cleartext = () => {       
        loadtext("");
    }

    const copyclick = () => {
        if(text!=="") {
            loadcopybutton(<FcCheckmark padding="0"/>);
            navigator.clipboard.writeText(text);
            setTimeout(() => {
                loadcopybutton(<ImCopy />);
            }, 1500);
        }
    }

    return (
        <>
            <div className="container" style={{position: "relative"}}>
                <button className="btn btn-danger" id="clear-button" onClick={cleartext}>X</button>
                <div className="textarea">
                    <textarea className="form-control" id="text-box" rows="7" value={text} onChange={writetextbox} style={{ backgroundColor: props.DisplayMode === 'light' ? '#ffffff' : '#020321', color: props.DisplayMode === 'light' ? '#212529' : 'gray' }} ></textarea>
                    <button className="btn btn-primary" id="form-button" onClick={capitalizerclick}>{button}</button>
                    <button className="btn btn-white" id="copy-button-sm-screen" onClick={copyclick}>{copybutton}</button>        {/*for smaller screens*/}
                    <button className="btn btn-light" id="copy-button" onClick={copyclick}>{copybutton}</button>      {/* for larger screens */}
                </div>
            </div>
            <div className="container">
                <h5>Summary: </h5>
                <p>Characters: {text.length}</p>
                <p>Words: {text.trim() === "" ? 0 : text.split(" ").length}</p>
                <p>{(text.trim() === "" ? 0 : (text.split(" ").length) * 0.004).toFixed(3)} Minutes to Read</p>
            </div>
        </>
    )
}
