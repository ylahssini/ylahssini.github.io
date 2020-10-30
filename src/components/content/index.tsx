import Header from './header';
import About from './about';
import Skills from './skills';

const Content = () => {
    return (
        <div className="w-9/12 p-10 pl-0">
            <Header />
            <About />
            <Skills />
        </div>
    );
}

export default Content;
