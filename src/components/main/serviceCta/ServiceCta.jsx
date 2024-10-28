import React from 'react';
import IconArrowRight from "../../svg/IconArrowRight";
import Button from "../../misc/Button";
import IconCom from "../../svg/IconCom";
import IconPerson from "../../svg/IconPerson";
import {formatNameAsURL} from "../../../utils/formatNameAsURL";

const ServiceCta = ({sectionData, icon: IconComponent, image, color}) => {
    // console.log(sectionData)
    const { title, preTitle, description, items } = sectionData;
    const formattedName = formatNameAsURL(title);
    return (
        <section className="cta-section" id={formattedName}>
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
                <hr className="divider"/>
                <div className="links">
                    {
                        items.length > 0 && (
                            items.map((item, index) => (
                                <Button key={index} text={item.title} style="btn-cta" url="#"
                                        iconPosition={`${ index > 0 ? 'before' : 'after'}`}>
                                            <span>
                                                {
                                                    index > 0 ? (
                                                        item.icon === "icon-6.svg" ? (
                                                            <IconCom width={72} fill="#ffffff" height={76}/>
                                                        ) : (
                                                            <IconPerson width={72} height={63} fill="#ffffff"/>
                                                        )
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