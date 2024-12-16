"use client"
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same question is clicked again
    } else {
      setActiveIndex(index); // Open the clicked question
    }
  };

  const questions = [
    {
      question: 'How should I apply perfume for the best results?',
      answer: 'Apply perfume on pulse points such as the wrists, behind the ears, and on the neck. These areas help to diffuse the fragrance as your body heats up.'
    },
    {
      question: 'How long does perfume typically last?',
      answer: 'The lasting power of a perfume varies depending on the fragrance concentration. Eau de Parfum lasts longer (6-8 hours) compared to Eau de Toilette (3-4 hours).'
    },
    {
      question: 'What’s the difference between Eau de Parfum and Eau de Toilette?',
      answer: 'Eau de Parfum has a higher concentration of fragrance oils, making it last longer and smell stronger than Eau de Toilette, which is lighter and more subtle.'
    },
    {
      question: 'How should I store my perfumes?',
      answer: 'Perfumes should be stored in a cool, dry place away from direct sunlight and extreme temperatures to maintain their quality over time.'
    },
    {
      question: 'Can I wear perfume on my clothes?',
      answer: 'It’s best to apply perfume directly to the skin for the most accurate fragrance experience. However, you can lightly spritz it on clothes, but be cautious with delicate fabrics.'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Perfume FAQ</h2>
      <div className="container mx-auto max-w-2xl">
        {questions.map((item, index) => (
          <div key={index} className="mb-4">
            <div
              className="cursor-pointer p-4 bg-gray-100 rounded-lg flex justify-between items-center"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
