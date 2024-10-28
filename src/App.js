import React, {useEffect, useRef, useState} from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/header/navigation/Navbar";
import Hero from "./components/header/hero/Hero";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import ServiceNav from "./components/main/serviceNav/ServiceNav";
import ServiceSection from "./components/main/serviceSection/ServiceSection";
import ServiceCta from "./components/main/serviceCta/ServiceCta";

import IconRepudiandae from "./components/svg/IconRepudiandae";
import Icondoloreipsum from "./components/svg/Icondoloreipsum";
import IconPraesentiumAspernatur from "./components/svg/IconPraesentiumAspernatur";
import IconSitAtEnim from "./components/svg/IconSitAtEnim";
import Footer from "./components/footer/Footer";
import ColText from "./components/footer/colText/ColText";
import ColForm from "./components/footer/colForm/ColForm";
const bgUrl = "https://connecteam.com/static/frontend-home-task/jpg/home-small.jpg";
function App() {
    const [content, setContent] = useState({});
    const [mainData, setMainData] = useState({});
    const [footerData, setFooterData] = useState({});
    const [isServiceNavFixed, setServiceNavFixed] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("down");
    const lastScrollTop = useRef(0);
    const serviceNavRef = useRef(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    homeResponse,
                    doloreIpsumResponse,
                    praesentiumAspernaturResponse,
                    repudiandaeResponse,
                    sitAtEnimResponse,
                    footerResponse
                ] = await Promise.all([
                    fetch("/assets/data/home.json"),
                    fetch("/assets/data/dolore-ipsum.json"),
                    fetch("/assets/data/praesentium-aspernatur.json"),
                    fetch("/assets/data/repudiandae.json"),
                    fetch("/assets/data/sit-at-enim.json"),
                    fetch("/assets/data/footer.json"),
                ]);

                // Check if any of the responses are not okay
                if (!homeResponse.ok || !doloreIpsumResponse.ok || !praesentiumAspernaturResponse.ok ||
                    !repudiandaeResponse.ok || !sitAtEnimResponse.ok || !footerResponse.ok) {
                    throw new Error("Failed to fetch one or more resources");
                }

                // Parse all the responses
                const homeData = await homeResponse.json();
                const doloreIpsumData = await doloreIpsumResponse.json();
                const praesentiumAspernaturData = await praesentiumAspernaturResponse.json();
                const repudiandaeData = await repudiandaeResponse.json();
                const sitAtEnimData = await sitAtEnimResponse.json();
                const footerData = await footerResponse.json();

                // Set the fetched data to state
                setContent(homeData?.content);
                setMainData([
                    {name:"doloreIpsum", content: doloreIpsumData, color: "#0098DA", icon: Icondoloreipsum, image: "https://connecteam.com/static/frontend-home-task/jpg/dolore-ipsum-small.jpg"},
                    {name:"praesentiumAspernatur", content: praesentiumAspernaturData, color: "#DA0069", icon: IconPraesentiumAspernatur, image: "https://connecteam.com/static/frontend-home-task/jpg/praesentium-aspernatur-small.jpg"},
                    {name:"repudiandae", content: repudiandaeData, color: "#7A00DA", icon: IconRepudiandae, image: "https://connecteam.com/static/frontend-home-task/jpg/repudiandae-small.jpg"},
                    {name:"sitAtEnim", content: sitAtEnimData, color: "#00CDDA", icon: IconSitAtEnim, image: "https://connecteam.com/static/frontend-home-task/jpg/sit-et-enim-small.jpg"},
                ]);
                setFooterData(footerData);
            } catch (error) {
                console.error("Error fetching the data:", error);
            }
        };

        fetchData();

        // Handle scroll to toggle fixed positioning
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;

            if (serviceNavRef.current) {
                const offsetTop = serviceNavRef.current.getBoundingClientRect().top + window.scrollY;

                if (currentScrollTop > lastScrollTop.current) {
                    // Scrolling down
                    setScrollDirection("down");
                    if (currentScrollTop >= offsetTop - 80) {
                        setServiceNavFixed(true);
                    }
                } else {
                    // Scrolling up
                    setScrollDirection("up");
                    setServiceNavFixed(false);
                }

                lastScrollTop.current = currentScrollTop;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // console.log(mainData)
  return (
    <div className="App">
        <Header>
            <Navbar logo={logo}/>
            <Hero content={content}/>
        </Header>
        <Main>
            <div ref={serviceNavRef} className={`service-nav-wrapper ${isServiceNavFixed ? 'fixed' : ''}`}>
                <ServiceNav content={content}/>
            </div>

            {/* Repudiandae Section */}
            {mainData.length > 0 && (
                <ServiceSection
                    sectionData={mainData.find(data => data.name === "repudiandae").content}
                    icon={mainData.find(data => data.name === "repudiandae").icon}
                    image={mainData.find(data => data.name === "repudiandae").image}
                    color={mainData.find(data => data.name === "repudiandae").color}
                />
            )}

            {/* Sit At Enim Section */}
            {mainData.length > 0 && (
                <ServiceSection
                    sectionData={mainData.find(data => data.name === "sitAtEnim").content}
                    icon={mainData.find(data => data.name === "sitAtEnim").icon}
                    image={mainData.find(data => data.name === "sitAtEnim").image}
                    color={mainData.find(data => data.name === "sitAtEnim").color}
                />
            )}

            {/* Dolore Ipsum Section */}
            {mainData.length > 0 && (
                <ServiceCta
                    sectionData={mainData.find(data => data.name === "doloreIpsum").content}
                    icon={mainData.find(data => data.name === "doloreIpsum").icon}
                    image={mainData.find(data => data.name === "doloreIpsum").image}
                    color="#ffffff"
                />
            )}

            {/* Praesentium Aspernatur Section */}
            {mainData.length > 0 && (
                <ServiceSection
                    sectionData={mainData.find(data => data.name === "praesentiumAspernatur").content}
                    icon={mainData.find(data => data.name === "praesentiumAspernatur").icon}
                    image={mainData.find(data => data.name === "praesentiumAspernatur").image}
                    color={mainData.find(data => data.name === "praesentiumAspernatur").color}
                />
            )}
        </Main>
        <Footer>
            <ColText content={footerData?.intro}/>
            {/*<ColForm content={footerData?.form}/>*/}
        </Footer>
    </div>
  );
}

export default App;
