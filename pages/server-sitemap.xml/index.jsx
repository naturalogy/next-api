import { getServerSideSitemap } from 'next-sitemap'
import fetch from 'fetch-with-proxy'

export const getServerSideProps = async (ctx) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  const fields = [
    {
      loc: 'http://localhost:3000/posts/1',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'http://localhost:3000/posts/2',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'http://localhost:3000/posts/3',
      lastmod: new Date().toISOString(),
    },
  ]

  return getServerSideSitemap(ctx, fields)
}

export default () => {}
