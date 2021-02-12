import MyEditor from '../../lib/draftjs/myEditor';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link'

export default function TextEditor() {
    return (
      <Layout>
        <div>
          <Head>
            <title>Text Editor</title>
          </Head>
          <div>
              <h1>Text Editor</h1>
              <div >
                  <MyEditor />
              </div>
          </div>
        </div>
      </Layout>
    )
  }