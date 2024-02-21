import React, { useState } from 'react';
import { IoDocumentText } from "react-icons/io5";

// Resume component
const Resume = () => {
  // State for controlling the visibility of the resume
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="resume" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <IoDocumentText className="mx-auto inline-block w-10 mb-4" size={50} />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Resume
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below is my resume. It contains my work experience, education, and skills.
          </p>
        </div>
        <div className="flex justify-center">
            {/* Button to open the resume */}
            <button
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={() => setIsOpen(true)}
            >
              View My Resume
            </button>
          </div>
      </div>
      {/* If isOpen is true, show the resume */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50"
        >
          <div className="bg-white p-5 rounded shadow-lg w-3/4">
            {/* Embed the resume PDF taken from the public folder */}
            <iframe src="resume.pdf" title="Resume" className="w-full h-[90vh]"/>
            {/* Button to close the resume */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-150"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Resume