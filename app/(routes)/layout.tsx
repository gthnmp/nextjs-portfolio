import './globals.css';
import { openSans, notoSerif } from '../_assets/fonts';
import Navigation from '../_component/global/Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${notoSerif.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="<generated>"/>
      </head>
      <body className='bg-white text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100'>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
