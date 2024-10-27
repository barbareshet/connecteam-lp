import React from 'react';
import IconArrowRight from "../../svg/IconArrowRight";
import IconWheel from "../../svg/IconWheel";
import Button from "../../misc/Button";

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
                                <Button key={index} text={item.label} style="btn-cta" url="#"
                                        iconPosition={`${ index > 0 ? 'after' : 'before'}`}>
                                            <span>
                                                {
                                                    index > 0 ? (
                                                        <IconArrowRight width={32} height={16} fill="#ffffff"/>
                                                    ) : (
                                                        <IconArrowRight width={32} height={16} fill="#ffffff"/>
                                                    )
                                                }
                                            </span>
                                </Button>
                            ))
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceCta;