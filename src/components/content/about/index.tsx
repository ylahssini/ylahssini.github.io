import data from '@src/data/index.yml';

const About = () => {
    return (
        <article className="pt-12">
            <h4 className="text-sm text-blue-400 font-hairline uppercase">About</h4>
            {
                data.about.map((p: string) => (
                    <p key={p} className="text-base text-justify pb-3">{p}</p>
                ))
            }
        </article>
    );
}

export default About;