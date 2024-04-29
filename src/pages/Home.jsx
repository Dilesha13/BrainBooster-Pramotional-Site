import Header from '../components/Header'
import HeroSection from '../components/Hero'
import Feature from '../components/Feature'
import CallToAction from '../components/CallToAction'
import NewsletterSignUp from '../components/NewsLetter'
import Footer from '../components/Footer'
import { useRef,useEffect } from 'react'
import { useAuth } from '../hooks/context'
import brainbooster from "../assets/brain.jpeg";
import chatbot from "../assets/chatbot.jpeg";

function Home() {

  const auth = useAuth();

  const mySectionRef = useRef(null);
  const scrollToSection = () => {
    mySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  useEffect(() => {
    if (auth.isNewsletterSubmitting && auth.proceed) {
      auth.handleSubmittomail();
      auth.setIsNewsletterSubmitting(false); // Reset the flag after submission
    }
  }, [auth.isNewsletterSubmitting, auth]);


  const handleSubmit = () => {
    auth.setIsPrivacyModalOpen(true);
    auth.setIsNewsletterSubmitting(true);
  };

  const feature = [
    {
      title: "Focus,Learn,Conquer",
      description: "Maximize study efficiency with our platform's intuitive features. Stay ahead in your academic journey effortlessly.Our platform lets you:",
      subdescription: ["Book Recommendation: Explore curated textbooks and guides tailored to your study topics for enhanced learning.",
    "PDF Summarization: Quickly grasp key concepts with automated summaries of uploaded study materials.",
    "Chat Community:Connect with fellow learners, share insights, and collaborate in our vibrant chat community.",
  "Customize Timetable: Stay organized with personalized study schedules and task reminders."],
      image: brainbooster,
    },
    {
      title: "Smart Quiz Builder",
      description: "Unlock your study potential with our Smart Quiz Builder. Transform static PDFs into vibrant quizzes that adapt to your learning pace and preferences. Personalize your quizzes with advanced algorithms that generate questions tailored to your unique study goals. Dive deep into your subjects with dynamic quizzes that challenge and inspire. Elevate your study efficiency with our Smart Quiz Builder and embark on a personalized learning journey like never before.",
      subdescription: [],
      image: chatbot,
    },
    
  ];

  return (
    <div>
        <Header />
 
 <main>
 <div className="min-h-[10vh] bg-purple-800 ">
   <HeroSection />
   </div>
   <div className="min-h-[10vh] bg-purple-800">
   <Feature  order1={"order-2"} order2={"order-1"} feature={feature[0]} />
   
   </div>
   <div className="min-h-[10vh] bg-purple-800">
   <Feature  order1={"order-1"} order2={"order-2"} feature={feature[1]}/>
   
   </div>
   <div className=" bg-purple-800">
   <CallToAction />
    </div>
   
 </main>
 <NewsletterSignUp handleSubmit={handleSubmit}/>
 <Footer />
    </div>
  )
}

export default Home