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
        <section className="wrapper h-screen block sm:flex sm:items-center">
            <div className="mt-8 block flex-1">
                <h3 className="section-title"><span>02. Experiences</span></h3>

                <header aria-label="Companies" className={styles.side}>
                    <div className="flex justify-between w-full h-full items-center self-stretch">

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

                        <div className={styles.highlight} style={{ width, transform: `translateX(calc(100%*${tab}))` }} />
                    </div>
                </header>

                <div className="text-left relative">
                    {data.experiences.map((experience: Experience, index: number) => (
                        <article key={experience.company} className={`${index !== tab ? 'invisible absolute' : 'visible relative'} h-full md:h-72`}>
                            <h4 className="text-2xl leading-none config-transition text-gray-900 dark:text-white">
                                <strong>{experience.job}</strong>&nbsp;~&nbsp;<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">{experience.company}</span>
                            </h4>
                            <small className="config-transition text-gray-500 font-light dark:text-slate-50">{experience.period.join(' - ')}</small>

                            <div className="py-3">
                                {experience.description.map((description) => (<p key={description} className="text-base text-transition-dark">- {description}</p>))}
                            </div>

                            <h5 className="config-transition text-gray-900 dark:text-slate-50 font-bold">Skills</h5>
                            <ul>
                                {experience.skills.map((skill) => (
                                    <li key={skill} className={styles.skill}>{skill}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experiences;
