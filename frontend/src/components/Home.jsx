import React from 'react';
import { ReactTyped } from 'react-typed'; // Importing ReactTyped for the typing effect
import pic from '../../public/pic.png'; // Ensure this path is correct for your image

function Home() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4"> {/* Added padding and alignment */}
            {/* Text Section */}
            <div className="mr-4 order-2 md:order-1 md:w-1/2">
                <h1 className="font-medium mt-2 text-xl md:text-3xl">
                    <span className="text-pink-700 font-bold text-2xl md:text-7xl">Welcome!</span> to my website
                </h1>
                <h2 className="font-semibold text-2xl">Learn..</h2>
                <ReactTyped
                    className="text-pink-700 font-bold text-xl md:text-2xl" // Responsive text size
                    strings={["coding", "developing", "scripting"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                />
            </div>

            {/* Image Section */}
            <div className="order-1 md:order-2 md:w-1/2">
                <img 
                    src={pic} 
                    className="w-full h-auto max-w-[500px] mx-auto md:mx-0" // Responsive image styling
                    alt="Description of the image"
                />
            </div>
        </div>
    );
}

export default Home;
