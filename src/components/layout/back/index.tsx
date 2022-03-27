import { Suspense } from 'react';
import shallow from 'zustand/shallow';
import { Canvas } from '@react-three/fiber';
import { useStore } from '@src/store';
import Icosahedron from './icosahedron';

const Back = (): React.ReactElement => {
    const { menuOpened } = useStore(({ menuOpened }) => ({ menuOpened }), shallow);

    return (
        <div className="fixed z-[-1] w-full h-full top-0 left-0 config-transition bg-slate-50 dark:bg-dark">
            <Canvas camera={{ position: [0, -10, 0] }} className={`transition-all ${menuOpened ? 'blur-xl  md:blur-none' : 'blur-none'}`}>
                <Suspense fallback={null}>
                    <Icosahedron />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default Back;
