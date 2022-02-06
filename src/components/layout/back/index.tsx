import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Shape from './shape';

const Back = (): React.ReactElement => {
    return (
        <div className="fixed z-[-1] w-full h-full top-0 left-0 config-transition bg-slate-50 dark:bg-dark">
            <Canvas camera={{ position: [0, -10, 0] }}>
                <Suspense fallback={null}>
                    <Shape />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default Back;
