"use client";

import Image from "next/image";
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

const ImageOverlay = ({ selectedImage, onClose }) => {
  const overlayElement = document.getElementById("image-overlay");

  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <Image alt="alt text" src={selectedImage} className="w-[80%] h-auto" />
    </div>,
    overlayElement
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="mt-20 flex flex-col items-start overflow-hidden ">
      <h2 className="text-xl px-5 sm:px-24 font-semibold text-black/80 capitalize">
        The sojourn gallery
      </h2>
      <div className="bg-beige px-5 sm:px-24 mt-6 w-full py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { src: img1 },
          { src: img2 },
          { src: img3 },
          { src: img4 },
          { src: img5 },
          { src: img6 },
          { src: img7 },
          { src: img8 },
          { src: img9 },
          { src: img10 },
          { src: img2 },
          { src: img5 },
        ].map((image, index) => (
          <div
            key={index}
            className="w-full p-1 rounded border border-solid border-black/20 "
          >
            <Image
              alt="alt text"
              src={image.src}
              className="w-full h-full cursor-pointer object-cover object-center rounded"
              onClick={() => setSelectedImage(image.src)}
            />
          </div>
        ))}
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