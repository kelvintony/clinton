'use client';

import Image from 'next/image';
import News from './components/News/News';
import Publications from './components/Publications/Publications';

export default function Home() {
  return (
    <main>
      <section
        id='home'
        className='relative w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden'
      >
        <div className='mx-auto max-w-[1000px] px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-10 lg:gap-20'>
          {/* Left - Text Content */}
          <div className='flex-1 space-y-6 lg:space-y-8'>
            <p className='text-2xl lg:text-3xl font-extrabold text-gray-900'>
              Clinton Ikechukwu
            </p>

            {/* Mobile Image (shown only on small screens, after name) */}
            <div className='relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105 lg:hidden -translate-y-5'>
              <Image
                src='/clintonimg.png'
                alt='Clinton Ikechukwu'
                className='object-cover w-full h-full rounded-xl'
                priority
                fill
              />
            </div>

            <p className='text-sm lg:text-base font-medium text-indigo-600 tracking-wide uppercase'>
              AI Engineer | Materials Engineer | Intelligent Manufacturing
              Systems | Engineer–Storyteller
            </p>
            <h1 className='text-3xl lg:text-5xl font-bold text-gray-900 leading-snug'>
              Designing intelligent systems that connect machines, data, and
              human ambition.
            </h1>
            <p className='text-gray-700 text-sm lg:text-base leading-relaxed'>
              I hold a joint Master&apos;s degree in Industry 4.0 and Advanced
              Manufacturing across three prestigious European universities. My
              education spans mechanical engineering, manufacturing engineering,
              materials science, and artificial intelligence, with a focus on
              transforming complex physical systems into intelligent,
              data-driven decision frameworks.
            </p>
            <p className='text-gray-700 text-sm lg:text-base leading-relaxed'>
              My technical foundation began in hardware and embedded systems,
              working close to machines where constraints are physical,
              real-time, and unforgiving. This background continues to shape how
              I approach AI, not as abstract models, but as systems that must
              operate reliably in real-world environments.
            </p>
            <p className='text-gray-700 text-sm lg:text-base leading-relaxed'>
              Today, I explore AI and machine learning, developing vision
              systems, feature-recognition pipelines, and decision-support tools
              for advanced manufacturing. Alongside engineering, I write
              creatively as a thought leader, exploring the human, cultural,
              artistic, and ethical dimensions of technology and progress.
            </p>
            {/* Current Focus Section */}
            <div className='mt-8 space-y-4'>
              <p className='text-xl lg:text-2xl font-semibold text-gray-900'>
                Current Focus
              </p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 text-sm lg:text-base'>
                <li>Artificial Intelligence &amp; Deep Learning</li>
                <li>Computer Vision for Manufacturing</li>
                <li>Industry 4.0 &amp; Digital Manufacturing</li>
                <li>Embedded-to-Intelligent Systems Design</li>
                <li>Technical &amp; Literal &amp; Creative Writing</li>
              </ul>
              <p className='mt-2 text-gray-700 text-sm lg:text-base italic'>
                Open to collaboration across research, industry, and ideas.
              </p>
            </div>
          </div>

          {/* Right - Hero Image (shown only on large screens) */}
          <div className='flex-1 relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105 hidden lg:block -translate-y-70'>
            <Image
              src='/clintonimg.png'
              alt='Clinton Ikechukwu'
              className='object-cover w-full h-full rounded-xl'
              priority
              fill
            />
          </div>
        </div>

        {/* Decorative Circles */}
        <div className='absolute -top-20 -right-20 w-72 h-72 bg-indigo-100 rounded-full opacity-30 animate-pulse'></div>
        <div className='absolute -bottom-32 -left-16 w-96 h-96 bg-pink-100 rounded-full opacity-20 animate-pulse'></div>
      </section>

      {/* News Section */}
      <News />

      {/* Publications Section */}
      <Publications />
      {/* Awards Section */}
    </main>
  );
}
