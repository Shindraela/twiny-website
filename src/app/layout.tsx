import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Twiny',
  description: "L'app de rencontres 100% amicales !"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
