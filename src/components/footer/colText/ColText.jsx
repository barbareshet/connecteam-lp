import React from 'react';
import IconArrowRight from "../../svg/IconArrowRight";

const ColText = ({content}) => {

    return (
        <div className="col col-text">
            <h2 className="footer-title">
                {content?.title}
            </h2>
            <div className="lead" dangerouslySetInnerHTML={{__html:content?.text}}/>
            <div className="footer-link-wrap">
                <a href={content?.link?.href}>
                    {content?.link?.label}
                    <IconArrowRight fill="#ED8E00" width={32} height={16}/>
                </a>
            </div>
        </div>
    );
};

export default ColText;