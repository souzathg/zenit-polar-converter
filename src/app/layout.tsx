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
      <head> 
        <meta name="google-site-verification" content="pQZ1zm7Kmbepityc9mDyUj9nqsXa-P8-du3wcAHtbpc" />
      </head>
      <body className={inter.className + " min-h-screen"}>
        {children}
        <footer className="text-center hover:opacity-100 text-gray-lighter text-sm flex flex-row justify-center items-center w-full fixed bottom-1 md:bottom-2 opacity-50">Developed with ❤️ by <a target='_blank' href="https://github.com/souzathg" className='hover:text-primary ml-1'>@souzathg</a></footer>
      </body>
    </html>
  )
}
