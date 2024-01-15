import './styles/globals.css'
import { Gabarito } from 'next/font/google'
import { NavBar } from './components/Navbar'
import Footer from './components/Footer'
import { Providers } from './providers'
import { cn } from "../../lib/utils"

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio GLM',
  description: 'Portfolio Gian Luca Marchetti, Front End Developer',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={gabarito.className}>
      <body  className={cn(
            "min-h-screen bg-background antialiased",
          )}>
      <Providers>
        <NavBar />
        {children}
        <Footer />
      </Providers>
      </body>
    </html>
  )
}
