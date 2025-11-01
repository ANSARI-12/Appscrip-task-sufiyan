import Link from 'next/link'

export const metadata = {
  title: 'Appscrip Task - Sufiyan',
  description: 'A Next.js application for product listing with SEO optimization',
}

export default function HomePage() {
  return (
    <main className="container">
      <h1>Welcome to Appscrip Task</h1>
      <p>A Next.js application for product listing with SEO optimization.</p>
      <Link href="/products" className="cta-button">
        View Products
      </Link>
    </main>
  )
}
