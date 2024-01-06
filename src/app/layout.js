import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from './components/BootstrapClient';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fincity NxtWave Assignment',
  description: 'Fincity NxtWave Assignment, Created by Ravi Kiran using Next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        <BootstrapClient/>
        </body>
    </html>
  )
}
