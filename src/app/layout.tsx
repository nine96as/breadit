import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { GeistSans } from 'geist/font/sans';

export const metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn(
        'bg-white text-slate-900 antialiased light',
        GeistSans.className
      )}
    >
      <body className={cn('min-h-screen pt-12 bg-slate-50 antialiased')}>
        <Navbar />

        <div className='container h-full pt-12 mx-auto max-w-7xl'>
          {children}
        </div>
      </body>
    </html>
  );
}
