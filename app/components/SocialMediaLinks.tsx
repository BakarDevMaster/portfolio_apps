import Link from "next/link"
import React from 'react';
export default function SocialMediaLinks (){

    return(
        <div className="bg-gradient-to-t from-amber-300 to-red-400 py-16 text-center m-5 rounded-md shadow-2xl shadow-red-400">
        <div className="flex justify-center"><h2 className="text-3xl font-bold mb-8 bg-black text-amber-500 rounded-md max-w-fit   text-center p-2 shadow-md">Also Connect With Me</h2></div>
        <div className="flex justify-center space-x-8">
          <SocialMediaLink
            href="https://www.linkedin.com/in/your-profile"
            icon="LinkedIn"
          />
          <SocialMediaLink
            href="https://www.twitter.com/your-handle"
            icon="Twitter"
          />
          <SocialMediaLink
            href="https://www.instagram.com/your-handle"
            icon="Instagram"
          />
          {/** Add more social media links as needed */}
        </div>
      </div>
    );
  };
  
  interface SocialMediaLinkProps {
    href: string;
    icon: string;
  }
  
  const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ href, icon }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 transition duration-300"
      >
        {icon}
      </a>
    );

    
};
