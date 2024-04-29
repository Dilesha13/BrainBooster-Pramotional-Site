import  { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import AccordionItem from '../components/AccordionItem';

const FAQAccordion = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (idx) => {
    setActiveTab(activeTab === idx ? null : idx);
  };

  const questions = [
    {
      question: "How does the website facilitate the process of uploading PDF documents?",
      subq: [[
        "What is the process for uploading a PDF document to our website?",
        "How are questions generated from the uploaded PDF documents?",
        "What happens after a user answers the generated questions?"
      ]],
      answer: [[
        "To upload a PDF document, users navigate to the upload section of our website and follow the prompts to select and upload their file.",
        "Questions are generated using advanced algorithms that analyze the content of the PDF to extract key information and formulate relevant questions.",
        "After a user answers the generated questions, the system evaluates their responses and provides instant feedback on correctness and proficiency."
      ]],
    },
    {
      question: "What mechanisms are in place for evaluating user responses to generated questions?",
      subq: [[
        "How does the system evaluate user responses to the generated questions?",
        "What factors are considered in personalizing book recommendations for users?",
        "What features are available in the community chat section of the website?"
      ]],
      answer: [[
        "The system evaluates user responses by comparing them against predefined correct answers and assessing factors such as accuracy and completeness.",
        "Book recommendations are personalized based on user study preferences, interests, and the content of the uploaded PDFs.",
        "The community chat section allows users to engage in real-time discussions, share insights, and collaborate with peers on study topics."
      ] ],
    },
    {
      question: "Can users personalize their experience by adjusting the time limit for answering questions?",
      subq: [[
        "Can users customize the time limit for answering questions on the website?",
        "How does the system generate feedback for user responses?",
        "What criteria are used to recommend books for users to improve their knowledge?"
      ]
      ],
      answer: [[
        "Yes, users can customize the time limit for answering questions based on their preferences.",
        "The system generates feedback by analyzing user responses and providing insights on correctness, areas of improvement, and proficiency levels.",
        "Book recommendations are based on user interests, study history, and the content of uploaded PDFs, aiming to enhance knowledge in specific subjects."
      ]],
    },
    {
      question: "What are the capabilities of the system in summarizing uploaded PDF documents?",
      subq: [[
        "Is there a limit to the size or type of PDF documents that can be uploaded?",
        "How does the system summarize the content of uploaded PDF documents?",
        "Are there any prerequisites for users to join the community chat section?"
      ]
      ],
      answer: [[
        "There is no specific limit to the size or type of PDF documents that can be uploaded, although larger files may take longer to process.",
        "The system uses natural language processing algorithms to summarize the content of uploaded PDF documents, providing concise summaries for users.",
        "No prerequisites are required to join the community chat section. Users can simply log in to their accounts and start engaging with others in the community."
      ]],
    },
    {
      question: "How does the website ensure the security and privacy of uploaded PDF documents, enable users to track their progress and performance, and provide tools or resources for enhancing study efficiency?",
      subq: [[
        "How does the system ensure the security and privacy of uploaded PDF documents?",
        "Can users track their progress and performance on the website?",
        "Are there any tools or resources available to assist users in improving their study efficiency?"
      ]],
      answer: [[
        "Security and Privacy: The website uses encryption and secure servers to protect uploaded PDFs, ensuring user privacy.",
        "Progress Tracking: Users can monitor their study progress and performance through personalized dashboards.",
        "Study Enhancement Tools: The website provides resources like study guides and quizzes to help users improve their learning efficiency."
      ]],
    },
  
  ];

  return (
    <>
    <Navbar />
    <main className="p-4  sm:p-6 bg-violet-800 min-h-[100vh]">
      <div className="mx-auto max-w-screen-xl ">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 dark:text-slate-200">FAQ - Read this before you email us any questions</h2>
        <ul className="flex flex-col">

          {questions.map((item, idx) => (
            <AccordionItem item={item} idx={idx} key={idx} handleClick={handleClick} activeTab={activeTab} />
          ))}
        </ul>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default FAQAccordion;
