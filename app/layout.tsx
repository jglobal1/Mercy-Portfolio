import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mercy Adeoye - Visual Designer Portfolio',
  description: 'I help brands create lasting impression in the heart of their audience using captivating visual designs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
          {/* Floating WhatsApp Chat Button */}
          <a
            href="https://wa.me/2347031494927"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 bottom-6 right-6 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-all duration-300 animate-fade-in group"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
          >
            <span className="block group-hover:animate-bounce">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" className="mr-2"><path d="M16.003 3.2c-7.067 0-12.8 5.733-12.8 12.8 0 2.267.6 4.467 1.733 6.4l-1.867 6.933c-.133.533.4 1.067.933.933l7.067-1.867c1.867 1.067 4 1.6 6.133 1.6 7.067 0 12.8-5.733 12.8-12.8s-5.733-12.8-12.8-12.8zM16 27.733c-2 0-4-0.533-5.733-1.467-.267-0.133-0.533-0.133-0.8-0.067l-5.867 1.6 1.6-5.867c0.067-0.267 0.067-0.533-0.067-0.8-1.067-1.733-1.6-3.733-1.6-5.733 0-6.133 4.933-11.067 11.067-11.067s11.067 4.933 11.067 11.067c0 6.133-4.933 11.067-11.067 11.067zM22.4 20.267c-0.4-0.2-2.267-1.067-2.613-1.2-0.347-0.133-0.6-0.2-0.853 0.2-0.253 0.4-0.98 1.2-1.2 1.453-0.22 0.253-0.44 0.28-0.84 0.093-0.4-0.187-1.693-0.62-3.227-1.98-1.193-1.067-2-2.387-2.227-2.787-0.227-0.4-0.027-0.613 0.173-0.813 0.18-0.18 0.4-0.467 0.6-0.7 0.2-0.233 0.267-0.4 0.4-0.667 0.133-0.267 0.067-0.5-0.033-0.7-0.1-0.2-0.853-2.053-1.167-2.813-0.307-0.747-0.62-0.647-0.853-0.66-0.22-0.013-0.473-0.013-0.727-0.013s-0.667 0.093-1.013 0.467c-0.347 0.373-1.333 1.307-1.333 3.187 0 1.88 1.36 3.693 1.547 3.947 0.187 0.253 2.68 4.093 6.68 5.453 0.933 0.32 1.653 0.507 2.213 0.653 0.927 0.247 1.773 0.213 2.44 0.127 0.747-0.093 2.267-0.92 2.587-1.813 0.32-0.893 0.32-1.653 0.227-1.813-0.093-0.16-0.36-0.253-0.76-0.453z"/></svg>
            </span>
            <span className="font-semibold hidden sm:inline">Let's Discuss Your Project</span>
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}