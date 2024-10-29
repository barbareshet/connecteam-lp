import React from 'react';
import Button from "../../misc/Button";
import chevronDon from "../../../assets/svg/arrow-scroll.svg"
import IconArrowRight from "../../svg/IconArrowRight";
import IconWheel from "../../svg/IconWheel";
const bgUrl = "https://connecteam.com/static/frontend-home-task/jpg/home-small.jpg";
const Hero = ({content}) => {
    const {hero} = content
    const hero_scroll_down = (event) => {
        const parentElement = event.currentTarget.parentElement;
        window.scrollTo({
            top: parentElement.offsetTop - 50,
            behavior: "smooth"
        });
    };
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

                <div className="scroll-wrap">
                    <a href="#"
                       className="scroll-down"
                       onClick={(e) => {
                           e.preventDefault();
                           hero_scroll_down(e)
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