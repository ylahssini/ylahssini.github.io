import data from '@src/data/index.yml';
import Github from '../../assets/svg/github-alt.svg';
import LinkedIn from '../../assets/svg/linkedin.svg';
import Twitter from '../../assets/svg/twitter.svg';
import EnvelopeText from '../../assets/svg/envelope-open-text-solid.svg';

interface Props {
    children: React.ReactElement;
}

const Header = ({ children }: Props): React.ReactElement => (
    <main>
        <header className="flex justify-between items-center p-6 border-gray-300 border-b">
            <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center relative">
                <span className="text-xl">{data.side.logo}</span>
            </div>

            <a href="#contact" className="text-orange-400">
                <EnvelopeText width={24} height={24} className="inline-block fill-current text-orange-400" />
                <span>Contact me</span>
            </a>
        </header>

        <section className="px-10 md:px-16 md:py-0">
            {children}
        </section>

        <footer className="p-10 flex justify-between text-right bg-gray-900 text-white text-sm">
            <div>
                <strong>&copy; Copyright {data.side.name}.</strong> All rights reserved.
            </div>

            <nav>
                <a href="https://github.com/ylahssini" target="_blank" rel="noreferrer">
                    <Github width={32} height={32} fill="#FFFFFF" className="inline-block align-middle" />
                </a>&nbsp;
                <a href="https://www.linkedin.com/in/youssef-lahssini-05583a16" target="_blank" rel="noreferrer">
                    <LinkedIn width={32} height={32} fill="#FFFFFF" className="inline-block align-middle" />
                </a>&nbsp;
                <a href="https://twitter.com/ylahssini" target="_blank" rel="noreferrer">
                    <Twitter width={32} height={32} fill="#FFFFFF" className="inline-block align-middle" />
                </a>&nbsp;
            </nav>
        </footer>
    </main>
);

export default Header;
