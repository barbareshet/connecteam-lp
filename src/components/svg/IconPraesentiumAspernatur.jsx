import React from 'react';

function IconPraesentiumAspernatur({width = 72, height = 66, fill = "black"}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 72 66"
            xmlns="http://www.w3.org/2000/svg"
            style={{fill}} // Alternatively, pass the fill color via style
        >
            <path
                d="M64.8 7.19982H36L28.8 -0.000183105H7.2C3.24 -0.000183105 0 3.23982 0 7.19982V50.3996C0 54.3596 3.24 57.5996 7.2 57.5996H64.8C68.76 57.5996 72 54.3596 72 50.3996V14.3998C72 10.4398 68.76 7.19982 64.8 7.19982ZM57.384 46.7998L46.8 40.6078L36.216 46.7998L39.024 34.8118L29.7 26.7478L41.976 25.7038L46.8 14.3998L51.624 25.7038L63.9 26.7478L54.576 34.8118L57.384 46.7998Z"
                fill={fill}/>
        </svg>

    );
}

export default IconPraesentiumAspernatur;