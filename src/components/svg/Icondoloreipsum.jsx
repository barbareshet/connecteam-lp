import React from 'react';

function Icondoloreipsum({width = 72, height = 66, fill = "black"}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 72 66"
            xmlns="http://www.w3.org/2000/svg"
            style={{fill}} // Alternatively, pass the fill color via style
        >
            <path
                d="M72 0.599487L65.988 6.61149L60.012 0.599487L54 6.61149L47.988 0.599487L42.012 6.61149L36 0.599487L29.988 6.61149L24.012 0.599487L18 6.61149L11.988 0.599487L6.012 6.61149L0 0.599487V58.1995C0 62.1595 3.24 65.3995 7.2 65.3995H64.8C68.76 65.3995 72 62.1595 72 58.1995V0.599487ZM32.4 58.1995H7.2V36.5995H32.4V58.1995ZM64.8 58.1995H39.6V50.9995H64.8V58.1995ZM64.8 43.7995H39.6V36.5995H64.8V43.7995ZM64.8 29.3995H7.2V18.5995H64.8V29.3995Z"
                fill={fill}/>
        </svg>
    );
}

export default Icondoloreipsum;