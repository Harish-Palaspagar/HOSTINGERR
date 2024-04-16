//import React from 'react'

const Footer = () => {
  return (
    <div className=" flex flex-col gap-12 md:flex-row md:justify-between ">

      <ul className="flex gap-6 font-lato text-gray-500 font-bold">
          <li>
             <a href="https://www.facebook.com/" className="hover:border-b-4 border-gray-500">Facebook</a>
          </li>
          <li>
             <a href="https://www.instagram.com/" className="hover:border-b-4 border-gray-500">Instagram</a>
          </li>
          <li>
             <a href="https://www.twitter.com/" className="hover:border-b-4 border-gray-500">Twitter</a>
          </li>

      </ul>

    <div className="flex gap-2  ">

             <img src="./assets/help.svg" alt="" />

        <div>
           <p className="font-playFair font-bold  ">Have any Questions?</p>
           <a href="https://github.com/Harish-Palaspagar" className="font-lato font-bold">Talk to a specialist</a>

        </div>

      </div>
    </div>
  )
}

export default Footer