import resStyles from '../../../../components/resume.module.css'; 

export default function Experience() {
    return (
        <div className={resStyles.experienceContainer}>


        <div className={resStyles.experienceItem}>
          <div className={resStyles.jlt}>
            <h6>Kwik Kar, Roanoke Tx - Service Technician</h6>
          </div>
          <div>
            <h9>Sep 2020 - Present</h9>
          </div>
          <div className={resStyles.jobBody}>
            <ul>
              <li>Notify customers of needed services.</li>
              <li>Upsell customers on quality lubricants and parts.</li>
              <li>Provide excellent customer service and reliable vehicle maintenance.</li>
            </ul>
          </div>
        </div>

        <div className={resStyles.experienceItem}>
          <div className={resStyles.jlt}>
            <h6>Car Sales, Ukiah California - Entrepreneur</h6>
          </div>
          <div>
            <h9>Jul-Aug 2020</h9>
          </div>
          <div className={resStyles.jobBody}>
            <ul>
              <li>Over a period of 3 weeks bought and sold 3 vehicles.</li>
              <li>Made no less than 25% return on either of the vehicles.</li>
              <li>Made $1,400 in profit on a 3 day turn around.</li>
            </ul>
          </div>
        </div>

        <div className={resStyles.experienceItem}>
          <div className={resStyles.jlt}>
            <h6>Sonoma Marin Arborists, California - Tree Climber</h6>
          </div>
          <div>
            <h9>Aug 2017 - November 2019 </h9>
          </div>
          <div className={resStyles.jobBody}>
            <ul>
              <li>Ensured safety of underlying structures by precise and controlled removal of tree limbs.</li>
              <li>Operated excavators, dump trucks and other heavy machinery.</li>
              <li>Performed daily checks of harnesses and other saftey equipment.
              </li>
            </ul>
          </div>
        </div>




      </div>
    )
}