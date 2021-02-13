import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link'

export default function Profile() {
    const user = useUser();
    return (
      <Layout cases>
        <div>
          <Head>
            <title>Text Editor</title>
          </Head>
          <div>
              <h1>Hello {user.name}</h1>
              
          </div>
        </div>
      </Layout>
    )
  }