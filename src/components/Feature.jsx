import { FaArrowRight } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";


const Feature = ({ order1,order2,feature }) => {
  return (
    <section >
      <section className=" bg-violet-800">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className={`"w-full order-2" ${order2}`}
            src={feature && feature.image ? feature.image : "https://source.unsplash.com/random"}
            alt="dashboard image"
          />
         
         
        {feature && (
          
          
            <div className={`mt-4 md:mt-0 ${order1}`} >
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {feature.title}
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              {feature.description}
              </p>
              <ul className="mb-4">
                {feature.subdescription.map((subdescription, key) => (
                  <li key={key} className="flex items-center space-x-3">
                    <span className="text-green-500">
                      <FcApproval className="text-3xl" />
                    </span>
                    <span className="text-xl text-slate-300">{subdescription}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://mcq-generator-react.onrender.com" target="_blank"
                className="inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800"
              >
                Join Now
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </a>
            </div>
          )}

        </div>
      </section>
    </section>
  );
};

export default Feature;
