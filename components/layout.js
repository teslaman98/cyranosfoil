import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


const name = "Cyrano's Foil" 
export const siteTitle = 'Cyranos Foil'

export default function Layout({ children, home, branch, posts, cases, resume }) {
  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="A catch-all site for resumes and essays and whatever else"
          content="Essays and Articles"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>


    {!resume && (
            <nav className={'navbar navbar-dark bg-dark'}>
            <div className={styles.navContainer}>
              
              <div className={styles.navBrand}><h1 className={`${utilStyles.headingLg} ${styles.navText} `}>{name}</h1></div>
    {/* Nav logo of cyrano */}
              {/* <div className={styles.navLogo}>
                <div className={styles.logo}>
                <Link href="/">
                    <a>
                      <Image
                        priority
                        src="/images/cyrano.jpg"
                        className={utilStyles.borderCircle}
                        height={90}
                        width={90}
                        alt={name}
                      />
                    </a>
                  </Link>
                  </div>
              </div> */}
    
              <div className={styles.navLogin}>
                <div className={styles.button}>
                  {/* <Link href={'api/auth/login'}> */}
                  <Link href={'utility/user/userProfile'}>
                    <button type="button" className="btn btn-primary">
                      Account
                    </button>
                  </Link>
    
                </div>
              </div>
              
            </div>
          </nav>
    )}

    <div className={styles.container}>
      <header className={styles.header}>

        
      </header>



      <main>{children}</main>


      {branch && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to Home</a>
          </Link>
        </div>
      )}
      { posts && (
        <div className={styles.backToHome}>
          <Link href="/posts/articles">
            <a>← Back to Articles</a>
          </Link>
        </div>
      )
      }
      { cases && (
        <div className={styles.backToHome}>
          <Link href="/posts/showcase">
            <a>← Back to Showcase</a>
          </Link>
        </div>
      )
      }

    </div>

    </div>
  )
}