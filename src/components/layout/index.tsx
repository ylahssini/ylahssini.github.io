interface Props {
    children: React.ReactElement;
}

const Header = ({ children }: Props) => {
    return (
        <main>
            <header className="flex justify-between items-center p-6 border-gray-300 border-b">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center relative">
                    <span className="text-xl">YL</span>
                </div>

                <a
                    href="#"
                    className="border-blue-400 border-4 rounded-3xl px-4 h-9 leading-9"
                >
                    Contact me
                </a>
            </header>

            <section className="px-16 py-0">
                {children}
            </section>

            <footer className="p-10 text-right bg-gray-900 text-white text-sm">
                <strong>&copy; Copyright Youssef Lahssini.</strong> All rights reserved.
            </footer>
        </main>
    )
}

export default Header;
