import { useAuth } from "../hooks/context";
const NewsletterSignUp = ({handleSubmit}) => {

const auth = useAuth();
const handleFormSubmit = (e) => {
  e.preventDefault();
  handleSubmit()
  auth.setEmail(e.target.EMAIL.value); // Set the email in the context
  // auth.setIsPrivacyModalOpen(true); // Open the privacy modal for confirmation
};

  return (
   
    <div className="bg-violet-800 py-16 sm:py-24 md:py-32">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-12 md:gap-8 md:px-8">
      <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:col-span-7">
        <h2 className="inline ">Want product news and updates?</h2><br/>
        <p className="inline  ">Sign up for our newsletter.</p>
      </div>
      <form onSubmit={handleFormSubmit} className="w-full max-w-md md:col-span-5 md:pt-2">
        <div className="flex gap-x-4">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input 
            id="email-address" 
            name="EMAIL" 
            type="email" 
            value={auth.email}
             onChange={(e) => auth.setEmail(e.target.value)}
            required 
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" 
            placeholder="Enter your email"
          />
          <button 
            type="submit" 
            className="flex rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Subscribe
          </button>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-300">
          We care about your data. Read our 
          <a href="https://www.swellai.com/privacy" className="font-semibold text-white"> privacy&nbsp;policy</a>.
        </p>
      </form>
    </div>
  </div>
  );
};

export default NewsletterSignUp;
