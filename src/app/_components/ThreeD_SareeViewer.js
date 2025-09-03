'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={0.4} />;
}

const ThreeD_SareeViewer = ({ modelPath }) => {
  return (
    <div className="w-full h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing bg-gradient-to-br from-gray-100 to-gray-200">
      <Canvas camera={{ position: [0, 0.5, 3], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Model modelPath={modelPath} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.0} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default ThreeD_SareeViewer;