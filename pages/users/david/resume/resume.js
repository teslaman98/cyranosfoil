import Head from 'next/head';
import Layout from '../../../../components/layout';
import utilStyles from '../../../../styles/utils.module.css';
import resStyles from '../../../../components/resume.module.css';
import Link from 'next/link';
import Image from 'next/image';
/*
import Body from './parts/resumeBody';
import Header from './parts/resumeHead';
*/

export default function davidResume() {
  return (
  <Layout branch>
    <div className={resStyles.resumeContainer}>
      <h1>Hello World</h1>
    </div>
  </Layout>
  )
}
