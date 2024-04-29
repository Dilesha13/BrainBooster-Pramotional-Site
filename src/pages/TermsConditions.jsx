import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-gray-800">
      <Navbar className="bg-gray-900 text-white" />
      <div className="container mx-auto py-20 bg-gray-800 text-gray-100 px-10 lg:px-0 max-w-screen-lg">
        <h1 className="text-4xl font-bold mb-6 mx-auto flex justify-center">Terms and Conditions</h1>
        <p className="mb-4 text-slate-300 text-xl">
          Welcome to ScamSensei! These terms and conditions outline the rules and regulations for the use of ScamSensei's Website, located at www.scamsensei.com.
        </p>
        <p className="mb-4 text-slate-300 text-xl">
          By accessing this website we assume you accept these terms and conditions. Do not continue to use ScamSensei if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-xl font-bold mb-4">Cookies</h2>
        <p className="mb-4 text-slate-300">
          The website uses cookies to help personalize your online experience. By accessing ScamSensei, you agreed to use the required cookies.
        </p>

        <h2 className="text-xl font-bold mb-4">License</h2>
        <p className="mb-4 text-slate-300">
          Unless otherwise stated, ScamSensei and/or its licensors own the intellectual property rights for all material on ScamSensei. All intellectual property rights are reserved. You may access this from ScamSensei for your own personal use subjected to restrictions set in these terms and conditions.
        </p>

        <h2 className="text-xl font-bold mb-4">You must not:</h2>
        <ul className="list-disc space-y-2 pl-6 mb-4 text-slate-300">
          <li>Republish material from ScamSensei</li>
          <li>Sell, rent, or sub-license material from ScamSensei</li>
          <li>Reproduce, duplicate, or copy material from ScamSensei</li>
          <li>Redistribute content from ScamSensei</li>
        </ul>

        <h2 className="text-xl font-bold mb-4">User Comments</h2>
        <p className="mb-4 text-slate-300">
          This Agreement shall begin on the date hereof. Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. ScamSensei does not filter, edit, publish, or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of ScamSensei, its agents, or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions.
        </p>

        {/* ... additional sections ... */}

        <p className="mt-4 text-slate-300">
          ScamSensei reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.
        </p>
        <p className="mt-4 text-slate-300 mb-2">
          You warrant and represent that:
        </p>

        <ul className="list-disc space-y-2 pl-6 mb-4 text-slate-300">
          <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
          <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;</li>
          <li>The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material which is an invasion of privacy.</li>
        </ul>

        <p className="text-slate-300 mt-10">
          The Terms and Conditions page was created at ScamSensei's discretion. If you have any queries regarding any of our terms, please contact us.
        </p>

      </div>
      <Footer className="bg-gray-900 text-white" />
    </div>
  );
};

export default TermsAndConditionsPage;
