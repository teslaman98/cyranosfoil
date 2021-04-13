import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import Link from 'next/link';
import style from '../../styles/showcase/angels.module.css';
import Image from 'next/image'

function Nav() {
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

        <nav  class="navbar fixed-top justify-content-center navbar-dark bg-dark">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Welcome</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Certifications</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1">Contact/Info</a>
            </li>
        </ul>
        </nav>

  </div>
  )
}

export default function Angels() {
  return (
    <div>
      <Nav/>
      <div className={style.hero}>
          <h1>Angels Auto Repair</h1>
      </div>

      <section className={style.content}>
        <section className={style.ct_icon_box_section}>
          <br/>
          <div class="d-flex justify-content-center">
            <div class="col-md-6 d-flex flex-column justify-content-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Maecenas pharetra convallis posuere morbi leo urna molestie.
                Arcu non odio euismod lacinia at quis risus. Mauris nunc congue nisi vitae suscipit tellus mauris.
                Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Nisl tincidunt eget nullam non nisi est sit amet. 
                Risus sed vulputate odio ut enim blandit volutpat. Et malesuada fames ac turpis.
                Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Ultrices sagittis orci a scelerisque purus semper eget. 
                </p>
            </div>
            <div class="col-md-6 d-flex justify-content-center">
              <Image
                src="/images/window.jpg"
                width={300}
                height={600}
                ></Image>
            </div>

          </div>

            
        </section>
      </section>

        <div>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>

        </div>
    </div>

  )
}