import React from 'react'

export default function Colorpallet(props) {

    document.body.style.backgroundColor = props.DisplayMode==='light'?props.customBG:"#10011A";

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
