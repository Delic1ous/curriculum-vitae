import * as React from "react";

// width={width || size}
// height={height || size}
// style={style}

export const LinkedInIcon = (props) => {
  const { height, width, size, style } = props;
  return (
    <svg
      version="1.1"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/1999/xlink"
      style={{
        fill: "white",
        width: 25,
        height: 25,
        // transform: "scale(1.4)",
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.41421,
      }}
    >
      <g>
        <path d="M499.1,990C229.5,990,10,770.5,10,499.1C10,229.5,229.5,10,499.1,10C770.5,10,990,229.5,990,499.1C990,770.5,770.5,990,499.1,990 M362.6,398.9h-95.1v305.9h95.1V398.9z M371.2,307.3c0-29.4-22.5-53.6-57-53.6c-34.6,0-58.8,22.5-58.8,53.6c0,29.4,22.5,53.6,57,53.6l0,0C348.8,360.9,371.2,338.4,371.2,307.3z M744.6,535.4c0-95.1-53.6-138.3-121-138.3c-55.3,0-88.1,29.4-95.1,50.1v-48.4H421.4c1.7,25.9,0,305.9,0,305.9h107.2V538.9c0-8.6,0-19,1.7-24.2c6.9-19,22.5-38,51.9-38c38,0,53.6,27.7,53.6,69.1v159h108.9V535.4z" />
      </g>
    </svg>
  );
};
