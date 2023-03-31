import Image from 'next/image';
import { TbMapPin } from 'react-icons/tb';
import data from '@src/data/index.yml';
import AuthorImage from '@src/assets/images/author.jpg';
import * as styles from './styles';

const About = (): React.ReactElement => {
    return (
        <section className={styles.section}>
            <article className="w-full sm:w-8/12">
                <h3 className="section-title"><span>01. About</span></h3>

                {data.about.map((p: string) => (
                    <p key={p} className="text-base text-justify pb-4 text-transition-dark">{p}</p>
                ))}
            </article>
    
            <aside className="max-w-[270px] w-full mx-auto sm:m-0 sm:w-4/12">
                <figure>
                    {
                        process.env.NEXT_PUBLIC_DEPLOYMENT === 'vercel' ? (
                            <Image
                                src={AuthorImage}
                                width={270}
                                height={270}
                                alt={data.author.name}
                                quality={90}
                            />
                        ) : (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src="/images/author.jpg" width="270" height="270" alt={data.author.name} loading="lazy" />
                        )
                    }
                </figure>

                <address className="not-italic pt-8">
                    <TbMapPin className="inline-block w-6 h-6 stroke-blue-500" />
                    <span className="font-hairline text-transition-dark">{data.author.location}</span>
                </address>
            </aside>
        </section>
    );
};

export default About;
