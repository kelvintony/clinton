import React from 'react';

const newsData = [
  {
    date: 'Oct 21, 2025',
    title: 'Industry Feature — ARC Solutions',
    description:
      'ARC Solutions published an article acknowledging my contribution to applied AI in manufacturing.',
    link: 'https://www.arcsolutions.de/wie-ki-die-arbeitsvorbereitung-unterstuetzen-kann/',
    image: 'https://picsum.photos/seed/ai/800/600',
  },
  {
    date: 'Sep 25, 2025',
    title:
      'Featured — Graduation of the First Erasmus Mundus Meta 4.0 Cohort (ENISE)',
    description:
      'Featured in official coverage by École Centrale Lyon – ENISE.',
    link: 'https://www.tl7.fr/actualites-loire/actualite/actualite_1/saint-etienne-la-premiere-promo-du-master-meta-4-0-diplomee-a-l-enise_12029.html',
    image: null,
  },
  {
    date: 'Jun 26, 2025',
    title: 'Chemnitz Students Impress with AI Innovation at the Paris Airshow',
    description: 'Featured by Uni-Heute following Team Aeromorph’s success.',
    link: 'https://uni-heute.de/sachsen/chemnitzer-studenten-ueberzeugen-mit-ki-innovation-auf-paris-airshow/en',
    image: 'https://picsum.photos/seed/aviation/800/600',
  },
  {
    date: 'Jun 20, 2025',
    title: 'Winner — Airbus Fly Your Ideas Global Prize',
    description: 'Team Aeromorph won the Airbus Fly Your Ideas Global Prize.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7342832559803756545/',
    image: 'https://picsum.photos/seed/aircraft/800/600',
  },
  {
    date: 'Jun 20–Jul 2025',
    title: 'Global Media Coverage of Airbus Fly Your Ideas Win',
    description:
      'International media coverage following the Paris Airshow award.',
    link: 'https://www.tu-chemnitz.de/tu/pressestelle/aktuell/13023/en',
    image: null,
  },
  {
    date: 'Jun 3, 2025',
    title: 'Featured — Leader of Team Aeromorph in Airbus Fly Your Ideas 2025',
    description: 'Featured in CAJ International Magazine.',
    link: 'https://www.delreport.com/2025/06/03/young-nigerian-literary-genius-eyes-airbus-fly-your-ideas-grand-prize/',
    image: 'https://picsum.photos/seed/teamwork/800/600',
  },
  {
    date: 'May 2025',
    title: 'Selected as Semi-Finalist — Airbus Fly Your Ideas Competition',
    description: 'Advanced to the semi-final stage of the global competition.',
    link: 'https://www.linkedin.com/posts/sabine-klauke-9081a8106_germany-france-malaysia-activity-7341371901828636672-Mb0N',
    image: null,
  },
];

export default function News() {
  return (
    <main>
      <section
        id='news'
        className='relative w-full bg-gray-50 py-20 px-6 lg:px-8'
      >
        <div className='mx-auto max-w-[1000px]'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-12'>
            News
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
                  <p className='text-indigo-600 font-semibold text-sm'>
                    {item.date}
                  </p>

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
