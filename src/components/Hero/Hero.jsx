// import React from 'react'
import "./Hero.css";
import { GoArrowRight } from "react-icons/go";

export const Hero = () => {
	return (
		<div className="hero container">
			<div className="hero-text">
				<h1>We ensure the better cement delivery In Ghana</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
					illo ipsa, ea fugiat consequuntur maiores temporibus aliquid dolores
					minima porro.
				</p>
				<button className="btn">
					Learn More <GoArrowRight className="for" />{" "}
				</button>
			</div>
		</div>
	);
};
