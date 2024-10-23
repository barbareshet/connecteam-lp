import React from 'react';
import Button from "../../misc/Button";
const bgUrl = "https://connecteam.com/static/frontend-home-task/jpg/home-small.jpg";
const Hero = ({content}) => {
    const {hero} = content

    return (
        <div className="hero" style={{ backgroundImage: `url(${bgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            <div className="container">
                <div className="hero-content">
                    <h1 className="page-title">
                        {hero?.title}
                    </h1>
                    <div className="lead">
                        <p dangerouslySetInnerHTML={{ __html: hero?.subtitle }} />
                    </div>
                    {
                        hero?.links.length > 0 && (
                            <div className="links">
                                {
                                    hero?.links.map((link, i) => (
                                        <Button key={i} text={link.label} style={link.primary} url={link.href} icon={link.icon} iconPosition={`${link.primary ? 'after' : 'before'}`} />
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Hero;