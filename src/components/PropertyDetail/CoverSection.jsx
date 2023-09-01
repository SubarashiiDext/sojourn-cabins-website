"use client";
import Image from "next/image";
import listingImg1 from "/public/asset/listing-01.jpg";
import listingImg2 from "/public/asset/listing-02.jpg";
import listingImg3 from "/public/asset/listing-03.jpg";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";

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

const CoverSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);


  return (
    <section className="w-full px-32 mt-12 grid grid-cols-12 grid-rows-2 gap-2 max-h-[75vh]">
      <div className="col-span-8 row-span-2 relative">
        <Image
          src={listingImg1}
          alt="alt text"
          className="w-full h-full object-cover object-center rounded-8xs cursor-pointer"
          onClick={() => setSelectedImage(listingImg1)}
          sizes="(min-width: 1024px) 100vw, 50vw"
          priority
        />
        <Link
          href="/"
          className="absolute -right-16 bottom-8 uppercase font-semibold px-4 py-3 bg-white rounded-8xs"
        >
          View Photos
        </Link>
      </div>
      <div className="col-span-4 row-span-1 flex flex-col items-stretch justify-between">
        <Image
          src={listingImg2}
          alt="alt text"
          className="w-full h-full object-cover object-center rounded-8xs cursor-pointer"
          onClick={() => setSelectedImage(listingImg2)}
          sizes="(min-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="col-span-4 row-span-1 flex flex-col items-stretch justify-between">
        <Image
          src={listingImg3}
          alt="alt text"
          className="w-full h-full object-cover object-center rounded-8xs cursor-pointer"
          onClick={() => setSelectedImage(listingImg3)}
          sizes="(min-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      <div id="image-overlay"></div>
        {selectedImage && (
          <ImageOverlay
            selectedImage={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
    </section>
  );
};

export default CoverSection;
