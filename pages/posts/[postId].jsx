import Head from 'next/head'
import Link from 'next/link'
import fetch from 'fetch-with-proxy'

const Article = ({ data }) => (
  <>
    <Head>
      <title>{data.title}</title>
      <meta
        name="description"
        content={`A posted article about ${data.title}`}
      />
      <meta property="og:title" content={data.title} />
    </Head>
    <article className="stack-xl">
      <h1 className="page-heading">{data.title}</h1>
      <div className="post-body">{data.body}</div>
      <Link href="/">
        <a className="btn btn-outline-primary">
          <i className="bi bi-house-fill me-2" />
          Home
        </a>
      </Link>
    </article>
  </>
)

export const getServerSideProps = async (ctx) =>  {
  const postId = ctx.params.postId
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )
  const data = await res.json()

  return { props: { data } }
}

export default Article
