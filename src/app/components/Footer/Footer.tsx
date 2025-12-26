import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full bg-gray-900 text-gray-100 py-10'>
      <div className='mx-auto max-w-[1000px] px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-6'>
        {/* Contact Info */}
        <div className='flex flex-col items-center lg:items-start space-y-2'>
          <p className='text-sm lg:text-base flex items-center gap-2'>
            <FaEnvelope />{' '}
            <a
              href='mailto:clintonikechukwu@gmail.com'
              className='hover:text-indigo-400'
            >
              clintonikechukwu@gmail.com
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className='flex items-center gap-6'>
          <a
            href='https://www.linkedin.com/in/clinton-ikechukwu-164840119/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-indigo-400 text-2xl'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://twitter.com/' // replace with your Twitter handle
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-indigo-400 text-2xl'
            aria-label='Twitter'
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className='mt-8 text-center text-gray-400 text-sm'>
        &copy; {new Date().getFullYear()} Clinton Ikechukwu. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
