import React from 'react';

export default function BrandLogo(): React.JSX.Element {
    return (
        <svg
            viewBox="0 0 100 40"
            className="h-8 w-auto brand-logo"
            fill="currentColor"
            aria-label="xRtm Logo"
        >
            <text x="0" y="30" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="28">
                x
            </text>
            <text
                id="brand-r"
                x="38"
                y="30"
                fontFamily="Inter, sans-serif"
                fontWeight="900"
                fontSize="28"
                style={{ transformOrigin: '38px 15px' }}
            >
                R
            </text>
            <text x="55" y="30" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="28">
                tm
            </text>
        </svg>
    );
}
