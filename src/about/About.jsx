// import React from 'react'
// import Navbar from '../components/Navbar'



// const About = () => {
//   return (
//     <div>
//          <Navbar/>
      
//     </div>
//   )
// }

// export default About

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
    <div>
      <Navbar></Navbar>
     
       
    </div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 mt-12 md:mt-36 order-2 md:order-1">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              About <span className="text-blue-500">SR BookNest</span>
            </h1>
            <p className="text-sm md:text-xl">
              Welcome to <span className="font-bold">SR BookNest</span>, your go-to online platform for discovering and purchasing a wide variety of books. Founded by passionate book lovers, we are dedicated to creating an immersive and seamless reading experience.
            </p>
            <p className="text-sm md:text-xl">
              Whether you're looking for best-selling novels, non-fiction insights, or niche genres, SR BookNest has something for every kind of reader. We strive to bring the joy of reading closer to you by providing access to thousands of titles from authors across the globe.
            </p>
            <p className="text-sm md:text-xl">
              Our mission is simple – to create a community of readers where everyone can explore, learn, and grow through books. With our user-friendly interface, powerful search tools, and personalized recommendations, SR BookNest is not just a bookstore; it's a space for knowledge and inspiration.
            </p>
            <p className="text-sm md:text-xl">
              Join us on this journey and discover your next favorite book today!
            </p>
          </div>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJvb2t8ZW58MHx8fHwxNjEyMTk1NDQy&ixlib=rb-1.2.1&q=80&w=400"
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="Books"
          />
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default AboutUs;
