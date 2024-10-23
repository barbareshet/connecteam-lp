import React from 'react';
const svgFolder = "/assets/svg/";
const Button = ({url, style, text, icon = 'arrow-right', iconPosition}) => {
    const iconStyle = iconPosition === 'before' ? 'icon-start' : 'icon-end';
    return (
        <a href={url} className={style ? `btn btn-primary ${iconStyle}` : `btn btn-default ${iconStyle}` }>
            <span>{text}</span>
            <span>
                <img src={`${svgFolder}${icon}.svg`} alt=""/>
            </span>
        </a>
    );
};

export default Button;