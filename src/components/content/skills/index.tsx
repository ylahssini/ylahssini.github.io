import data from '@src/data/index.yml';

interface Category {
    name: string;
    list: string[];
};

const Skills = () => {
    const countCategories = Math.ceil(data.skills.categories.length / 2);

    return (
        <article className="pt-12">
            <h4 className="text-sm text-blue-400 font-hairline uppercase">Skills</h4>
            <p
                className="text-base text-justify pb-4"
                dangerouslySetInnerHTML={{ __html: data.skills.description }}
            />

            <ul className="flex flex-wrap list-none">
                {data.skills.categories.map((category: Category) => (
                    <div key={category.name} className={`w-1/${countCategories} pr-3 pb-3`}>
                        <h5 className="text-xs text-blue-900 font-hairline uppercase">{category.name}</h5>

                        <ol className="list-disc list-inside">
                            {category.list.map((item: string) => (
                                <li key={item} className="text-sm">{item}</li>
                            ))}
                        </ol>
                    </div>
                ))}
            </ul>
        </article>
    )
}

export default Skills;
