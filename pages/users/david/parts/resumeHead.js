import resStyles from '../../../../components/resume.module.css';


export default function Header() {
    return (
        <div className={resStyles.headerContainer}>

            <div className={resStyles.nameTitle}>
                <div className={resStyles.name}>
                    <h1>David Durden</h1>
                </div>
                <div className={resStyles.title}>
                    <h5>Jack of All Trades</h5> 
                    <p>Trying to Master Some</p>
                </div>
            </div>

            <div className={resStyles.info}>
              <div className={resStyles.address}>
                      Keller, Tx 76248
                  </div>
                  <div className={resStyles.phone}>214-533-7754</div>
                  <div className={resStyles.email}>david.durden.tx@gmail.com</div>
            </div>

      </div>
    )
}
