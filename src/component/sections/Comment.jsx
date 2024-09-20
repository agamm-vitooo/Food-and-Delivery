import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const faqs = [
  { question: 'What is ActiveCampaign?', answer: 'ActiveCampaign is a customer experience automation platform that helps you grow your business.' },
  { question: 'How does ActiveCampaign work?', answer: 'ActiveCampaign allows businesses to create email marketing campaigns, automate follow-ups, and track customer interactions.' },
  { question: 'Do I need a lot of technical experience to use ActiveCampaign?', answer: 'You don’t need to be a developer or designer to use ActiveCampaign. Anyone can create email marketing campaigns and marketing automation using our platform.' },
  { question: 'How does the free trial work?', answer: 'Our free trial allows you to explore the platform for a set period. You can test its features before deciding on a paid plan.' },
];

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full text-left flex justify-between items-center text-lg font-medium py-4 focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span>{faq.question}</span>
                {openQuestion === index ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {/* Framer Motion for Animations */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === index ? 'auto' : 0, opacity: openQuestion === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-gray-600 p-4">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
