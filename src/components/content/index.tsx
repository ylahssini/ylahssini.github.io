import Header from './header';
import About from './about';
import Skills from './skills';
import Experiences from './experiences';
import Contact from './contact';

const Content = (): React.ReactElement => (
    <div className="md:w-9/12 md:border-0 p-10 pl-0 w-full h-full border-t">
        <Header />
        <About />
        <Skills />
        <Experiences />
        <Contact />
    </div>
);

export default Content;
