import type { Metadata } from 'next';
import { Poppins, Lavishly_Yours } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const lavishlyYours = Lavishly_Yours({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lavishly-yours',
});

export const metadata: Metadata = {
  title: 'CLinton Ikechukwu',
  description: 'Clinton Ikechukwu | Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
