"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import img1 from "/public/asset/img1.jpg";
import img2 from "/public/asset/img2.jpg";
import img3 from "/public/asset/img3.jpg";
import img4 from "/public/asset/img4.jpg";
import img5 from "/public/asset/img5.jpg";
import img6 from "/public/asset/img6.jpg";
import img7 from "/public/asset/img7.jpg";
import img8 from "/public/asset/img8.jpg";
import img9 from "/public/asset/img9.jpg";
import img10 from "/public/asset/img10.jpg";
import Image from "next/image";

const ImageOverlay = ({ selectedImage, onClose }) => {
  const overlayElement = document.getElementById("image-overlay");

  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <Image alt="alt text" src={selectedImage} className="w-[60%] h-auto" />
    </div>,
    overlayElement
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="mt-20 flex flex-col items-start overflow-hidden ">
      <h2 className="text-xl px-24 font-semibold text-black/80 capitalize">
        The sojourn gallery
      </h2>
      <div className="bg-beige px-24 mt-6 w-full py-8 grid grid-cols-2 grid-rows-2 gap-4">
        <div className="w-full col-span-1 row-span-1 p-1 rounded-8xs border border-solid border-black/20 ">
          <Image
            alt="alt text" src={img1}
            className="w-full h-full cursor-pointer object-cover object-center rounded-8xs"
            onClick={() => setSelectedImage(img1)}
          />
        </div>


        <div className="grid grid-cols-2 grid-rows-2 gap-4  col-span-1 row-span-1">
          <div className="w-full p-1 rounded-8xs border border-solid border-black/20 ">
            <Image
              alt="alt text" src={img2}
              className="w-full h-full object-cover object-center rounded-8xs cursor-pointer"
              onClick={() => setSelectedImage(img2)}
            />
          </div>
          <div className="w-full p-1 rounded-8xs border border-solid border-black/20 ">
            <Image
              alt="alt text" src={img3}
              className="w-full h-full object-cover object-center rounded-8xs cursor-pointer"
              onClick={() => setSelectedImage(img3)}
            />
          </div>
          <div className="w-full p-1 rounded-8xs border border-solid border-black/20 ">
            <Image
              alt="alt text" src={img4}
              className="w-full h-full object-cover object-center rounded-8xs cursor-pointer"
              onClick={() => setSelectedImage(img4)}
            />
          </div>
          <div className="w-full p-1 rounded-8xs border border-solid border-black/20 ">
            <Image
              alt="alt text" src={img5}
              className="w-full h-full object-cover object-center rounded-8xs cursor-pointer"
              onClick={() => setSelectedImage(img5)}
            />
          </div>
        </div>




        <div className="grid grid-cols-2 grid-rows-2 gap-4 col-span-1 row-span-1">
          <div className="w-full p-1 rounded-8xs border border-solid border-black/20 ">
            <Image
              alt="alt text" src={img6}
              className="w-full h-full object-cover object-center rounded-8xs cursor-pointer"
              onClick={() => setSelectedImage(img6)}
            />
          </div>
          <div className="w-full p-1 rounded-8xs border border-solid border-black/20 ">
            <Image
              alt="alt text" src={img7}
              className="w-full h-full object-cover object-center rounded-8xs cursor-pointer"
              onClick={() => setSelectedImage(img7)}
            />
          </div>
          <div className="w-full p-1 rounded-8xs border border-solid border-black/20 ">
            <Image
              alt="alt text" src={img8}
              className="w-full h-full object-cover object-center rounded-8xs cursor-pointer"
              onClick={() => setSelectedImage(img8)}
            />
          </div>
          <div className="w-full p-1 rounded-8xs border border-solid border-black/20 ">
            <Image
              alt="alt text" src={img9}
              className="w-full h-full object-cover object-center rounded-8xs cursor-pointer"
              onClick={() => setSelectedImage(img9)}
            />
          </div>
        </div>
        <div className="w-full col-span-1 row-span-1 p-1 rounded-8xs border border-solid border-black/20 ">
          <Image
            alt="alt text" src={img10}
            className="w-full h-full cursor-pointer object-cover object-center rounded-8xs"
            onClick={() => setSelectedImage(img10)}
          />
        </div>



        {/* {images.map((image, index) => (
        <Image
          key={index}
          alt="alt text" src={image}
          className="m-2 cursor-pointer"
          onClick={() => setSelectedImage(image)}
        />
      ))} */}
        <div id="image-overlay"></div>
        {selectedImage && (
          <ImageOverlay
            selectedImage={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;