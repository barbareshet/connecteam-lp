import React from 'react';
import { formatNameAsURL } from "../../../utils/formatNameAsURL";

// Import your SVG components
import IconPraesentiumAspernatur from "../../svg/IconPraesentiumAspernatur";
import IconRepudiandae from "../../svg/IconRepudiandae";
import Icondoloreipsum from "../../svg/Icondoloreipsum";
import IconSitAtEnim from "../../svg/IconSitAtEnim";

const ServiceNav = ({ content }) => {
    const { items } = content;

    // Array of icons and their details
    const svgIcons = [
        { 'name': "repudiandae", "icon": IconRepudiandae, "color": "#7A00DA" },
        { 'name': "sit-at-enim", "icon": IconSitAtEnim, "color": "#00CDDA" },
        { 'name': "dolore-ipsum", "icon": Icondoloreipsum, "color": "#0098DA" },
        { 'name': "praesentium-aspernatur", "icon": IconPraesentiumAspernatur, "color": "#DA0069" },
    ];

    // Helper function to find the matching icon details based on item name
    const findIconDetails = (formattedName) => {
        return svgIcons.find(icon => icon.name === formattedName);
    };

    return (
        <nav className="services-navigation">
            <div className="container">
                {items?.length > 0 && (
                    items?.map((item, index) => {
                        const formattedName = formatNameAsURL(item.name);
                        const iconDetails = findIconDetails(formattedName); // Find the corresponding SVG component and color

                        if (!iconDetails) return null; // If no matching icon is found, skip rendering

                        const IconComponent = iconDetails.icon; // The corresponding SVG component
                        const iconColor = iconDetails.color; // The corresponding color

                        return (
                            <a href={`#${formattedName}`} key={index} className={formattedName} style={{ color: iconColor }}>
                                <IconComponent height={15} width={15} fill={iconColor} /> {/* Render the dynamic icon */}
                                {item.name}
                            </a>
                        );
                    })
                )}
            </div>
        </nav>
    );
};

export default ServiceNav;
