import './globals.css';

export const metadata = {
  title: 'Portfolio Snapshot',
  description: 'Track your investment portfolio with detailed allocation, holdings, and performance overview. A Fintech snapshot app.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
      </head>
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
