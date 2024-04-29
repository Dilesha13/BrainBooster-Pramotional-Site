
import Header from '../components/Header'
import Footer from '../components/Footer'
import TeamMember from '../components/TeamMember'
import Akash from '../assets/Akash Perera.jpg'
import Imashi from '../assets/Imashi Senadheera.jpg'
import Nipuni from '../assets/Nipuni Pathirana.jpg'
import Tharupa from '../assets/Hasini Tharupa.jpg'
import Tharushi from '../assets/Tharushi Dilesha.jpg'
function About() {
  const team = [
    {
      name: "Imashi Senadheera",
      image: Imashi,
      position:"Leader of the team",
      contribution:"Lead the team to develop the project and manage the team. He is responsible for arranging the meetings and managing the project."
    },
    {
      name: "Hasini Tharupa",
      image: Tharupa,
      position:"UI/UX Designer",
      contribution:"Design the user interface and make the website of the project user friendly."
    },
    {
      name: "Akash Perera",
      image: Akash,
      position:"Marketing Manager",
      contribution:"Promote the project and make the project popular among the users by using social media and a custom website."
    },
    {
      name: "Nipuni Pathirana",
      image: Nipuni,
      position:"Frontend Developer",
      contribution:"Develop the front end of the project and add frontend features to the project."
    },
    {
      name: "Tharushi Dilesha",
      image: Tharushi,
      position:"Backend Developer",
      contribution:"Develop the project's backend and add backend features to the project like authentication and database management."
    },
  ];
  return (
    <div>
        <Header />
        <section className="bg-violet-800">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
 
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Our Team
        </h2>
        <p className="font-light text-gray-900 lg:mb-16 sm:text-xl dark:text-white">
          Get to know the team behind the project. We are a group of passionate individuals who are dedicated to making this project a success.
        </p>
      </div>
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {team.map((member,key) => (
          <TeamMember key={key} image={member.image} name={member.name} position={member.position} contribution={member.contribution}/>
        ))}
    
     </div>
  </div>
</section>
 
 <Footer />
    </div>
  )
}

export default About
