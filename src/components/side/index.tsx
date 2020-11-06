import data from '@src/data/index.yml';

const Side = (): React.ReactElement => (
    <aside className="md:w-1/4 md:h-screen md:border-l md:pl-10 md:pb-0 pt-10 border-gray-400 pb-10 w-full h-full border-0">
        <figure>
            <figcaption>
                <h1 className="text-4xl font-bold leading-7">{data.side.name}</h1>
                <span className="text-xl font-hairline">{data.side.job}</span>
            </figcaption>

            <div className="relative my-8">
                <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${data.side.image}`}
                    alt=""
                    width={150}
                    height={150}
                    className="block rounded-full relative z-20"
                />

                <div className="bg-blue-400 rounded-full absolute z-10 w-150px h-150px top-0 left-50 " />
            </div>

            <address className="not-italic">
                <i className="las la-map-marker la-lg py-2 px-1 text-blue-400" />
                <span className="font-hairline">{data.side.location}</span>
            </address>
        </figure>
    </aside>
);

export default Side;
