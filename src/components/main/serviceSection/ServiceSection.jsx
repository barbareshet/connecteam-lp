import React from 'react';
import {formatNameAsURL} from "../../../utils/formatNameAsURL";

const ServiceSection = ({ sectionData, icon: IconComponent, image, color }) => {
    if (!sectionData) {
        return null; // Don't render the section if data is not provided
    }

    const { title, description, label } = sectionData;
    const formattedName = formatNameAsURL(title);
    return (
        <section className="service-section" id={formattedName}>
            <div className="container">
                <div className="col col-text">
                    <div className="title-group">
                        <div className="icon-wrap">
                            {
                                IconComponent ? (
                                    <IconComponent height={36} width={36} fill={color}/>
                                ) : null
                            }
                        </div>
                        <div className="title-wrap">
                            <small>{label}</small>
                            <h2 className="section-title" style={{color: color}}>

                                {title}
                            </h2>
                        </div>
                    </div>
                    <div className="lead" dangerouslySetInnerHTML={{__html: description}}/>
                </div>
                <div className="col col-image">
                    <div className="col col-image">
                        {/* Render the image if provided */}
                        {image ? (
                            <img src={image} alt={title} style={{width: '100%', height: 'auto'}}/>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
