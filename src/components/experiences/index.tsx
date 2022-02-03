import { useState } from 'react';
import data from '@src/data/index.yml';
import * as styles from './styles';

interface Experience {
    company: string;
    job: string;
    period: string;
}

const Experiences = () => {
    const [tab, setTab] = useState(0);

    if (!data.experiences) {
        return null;
    }

    const width = `w-1/${data.experiences.length}`;

    return (
        <section className="w-10/12 max-w-5xl">
            <h3 className="section-title">
                <span>02. Experiences</span>
            </h3>

            <div className="mt-8">
                {data.experiences.map((experience: Experience, index: number) => (
                    <article key={experience.company} className={`${index !== tab ? 'hidden' : ''}`}>
                        <h4>{experience.company}</h4>
                        <h5>{experience.job}</h5>
                        <h6>{experience.period}</h6>
                    </article>
                ))}

                <footer aria-label="Companies" className={styles.footer}>
                    <div className={styles.highlight({ width, tab: tab.toString() })} />

                    <div className="flex items-center justify-between">
                        {data.experiences.map((experience: Experience, index: number) => (
                            <button
                                key={experience.company}
                                type="button"
                                className={styles.tab({ width, isActive: tab === index })}
                                onClick={() => setTab(index)}
                            >
                                {experience.company}
                            </button>
                        ))}
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Experiences;
