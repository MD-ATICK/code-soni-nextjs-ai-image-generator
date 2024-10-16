import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import { SessionProvider } from 'next-auth/react';
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";


const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  applicationName: process.env.NEXT_WEB_NAME,
  title: process.env.NEXT_WEB_TITLE,
  description: process.env.NEXT_WEB_DESCRIPTION,
  keywords: ['ai generated beautiful flower images with blurred background',
    'ai generated images', 'ai flowers', 'flowers ai', 'bruno mars flowers ai', 'ai girl generator free', 'ai generated beautiful flower', 'ai generated beautiful flower images', 'ai generated beautiful flower images with blurred', 'ai generated beautiful flower images with blurred background',
    'pic of a tulip', 'bangla ai', 'tulips wallpaper', 'tulip bouquet', 'tulips bouquet png',
    'Ai Business Photo Generator', 'ai business photo generator',
    'imageAlx', 'imagealx', 'image alx', 'ai text-to-image', 'ai artwork generator', 'ai image',
    'pictures of ai', 'free ai artwork generator', 'artificial intelligence pictures', 'image to prompt ai', 'text to image generation', 'img2img ai',
    'ai art image', 'ai image generator with imageAlx', 'images generated by ai', 'text to ai image', 'ai image generator prompt', 'low quality image maker',
    'text to image creator', 'text to image generators', 'image creator from text', 'picture generator from text', 'ai art free', 'image creator ai',
    'ai image generator online', 'canva ai image generator', 'ai image generator free no sign up', 'text to art generator', 'uncensored ai generator',
    'deep ai image generator', 'deepai image generator', 'image to text ai', 'fotor ai image generator', "best ai generated art", 'anime ai image generator',
    'text to art generator', 'adobe ai image generator', 'texttoimage', 'artificial insemination images', 'ai business photo free'
  ],
  icons: {
    icon: '/logo.png', // favicon for the website
  },
  openGraph: {
    siteName: process.env.NEXT_WEB_NAME,
    title: process.env.NEXT_WEB_TITLE,
    description: process.env.NEXT_WEB_DESCRIPTION,
    url: ` ${process.env.NEXT_DEPLOY_WEB_URL}`,
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_DEPLOY_WEB_URL}/openGraph.jpg`,
        width: 1200,
        height: 630,
        alt: process.env.NEXT_WEB_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: process.env.NEXT_WEB_TITLE,
    description: process.env.NEXT_WEB_DESCRIPTION,
    images: [`${process.env.NEXT_DEPLOY_WEB_URL}/twitter.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="6GmT2Do1lN7VtwEFDc82A70PsvPJHHw07NtB75FFIew" />
        <link rel="canonical" href={`${process.env.NEXT_DEPLOY_WEB_URL}`} />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QGREESW504"></Script>
        <Script
          id="G-QGREESW504"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QGREESW504');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} overflow-x-hidden`}
      >
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
