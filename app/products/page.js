import Image from 'next/image'

export const metadata = {
  title: 'Products - Appscrip Task',
  description: 'Browse our collection of products',
}

async function getProducts() {
  // Simulate API call - replace with actual API endpoint
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 }, // Revalidate every hour
  })
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <main className="container">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              priority={false}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
