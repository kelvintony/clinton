import React from 'react';

const newsData = [
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://example.com/doc1',
    image: null,
  },
  {
    title: 'Lorem ipsum consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.',
    link: 'https://example.com/doc1',
    image: null,
  },
  {
    title: 'Lorem ipsum sed do eiusmod tempor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    link: 'https://example.com/doc1',
    image: null,
  },
];

export default function Projects() {
  return (
    <main>
      <section
        id='news'
        className='relative w-full bg-gray-50 py-20 px-6 lg:px-8'
      >
        <div className='mx-auto max-w-[1000px]'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-12'>
            Projects
          </h2>

          {/* GRID */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {newsData.map((item, index) => (
              <article
                key={index}
                className='
                  bg-white rounded-xl overflow-hidden
                  shadow-sm transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                  flex flex-col
                '
              >
                {/* Image / Placeholder */}
                {item.image ? (
                  <div className='h-48 w-full overflow-hidden'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='h-full w-full object-cover'
                    />
                  </div>
                ) : (
                  <div className='h-48 w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center'>
                    <span className='text-white text-sm font-semibold opacity-90'>
                      No Image
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className='p-6 space-y-3 flex-1 flex flex-col'>
                  <h3 className='font-semibold text-gray-900'>{item.title}</h3>

                  <p className='text-gray-700 text-sm flex-1'>
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-indigo-600 text-sm font-medium underline mt-2'
                  >
                    🔗 Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
