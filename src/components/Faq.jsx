import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqData = [
    {
        section: "Orders & Shipping",
        questions: [
            {
                question: "Can I make changes to my order before it ships?",
                answer: "Yes, you can make changes to your order before it ships. Please contact our customer service for assistance."
            },
            {
                question: "Why was I charged tax?",
                answer: "Taxes are applied based on the state regulations. The tax amount is calculated at checkout."
            },
            {
                question: "Why isn’t my payment going through?",
                answer: "There could be several reasons why your payment isn’t going through. Please check your payment details and try again or contact your bank for assistance."
            },
            {
                question: "Will I be charged right away when I place an order?",
                answer: "Yes, you will be charged immediately after placing your order."
            }
        ]
    },
    // Add more sections here
    {
        section: "Products & Returns",
        questions: [
            {
                question: "Can I make changes to my order before it ships?",
                answer: "Yes, you can make changes to your order before it ships. Please contact our customer service for assistance."
            },
            {
                question: "Why was I charged tax?",
                answer: "Taxes are applied based on the state regulations. The tax amount is calculated at checkout."
            },
            {
                question: "Why isn’t my payment going through?",
                answer: "There could be several reasons why your payment isn’t going through. Please check your payment details and try again or contact your bank for assistance."
            },
            {
                question: "Will I be charged right away when I place an order?",
                answer: "Yes, you will be charged immediately after placing your order."
            }
        ]
    },
];

const Faq = () => {
    return (
        <div className="py-15">
            <section className="mb-12 ">
                <img src="/assets/images/faqbanner.jpg" alt="FAQ" className="w-full h-64 object-cover bg-grey" />
                <div className="mt-8 text-center">
                    <h2 className="text-3xl font-bold">Don't see your question here? Drop us a line!</h2>
                    <p className="mt-4">Check out our FAQ or contact us below</p>
                    <p className="mt-2"><a href="mailto:arvin@aimycomfort.com" className="text-blue-600">arvin@aimycomfort.com</a></p>
                    <p className="mt-2">Chat with us</p>
                    <p className="mt-2">Monday - Friday / 9am - 5pm EST</p>
                    <p className="mt-2">Saturday - Sunday / Closed</p>
                </div>
            </section>

            {faqData.map((section, index) => (
                <FaqSection key={index} section={section} />
            ))}
        </div>
    );
};

const FaqSection = ({ section }) => {
    return (
        <section className="py-8 screen-max-width">
            <h3 className="text-xl font-bold mb-6">{section.section}</h3>
            <div className="space-y-4">
                {section.questions.map((faq, index) => (
                    <FaqItem key={index} faq={faq} />
                ))}
            </div>
        </section>
    );
};

const FaqItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <details className="bg-white p-4 rounded-lg shadow" open={isOpen} onClick={toggleOpen}>
            <summary className="font-semibold cursor-pointer flex justify-between items-center">
                {faq.question}
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </summary>
            <p className="mt-2">{faq.answer}</p>
        </details>
    );
};

export default Faq;
