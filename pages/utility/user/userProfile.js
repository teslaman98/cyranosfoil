import Head from 'next/head';
import Layout, { siteTitle } from '../../../components/layout';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import utilStyles from '../../../styles/utils.module.css';
import profStyles from '../../../styles/profile.module.css';
import Link from 'next/link';
import ProfileInfo from '../../../lib/user/profile.js'
export default function Profile() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    if (!user) return <Link href="/api/auth/login"><a>Login</a></Link>;
    else return (
      <Layout branch>
        <div>
          
          <ProfileInfo />

        </div>
      </Layout>
    );

  }
