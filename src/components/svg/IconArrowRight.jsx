import React from 'react';

function IconArrowRight({width = 72, height = 66, fill = "black"}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            xmlns="http://www.w3.org/2000/svg"
            style={{fill}} // Alternatively, pass the fill color via style
        >
            <path
                d="M8.73864 14.5518L7.20242 13.0305L11.8036 8.42933H0.625V6.20703H11.8036L7.20242 1.61328L8.73864 0.0845167L15.9723 7.31818L8.73864 14.5518Z"
                fill={fill}/>
        </svg>
    );
}

export default IconArrowRight;