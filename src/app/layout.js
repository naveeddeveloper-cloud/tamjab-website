import './globals.css';
// 1. Import the font from Google
import { Bodoni_Moda, Inter } from 'next/font/google';

// 2. Configure the Serif font (for the logo)
const bodoni = Bodoni_Moda({ 
  subsets: ['latin'],
  variable: '--font-bodoni', // This creates a CSS variable
  display: 'swap',
});

// 3. Configure the Sans font (for the menu)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: "Tamjab Consultancy",
  description: "Management Consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 4. Add both font variables to the body */}
      <body className={`${bodoni.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}