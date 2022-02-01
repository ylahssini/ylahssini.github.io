import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useStore } from '@src/store';

const selector = (state: Record<string, any>) => ({ detail: state.detail });

const Shape = (): React.ReactElement => {
    const icosahedron = useRef<THREE.Mesh>();
    const { detail } = useStore(selector);

    useFrame(({ clock }) => {
        const { elapsedTime } = clock;

        if (icosahedron.current) {
            icosahedron.current.rotation.x = elapsedTime / 50;
            icosahedron.current.rotation.y = elapsedTime / 50;
            icosahedron.current.rotation.z = elapsedTime / 50;
        }
    });

    return (
        <mesh ref={icosahedron} position={[0, 0, 0]}>
            <icosahedronGeometry args={[5, detail]} />
            <meshBasicMaterial wireframe color="#EEE" wireframeLinecap="square" wireframeLinejoin="miter" />
        </mesh>
    )
}

export default Shape;
