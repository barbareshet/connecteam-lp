import React from 'react';
import Button from "../../misc/Button";
import chevronDon from "../../../assets/svg/arrow-scroll.svg"
import IconArrowRight from "../../svg/IconArrowRight";
import IconWheel from "../../svg/IconWheel";
const bgUrl = "https://connecteam.com/static/frontend-home-task/jpg/home-small.jpg";
const Hero = ({content, mainRef}) => {
    const {hero} = content

    return (
        <div className="hero" style={{
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
            <div className="container">
                <div className="hero-content">
                    <h1 className="page-title">
                        {hero?.title}
                    </h1>
                    <div className="lead">
                        <p dangerouslySetInnerHTML={{__html: hero?.subtitle}}/>
                    </div>
                    {
                        hero?.links.length > 0 && (
                            <div className="links">
                                {
                                    hero?.links.map((link, i) => (
                                        <Button key={i} text={link.label} style={link.primary} url={link.href}
                                                iconPosition={`${link.primary ? 'after' : 'before'}`}>
                                            <span>
                                                {
                                                    link.primary ? (
                                                        <IconArrowRight width={32} height={16} fill="#ffffff"/>
                                                    ) : (
                                                        <IconWheel width={36} height={24} fill="#ED8E00"/>
                                                    )
                                                }
                                            </span>
                                        </Button>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
                {
                    console.log(mainRef.current)
                }
                <div className="scroll-wrap">
                    <a href="#"
                       className="scroll-down"
                       onClick={(e) => {
                           e.preventDefault();
                           mainRef.current?.scrollIntoView({behavior: 'smooth'});
                       }}
                    >
                        <img src={chevronDon} alt=""/>
                        <img src={chevronDon} alt=""/>
                        <img src={chevronDon} alt=""/>
                    </a>
                </div>
            </div>
            <div className="hero-mobile-overlay"></div>
        </div>
    );
};

export default Hero;