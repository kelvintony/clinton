import React from 'react';

export default function page() {
  return (
    <main>
      {/* Publications Section */}
      <section className='relative w-full bg-gray-50 py-20 px-6 lg:px-8'>
        <div className='mx-auto max-w-[1000px] space-y-8'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
            Publications
          </h2>

          <div className='space-y-4'>
            <p className='font-semibold text-gray-900'>Abstract:</p>
            <p className='text-gray-700 text-sm lg:text-base'>
              This paper presents solar PV electric cooking systems to fill the
              gap of clean energy stove demand in Africa and in particular in
              rural communities. The design analyses of four different solar PV
              electric cooking configurations, based on resistive burner and
              induction burner, are presented. The levelised cost of energy
              (LCOE) of the solar PV induction e-cooking, with battery storage,
              is 0.39 $/kWh. Sensitivity analysis was done to ascertain the
              affordability range of solar PV e-cooking. It was shown that the
              combination of the reduced cost of investment and good sunshine
              would most likely make the solar PV induction e-cooking
              competitive. However, the acceptability of the solar PV induction
              cooking will require addressing some important technical,
              economic, policy and socio-cultural related barriers.
            </p>

            <p className='text-gray-700 text-sm lg:text-base'>
              DOI:{' '}
              <a
                href='https://doi.org/10.4028/www.scientific.net/AST.107.203'
                className='underline text-indigo-600'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://doi.org/10.4028/www.scientific.net/AST.107.203
              </a>
            </p>

            <p className='text-gray-700 text-sm lg:text-base font-medium'>
              June 2021
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
