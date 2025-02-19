import React from 'react';

function IconPerson({width = 72, height = 66, fill = "black"}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            xmlns="http://www.w3.org/2000/svg"
            style={{fill}} // Alternatively, pass the fill color via style
        >
            <path
                d="M34.1048 38.3207L22.7365 49.4616L34.1048 60.8298H0V53.251C0 43.1712 20.1976 38.0934 30.3154 38.0934C31.528 38.0934 32.627 38.1692 34.1048 38.3207Z"
                fill={fill}/>
            <path
                d="M45.4733 15.3568C45.4733 23.7314 38.69 30.5145 30.3154 30.5145C21.9408 30.5145 15.1577 23.7314 15.1577 15.3568C15.1577 6.98216 21.9408 0.199097 30.3154 0.199097C38.69 0.199097 45.4733 6.98216 45.4733 15.3568Z"
                fill={fill}/>
            <path
                d="M34.1055 49.4612L47.2548 62.7243L72 37.7521L66.6946 32.409L47.2548 52.0005L39.4107 44.1183L34.1055 49.4612Z"
                fill={fill}/>
        </svg>
    );
}

export default IconPerson;