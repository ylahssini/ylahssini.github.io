import data from '@src/data/index.yml';

const About = () => {
    return (
        <article className="pt-12">
            <h4 className="text-sm text-blue-400 font-hairline uppercase">About</h4>
            <p
                className="text-base text-justify p-0"
                dangerouslySetInnerHTML={{ __html: data.about }}
            />
        </article>
    );
}

export default About;
