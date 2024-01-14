import React from "react"
export default function HeroSection(){
    return(
     <div> 
      <div className="bg-gradient-to-t from-blue-500 to-amber-500 text-white py-16 text-center m-5  shadow-2xl shadow-blue-500 rounded-md bg">
      <div className="flex flex-col items-center">
        
        <img
          src="/IMG_20210930_170239_759.jpg"  
          alt="Muhammad Abubakar"
          className="mx-auto w-36 h-36 rounded-full mb-4"
        />
        <h1 className="text-4xl font-bold bg-black text-amber-500 rounded-md max-w-fit   text-center p-2 shadow-md">Muhammad Abubakar</h1>
        <p className="text-2xl mt-2 text-black">Full Stack Developer</p>
      </div>
      <div className="mt-8">
        <p className="text-gray-200">Passionate about crafting clean and efficient code.</p>
        <p className="text-gray-200">Let's build something amazing together!</p>
      </div>
      <div className="mt-8">
        <a
          href="#contact"  
          className="bg-white text-blue-500 px-4 py-2 rounded-full inline-block hover:bg-blue-100 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </div></div>
    )
  }
