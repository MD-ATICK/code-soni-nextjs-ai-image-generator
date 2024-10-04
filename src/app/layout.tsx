import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import { SessionProvider } from 'next-auth/react';
import { Montserrat } from "next/font/google";
import "./globals.css";


const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `ImageAlx - Free Amazing AI Image Generator`,
  description: 'ImageAlx is Fully Free an AI-powered image generator that helps you create stunning and realistic images for free. Ideal for creative professionals, marketers, and content creators in Bangladesh and beyond.',
  keywords: 'ImageAlx, AI image generator, create images, artificial intelligence images, free image generator, AI tools, ImageAlx Bangladesh, image creation AI , ai image generator, text to image, image creation tool, ai art generator, generate images online, ai image creator, ai-powered design, image generator from text, create digital art, ai photo generator, image generation tool, instant image creation, ai graphic design, custom ai images, ai art creation, realistic ai images, ai image synthesis, creative image generator, ai art creation tool, ai image generation platform',
  icons: {
    icon: '/favicon.ico', // favicon for the website
  },
  openGraph: {
    title: 'ImageAlx - AI Image Generator',
    description: 'Free Generate amazing AI-powered images in seconds with ImageAlx. Perfect for creatives in Bangladesh and worldwide.',
    url: ` ${process.env.NEXT_DEPLOY_WEB_URL}`,
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_DEPLOY_WEB_URL}/openGraph.jpg`,
        width: 1200,
        height: 630,
        alt: 'ImageAlx Free AI Image Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ImageAlx - AI Image Generator',
    description: 'Generate AI images with ImageAlx for free. The best tool for content creators and marketers.',
    images: [`${process.env.NEXT_DEPLOY_WEB_URL}/twitter.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Website",
  "name": "ImageAlx",
  "logo": `${process.env.NEXT_DEPLOY_WEB_URL}/favicon.ico`, // Provide your logo URL here
  "url": process.env.NEXT_DEPLOY_WEB_URL,
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
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </html>
  );
}
