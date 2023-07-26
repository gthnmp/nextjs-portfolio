import './globals.css';
import './preloaderAnimation.css';
import { openSans, notoSerif, poiretOne } from '../_assets/fonts';
import Navigation from '../_component/global/Navigation';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${poiretOne.variable} ${notoSerif.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="<generated>"/>
        <meta property="og:title" content="Gathan Mahesa - Web Developer"/>
        <meta property="og:description" content="Gathan Mahesa is a freelance web developer that specialize in user interface, motions, animations, and dynamic user experiences."/>
        <meta property="og:image" content="https://github.com/gthnmp/gathan.vercel.app/blob/master/public/assets/preview/share.webp?raw=true"/>
    
      </head>
      <body className='bg-white text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100'>
        <Navigation/>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}
