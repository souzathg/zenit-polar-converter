import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zenit Polar Converter',
  description: 'A simple Zenit Poler Converter. Made with ❤️ by @souzathg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen"}>
        {children}
        <footer className="text-center text-gray-lighter text-sm flex flex-row justify-center items-center w-full fixed bottom-0 md:bottom-2 opacity-50">Developed with ❤️ by <a target='_blank' href="https://github.com/souzathg" className='hover:text-primary ml-1'>@souzathg</a></footer>
      </body>
    </html>
  )
}
