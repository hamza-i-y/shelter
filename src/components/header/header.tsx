import React from "react";
import { useStaticQuery, graphql } from "gatsby";

type Props = {
  img: string;
  resume: {
    title: string;
    url: string;
  };
};

export const Header = ({ img, resume }: Props) => {
  return (
    <header className="max-w-4xl  flex flex-col w-[60%] drop-shadow-md mb-5">
      <div className="bg-[#4C5E58] flex items-center">
        <img
          className="object-cover aspect-square h-[150px]"
          src={img}
          loading="eager"
          alt="profile pic"
        />
        <div className="m-auto">
          <h1 className="leading-10 font-montserrat font-bold text-4xl text-white">
            Hamza Ibrahim
          </h1>
          <p className="font-thin font-poppins text-2xl text-white">
            Software Coach / Frontend Developer
          </p>
        </div>
      </div>
      <div className="font-poppins font-medium text-[#575B58] bg-[#ECE3D9] flex justify-between items-center">
        <p>07961692353</p>
        <p>hamzaiy90@hotmail.com</p>
        <p>
          <a
            className="bg-[#4C5E58] none text-[#ffff] font-poppins hover:underline font-medium px-[1rem] py-[.1rem] block"
            href={resume.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {resume.title}
          </a>
        </p>
      </div>
    </header>
  );
};
