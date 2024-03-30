import {useState} from 'react'

// import banner1 from "../assets/banner1.jpg";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
// import Button    from './Button';
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import Navbar from '../Navbar';

const images = [
	{
		id: 1,
		src: banner1,
	},
	{
		id: 2,
		src: banner2,
	},
	{
		id: 3,
		src: banner3,
	},
];

export default function Banner () {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

	function handlebackward() {
		setCurrentImageIndex((prevIndex) => {
			if (prevIndex === 0) {
				return images.length - 1;
			} else {
				return prevIndex - 1;
			}
		});
	}

	function handleforward() {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	}
	return (
		<div className="banner-container">
			<div className="arrow-left absolute left-0">
				<TfiAngleLeft onClick={handlebackward} size={50}/>
            </div>
            <Navbar />
			<img
				src={images[currentImageIndex].src}
				alt="banner_images"
				className="banner-image"
			/>
			<div className="arrow-right absolute right-0 top-1/3">
				<TfiAngleRight onClick={handleforward} size={50} />
            </div>
            {/* <Button>Click me</Button> */}
		</div>
	);
}
