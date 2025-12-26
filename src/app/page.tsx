'use client';

import Image from 'next/image';

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
      <section
        id='news'
        className='relative w-full bg-gray-50 pt-20 px-6 lg:px-8'
      >
        <div className='mx-auto max-w-[1000px] space-y-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-8'>
            News
          </h2>

          {/* Oct 21, 2025 */}
          <div className='space-y-2'>
            <p className='text-indigo-600 font-semibold text-sm lg:text-base'>
              Oct 21, 2025
            </p>
            <p className='font-semibold text-gray-900'>
              Industry Feature &mdash; ARC Solutions
            </p>
            <p className='text-gray-700 text-sm lg:text-base'>
              ARC Solutions published an article acknowledging my contribution
              to applied AI in manufacturing, highlighting my work on deep
              learning&ndash;based automated feature recognition and AI-driven
              CAD/CAM workflows.
            </p>
            <p className='text-indigo-600 font-medium text-sm lg:text-base'>
              🔗{' '}
              <a
                href='https://www.arcsolutions.de/wie-ki-die-arbeitsvorbereitung-unterstuetzen-kann/'
                className='underline'
              >
                Link: Arc Solutions article
              </a>
            </p>
          </div>

          {/* Sep 25, 2025 */}
          <div className='space-y-2'>
            <p className='text-indigo-600 font-semibold text-sm lg:text-base'>
              Sep 25, 2025
            </p>
            <p className='font-semibold text-gray-900'>
              Featured &mdash; Graduation of the First Erasmus Mundus Meta 4.0
              Cohort (ENISE, Saint-&Eacute;tienne)
            </p>
            <p className='text-gray-700 text-sm lg:text-base'>
              Featured in official coverage by &Eacute;cole Centrale Lyon
              &ndash; ENISE, marking the graduation of the first cohort of the
              Erasmus Mundus Meta 4.0 Master&rsquo;s degree. The programme is a
              highly selective international course in advanced manufacturing,
              artificial intelligence, admitting approximately 30 students
              annually from over 1,000 global applicants. I was featured as a
              student leader and programme delegate, and interviewed in the
              accompanying video, reflecting on the academic, cultural, and
              collaborative experience of the cohort.
            </p>
            <p className='text-indigo-600 font-medium text-sm lg:text-base'>
              🔗{' '}
              <a
                href='https://www.tl7.fr/actualites-loire/actualite/actualite_1/saint-etienne-la-premiere-promo-du-master-meta-4-0-diplomee-a-l-enise_12029.html'
                className='underline'
              >
                Link: ENISE article &amp; video
              </a>
            </p>
          </div>

          {/* Jun 26, 2025 */}
          <div className='space-y-2'>
            <p className='text-indigo-600 font-semibold text-sm lg:text-base'>
              Jun 26, 2025
            </p>
            <p className='font-semibold text-gray-900'>
              Chemnitz Students Impress with AI Innovation at the Paris Airshow
            </p>
            <p className='text-gray-700 text-sm lg:text-base'>
              Featured by Uni-Heute (Germany) following the success of Team
              Aeromorph at the Paris International Airshow, recognising the
              team&rsquo;s AI innovation in aviation safety.
            </p>
            <p className='text-indigo-600 font-medium text-sm lg:text-base'>
              🔗{' '}
              <a
                href='https://uni-heute.de/sachsen/chemnitzer-studenten-ueberzeugen-mit-ki-innovation-auf-paris-airshow/en'
                className='underline'
              >
                Link: Uni-Heute article
              </a>
            </p>
          </div>

          {/* Jun 20, 2025 */}
          <div className='space-y-2'>
            <p className='text-indigo-600 font-semibold text-sm lg:text-base'>
              Jun 20, 2025
            </p>
            <p className='font-semibold text-gray-900'>
              Winner &mdash; Airbus Fly Your Ideas Global Prize (Paris
              International Airshow 2025)
            </p>
            <p className='text-gray-700 text-sm lg:text-base'>
              Team Aeromorph was awarded the Airbus Fly Your Ideas Global Prize
              at the Paris International Airshow for an AI-based emergency
              landing decision-support system.
            </p>
            <p className='text-indigo-600 font-medium text-sm lg:text-base'>
              🔗{' '}
              <a
                href='https://www.linkedin.com/feed/update/urn:li:activity:7342832559803756545/'
                className='underline'
              >
                Official announcement video/post: Airbus Official link
              </a>
            </p>
          </div>

          {/* Jun 20–Jul 2025 */}
          <div className='space-y-2'>
            <p className='text-indigo-600 font-semibold text-sm lg:text-base'>
              Jun 20&ndash;Jul 2025
            </p>
            <p className='font-semibold text-gray-900'>
              Global Media Coverage of Airbus Fly Your Ideas Win
            </p>
            <p className='text-gray-700 text-sm lg:text-base'>
              Following the Paris Airshow award, the project received
              international media coverage:
            </p>
            <ul className='list-disc list-inside text-gray-700 text-sm lg:text-base space-y-1'>
              <li>
                <a
                  href='https://www.tu-chemnitz.de/tu/pressestelle/aktuell/13023/en'
                  className='underline text-indigo-600'
                >
                  TU Chemnitz &mdash; Official University Press Release
                </a>
              </li>
              <li>
                <a
                  href='https://firstnewsroom.com/2025/07/08/young-nigerian-duo-clinton-ikechukwu-and-oghosa-abu-win-global-fly-your-ideas-airbus-innovation-prize/'
                  className='underline text-indigo-600'
                >
                  First Newsroom
                </a>
              </li>
              <li>
                <a
                  href='https://thesilkroadtoday.com/2025/07/14/young-nigerian-duo-clinton-ikechukwu-and-oghosa-abu-win-global-fly-your-ideas-airbus-innovation-prize/'
                  className='underline text-indigo-600'
                >
                  Silk Road Today
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/posts/campusfrancenigeria_aviation-ai-innovation-activity-7350600214023446528-Ug-i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB19dNwBCKkQ54d79I4fPkS1uLTXzJL9bI0'
                  className='underline text-indigo-600'
                >
                  Campus France Nigeria
                </a>
              </li>
            </ul>
          </div>

          {/* Jun 3, 2025 */}
          <div className='space-y-2'>
            <p className='text-indigo-600 font-semibold text-sm lg:text-base'>
              Jun 3, 2025
            </p>
            <p className='font-semibold text-gray-900'>
              Featured &mdash; Leader of Team Aeromorph in Airbus Fly Your Ideas
              2025 (Semi-Finalist Coverage)
            </p>
            <p className='text-gray-700 text-sm lg:text-base'>
              Featured in the Congress of African Journalists (CAJ)
              International Magazine as leader of Team Aeromorph following
              qualification for the finals of the Airbus Fly Your Ideas 2025
              competition. The article highlights my role in leading a
              multidisciplinary team, the AI-powered emergency-landing assistant
              (EVA_LAND), and my dual identity as an engineer and creative
              writer. The feature documents the team&rsquo;s progression from
              over 300 global teams to the final stage at the Paris
              International Airshow.
            </p>
            <p className='text-indigo-600 font-medium text-sm lg:text-base'>
              🔗{' '}
              <a
                href='https://www.delreport.com/2025/06/03/young-nigerian-literary-genius-eyes-airbus-fly-your-ideas-grand-prize/'
                className='underline'
              >
                Link: CAJ International Magazine article
              </a>
            </p>
          </div>

          {/* May 2025 */}
          <div className='space-y-2'>
            <p className='text-indigo-600 font-semibold text-sm lg:text-base'>
              May 2025
            </p>
            <p className='font-semibold text-gray-900'>
              Selected as Semi-Finalist &mdash; Airbus Fly Your Ideas
              Competition
            </p>
            <p className='text-gray-700 text-sm lg:text-base'>
              Advanced to the semi-final stage of the Airbus Fly Your Ideas
              global innovation competition, recognising the project&rsquo;s
              technical merit and innovation potential among hundreds of
              international teams.
            </p>
            <p className='text-indigo-600 font-medium text-sm lg:text-base'>
              🔗{' '}
              <a
                href='airbus/competition
