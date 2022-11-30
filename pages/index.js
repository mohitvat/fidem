/* eslint-disable @next/next/no-img-element */
import React from "react";

const index = () => {
  return (
    <div className="bg-[#284579] overflow-hidden font-montserrat w-full h-full ">
      <div className="  flex justify-end space-x-10 px-24 py-8 text-white cursor-pointer">
        <a className="text-center text-lg font-semibold ">Home</a>
        <a className="text-center text-lg font-semibold ">underwriting</a>
        <a className="text-center text-lg font-semibold ">Partners</a>
        <a className="text-center text-lg font-semibold ">About Us</a>
        <a className="text-center text-lg font-semibold ">Newsroom</a>{" "}
      </div>

      <div className="flex justify-between mt-10 ml-20 text-white font-bold text-6xl">
        <p className="">
          {" "}
          where <span className="text-red-600">WEB3.0</span>
          <br />
          <span>meets Insurance</span>{" "}
          <p className="text-sm pt-2">
            Fidemai is building technology infrastructure that powers the <br />
            global insurance company
            <br />
            <button className=" bg-red-600  hover:bg-red-700 rounded-md text-white px-8 py-3 text-sm mt-7">
              Contact Us
            </button>
          </p>
        </p>

        <img className=" w-[700px] h-[400px]" alt="" src="../comp.png" />
      </div>
      <div className="flex justify-center text-4xl font-bold text-white items-center pt-5">
        <p>
          {" "}
          Digital Evolution of
          <br /> <span className="ml-10 text-3xl">Global Insurance</span>
        </p>
      </div>
      <div>
        {/* <img className="absolute" alt="" src="../bg.png" /> */}
        <div className=" flex justify-between mt-10 ml-20 text-white font-semibold ">
          <p className="text-lg mt-[100px] ml-10">
            Insurance is a $5.5 trillion industry that accounts
            <br /> for 6% of global GDP. Yet, digital transactions
            <br /> account for less than 8% of gross written
            <br /> premium (GWP). Advances in smartphone
            <br /> penetration, data ubiquity and AI have created a <br />
            massive opportunity to shape the digital
            <br /> insurance economy. Roadzen is leading a <br />
            data-driven future for insurance. Our technology <br />
            accelerates growth, reduces ineffiencies and
            <br />
            improves profitability for insurance companies
            <br /> while keeping customers at the center of the experience.
          </p>

          <img className=" w-[600px] h-[600px]" alt="" src="../globe.png" />
        </div>
      </div>
      <div className="flex justify-start text-white ml-28 capitalize font-semibold text-3xl">
        <h>
          Insurance as a service <br />
          stack
        </h>
      </div>
      <div className="flex justify-evenly flex-row pt-20">
        <img
          className="h-[320px] w-[160px] "
          alt=""
          src="../underwriting.png"
        />
        <img
          className="h-[320px] w-[160px] "
          alt=""
          src="../underwriting.png"
        />
        <img
          className="h-[320px] w-[160px] "
          alt=""
          src="../underwriting.png"
        />
        <img
          className="h-[320px] w-[160px] "
          alt=""
          src="../underwriting.png"
        />
        <img
          className="h-[320px] w-[160px] "
          alt=""
          src="../underwriting.png"
        />
      </div>
      <div className="text-white font-medium text-base flex pl-20 ">
        <p>
          The top stack of our platform is off-the-shelf
          <br /> products that enable you to go live in days,
          <br /> not months utilizing our underlying
          <br /> technology architecture. Our growing suite of <br />
          products include auto underwriting, claims <br />
          and assistance, telematics, travel, mobile and
          <br /> e-commerce insurance - all in an integrated, <br />
          open, real-time platform.
        </p>
      </div>
      <div className="flex justify-center font-bold text-white text-2xl pt-52 ">
        <h>Remove Insurance Complexity</h>
      </div>
      <div className="text-center text-white pt-6 text-xl">
        <p className="">
          We integrate with internal and external data providers, core systems,
          <br />
          payment platforms and distribution partners to allow our clients to
          <br /> do more with less. Our clients integrate with an API or SDK
          rather <br />
          than spending months stitching together different IT systems. A <br />
          plugged in ecosystem of repair networks and providers ensures that{" "}
          <br />
          we are ready to deliver on Day One.
        </p>
      </div>
      <img className="h-[710px] w-full mt-20" alt="" src="../bg2.png" />
      <div className="box bg-[#1C345E] w-[1200px] h-[200px] mx-auto rounded mt-5 justify-evenly flex flex-col items-center text-white text-center">
        <div className="space-y-5">
          <p className="text-sm">Need More Details?</p>
          <p className="text-xl">Give Us a Miss Call At</p>
          <p>1800-123-999-888</p>
        </div>
      </div>
    </div>
  );
};

export default index;
