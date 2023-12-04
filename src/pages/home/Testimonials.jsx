import React from 'react';
import chef from '../../assets/chef.png';
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="md:w-1/2 flex flex-col items-center">
          <img src={chef} alt="chef" className='h-[500px] w-[300px]' />
        </div>
        <div className="md:w-1/2 bg-base-200 p-5 rounded-md">
          <div className="text-left ">
            <p className="subtitle">Testimonials</p>
            <h3 className="title">
              What Our Customers <br />
              Say About Us
            </h3>
            <blockquote className="my-5 text-secondary leading-[30px]">
            Food is art and science. So, you take something out, you have to work with the recipe to make sure that you're providing delicious food with fewer calories.
            </blockquote>

            <div className='flex items-center gap-4 flex-wrap '>
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.unsplash.com/photo-1623091410901-00e2d268901f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>

              <div className='space-y-1'>
              <h5 className='font-bold'>Customer Feedback</h5>
              <div className='flex items-center gap-2'>
              <FaStar className='text-yellow-400' />
              <span className='font-medium'>4.9</span><span className='text-[#807E7E]'>(18.6k reviews)</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
