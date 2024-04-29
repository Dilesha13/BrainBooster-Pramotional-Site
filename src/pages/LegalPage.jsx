import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const LegalPage = () => {
  return (
    <div className="bg-gray-800">
      <Navbar className="bg-gray-900 text-white" />
      <div className="container mx-auto  py-20 bg-gray-800 text-gray-100 px-10 lg:px-0 max-w-screen-lg">
        <h1 className="text-4xl font-bold mb-6 mx-auto flex justify-center">Privacy Policy</h1>
        <p className="mb-4 text-slate-300 text-xl">
        Protecting your private information is our priority. This Privacy
          Statement applies to the ScamSensei website and governs data
          collection and usage. The ScamSensei website is a unique platform
          designed to help tourists and locals identify and avoid scams while
          travelling, particularly in countries like Sri Lanka. Using the
          ScamSensei website, you consent to the data practices described in
          this statement.
        </p>


        <h2 className="text-xl font-bold mb-4">Privacy Policy Promise</h2>
        <p className="mb-4 text-slate-300">
          ScamSensei is committed to maintaining the privacy of the personal
          information you provide us when using the ScamSensei website.
          ScamSensei does not sell, rent, or lease its customer lists to third
          parties. This Privacy Policy describes how we treat personal
          information received about you when you visit www.scamsensei.com.
        </p>

        <h2 className="text-xl font-bold mb-4">Information We Collect</h2>
        <p className="mb-4 text-slate-300">
          When you register, we may collect personally identifiable information
          from you, including your full name and email address.
        </p>

        <h2 className="text-xl font-bold mb-4">Right to Deletion</h2>
        <p className="mb-4 text-slate-300">
          Subject to certain exceptions set out below, on receipt of a
          verifiable request from you, we will:
        </p>

        <ul className="list-disc space-y-2 pl-6 mb-4 text-slate-300">
          <li>
            Delete your personal information from our records.
          </li>
          <li>
            Direct any service providers to delete your personal information
            from their records.
          </li>
        </ul>

        <h2 className="text-xl font-bold my-4 ">More Information</h2>
        <p className="mb-4 text-slate-300">
          Please note that we may not be able to comply with requests to delete
          your personal information if it is necessary to:
        </p>

        {/* ... additional content ... */}

        <p className="mt-4 text-slate-300">
          We reserve the right to modify these Terms at any time. Your continued
          use of the Website following the posting of revised Terms means that
          you accept and agree to the changes.
        </p>
        <p className="mt-4 text-slate-300">
          These Terms are governed by and construed in accordance with the laws
          of Sri Lanka.
        </p>
      </div>
      <Footer className="bg-gray-900 text-white" />
    </div>
  );
};

export default LegalPage;
