/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
const services = [
  {
    bg: "bg-[#233A62]",

    title: "Insurance",
    desc: "Insures  Re-insures",
  },
  {
    bg: "bg-[#233A62]",

    title: "AUtomotive",
    desc: "Once all the documents are Verified then our Executive will Join You to Visit the Bank OR Financier where Your Gold has been Pledged.",
  },
  {
    bg: "bg-[#233A62]",

    title: "Shared Economy",
    desc: "GoldCash Limited will make the Payment and Receive the Gold on your behalf and Accompany you for the Valuation ofGold.",
  },
  {
    bg: "bg-[#233A62]",

    title: "Lifestyle",
    desc: "Our Expert Gold Valuators will conduct the Most Transparent and Authentic Valuation using Our XRF machine at the Nearest Branch.",
  },
  {
    bg: "bg-[#233A62]",

    title: "Transportation And Logistics.",
    desc: "Once the Customer feels Satisfied with the Offered Price We will give You Instant Cash against Gold after deducting the Service Charges and any other Expenses as per the Terms & Conditions.",
  },
  {
    bg: "bg-[#233A62]",

    title: "Financial Services",
    desc: "After the Transaction being Complete, the Blank Cheque and Original Documents that were taken as Security will be returned to the Customer.",
  },
];
const newsroom = () => {
  return (
    <div className="bg-[#284579] overflow-hidden font-montserrat w-full h-full ">
      <div className="flex justify-between  mt-10 ml-28 text-white font-semibold text-6xl">
        <p className="">
          Join our RZverse
          <p className="text-lg pt-5 flex justify-center ">
            We're building a team of superheroes to transform global
            <br /> insurance. If you are an original thinker with a bias for
            action – <br />
            we want you to come build with us. Our people have a global
            <br /> mindset, a passion for innovation and play well with others.
          </p>
          <button className=" bg-red-600  hover:bg-red-700 rounded-md text-white px-8 py-3 text-sm mt-20">
            Contact Us
          </button>
        </p>

        <img
          className="realtive w-[700px] h-[400px]"
          alt=""
          src="../comp.png"
        />
      </div>
      <div className="flex justify-center font-bold text-white text-2xl mt-20 ">
        <h>Why Join Us</h>
      </div>
      <div className="text-center text-white pt-6 text-lg">
        <p className="">
          We want you to do the best work of your career at Roadzen so <br />
          it's on us to making work here more satisfying. We do this by <br />
          removing distractions, helping you focus and be happy giving <br />
          you the ability to aim for moonshots.
        </p>
      </div>
      <div className=" items-center justify-evenly flex flex-col ">
        <div className=" grid grid-cols-1 md:grid-cols-3 my-10  gap-4  md:w-[70%] text-white ">
          {services.map((ele, index) => (
            <div
              key={index}
              className={`${ele.bg} relative h-[350px] w-full rounded-lg`}
            >
              <img
                className="mx-10 mt-8 w-[50px] h-[60px] overflow-hidden"
                alt=""
                src="../insurance.png"
              />

              <div className="px-10 pt-3 text-xl font-medium">{ele.title}</div>
              <div className="px-10 pt-2 text-base">{ele.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-start text-white ml-28 capitalize font-semibold text-2xl mt-24">
        <h>Open Positions</h>
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
      <div className="flex flex-col mt-20 space-y-4 justify-start">
        <span className="flex flex-row justify-evenly space-x-60 text-xl text-white font-bold ">
          <h className="text-red-700">Product Manager</h>
          <p>New Delhi</p>
          <p>Full Time</p>
        </span>
        <span className="flex flex-row justify-evenly space-x-60 text-xl text-white font-bold ">
          <h className="text-red-700">Backend Engineer</h>
          <p>New Delhi</p>
          <p>Full Time</p>
        </span>
        <span className="flex flex-row justify-evenly space-x-56 text-xl text-white font-bold ">
          <h className="text-red-700">
            Software Development <br />
            Engineer in Test
          </h>
          <p className="pr-9">New Delhi</p>
          <p className="pr-4">Full Time</p>
        </span>
        <span className="flex flex-row justify-evenly space-x-60 text-xl text-white font-bold ">
          <h className="text-red-700">Front End Engineer</h>
          <p>New Delhi</p>
          <p>Full Time</p>
        </span>
        <span className="flex flex-row justify-evenly space-x-60 text-xl text-white font-bold ">
          <h className="text-red-700">Front End Engineer</h>
          <p>New Delhi</p>
          <p>Full Time</p>
        </span>
        <span className="flex flex-row justify-evenly space-x-60 text-xl text-white font-bold ">
          <h className="text-red-700">Staff Data Scientist</h>
          <p>New Delhi</p>
          <p>Full Time</p>
        </span>
        {/* <span className="flex flex-row justify-evenly space-x-60 text-xl text-white font-bold ">
          <h className="text-red-700">Business Development Manager</h>
          <p>New Delhi</p>
          <p>Full Time</p>
        </span>
        <span className="flex flex-row justify-evenly space-x-60 text-xl text-white font-bold ">
          <h className="text-red-700">Customer Success Manager</h>
          <p>New Delhi</p>
          <p>Full Time</p>
        </span> */}
      </div>
      <div className="box bg-[#1C345E] w-[1200px] h-[200px] mx-auto rounded mt-32 justify-evenly flex flex-col items-center text-white text-center">
        <div className="space-y-5">
          <p className="text-xl font-medium">
            We are always looking for great people even
            <br /> if it means we don't have a role yet, we'd
            <br /> love to chat. Write to us at:
          </p>

          <p className="text-red-600 text-lg font-medium">talent@roadzen.io</p>
        </div>
      </div>
    </div>
  );
};

export default newsroom;
