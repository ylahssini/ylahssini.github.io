import data from '@src/data/index.yml';

interface Experience {
    company: string;
    job: string;
    period: string[];
}

const Experiences = (): React.ReactElement | null => {
    if (data.experiences) {
        return (
            <div className="mb-6">
                <h4 className="text-sm text-orange-400 font-hairline uppercase">Experiences</h4>

                <ul className="list-none relative">
                    <div className="absolute top-0 left-half -ml-1 w-2 bg-gray-500 h-full" />

                    {data.experiences.map((experience: Experience, index: number): React.ReactNode => {
                        const isLeft = index % 2 === 0;
                        const rowClassName = 'flex h-32 items-center justify-center';

                        return (
                            <li key={experience.company} className={`${rowClassName} ${!isLeft ? 'flex-row-reverse text-right' : 'flex-row'}`}>
                                <div className="w-5/12 px-5" />

                                <div className={`${index === 0 ? 'bg-orange-500' : 'bg-gray-400'} rounded-full w-12 h-12 flex items-center justify-center relative z-20`}>
                                    <div className="bg-black rounded-full w-4 h-4" />
                                </div>

                                <div className="w-5/12 px-5">
                                    <span className="text-sm font-hairline text-black">{experience.job}</span>
                                    <h5 className="text-xl font-bold text-black">{experience.company}</h5>
                                    <span className="text-xs text-gray-700">
                                        <time>{experience.period[0]}</time> ~ <time>{experience.period[1]}</time>
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    return null;
};

export default Experiences;
