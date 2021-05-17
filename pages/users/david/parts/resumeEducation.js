import resStyles from '../../../../components/resume.module.css';

export default function Education() {
  return (

    <div>
    <h3>Education</h3>
    <div className={resStyles.educationContainer}>
           
      <div className={resStyles.experienceItem}>
        <div className={resStyles.jlt}>
          <h6>Cisco Networking, NRH Tx - CCNA</h6>
        </div>
        <div>
          <h9>Jan 2016 - May 2016</h9>
        </div>
        <div className={resStyles.jobBody}>
          <ul>
          </ul>
        </div>
      </div>

    
      <div className={resStyles.experienceItem}>
        <div className={resStyles.jlt}>
          <h6>Web Development, Kingsville Tx - Certification</h6>
        </div>
        <div>
          <h9>March 2020 - October 2020</h9>
        </div>
        <div className={resStyles.jobBody}>
          <ul>
          </ul>
        </div>
      </div>
    </div>
    </div>

  )
}
