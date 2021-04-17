import Head from 'next/head';
import Layout, { siteTitle } from '../../../components/layout';
import Link from 'next/link';

export default function Nav() {
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
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"></meta>
          </Head>
  
          <nav  class="navbar fixed-top justify-content-center navbar-dark bg-dark">
          <ul class="nav justify-content-center">
              <li class="nav-item">
                  <Link href={'/showcase/angels'}>
                    <a class="nav-link" aria-current="page">Welcome</a>
                  </Link>
              </li>
              <li class="nav-item">
                <Link href={'/showcase/angelSite/certifications'}>
                    <a class="nav-link" aria-current="page">Certifications</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href={'/showcase/angelSite/services'}>
                    <a class="nav-link" aria-current="page">Services</a>
                </Link>

              </li>
              <li class="nav-item">
                <Link href={'/showcase/angelSite/contactInfo'}>
                    <a class="nav-link" aria-current="page">Contact/Info</a>
                </Link>                  

              </li>
          </ul>
          </nav>
  
    </div>
    )
  }