import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'SONSAM CYBER | Your Trusted Cyber Services Partner',
  description: 'Providing elite cyber services in Kisii County: Printing, KRA Returns, HELB, Online Applications, and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-white bg-[#0a192f]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
