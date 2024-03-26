import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useTexture,
  useGLTF,
  Bounds,
  MeshReflectorMaterial,
} from "@react-three/drei";

function Carla(props) {
  const { scene } = useGLTF("/carla-draco.glb");
  return <primitive object={scene} {...props} />;
}

function ImageScreen(props) {
  const imageTexture = useTexture("/hero.jpg");

  return (
    <mesh scale={[7.3, 3.43, 0]} {...props}>
      <planeGeometry />
      <meshBasicMaterial toneMapped={false}>
        <primitive attach="map" object={imageTexture} />
      </meshBasicMaterial>
    </mesh>
  );
}

function Ground() {
  const [floor, normal] = useTexture(["texture2.jpg", "normal1.jpeg"]);
  const Material = MeshReflectorMaterial;
  return (
    <Material
      blur={[400, 100]}
      resolution={512}
      args={[10, 14]}
      mirror={0.6}
      mixBlur={20}
      mixStrength={5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      color="#505050"
      metalness={0.5}
      roughnessMap={floor}
      normalMap={normal}
      normalScale={[2, 2]}
    />
      )}

function Shoe({ ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      0.0001 + Math.cos(t / 90) / 70,
      Math.sin(t / 4) / 20,
      0.04 - (1 + Math.sin(t / 90)) / 70
    );
    ref.current.position.y = (0.1 + Math.sin(t / 2)) / 10;
  });
  return (
    <group {...props} dispose={null}>
      <group ref={ref}>
        <group
          rotation={[0, Math.PI - 180, 0]}
          position={[-3.2, -0.68, 2.9]}
          scale={0.8}
        >
          <Carla
            rotation={[0, Math.PI - 0.4, 0]}
            position={[-1.8, 0, 0.8]}
            scale={[0.35, 0.35, 0.35]}
          />
          <ImageScreen position={[0, 1.8, -5]} />
          <Ground />
        </group>
      </group>
    </group>
  );
}

const NewHero = () => {
  return (
    <div id="canvas-container" className="w-full h-screen bg-black text-center">
      <Canvas shadows camera={{ position: [-12.5, 2, 10], fov: 16 }}>
        <Bounds makeDefault fit clip observe margin={0.3}>
          <color attach="background" args={["black"]} />
          <fog attach="fog" args={["black", 15, 20]} />
          <Suspense fallback={null}>
            <Shoe />

            <ambientLight intensity={0.5} />
            <spotLight position={[0, 10, 0]} intensity={0.3} />
            <directionalLight position={[-50, 0, -40]} intensity={0.7} />
          </Suspense>
        </Bounds>
      </Canvas>
    </div>
  );
};

export default NewHero;
