import data from '@src/data/index.yml';

const Header = () => {
    return (
        <header className="flex">
            {data.company && (
                <div className="w-1/2">
                    <h4 className="text-sm text-blue-400 font-hairline uppercase">Company</h4>
                    <h3 className="text-xl font-bold leading-8">{data.company}</h3>
                </div>
            )}

            {data.learning && (
                <div className="w-1/2">
                    <h4 className="text-sm text-blue-400 font-hairline uppercase">Learning...</h4>
                    <h3 className="text-xl font-bold leading-8">{data.learning}</h3>
                </div>
            )}
        </header>
    );
}

export default Header;
