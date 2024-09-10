import React from "react";
import banner from "../../public/mainbanner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10  ">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36 ">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-blue-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
            SR BookNest is your ultimate destination for discovering and purchasing books online. Designed with book lovers in mind, our app offers a seamless and enjoyable experience for finding your next great read. Whether you're into thrillers, romance, sci-fi, or non-fiction, BookNest provides a vast collection of titles across all genres.
            </p>
            
          </div>
          
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;