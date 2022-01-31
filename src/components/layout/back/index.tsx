import { Canvas } from '@react-three/fiber';
import Shape from './shape';

const Back = (): React.ReactElement => {
    return (
        <div className="fixed z-[-1] w-full h-full top-0 left-0">
            <Canvas camera={{ position: [0, -10, 0] }}>
                <Shape />
            </Canvas>
        </div>
    );
}

export default Back;
