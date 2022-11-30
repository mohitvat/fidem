/* eslint-disable @next/next/no-img-element */
import React from "react";

const about = () => {
  return (
    <div className="bg-[#284579] overflow-hidden font-montserrat w-full h-full ">
      <div className="flex  mt-10  ml-[200px] text-white font-semibold text-5xl ">
        <p className="">
          We are building an operating system for global insurance by connecting
          technology,
          <br /> distribution and underwriting capital.
          <p className="text-sm pt-12 flex justify-center">
            At Roadzen, we marry technologies such as mobility, computer vision
            and AI with augmented data to build beautiful consumer products for
            our insurance partners. These products are built with dynamic
            underwriting capabilities, API-led distribution and real-time claims
            processing. At the heart of our mission is to create transparency,
            efficiency, and seamless experience for the millions of customers
            who use our products through these partnerships.
          </p>
          {/* <button className=" bg-red-600  hover:bg-red-700 rounded-md text-white px-8 py-3 text-sm mt-20">
            Contact Us
          </button> */}
        </p>

        <img
          className="realtive w-[700px] h-[400px]"
          alt=""
          src="../comp.png"
        />
      </div>
      <img
        className="realtive w-full px-4 h-[50px] mt-40"
        alt=""
        src="../eflt.png"
      />
      <img
        className="realtive w-full px-5 h-[600px] mt-40"
        alt=""
        src="../map.png"
      />
      <div className="flex justify-center font-bold text-white text-2xl pt-10 ">
        <h>We Are All About The People</h>
      </div>
      <div className="text-center text-white pt-6 text-xl">
        <p className="">
          People are at the heart of our organization, each of us driven
          <br /> by our mission to build better insurance, together.
        </p>
        <img
          className="realtive w-[1400px] h-[550px] mt-28 mx-auto"
          alt=""
          src="../office.png"
        />
      </div>
      <div className="box bg-[#1C345E] w-[1200px] h-[200px] mx-auto rounded mt-32 justify-evenly flex flex-col items-center text-white text-center">
        <div className="space-y-5">
          <p className="text-sm">Need More Details?</p>
          <p className="text-xl">Give Us a Miss Call At</p>
          <p>1800-123-999-888</p>
        </div>
      </div>
    </div>
  );
};

export default about;
