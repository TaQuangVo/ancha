  import './globals.css'
  import { Caveat } from 'next/font/google'
  const font = Caveat({ subsets: ['latin'] })
  import Head from "next/head"

  export const metadata = {
    title: 'Ancha',
    description: 'Försäljning av asiatiskt livsmedel såsom boba te, torra, frysta matvaror, färska grönsaker,',
    keywords: 'Boba, bubble tea, asian market, asiatiskt livsmedel, frysta moatvoror, frärska grönskar, huddinge centrum',
    icons: {
      icon: {
        url: "/ancha-favi.jpg",
        type: "image/svg",
      },
      shortcut: { url: "/favicon.png", type: "image/png" },
    },
  }

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={font.className}>
        <body className='noScroll'>
          {children}
        </body>
    </html>
  )
}
