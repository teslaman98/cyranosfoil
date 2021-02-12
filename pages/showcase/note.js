import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link'
import App from '../../components/notepad/app'

export default function NotePad() {
  return (
    <Layout cases>
      <div>
        <Head>
          <title>Notepad test</title>
        </Head>
        <App/>
      </div>
    </Layout>
  )
}