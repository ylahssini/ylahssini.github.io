import * as styles from './styles';

const Resume = ({ isMobile }: { isMobile?: boolean }) => {
    return (
        <a
            href="/cvs/youssef-lahssini-cv-eng.pdf"
            className={isMobile ? styles.mobile : styles.resume}
            download
        >
            <span className={isMobile ? '' : 'rotate-90 block -translate-y-7'}>Resume</span>
        </a>
    );
}

export default Resume;
