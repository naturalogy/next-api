import Head from 'next/head'
import Link from 'next/link'
import { Table } from 'react-bootstrap'
import fetch from 'fetch-with-proxy'

const UserInfo = ({ data }) => (
  <>
    <Head>
      <title>{data.name}</title>
      <meta
        name="description"
        content={`A posted article about ${data.name}`}
      />
      <meta property="og:title" content={data.name} />
    </Head>
    <article className="stack-xl">
      <h1 className="page-heading">
        {data.name}
        <small className="d-block text-muted fs-lg">@{data.username}</small>
      </h1>
      <Table hover>
        <tbody>
          <tr>
            <th>Email</th>
            <td>{data.email}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>
              {data.address.street}, {data.address.suite}, {data.address.city}{' '}
              {data.address.zipcode}
            </td>
          </tr>
          <tr>
            <th>Phone number</th>
            <td>{data.phone}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{data.website}</td>
          </tr>
          <tr>
            <th>Company</th>
            <td>{data.company.name}</td>
          </tr>
        </tbody>
      </Table>
      <Link href="/users">
        <a className="btn btn-outline-primary">
          <i className="bi bi-arrow-left me-2" />
          Users
        </a>
      </Link>
    </article>
  </>
)

export const getServerSideProps = async (ctx) =>  {
  const userId = ctx.query.userId
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )
  const data = await res.json()

  return { props: { data } }
}

export default UserInfo
