import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link'

export default function Profile() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    if (!user) return <Link href="/api/auth/login"><a>Login</a></Link>;
    else return (
      <Layout cases>
        <div>
          <Head>
            <title>Text Editor</title>
          </Head>
          <div>
              <h1>Hello {user.name}</h1>
              <Link href={'api/auth/logout'}>
                <h3>Logout</h3>
              </Link>
              
          </div>
        </div>
      </Layout>
    );

  }