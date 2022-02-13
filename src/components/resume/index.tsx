import * as styles from './styles';

const Resume = () => {
    return (
        <a
            href="/cvs/youssef-lahssini-cv-eng.pdf"
            className={styles.resume}
            download
        >
            <span className="rotate-90 block -translate-y-7">Resume</span>
        </a>
    );
}

export default Resume;