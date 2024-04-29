
import home from "../assets/newHome.jpeg";
const CallToAction = () => {
  return (
    <section className=" bg-violet-800 text-white p-5 text-center">
      <div className="container my-24 mx-auto md:px-6">
       <section className="mb-32">
         <div className="flex flex-wrap">
           <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
             <div className="flex lg:py-12">
              <img src={home}
                className="w-full md:w-120 rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]" alt="image" />
            </div>
          </div>
          <div className=" w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-violet-950 p-6 text-center text-white lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-6 text-3xl font-bold">
                Don't hesitate any longer!    
                </h2>
                <p className="mb-6 pb-2 lg:pb-0">
                Experience the ultimate in study efficiency with our website. Our cutting-edge platform features interactive question generation, instant feedback, and a vibrant community to support your academic journey. Take control of your learning today – explore our site now and study with confidence.
                </p>
                <a href="https://mcq-generator-react.onrender.com" target="_blank">
                <button type="button"
                  className="rounded-full border-2  px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-gray-300 hover:bg-gray-300 hover:bg-opacity-10 hover:text-gray-300 focus:border-gray-300 focus:text-gray-300 focus:outline-none focus:ring-0 active:border-gray-400 active:text-gray-400"
                  data-te-ripple-init data-te-ripple-color="light">
                  Sign up now
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </section>
  );
};

export default CallToAction;



// const CallToAction = () => {
//   return (
//     <div className="container my-24 mx-auto md:px-6">
//       <section className="mb-32">
//         <div className="flex flex-wrap">
//           <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
//             <div className="flex lg:py-12">
//               <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/033.jpg"
//                 className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]" alt="image" />
//             </div>
//           </div>
//           <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
//             <div className="flex h-full items-center rounded-lg bg-blue-600 p-6 text-center text-white lg:pl-12 lg:text-left">
//               <div className="lg:pl-12">
//                 <h2 className="mb-6 text-3xl font-bold">
//                   What are you waiting for?
//                 </h2>
//                 <p className="mb-6 pb-2 lg:pb-0">
//                   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                   Maxime, sint, repellat vel quo quisquam accusamus in qui at
//                   ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum
//                   distinctio eum neque!
//                 </p>
//                 <button type="button"
//                   className="rounded-full border-2  px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-gray-300 hover:bg-gray-300 hover:bg-opacity-10 hover:text-gray-300 focus:border-gray-300 focus:text-gray-300 focus:outline-none focus:ring-0 active:border-gray-400 active:text-gray-400"
//                   data-te-ripple-init data-te-ripple-color="light">
//                   Sign up now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CallToAction;
