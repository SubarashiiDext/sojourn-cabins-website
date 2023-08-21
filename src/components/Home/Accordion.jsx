"use client"
import { cx } from "./helper-functions";
import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full rounded-md">
      <div className="bg-blue-300 cursor-pointer p-4 flex items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="font-semibold">{title}</h2>
        <div className={cx('w-4 transition-all ease duration-200', isOpen ? "rotate-180" : "rotate-0")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={6}
            viewBox="0 0 10 6"
            fill="none"
            className='w-full h-auto'
          >
            <path
              fill="#000"
              fillOpacity={0.25}
              d="M.22.23A.737.737 0 0 1 .752 0c.199 0 .39.083.531.23l3.722 3.878L8.725.23a.736.736 0 0 1 .53-.22.737.737 0 0 1 .525.23.8.8 0 0 1 .22.547.802.802 0 0 1-.211.552L5.536 5.77A.737.737 0 0 1 5.005 6c-.2 0-.391-.083-.532-.23L.22 1.339A.8.8 0 0 1 0 .783.8.8 0 0 1 .22.23Z"
            />
          </svg>
        </div>
      </div>
      {isOpen && <div className="bg-white p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
