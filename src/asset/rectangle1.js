function Rectangle1() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="272"
            height="128"
            fill="none"
            viewBox="0 0 272 128"
        >
            <g filter="url(#filter0_d_66_53)">
                <rect
                    width="230"
                    height="86"
                    x="21"
                    y="13"
                    fill="#FAFAFC"
                    rx="5"
                ></rect>
            </g>
            <defs>
                <filter
                    id="filter0_d_66_53"
                    width="272"
                    height="128"
                    x="0"
                    y="0"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feMorphology
                        in="SourceAlpha"
                        radius="5"
                        result="effect1_dropShadow_66_53"
                    ></feMorphology>
                    <feOffset dy="8"></feOffset>
                    <feGaussianBlur stdDeviation="13"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.207843 0 0 0 0 0.407843 0 0 0 0 0.831373 0 0 0 0.08 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_66_53"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_66_53"
                        result="shape"
                    ></feBlend>
                </filter>
            </defs>
        </svg>
    );
}

export default Rectangle1;