import React from 'react';
import c from '../../public/c.jpg';
import python from '../../public/python.png';
import js from '../../public/js.jpg';
import images from '../../public/images.png';

function Course() {
  return (
    <>
      <div>
        <h1 className='text-center text-lg md:text-4xl mt-2'>
          <span className='text-pink-700'>eat</span>(), 
          <span className='text-pink-700'>sleep</span>(), 
          <span className='text-pink-700'>code</span>(), 
          <span className='text-pink-700'>repeat</span>();
        </h1>
        <div className="course">
          <ul className="flex flex-col md:flex-row gap-4 justify-center mt-4">
            <li>
              <img
                src={c}
                alt="C programming"
                className="w-20 h-20 md:w-24 md:h-24 border border-gray-300 rounded-lg hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
              />
            </li>
            <li>
              <img
                src={python}
                alt="Python programming"
                className="w-20 h-20 md:w-50 md:h-50 border border-gray-300 rounded-lg hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
              />
            </li>
            <li>
              <img
                src={images}
                alt="Course images"
                className="w-20 h-20 md:w-50 md:h-50 border border-gray-300 rounded-lg hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
              />
            </li>
            <li>
              <img
                src={js}
                alt="JavaScript programming"
                className="w-20 h-20 md:w-50 md:h-50 border border-gray-300 rounded-lg hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Course;
