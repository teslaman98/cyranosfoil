import resStyles from '../../../../components/resume.module.css'; 

export default function Experience() {
    return (
        <div className={resStyles.experienceContainer}>


        <div className={resStyles.experienceItem}>
          <div className={resStyles.jlt}>
            <h6>GEVC, Arlington Tx - Salesman</h6>
          </div>
          <div>
            <h9>Jan 2021 - May 2021</h9>
          </div>
          <div className={resStyles.jobBody}>
            <ul>
              <li> Appraised and engaged prospective clients. </li>
              <li> Used ABC to improve succsess rate. </li>
              <li> Used three yes strategy. </li>
            </ul>
          </div>
        </div>

        <div className={resStyles.experienceItem}>
          <div className={resStyles.jlt}>
            <h6>Rise Broadband, Sherman Tx - Wireless Techician</h6>
          </div>
          <div>
            <h9>Feb-Nov 2020</h9>
          </div>
          <div className={resStyles.jobBody}>
            <ul>
              <li> Climbed roofs and residential towers to install radio equipment. </li>
              <li> Used TCP/IP protocols to set up networking equipment. </li>
              <li> Ran CAT5 through attics and performed wall drops. </li>
            </ul>
          </div>
        </div>

        <div className={resStyles.experienceItem}>
          <div className={resStyles.jlt}>
            <h6>Property Manager, Fort Worth Tx- DLF</h6>
          </div>
          <div>
            <h9>2016 - Present </h9>
          </div>
          <div className={resStyles.jobBody}>
            <ul>
              <li> Show apartments and houses to prospective tenents. </li>
              <li> Perform minor repairs including drywall and plumbing. </li>
              <li> Arranged for repairs and services by professionals when needed. </li>
            </ul>
          </div>
        </div>




      </div>
    )
}
