import React from "react";
import banner from "../../public/mainbanner.png";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>


      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10  ">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36 ">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Contact Us{" "}
              <span className="text-blue-500"> everyday!!!</span>
            </h1>
            
            <Link to="/">
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
              Back
            </button>
          </Link>

<form action="https://formsubmit.co/shivam2003golu@gmail.com" method="POST">
        <div className="space-y-8">


        <label className="input input-bordered flex items-center gap-2">
                <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 16 16"
                 fill="currentColor"
                className="w-4 h-4 opacity-70"
                >
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1a5.978 5.978 0 0 0-4.665 2.338C4.272 13.52 6.072 14 8 14s3.728-.48 4.665-1.662A5.978 5.978 0 0 0 8 9Z" />
              </svg>
              <input type="text" name="name" className="grow" placeholder="Name" />
            </label>
        
        
        
        <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>





        <textarea  className="input input-bordered w-full h-32 flex items-center gap-2"   placeholder="Message"   >
      


            </textarea>


     
   
        </div>
        
        
        <input className="btn mt-6 btn-secondary" type="submit" value="Submit" />
      </form>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default Contact;