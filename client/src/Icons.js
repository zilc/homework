import React from "react";
import PropTypes from "prop-types";

const SearchIcon = ({ color, size, strokeWidth }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 92 92"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.8 39.27c0-11.016 8.808-19.976 19.637-19.976 10.827 0 19.635 8.96 
      19.635 19.972 0 11.014-8.808 19.976-19.635 19.976-10.83 0-19.64-8.96-19.64-19.976zm55.472 
      32.037l-15.976-16.25c3.357-4.363 5.376-9.835 5.376-15.788 0-14.16-11.32-25.67-25.232-25.67-13.923
      0-25.24 11.51-25.24 25.67s11.32 25.67 25.237 25.67c4.776 0 9.227-1.388 13.04-3.74L69.84 77.85c1.77
      1.8 4.664 1.8 6.432 0 1.77-1.8 1.77-4.744 0-6.544z"
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

SearchIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  strokeWidth: PropTypes.number
};

const MovieIcon = ({ className, color, size, strokeWidth }) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    enableBackground="new 0 0 512 512"
    xml-space="preserve"
    fill={color}
    stroke={color}
    strokeWidth={strokeWidth}
    className={className}
  >
    <path
      d="M352,255.5l-192,96v-192L352,255.5z M512,31.5v448H0v-448H512z M320,95.5h64v-32h-64V95.5z M224,95.5h64v-32h-64V95.5z
	 M128,95.5h64v-32h-64V95.5z M32,95.5h64v-32H32V95.5z M96,415.5H32v32h64V415.5z M192,415.5h-64v32h64V415.5z M288,415.5h-64v32h64
	V415.5z M384,415.5h-64v32h64V415.5z M480,415.5h-64v32h64V415.5z M480,127.5H32v256h448V127.5z M480,63.5h-64v32h64V63.5z"
    />
  </svg>
);

MovieIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  className: PropTypes.string
};

export { SearchIcon, MovieIcon };
