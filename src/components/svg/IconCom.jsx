import React from 'react';

function IconCom({width = 72, height = 66, fill = "black"}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            xmlns="http://www.w3.org/2000/svg"
            style={{fill}} // Alternatively, pass the fill color via style
        >
            <path
                d="M0 13.2945V0.199341C39.7481 0.199341 72 32.4513 72 72.1991H58.9049C58.9049 39.6698 32.5295 13.2945 0 13.2945Z"
                fill={fill}/>
            <path
                d="M0 39.4847V26.3896C25.3111 26.3896 45.8098 46.8883 45.8098 72.1991H32.7146C32.7146 54.1531 18.0463 39.4847 0 39.4847Z"
                fill={fill}/>
            <path
                d="M20.1748 62.1117C20.1748 67.6827 15.6585 72.1989 10.0874 72.1989C4.51628 72.1989 0 67.6827 0 62.1117C0 56.5403 4.51628 52.0241 10.0874 52.0241C15.6585 52.0241 20.1748 56.5403 20.1748 62.1117Z"
                fill={fill}/>
        </svg>
    );
}

export default IconCom;