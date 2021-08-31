import React from 'react'

export default function Colorpallet(props) {

    document.body.style.backgroundColor = props.DisplayMode==='light'?props.customBG:"#10011A";
    document.body.style.setProperty("--selectBG", props.DisplayMode==='light'?(props.customBG==='#ffffff'?"rgb(234, 234, 234)":props.customBG):"rgb(234, 234, 234)");

    function customBgFunc(event) {
        props.setCustomBG(event.target.style.backgroundColor);
    }

    return (
        <div hidden={props.DisplayMode!=='light'} className="colorPalletContainer" onClick={customBgFunc}>
            <div className="bgColorPallet" style={{backgroundColor:"coral"}} onClick={customBgFunc}></div>
            <div className="bgColorPallet" style={{backgroundColor:"palegreen"}} onClick={customBgFunc}></div>
            <div className="bgColorPallet" style={{backgroundColor:"#ffff0054"}} onClick={customBgFunc}></div>
            <div className="bgColorPallet" style={{backgroundColor:"lightpink"}} onClick={customBgFunc}></div>
            <div className="bgColorPallet" style={{backgroundColor:"aquamarine"}} onClick={customBgFunc}></div>
        </div>
    )
}
