
const Details = () => {
    return (
      <section className="mt-6 px-32">
          <div className="w-full flex items-center justify-between">
              <div className="flex flex-col items-start">
              <h1 className="uppercase font-semibold text-3xl text-mediumslateblue-100">The GOLDEN MARINA</h1>
              <div className="flex items-center justify-between mt-4">
          <div className="mr-2 w-4">
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      className="w-full h-auto"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M20.438 9.374c.003 1.507-.577 2.974-1.656 4.183L12 21.093l-6.782-7.536c-.794-.894-1.322-1.932-1.541-3.03a5.914 5.914 0 0 1 .281-3.281c.404-1.06 1.104-2.025 2.043-2.816.938-.791 2.089-1.385 3.356-1.733a10.051 10.051 0 0 1 3.935-.271c1.32.17 2.571.599 3.653 1.25 1.081.652 1.962 1.509 2.569 2.5.607.99.924 2.086.924 3.198Zm2.812 0c0 2.094-.823 4.025-2.212 5.585l-7.281 8.087L12 25l-1.759-1.953-7.278-8.087c-1.06-1.192-1.766-2.576-2.06-4.039a7.885 7.885 0 0 1 .373-4.377c.537-1.414 1.47-2.701 2.721-3.756C5.247 1.732 6.781.939 8.471.474A13.4 13.4 0 0 1 13.72.11c1.759.226 3.428.797 4.87 1.666 1.443.87 2.618 2.01 3.428 3.331.81 1.321 1.233 2.783 1.233 4.266ZM12 12.5c.995 0 1.948-.329 2.652-.915.703-.586 1.098-1.38 1.098-2.21 0-.828-.395-1.623-1.098-2.21-.704-.585-1.657-.915-2.652-.915-.995 0-1.948.33-2.652.916-.703.586-1.098 1.38-1.098 2.21 0 .828.395 1.623 1.098 2.209.704.586 1.657.915 2.652.915Z"
        clipRule="evenodd"
      />
    </svg>
          </div> <p className="text-sm text-dark/80">East Legon, Ghana</p>
        </div>
              </div>
  
              <div className="flex flex-col items-end">
              <div className="flex items-center justify-center font-medium">
         <div className="w-6 mr-2"><svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      className=" w-full h-auto"
    >
      <path
        fill="#FFB800"
        d="M8.1 1.39a1.042 1.042 0 0 1 1.8 0l2.33 3.998 4.523.98a1.042 1.042 0 0 1 .555 1.712l-3.083 3.45.467 4.605a1.042 1.042 0 0 1-1.457 1.058L9 15.327l-4.235 1.866a1.04 1.04 0 0 1-1.457-1.058l.467-4.604L.692 8.08a1.042 1.042 0 0 1 .555-1.713l4.524-.98L8.1 1.39Z"
      />
    </svg></div>  <span className="font-medium text-2xl">4.5</span>
         </div>
  
         <div>
          <span className="font-semibold text-3xl ">$5000</span> <span className="font-medium">per night</span>
         </div>
  
              </div>
  
           
  
          </div>
          <div className="w-full flex items-center justify-between mt-12">
          <div className="w-1/2 flex flex-col items-start border-r border-solid border-mediumslateblue-100/30">
              <span className="font-semibold capitalize text-xl">Key details</span>
              <ul className="list-disc list-inside mt-2 ml-4">
                  <li className="my-1">
                  Number of Guests - 2 people
                  </li>
                  <li className="my-1">Size - 100 sq ft</li>
                  <li className="my-1">Number of Beds - 1 King size</li>
              </ul>
             </div>
             <div className="w-1/2 flex flex-col items-end justify-center">
              <div className="flex flex-col">
              <span className="w-full font-semibold capitalize text-left">Amenities</span>
              <ul className="self-start ml-4 list-disc list-inside mt-2 grid grid-cols-2 gap-x-24">
                  <li className="my-1 cols-span-1">
                  Air condition
                  </li>
                  <li className="my-1 cols-span-1">Safe</li>
                  <li className="my-1 cols-span-1">
                  Kitchen
                  </li>
                  <li className="my-1 cols-span-1">WiFi</li>
                 
                  <li className="my-1 cols-span-1">Shower</li>
                  <li className="my-1 cols-span-1">Work space</li>
              </ul>
              </div>
             </div>
          </div>
      </section>
    )
  }
  
  export default Details