import resStyles from '../../../../components/resume.module.css';
import Image from 'next/image';

export default function Skills() {
    return (
        
        <div className={resStyles.skillsContainer}>
          <h4>Skills</h4>
          <ul>
            <li>Communications</li>
            <br />
            <li>Conflifct Resolution</li>
            <br />
            <li>Overcoming Objections</li>
            <br />
            <li>Problem Solving</li>
            <br />
            <li>Vehicle Maintenance</li>
            <br />
            <li>OBD2 Diagnostics</li>
            <br />
            <li>Stick Welding</li>
            <br />
            <li>Problem Solving</li>
            <br />
            <li>Botanical Identification</li>
            <br />

          </ul>
          <Image
          priority
          src={'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.example.com&chs=180x180&choe=UTF-8&chld=L|2'}
          height={170}
          width={170}
          ></Image>
          
        </div>
    )
}