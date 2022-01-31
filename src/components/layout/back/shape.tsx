import { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useStore } from '@src/store';

const selector = (state: Record<string, any>) => ({ detail: state.detail });

const Shape = (): React.ReactElement => {
    const icosahedron = useRef<THREE.Mesh>();
    const { detail } = useStore(selector);
    const [c, sc] = useState(false);

    useFrame(({ clock }) => {
        const { elapsedTime } = clock;

        if (icosahedron.current) {
            icosahedron.current.rotation.x = elapsedTime / 50;
            icosahedron.current.rotation.y = elapsedTime / 50;
            icosahedron.current.rotation.z = elapsedTime / 50;

            // icosahedron.current.geometry.parameters.detail
        }
    });

    return (
        <mesh ref={icosahedron} position={[0, 0, 0]}>
            <icosahedronGeometry args={[5, detail]} />
            <meshBasicMaterial wireframe color="#DDD" wireframeLinecap="square" wireframeLinejoin="miter" />
        </mesh>
    )
}

export default Shape;
