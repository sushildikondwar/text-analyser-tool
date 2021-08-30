import React from 'react';
import { TiWeatherSunny } from 'react-icons/ti';
import { BiMoon } from 'react-icons/bi';
import Colorpallet from './Colorpalette';

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.DisplayMode} bg-${props.DisplayMode} text-${props.DisplayMode==='light'?'dark':'light'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.about}</a>
                            </li>
                        </ul>
                        <Colorpallet DisplayMode={props.DisplayMode} customBG={props.customBG} setCustomBG={props.setCustomBG} />
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.changeMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.DisplayMode==='light'?<TiWeatherSunny size="1.8em" />:<BiMoon size="1.8em" />}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
