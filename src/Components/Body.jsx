//import React from 'react'

const Body = () => {
  return (
    <div className="space-y-4 lg:flex lg:justify-evenly lg:mt-20 lg:mb-10  ">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 ">
        <img
          src="./assets/blue.svg"
          alt=""
          className="-rotate-[45deg] h-80 md:h-96 lg:h-[400px]"
        />
        <img
          src="./assets/pink.svg"
          alt=""
          className="absolute -rotate-[30deg] h-80 md:h-96 lg:h-[400px]"
        />
        <img
          src="./assets/purple.svg"
          alt=""
          className="absolute -rotate-[15deg]  h-80 md:h-96 lg:h-[400px]"
        />
        <img
          src="./assets/hero.png"
          alt=""
          className="absolute h-80 md:h-96 lg:h-[400px]"
        />
      </div>

      <div className="lg:flex-1 lg:order-1 lg:ml-40 lg:mt-48">
        <h1 className="text-5xl font-bold leading-tight font-playFair mb-3 ">
          Host your website in less than 5 minutes.
        </h1>

        <p className="font-lato text-gray-500 mb-3 font-bold">
          With Hosterr, get your website up and running in no less than 5
          minutes with the most competitive pricing packages available online.
        </p>

        <form action="#" className="flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Enter e-mail address"
            className="rounded-md px-5 py-4  text-base h-20  w-55 md:w-80 placeholder:text-gray-500 placeholder:font-bold"
          />

          <button className="rounded-md px-4 py-3 bg-blue-500 hover:bg-blue-400 text-white h-20 font-semibold md:w-80 mb-4">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2">
          <img src="/assets/check.svg" alt="check" className="mr-1 " />

          <p className="font-lato font-bold text-gray-500">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
