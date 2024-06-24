import React from "react";

type TCard = {
  header: string;
  image: {
    url: string;
  };
  text: {
    text: string;
  };
};

export const Card = ({ header, image, text }: TCard) => {
  return (
    <>
      <div className="flex items-center gap-x-[10px] w-[80%] bg-[#ECE3D9] p-5 rounded-md drop-shadow-2xl">
        <img
          className="object-cover aspect-square h-[150px] rounded-full drop-shadow"
          src={image.url}
          alt="illustrations"
        />
        <section className="text-[#575B58]">
          <h2 className="font-montserrat text-2xl font-medium">{header}</h2>

          <p className="font-poppins font-normal text-sm">{text.text}</p>
        </section>
      </div>
    </>
  );
};
