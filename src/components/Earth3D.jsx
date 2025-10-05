import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";

export default function Earth3D() {
  const earthTexture = useTexture("/assets/earthmap.jpg"); // add this file

  return (
    <section id="earth3d" className="p-8 max-w-6xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-3 text-center">Explore Earth in 3D</h2>
      <Canvas className="w-full h-[500px] rounded-lg">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <mesh>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial map={earthTexture} />
        </mesh>
        <OrbitControls enableZoom={true} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
      </Canvas>
    </section>
  );
}
