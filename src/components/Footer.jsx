import { Link } from "react-router-dom";
import logo from "../assets/upscaledlogo.png";
import { FaGithub,FaFacebook,FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
    

      {/* Horizontal line */}
      <hr className="border-t border-gray-300" />

    <footer className="p-4  sm:p-6 bg-violet-950">
      
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className=" md:m-auto sm:m-auto lg:ml-10 sm:py-5 mb-10 md:mb-0 ">
            <a
              href="https://mcq-generator-react.onrender.com"
              className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img src={logo} className="h-40" alt="BrainBooster " />
            </a>
            
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 sm:mt-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://www.questgen.ai/" className="hover:underline" target="_blank">
                    Questgen
                  </a>
                </li>
                <li>
                  <a
                    href="https://smallpdf.com/ai-pdf"
                    className="hover:underline"
                    target="_blank"
                  >
                    Smallpdf
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/Dilesha13/BrainBooster-SE25-SDGP"
                    className="hover:underline "
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/tharushi-dilesha-a3973b257/"
                    className="hover:underline"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
                
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  
                   
                    <Link to="/legal" className="hover:underline">
                      Privacy Policy
                </Link>
                  
                </li>
                <li>
                  <a href="#" className="hover:underline" target="_blank">
                  <Link to="/terms" className="hover:underline">
                    Terms &amp; Conditions
                </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              BrainBooster™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
           
           
            <a
              href="https://www.linkedin.com/in/tharushi-dilesha-a3973b257/" target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100076433963918" target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
             <FaFacebook  />
            </a>
            <a
              href="https://github.com/Dilesha13/BrainBooster-SE25-SDGP" target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
