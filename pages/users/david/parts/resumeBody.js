import resStyles from '../../../../components/resume.module.css';
import Experience from './resumeExp';
import Skills from './resumeSkills';


export default function Body() {
    return (
        <div className={resStyles.contentContainer}>

        <Experience />
        <Skills />


      </div>
    )
}
