import React from 'react';

const ServiceSection = ({ sectionData, icon: IconComponent, image, color }) => {
    if (!sectionData) {
        return null; // Don't render the section if data is not provided
    }

    const { title, description } = sectionData;

    return (
        <section className="service-section">
            <div className="container">
                <div className="col col-text">
                    <h2 className="section-title" style={{color: color}}>
                        {
                            IconComponent ? (
                                <IconComponent height={36} width={36} fill={color}/>
                            ) : null
                        }
                        {title}
                    </h2>
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
