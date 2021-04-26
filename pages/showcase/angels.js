import Link from 'next/link';
import style from '../../styles/showcase/angels.module.css';
import Image from 'next/image';
import Nav from './angelSite/nav';
import Layout from '../../components/layout';

export default function Angels() {
  return (
    <div>
      <Nav/>
      <div className={style.hero}>
          <h1>Angels Auto Repair</h1>
          <h3>214-218-3711</h3>
      </div>

      <section className={style.content}>
        <section className={style.ct_icon_box_section}>
          <br/>
          <div class="d-flex justify-content-center flex-wrap">
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
                width={550}
                height={500}
                ></Image>
            </div>

          </div>

            
        </section>
      </section>

        <div>
            
        </div>
    </div>

  )
}