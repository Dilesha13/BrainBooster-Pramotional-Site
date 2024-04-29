import { IoIosArrowDropdownCircle } from "react-icons/io";
import React, { useRef, useEffect, useState } from "react";

const AccordionItem = ({ item, idx, handleClick, activeTab }) => {
  const contentRef = useRef(null);
  // State to hold the height of the content
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // When activeTab changes, adjust the height state
    if (activeTab === idx && contentRef.current) {
      setHeight(contentRef.current.scrollHeight + 10);
    } else {
      setHeight(0);
    }
  }, [activeTab, idx]);
  return (
    <li key={idx} className=" my-2 shadow-lg ">
      <div
        onClick={() => handleClick(idx)}
        className="flex justify-between items-center font-semibold p-3 cursor-pointer text-gray-900 dark:text-slate-300  bg-violet-800 shadow-md rounded-lg  border-2 border-cyan-50"
      >
        <div>
          {item.question}
          <div className="ml-5">
            {item.subq.map((subq, subqIdx) => (
              <ul key={subqIdx} className="list-disc">
                {subq.map((sq, sqIdx) => (
                  <li key={sqIdx}>{sq}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <IoIosArrowDropdownCircle
          className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${
            activeTab === idx ? "rotate-180" : ""
          }`}
        />
      </div>

      <section
        className={`border-l-2 border-2 border-cyan-50 duration-500 transition-all ease-in-out overflow-hidden ${
          activeTab === idx ? "border-b-2" : ""
        }`}
        style={{ height: activeTab === idx ? `${height}px` : "0px" }}
        ref={contentRef}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {item.question}
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-50 md:gap-16 dark:border-gray-50 md:grid-cols-2">
            {item.subq.map((subqGroup, groupIdx) =>
              subqGroup.map((subq, subqIdx) => (
                <div key={subqIdx} className="mb-10">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white flex flex-row">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-50 dark:text-gray-50 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {subq}
                  </h3>
                  <div>
                    <p className="mt-3 text-base text-gray-400 dark:text-gray-400">
                      {item.answer[groupIdx][subqIdx]}
                    </p>
                    </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </li>
  );
};

export default AccordionItem;
