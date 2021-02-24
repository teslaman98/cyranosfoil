import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import indexStyles from '../styles/pages/index.module.css'
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';



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
      <div className={utilStyles.buisCardContainer}>
        <div>
          <Image
          priority
          src="/images/cyrano.jpg"
          className={utilStyles.borderCircle}
          height={170}
          width={170}
          ></Image>
        </div>
        <div className={utilStyles.buisCardInfoContainer}>
          <h4>David Durden</h4>
          <p>Web Developer</p>
          
        </div>
      </div>
      <section className={indexStyles.sectionContainers}>
        <Link href={'/posts/articles'}>
          <a className={`${utilStyles.darkLink} ${utilStyles.headingLg}`}>Articles</a>
        </Link>
        <Link href={'/posts/showcase'}>
          <a className={`${utilStyles.darkLink} ${utilStyles.headingLg}`}>Showcase</a>
        </Link>
      </section>
      </>
    </Layout>
  )
}