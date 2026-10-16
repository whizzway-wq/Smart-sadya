import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Smart Sadya', description: 'Events, food and services in one place' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ml"><body>{children}</body></html>; }
