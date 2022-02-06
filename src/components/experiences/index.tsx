import { useState } from 'react';
import data from '@src/data/index.yml';
import * as styles from './styles';

interface Experience {
    company: string;
    job: string;
    period: string[];
    description: string[];
    skills: string[];
}

const width = `${100/data.experiences.length}%`;

const Experiences = () => {
    const [tab, setTab] = useState(0);

    if (!data.experiences) {
        return null;
    }

    return (
        <section className="wrapper">
            <h3 className="section-title"><span>02. Experiences</span></h3>

            <div className="mt-8">
                {data.experiences.map((experience: Experience, index: number) => (
                    <article key={experience.company} className={`${index !== tab ? 'hidden' : ''} text-left h-72`}>
                        <h4 className="text-2xl text-transition-dark">{experience.job} ~ <span className="text-blue-300">{experience.company}</span></h4>
                        <small className="text-blue-300">{experience.period.join(' - ')}</small>

                        <div className="py-3">
                            {experience.description.map((description) => (<p key={description} className="text-base text-transition-dark">- {description}</p>))}
                        </div>

                        <h5 className="text-transition-dark">Skills</h5>
                        <ul>
                            {experience.skills.map((skill) => (
                                <li key={skill} className={styles.skill}>{skill}</li>
                            ))}
                        </ul>
                    </article>
                ))}

                <footer aria-label="Companies" className={styles.footer}>
                    <div className={styles.highlight} style={{ width, transform: `translateX(calc(100%*${tab}))` }} />

                    <div className="flex items-center justify-between">
                        {data.experiences.map((experience: Experience, index: number) => (
                            <button
                                key={experience.company}
                                type="button"
                                className={styles.tab({ isActive: tab === index })}
                                style={{ width }}
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
