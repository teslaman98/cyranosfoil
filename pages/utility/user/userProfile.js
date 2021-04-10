import Head from 'next/head';
import Layout, { siteTitle } from '../../../components/layout';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import utilStyles from '../../../styles/utils.module.css';
import profStyles from '../../../styles/profile.module.css';
import Link from 'next/link';

export default function Profile() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    if (!user) return <Link href="/api/auth/login"><a>Login</a></Link>;
    else return (
      <Layout branch>
        <div>
          <Head>
            <title>Text Editor</title>
          </Head>
          <div>
              <h1>Hello {user.name}</h1>
              <h2>Schedule for week 3/8 through 3/14</h2><br/>
              <h3>Friday</h3><br/>
              <p>Billy Bob's 6-10:30</p><br/>
              <br/><br/>
              <h3>Saturday</h3><br/>
              <p>Six Flags    11am-4pm</p><br/>
              <p>Billy Bob's  6-10:30</p><br/>
              <h3>Sunday</h3><br/>
              <p>Billy Bob's  12-6pm</p><br/>
              <p>Billy Bob's  6-9:30pm</p><br/>
              <Link href={'../api/auth/logout'}>
                <h3>Logout</h3>
              </Link>
              
          </div>
        </div>
      </Layout>
    );

  }