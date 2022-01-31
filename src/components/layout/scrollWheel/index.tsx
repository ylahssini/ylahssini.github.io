const ScrollWheel = () => {
    return (
        <footer className="fixed bottom-0 w-full z-10 flex justify-center items-center flex-col py-2 animate-scroll-wheel">
            <div className="bg-black w-[2px] h-6 mb-3" />
            <div className="border-2 border-black rounded-t-full rounded-b-full w-5 h-7 flex justify-center pt-1">
                <div className="border-2 border-black rounded-t-full rounded-b-full w-[6px] h-2 animate-bounce" />
            </div>
        </footer>
    );
}

export default ScrollWheel;
