import { Open_Sans, Noto_Serif } from 'next/font/google'

export const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-open-sans'
})

export const notoSerif = Noto_Serif({ 
  subsets: ['latin'], 
  weight: ['300','400','500','600','700'],
  variable: '--font-noto-serif',
})
