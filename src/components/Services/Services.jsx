import React from "react";
import prize1 from '../../assets/prize1.jpeg'
import { GoTrophy } from "react-icons/go";
import './Services.css'

export default function Services() {
	return (
		<div className="programs">
			<div className="program">
				<img src={prize1} alt="" />
				<div className="caption">
					<GoTrophy className='award' size={150}/>
					<p>Award For the Best distributor</p>
				</div>
			</div>
			<div className="program">
				<img src={prize1} alt="" />
				<div className="caption">
					<GoTrophy className='award' size={150}/>
					<p>Award For the Best distributor</p>
				</div>
			</div>
			<div className="program">
				<img src={prize1} alt="" />
				<div className="caption">
					<GoTrophy className='award' size={150}/>
					<p>Award For the Best distributor</p>
				</div>
			</div>
		</div>
	);
}
