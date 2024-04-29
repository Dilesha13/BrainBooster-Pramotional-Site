
import { createContext, useState,useContext } from "react";
const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {


    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
    const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
    const [proceed, setProceed] = useState(false);
    const [email, setEmail] = useState("");
    const handlePrivacyConfirmation = () => {
     
      setIsPrivacyModalOpen(!isPrivacyModalOpen); 
     
    };
    const handleSubmittomail = async () => {
      
  
      
      const data = new URLSearchParams();
      data.append("EMAIL", email);
  
      try {
        const response = await fetch(
          'https://gmail.us18.list-manage.com/subscribe/post?u=09dd10ac35000d91ea7e6e07c&amp;id=8a6b5092fb&amp;f_id=00c5c2e1f0" method="post" id="mc-embedded-subscribe-form',
          {
            method: "POST",
            body: data,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            mode: "no-cors", // This will prevent CORS errors, but also prevent reading the response
          }
        );
       
        // Since mode is 'no-cors', we can't read the status of the response
        console.log("Signed up!", response);
        // Handle success (though we can't check the response status due to 'no-cors')
        setEmail("");
        // Show a success message to the user
      } catch (error) {
        console.error("Sign up failed:", error);
        // Handle errors
      }
    };




  const value = { proceed,setProceed ,handlePrivacyConfirmation,isPrivacyModalOpen, setIsPrivacyModalOpen,handleSubmittomail,
  email, setEmail,isNewsletterSubmitting,setIsNewsletterSubmitting};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};



export const useAuth = () => {
   return useContext(AuthContext);
}
