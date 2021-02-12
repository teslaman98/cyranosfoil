import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Image from 'next/image'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import {withPageAuthRequired} from '@auth0/nextjs-auth0'


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  export default withPageAuthRequired(function Post({ postData }) {
    return (
      <Layout posts>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <Image
          src={postData.img}
          height={700}
          width={700}
          ></Image>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  })