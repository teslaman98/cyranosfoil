import Head from 'next/head';
import Layout from '../../../components/resumeLayout';
import utilStyles from '../../../styles/utils.module.css';
import resStyles from '../../../components/resume.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Body from './parts/resumeBody';
import Header from './parts/resumeHead';

export default function Resume() {
    return (
        <Layout resume>
          <div className={resStyles.resumeContainer}>

            <Header />

            <Body/>

          </div>

        </Layout>
    )
}
