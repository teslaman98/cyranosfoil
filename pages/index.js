import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';



export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <>
      <section>
        <Link href={'/posts/articles'}>
          <a className={`${utilStyles.darkLink} ${utilStyles.headingLg}`}>Articles</a>
        </Link>
      </section>


      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href={'/api/auth/login'}>
          <a>Login</a>
        </Link> <br />
        <Link href={'/api/auth/logout'}>
          <a>Logout</a>
        </Link>
      </section>
      </>
    </Layout>
  )
}