import React from 'react';

const ColForm = ({content}) => {


    return (
        <div className="col col-form">
            <div className="lead">
                <p dangerouslySetInnerHTML={{__html:content.title}}/>
            </div>
            <form>
                <input type="submit" value={content.submitLabel} className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default ColForm;