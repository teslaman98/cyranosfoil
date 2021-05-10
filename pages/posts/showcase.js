import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedProjectData } from '../../lib/projects';
import Link from 'next/link';
import Date from '../../components/date';
import MyEditor from '../../lib/draftjs/myEditor';



export async function getStaticProps() {
  const allPostsData = getSortedProjectData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Showcase({ allPostsData }) {
  return (
    <Layout branch>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Showcase</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id,date,title }) =>( 
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/showcase/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
           ))}
        </ul>
      </section>
      </>
    </Layout>
  )
}
