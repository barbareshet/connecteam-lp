import React from 'react';
import IconArrowRight from "../../svg/IconArrowRight";

const ColForm = ({ content }) => {
    return (
        <div className="col col-form">
            <div className="lead" dangerouslySetInnerHTML={{ __html: content?.title }} />
            <form>
                {
                    content?.fields.length > 0 && (
                        content.fields.map((field, index) => {
                            const colClass = field.size === "half" ? 'col-md-6' : 'col-md-12';

                            return (
                                <div key={index} className={`form-group ${colClass}`}>
                                    {field.type === "text" && (
                                        <>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id={field.name}
                                            />
                                            <label htmlFor={field.name} className="form-label">{field.name}</label>
                                        </>
                                    )}

                                    {field.type === "options" && field.layout === "select" && (
                                        <>
                                            <label htmlFor={field.name} className="form-label label-select">{field.name}</label>
                                            <select className="form-control" id={field.name}>
                                                {field.options.map((option, idx) => (
                                                    <option key={idx} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </>
                                    )}

                                    {field.type === "options" && field.layout === "buttons" && (
                                        <>
                                            <label className="form-label form-label-block">{field.name}</label>
                                            <div className="form-check-container">
                                                {field.options.map((option, idx) => (
                                                    <div className="form-check form-check-inline" key={idx}>
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name={field.name}
                                                            id={`${field.name}-${option.value}`}
                                                            value={option.value}
                                                        />
                                                        <label className="form-check-label" htmlFor={`${field.name}-${option.value}`}>
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    {field.type === "textarea" && (
                                        <>
                                            <textarea
                                                className="form-control"
                                                id={field.name}
                                                rows="3"
                                            ></textarea>
                                            <label htmlFor={field.name} className="form-label">{field.name}</label>
                                        </>
                                    )}
                                </div>
                            );
                        })
                    )
                }
                <div className="form-group submit-wrap">
                    <button type="submit" className="btn btn-primary">
                        <span>
                            {content?.submitLabel}
                        </span>
                        <IconArrowRight width={32} height={16} fill="#ffffff"/>
                    </button>

                </div>
            </form>
        </div>
    );
};

export default ColForm;
