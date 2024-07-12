import './styles/globals.css'
import { Gabarito } from 'next/font/google'
import { NavBar } from './components/Navbar'
import Footer from './components/Footer'
import { Providers } from './providers'
import { cn } from "../../lib/utils"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
    <html lang="en" className={gabarito.className} >
      <body  className={cn(
            "min-h-screen antialiased bg-background",'bg-slate-50 dark:bg-zinc-950'
          )}>
      <Providers>
        <NavBar />
        {children}
        <SpeedInsights />
        <Footer />
      </Providers>
      </body>
    </html>
  )
}
