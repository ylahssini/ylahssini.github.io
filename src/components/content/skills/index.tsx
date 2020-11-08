import data from '@src/data/index.yml';

interface Category {
    name: string;
    list: string[];
}

const Skills = (): React.ReactElement => {
    const countCategories = Math.ceil(data.skills.categories.length / 2);

    return (
        <article className="pt-12 mb-6">
            <h4 className="text-sm text-orange-400 font-hairline uppercase">Skills</h4>
            {
                data.skills.description.map((p: string) => (
                    <p key={p} className="text-base text-justify pb-3">{p}</p>
                ))
            }

            <ul className="flex flex-wrap list-none">
                {data.skills.categories.map((category: Category) => (
                    <div key={category.name} className={`w-full md:w-1/${countCategories} pr-3 pb-3`}>
                        <h5 className="text-xs text-orange-900 font-hairline uppercase">{category.name}</h5>

                        <ol className="list-disc list-inside">
                            {category.list.map((item: string) => (
                                <li key={item} className="text-sm">{item}</li>
                            ))}
                        </ol>
                    </div>
                ))}
            </ul>
        </article>
    );
};

export default Skills;
