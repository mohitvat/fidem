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
const partners = () => {
  return (
    <div className="bg-[#284579] overflow-hidden font-montserrat w-full h-full ">
      {" "}
      <div className="flex justify-center font-bold text-white text-2xl  ">
        <h>Industries We Serve</h>
      </div>
      <div className="text-center text-white pt-6 text-xl">
        <p className="">
          We work across the spectrum with insurance carriers,
          <br /> intermediaries and distributors to craft powerful partnerships{" "}
          <br />
          that transform the insurance experience. Our simple mission is
          <br /> to use technology and data to empower and delight every
          <br /> customer who uses our products through these partnerships.
        </p>
      </div>
      <div className="w-full justify-center items-center flex flex-col">
        <div className=" grid grid-cols-1 md:grid-cols-3 my-10  gap-4 px-4 md:w-[70%] text-white ">
          {services.map((ele, index) => (
            <div
              key={index}
              className={`${ele.bg} relative h-[430px] rounded-lg`}
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
      <div className="flex justify-center font-bold text-white text-2xl pt-10 ">
        <h>Our Partners</h>
      </div>
      <div className="text-center text-white pt-6 text-xl">
        <p className="">
          Companies of all sizes from leading insurers to a single agent <br />
          use Fidem.ai's software.
        </p>
        <div className="flex flex-row justify-evenly">
          <img
            className=" mt-20 w-[180px] h-[75px] overflow-hidden"
            alt=""
            src="../owsome.png"
          />
          <img
            className=" mt-20 w-[180px] h-[75px] overflow-hidden"
            alt=""
            src="../owsome.png"
          />
          <img
            className=" mt-20 w-[180px] h-[75px] overflow-hidden"
            alt=""
            src="../owsome.png"
          />
          <img
            className=" mt-20 w-[180px] h-[75px] overflow-hidden"
            alt=""
            src="../owsome.png"
          />
        </div>
        <div className="box bg-[#1C345E] w-[1200px] h-[200px] mx-auto rounded mt-96 justify-evenly flex flex-col">
          <div className="space-y-5">
            <p className="text-sm">Need More Details?</p>
            <p className="text-xl">Give Us a Miss Call At</p>
            <p>1800-123-999-888</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default partners;
