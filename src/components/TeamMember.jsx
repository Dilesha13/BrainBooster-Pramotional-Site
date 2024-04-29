import { FaGithub ,FaLinkedin} from "react-icons/fa";
function TeamMember({image,name,position,contribution}) {
  return (
   
      
      
        
      <div className="items-center bg-gray-50 rounded-lg shadow sm:flex bg-violet-950 dark:border-gray-700 ">
        <div className="flex-shrink-0 w-48 h-48 mx-auto ">
          
            <img
              className=" rounded-lg sm:rounded-none sm:rounded-l-lg "
              src={image}
              alt="Avatar"
              style={{ width: '85%', height: '100%' }}
              
            />
         
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">{name}</a>
            </h3>
            <span className="text-gray-500 dark:text-gray-400">
              {position}
            </span>
            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
             {contribution}
            </p>
            <ul className="flex space-x-4 sm:mt-0">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FaGithub fontSize={30}/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                 <FaLinkedin fontSize={30}/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  
                </a>
              </li>
            </ul>
          </div>
        </div>
      
    
  );
}

export default TeamMember;
