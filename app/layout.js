import './globals.css'

export const metadata = {
  title: 'Appscrip Task - Sufiyan',
  description: 'A Next.js application for product listing with SEO optimization',
  keywords: 'products, listing, nextjs, react',
  openGraph: {
    title: 'Appscrip Task - Sufiyan',
    description: 'A Next.js application for product listing with SEO optimization',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appscrip Task - Sufiyan',
    description: 'A Next.js application for product listing with SEO optimization',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Appscrip Task - Sufiyan",
              "description": "A Next.js application for product listing with SEO optimization",
              "url": "https://your-domain.com",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
