import React from 'react';

const DisplayPicStyle = {
    display: 'block',
    margin: 'auto',
    height: '30vh',
    width: '15%',
    backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/4c1f1384533141.5d5fa79310f29.gif)',
    backgroundSize: 'contain',
    border: '10px solid pink',
    borderRadius: '50%'
};

const nameStyle = {
    margin: '0',
    marginTop: '2%',
    padding: '0',
    width: '100%',
    color: '#F80FC3',
    textAlign: 'center',
    fontFamily: 'Dancing Script'
}

function mailto() {
    window.location.href = 'mailto:sushildikondwar@gmail.com';
}

var i = 0;
function hovertool(e) {
    if (i == 0) {
        let targetname = e.target.parentNode.nextSibling;
        console.log(targetname.id.split(''));
        targetname.id.split('').forEach(letter => {
            setTimeout(() => {
                targetname.innerHTML = targetname.innerHTML + letter;
            }, 10 * i);
            i++;
        });
    }
}

function hoverout(e) {
    let targetname = e.target.parentNode.nextSibling;
    setTimeout(() => {
        targetname.innerHTML = '';
    }, 10);
    i = 0;
    setTimeout(() => {
        targetname.innerHTML = '';
    }, 100);
}

export default function AboutMe() {
    const name = 'sushil';
    return (
        <>
            <div style={DisplayPicStyle} />
            <div style={nameStyle}>
                <h2>Sushil Dikondwar</h2>
            </div>
            <div style={{ marginTop: '-15%', marginLeft: '5px' }}>
                <div style={{ marginTop: '2%' }}><a href="https://github.com/sushildikondwar" target="_blank"><img id='Github' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" style={{ height: '6vh', zIndex: '100', cursor: 'pointer' }} onMouseOver={hovertool} onMouseOut={hoverout} /></a><p id="github.com/sushildikondwar/"></p></div>
                <div style={{ marginTop: '2%' }}><a href="https://www.linkedin.com/in/sushildikondwar" target="_blank"><img id='LinkedIn' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Github" style={{ height: '6vh', zIndex: '100', cursor: 'pointer' }} onMouseOver={hovertool} onMouseOut={hoverout} /></a><p id="linkedin.com/in/sushildikondwar/"></p></div>
                <div style={{ marginTop: '2%' }}><a href="https://www.instagram.com/sushildikondwar99/" target="_blank"><img id='Instagram' src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="Github" style={{ height: '6vh', zIndex: '100', cursor: 'pointer' }} onMouseOver={hovertool} onMouseOut={hoverout} /></a><p id="instagram.com/sushildikondwar99/"></p></div>
                <div style={{ marginTop: '2%' }}><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sushildikondwar@gmail.com" target="_blank"><img id='Email' src="https://image.flaticon.com/icons/png/512/2150/2150313.png" alt="Github" style={{ height: '6vh', zIndex: '100', cursor: 'pointer' }} onMouseOver={hovertool} onMouseOut={hoverout} /></a><p id="mail.google.com/mail/sushildikondwar@gmail.com/"></p></div>
            </div>
        </>
    )
}
