import Head from 'next/head'
import Link from 'next/link'

const title = 'The 2nd page'
const Second = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Hooray, this routing works!" />
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
    </section>
  </>
)

export default Second
