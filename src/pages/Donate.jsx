import Header from "../components/Header";
import Footer from "../components/Footer";
import DonateComponent from "../components/Donate";

function Donate() {
  const donate = [
    {
      title: "Basic Donation",
      subtitle: "For ones intrested in supporting the project and helping us to keep the project alive.",
      amount: 10,
      features: [
        [ "You help us to keep the project alive",true],
        ["You help us improve the project with new features",true],
        ["Get the premium support from the team.",false],
        ["Get access to the beta features.",false],
      ],
    },
    {
      title: "Standard Donation",
      subtitle:"For ones intrested in supporting the project to keep it alive and get the premium support.",
      amount: 50,
      features: [
        [ "You help us to keep the project alive",true],
        ["You help us improve the project with new features",true],
        ["Get the premium support from the team.",true],
        ["Get access to the beta features.",false],
      ],
    },
    {
      title: "Premium Donation",
      subtitle:"For ones intrested in supporting the project and get the premium support and beta features.",
      amount: 80,
      features: [
       [ "You help us to keep the project alive",true],
        ["You help us improve the project with new features",true],
        ["Get the premium support from the team.",true],
        ["Get access to the beta features.",true],
      ],
    },
  ];
  return (
    <>
      <Header />
      <section className="bg-violet-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Support Our Mission
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-white">
            Your generous contribution fuels our efforts to maintain and enhance BrainBooster.
             Every donation is invested directly into sustaining the platform and innovating new features to students.
             Join us in creating a Inteligent journey for all.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {donate.map((donate, key) => (
              <DonateComponent
                key={key}
                title={donate.title}
                subtitle={donate.subtitle}
                amount={donate.amount}
                features={donate.features}

              />
            ))}
         
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Donate;
