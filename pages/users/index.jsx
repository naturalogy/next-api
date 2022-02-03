import Head from 'next/head'
import Link from 'next/link'
import { ListGroup } from 'react-bootstrap'
import fetch from 'fetch-with-proxy'

const title = 'Users'
const Users = ({ data }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="An index of users" />
      <meta property="og:title" content={title} />
    </Head>
    <section className="stack-xl">
      <h1 className="page-heading">{title}</h1>
      <Link href="/">
        <a className="btn btn-outline-primary">
          <i className="bi bi-house-fill me-2" />
          Home
        </a>
      </Link>
      <ListGroup as="ul" variant="flush">
        {data.map((user) => (
          <ListGroup.Item as="li" key={user.id}>
            <Link
              href={{
                pathname: `/users/${encodeURIComponent(user.username)}`,
                query: { userId: `${user.id}` },
              }}>
              <a>{user.name}</a>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  </>
)

export const getServerSideProps = async () =>  {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return { props: { data } }
}

export default Users
