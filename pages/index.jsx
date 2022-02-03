import Head from 'next/head'
import Link from 'next/link'
import { ListGroup } from 'react-bootstrap'
import fetch from 'fetch-with-proxy'

const title = 'Home'
const Home = ({ data }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="A boilerplate for Next.js" />
      <meta property="og:title" content={title} />
    </Head>
    <section className="stack-xl">
      <h1 className="page-heading">{title}</h1>
      <div>
        <Link href="/users">
          <a className="btn btn-outline-primary">
            <i className="bi bi-people-fill me-2" />
            Users
          </a>
        </Link>{' '}
        <Link href="/second">
          <a className="btn btn-outline-primary">
            Second
            <i className="bi bi-arrow-right ms-2" />
          </a>
        </Link>{' '}
        <Link href="/server-sitemap.xml">
          <a className="btn btn-outline-secondary">
            Additional Sitemap
          </a>
        </Link>
      </div>
      <ListGroup as="ul" variant="flush">
        {data.map((post) => (
          <ListGroup.Item as="li" key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>
                {post.id} - {post.title}
              </a>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  </>
)

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return { props: { data } }
}

export default Home
