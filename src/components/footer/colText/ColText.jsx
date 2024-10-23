import React from 'react';

const ColText = ({content}) => {

    return (
        <div className="col col-text">
            <h2 className="footer-title">
                {content?.title}
            </h2>
            <div className="lead">
                <p dangerouslySetInnerHTML={{__html:content?.text}}/>
            </div>
            <div className="footer-link-wrap">
                <a href={content?.link?.href}>
                    {content?.link?.label}
                </a>
            </div>
        </div>
    );
};

export default ColText;