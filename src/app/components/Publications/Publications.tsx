'use client';
import React, { useState } from 'react';

type Publication = {
  id: number;
  title: string;
  text: string;
  image: string | null;
  link1: string;
  link2: string;
  date: string;
};

const publications: Publication[] = [
  {
    id: 1,
    title: 'Solar PV Electric Cooking Systems for Rural Africa',
    text: `This paper presents solar PV electric cooking systems to fill the gap of clean energy stove demand in Africa and in particular in rural communities. The design analyses of four different solar PV electric cooking configurations, based on resistive burner and induction burner, are presented. The levelised cost of energy (LCOE) of the solar PV induction e-cooking, with battery storage, is 0.39 $/kWh. Sensitivity analysis was done to ascertain the affordability range of solar PV e-cooking. It was shown that the combination of the reduced cost of investment and good sunshine would most likely make the solar PV induction e-cooking competitive. However, the acceptability of the solar PV induction cooking will require addressing some important technical, economic, policy and socio-cultural related barriers.`,
    image: 'https://picsum.photos/seed/solar/600/400',
    link1: 'https://doi.org/10.4028/www.scientific.net/AST.107.203',
    link2: 'https://github.com/Bigdaddy-Clinton',
    date: 'June 2021',
  },
  {
    id: 2,
    title: 'Lorem   ipsum Dolor Sit Amet, Consectetur Adipiscing Elit',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    image: null,
    link1: 'https://example.com/doc1',
    link2: 'https://github.com/Bigdaddy-Clinton',
    date: '2022',
  },
];

function truncateWords(text: string, wordCount = 30): string {
  return text.split(' ').slice(0, wordCount).join(' ') + '...';
}

export default function Publications() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className='w-full bg-gray-50 py-20 px-6 lg:px-8'>
      <div className='mx-auto max-w-[1100px] space-y-8'>
        <h2 className='text-3xl lg:text-4xl font-bold text-gray-900'>
          Publications
        </h2>

        {publications.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <article
              key={item.id}
              className='
                bg-white rounded-xl overflow-hidden
                shadow-sm hover:shadow-lg
                transition-all duration-300
                flex flex-col md:flex-row
              '
            >
              {/* Image */}
              {item.image ? (
                <div className='md:w-1/3 h-56 md:h-auto'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='h-full w-full object-cover'
                  />
                </div>
              ) : (
                <div className='md:w-1/3 h-56 md:h-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center'>
                  <span className='text-white text-sm font-semibold opacity-90'>
                    No Image
                  </span>
                </div>
              )}

              {/* Content */}
              <div className='p-6 flex flex-col gap-4 md:w-2/3'>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-gray-800 font-medium mt-1'>
                    {item.date}
                  </p>
                </div>

                <p className='text-gray-700 text-sm'>
                  {isExpanded ? item.text : truncateWords(item.text, 30)}
                </p>

                {/* Buttons */}
                <div className='flex flex-wrap gap-3 mt-auto'>
                  <button
                    type='button'
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className='
                      px-4 py-2 text-sm font-medium
                      border border-black text-black
                      rounded-md hover:bg-gray-100 transition
                    '
                  >
                    {isExpanded ? 'Show less' : 'ABS'}
                  </button>

                  <a
                    href={item.link1}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='
                      px-4 py-2 text-sm font-medium
                       bg-gray-800 text-white rounded-md
                      hover:bg-gray-900 transition
                    '
                  >
                    DOI
                  </a>

                  <a
                    href={item.link2}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='
                      px-4 py-2 text-sm font-medium
                      bg-gray-800 text-white rounded-md
                      hover:bg-gray-900 transition
                    '
                  >
                    Code
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
