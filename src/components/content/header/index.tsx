import data from '@src/data/index.yml';

const Header = (): React.ReactElement => (
    <header className="block md:flex">
        {data.company && (
            <div className="w-full pb-3 md:p-0 md:w-1/2">
                <h4 className="text-sm text-orange-400 font-hairline uppercase">Company</h4>
                <h3 className="text-xl font-bold leading-8">{data.company}</h3>
            </div>
        )}

        {data.learning && (
            <div className="w-full pb-3 md:p-0 md:w-1/2">
                <h4 className="text-sm text-orange-400 font-hairline uppercase">Learning...</h4>
                <h3 className="text-xl font-bold leading-8">{data.learning}</h3>
            </div>
        )}
    </header>
);

export default Header;
