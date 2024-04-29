
import { VscCheck ,VscChromeClose} from "react-icons/vsc";

function DonateComponent({title,amount,subtitle,features}) {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900  rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 bg-violet-950 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {subtitle}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">{amount}$</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                {features.map((feature, key) => (
                  <li className="flex items-center space-x-3" key={key}>
                  {/* Icon */}
                  {feature[1] ? (
                    <VscCheck className="text-green-500" />
                  ) : (
                    <VscChromeClose className="text-red-500" />
                  )}
                  

                  <span>{feature[0]}</span>
                </li>
                ))}
        
              </ul>
              <a href="https://www.patreon.com/scamsensei/membership" target="_blank">
              <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Support
              </button>
              </a> 
            </div>
  )
}

export default  DonateComponent
