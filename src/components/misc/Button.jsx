import React from 'react';

const Button = ({url, style, text = 'arrow-right', iconPosition, children}) => {
    const iconStyle = iconPosition === 'before' ? 'icon-start' : 'icon-end';
    return (
        <a href={url} className={style ? `btn btn-primary ${iconStyle}` : `btn btn-default ${iconStyle}` }>
            <span>{text}</span>
            {children}
        </a>
    );
};

export default Button;