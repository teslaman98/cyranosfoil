import resStyles from '../../../../components/resume.module.css';


export default function Header() {
    return (
        <div className={resStyles.headerContainer}>

            <div className={resStyles.nameTitle}>
                <div className={resStyles.name}>
                    <h1>Mitchell Grim</h1>
                </div>
                <div className={resStyles.title}>
                    <h6>Car Salesman</h6>
                </div>
            </div>

            <div className={resStyles.info}>
              <div className={resStyles.address}>
                      Keller, Tx 76248
                  </div>
                  <div className={resStyles.phone}>707-787-7326</div>
                  <div className={resStyles.email}>mitchell.orion.grim@gmail.com</div>

            </div>

      </div>
    )
}
