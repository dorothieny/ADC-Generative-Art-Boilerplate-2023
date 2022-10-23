import React from 'react'

const SC_Button = (props) => {
    const { text, handleClick } = props;
    return (
      <div className="SC_Button" onClick={handleClick}>
        <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_57_91)">
            <path d="M21.8761 19.405L13.5172 24.3204C11.8507 25.3004 9.75 24.0987 9.75 22.1653L9.75 12.3347C9.75 10.4013 11.8507 9.19961 13.5172 10.1796L21.8761 15.095C23.5198 16.0615 23.5198 18.4385 21.8761 19.405Z" stroke="url(#paint0_linear_57_91)" strokeWidth="3" shapeRendering="crispEdges"/>
          </g>
            <defs>
            <filter id="filter0_d_57_91" x="0.25" y="0.328613" width="32.3589" height="33.8428" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.219608 0 0 0 0 0.984314 0 0 0 0 0.858824 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_57_91"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_57_91" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_57_91" x1="8.75" y1="5.5" x2="19.4102" y2="24.4412" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DBFFF9"/>
            <stop offset="1" stopColor="#09AC91"/>
            </linearGradient>
            </defs>
        </svg>

      </div>
    ) 
}
export default SC_Button;