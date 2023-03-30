/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { useStore } from '@src/store';

const selector = ({ detail, mode }: Record<string, any>) => ({ detail, mode });
const colorsMode: Record<string, string> = { light: '#EEEEEE', dark: '#333335' };

const Icosahedron = (): React.ReactElement => {
    const icosahedron = useRef<THREE.Mesh>(null);
    const { detail, mode } = useStore(selector);
    const springs = useSpring({
        color: colorsMode[mode],
        config: { duration: 300, mass: 1, tension: 1000, friction: 100 },
    });

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
            { /* @ts-ignore */}
            <a.meshBasicMaterial wireframe color={springs.color} wireframeLinecap="square" wireframeLinejoin="miter" />
        </mesh>
    )
}

export default Icosahedron;