https://www.linkedin.com/posts/sabine-klauke-9081a8106_germany-france-malaysia-activity-7341371901828636672-Mb0N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB19dNwBCKkQ54d79I4fPkS1uLTXzJL9bI0'
                className='underline'
              >
                Link: Airbus/Competition Announcement
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section
        id='awards'
        className='relative w-full bg-gray-50 py-20 px-6 lg:px-8'
      >
        <div className='mx-auto max-w-[1000px] space-y-8'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
            Awards
          </h2>

          <ul className='list-disc list-inside space-y-3 text-gray-700 text-sm lg:text-base'>
            <li>
              Global Winner &mdash; Airbus FlyYourIdeas Innovation Prize, 2025
            </li>
            <li>
              Erasmus Mundus Joint Master&rsquo;s in Manufacturing 4.0 by
              intElligent &amp; susTAinable technologies by the European Union,
              2023
            </li>
            <li>Accesspreneur Business Grant Prize Award by NYSC, 2022</li>
            <li>
              Best Graduating Student of the Department of Mechanical
              Engineering, Class of 2019
            </li>
            <li>NSE, PHC Branch Award for Academic Excellence, 2020</li>
            <li>
              NUESA Award for Leadership Excellence, Faculty of Engineering
            </li>
            <li>
              Academic Excellence Scholarship Award &amp; ENI AGIP Scholarship
              Award
            </li>
            <li>
              Most Talented Teenager of the Year, 2012, Assemblies of God,
              Nigeria
            </li>
            <li>Winner of the Governor&rsquo;s Cup, Rivers State</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
