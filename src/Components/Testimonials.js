import React from "react";
import { BsFillTerminalFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { testimonials } from "../data.js";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <HiUsers className="w-10 inline-block mb-4" size={50} />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {/* Mapping over the 'testimonials' array */}
          {testimonials.map((testimonial) => (
            // For each testimonial, a div is created with a key of the testimonial's name
            <div className="p-4 md:w-1/2 w-full" key={testimonial.name}>
              {/* Inside the div, a container is created to hold the testimonial details */}
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <BsFillTerminalFill className="block w-8 text-gray-500 mb-4" size={50} />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}