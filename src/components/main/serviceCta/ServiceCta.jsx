import React from 'react';

const ServiceCta = ({sectionData, icon: IconComponent, image, color}) => {
    // console.log(sectionData)
    const { title, preTitle, description, items } = sectionData;
    return (
        <section className="cta-section">
            <div className="img-wrap">
                <img src="https://connecteam.com/static/frontend-home-task/jpg/dolore-ipsum-small.jpg" alt=""/>
            </div>
            <div className="container">
                <div className="icon-wrap">
                {
                        IconComponent ? (
                            <IconComponent height={72} width={72} fill={color}/>
                        ) : null
                    }
                </div>
                <div className="pre-title">
                    <small>
                        {preTitle}
                    </small>
                </div>
                <h2 className="section-title">
                    {title}
                </h2>
                <div className="lead">
                    <p dangerouslySetInnerHTML={{__html: description}}/>
                </div>
                <div className="links">
                    {
                        items.length > 0 && (
                            items.map((item, index) => (
                                <a href="#" className="btn btn-cta" key={index}>
                                    {item?.title}
                                </a>
                            ))
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceCta;