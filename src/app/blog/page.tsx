import React from 'react';

export default function page() {
  return (
    <div>
      <section className='w-full min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 lg:px-8'>
        <h1 className='text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 text-center'>
          Coming Soon
        </h1>
        <p className='text-gray-700 text-lg lg:text-xl text-center max-w-xl'>
          The blog is under construction. Stay tuned for updates, articles, and
          insights on AI, intelligent manufacturing, and innovative projects.
        </p>
        <div className='mt-8'>
          <span className='inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg text-lg lg:text-xl'>
            🔧 Under Construction
          </span>
        </div>
      </section>
    </div>
  );
}
