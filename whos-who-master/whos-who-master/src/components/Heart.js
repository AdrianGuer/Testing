import React from "react";

const Heart = ({ width, height, fill }) => {
	return (
		<svg
			width={width || "25px"}
			height={height || "25px"}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke="#000000"
			strokeWidth="1">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 6.6587C11.1735 5.64559 9.91012 5 8.5 5C6.02376 5 4 6.99079 4 9.46667C4 11.7183 5.26747 13.807 6.72743 15.5111C8.20812 17.2395 10.0243 18.7293 11.3857 19.7891C11.747 20.0703 12.253 20.0703 12.6143 19.7891C13.9757 18.7293 15.7919 17.2395 17.2726 15.5111C18.7325 13.807 20 11.7183 20 9.46667C20 6.99079 17.9762 5 15.5 5C14.0899 5 12.8265 5.64559 12 6.6587Z"
				fill={fill}></path>
		</svg>
	);
};

export default Heart;
