// components/RobotArmScene.jsx
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";
import { Grid } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as TWEEN from "three/examples/jsm/libs/tween.module";

const RobotModel = () => {
  const groupRef = useRef(new THREE.Group());
  const [dae, setDae] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const kinematicsRef = useRef(null);
  const tweenParamsRef = useRef({});
  const { camera } = useThree();

  useEffect(() => {
    const loader = new ColladaLoader();
    setIsLoading(true);
    setError(null);

    console.log('Starting to load model...');
    const modelPath = process.env.NODE_ENV === 'production' ? '/models/collada/abb_irb52_7_120.dae' : 'models/collada/abb_irb52_7_120.dae';
    console.log('Model path:', modelPath);

    // Add error event listener to the loader
    loader.manager.onError = (url) => {
      console.error('Error loading:', url);
      setError(`Failed to load model from ${url}`);
      setIsLoading(false);
    };

    loader.load(
      modelPath,
      (collada) => {
        try {
          console.log('Model loaded successfully:', collada);
          const scene = collada.scene;
          
          // Log scene information
          console.log('Scene children:', scene.children.length);
          scene.traverse((child) => {
            if (child.isMesh) {
              console.log('Found mesh:', child.name);
              console.log('Original material:', child.material);
              
              // Create a new material with different properties
              const newMaterial = new THREE.MeshPhongMaterial({
                color: 0xe0e0e0,  // Light grey with a slight blue tint
                specular: 0xffffff,
                emissive: 0xffffff,
                emissiveIntensity: 0.1,  // Reduced for subtle glow
                shininess: 30,  // Balanced shininess
                flatShading: true
              });
              
              // Replace the material
              child.material = newMaterial;
              child.material.needsUpdate = true;
              
              // Log the modified material properties
              console.log('Modified material properties:', {
                color: child.material.color.getHexString(),
                specular: child.material.specular.getHexString(),
                emissive: child.material.emissive.getHexString(),
                emissiveIntensity: child.material.emissiveIntensity,
                shininess: child.material.shininess
              });
            }
          });

          // Rotate the entire scene to handle Z-UP to Y-UP conversion
          scene.rotation.x = -Math.PI / 2;
          scene.scale.set(8, 8, 8);
          
          // Clear existing children and add new scene
          if (groupRef.current) {
            while (groupRef.current.children.length > 0) {
              groupRef.current.remove(groupRef.current.children[0]);
            }
            groupRef.current.add(scene);
          }
          
          if (collada.kinematics) {
            console.log('Kinematics found:', collada.kinematics);
            kinematicsRef.current = collada.kinematics;
            setupTween();
          } else {
            console.warn('No kinematics found in the model');
          }
          
          setIsLoading(false);
        } catch (err) {
          console.error('Error processing model:', err);
          setError(`Error processing model: ${err.message}`);
          setIsLoading(false);
        }
      },
      (progress) => {
        const percent = (progress.loaded / progress.total * 100).toFixed(2);
        console.log('Loading progress:', percent + '%');
        console.log('Loaded:', progress.loaded, 'Total:', progress.total);
      },
      (error) => {
        console.error('Error loading model:', error);
        console.error('Error details:', {
          message: error.message,
          stack: error.stack,
          type: error.type
        });
        setError(`Failed to load robot model: ${error.message}`);
        setIsLoading(false);
      }
    );

    return () => {
      if (groupRef.current) {
        while (groupRef.current.children.length > 0) {
          groupRef.current.remove(groupRef.current.children[0]);
        }
      }
    };
  }, []);

  const setupTween = () => {
    if (!kinematicsRef.current) {
      console.error('No kinematics available for tweening');
      return;
    }

    const duration = THREE.MathUtils.randInt(1000, 5000);
    const target = {};
    const kinematics = kinematicsRef.current;
    const tweenParams = tweenParamsRef.current;

    console.log('Setting up tween with kinematics:', kinematics);

    for (const prop in kinematics.joints) {
      if (!kinematics.joints[prop].static) {
        const joint = kinematics.joints[prop];
        const old = tweenParams[prop] ?? joint.zeroPosition;
        tweenParams[prop] = old;
        target[prop] = THREE.MathUtils.randInt(joint.limits.min, joint.limits.max);
      }
    }

    new TWEEN.Tween(tweenParams)
      .to(target, duration)
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate((obj) => {
        for (const prop in kinematics.joints) {
          if (!kinematics.joints[prop].static) {
            kinematics.setJointValue(prop, obj[prop]);
          }
        }
      })
      .start();

    setTimeout(setupTween, duration);
  };

  useFrame((state, delta) => {
    TWEEN.update();
    
    // Camera animation
    const timer = state.clock.getElapsedTime();
    camera.position.x = Math.cos(timer) * 18;
    camera.position.y = 12;
    camera.position.z = Math.sin(timer) * 18;
    camera.lookAt(0, 6, 0);
  });

  if (error) {
    console.error('Rendering error state:', error);
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }

  if (isLoading) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#a855f7" />
      </mesh>
    );
  }

  return <primitive object={groupRef.current} />;
};

const RobotArmScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 2, 3], fov: 45 }}
      style={{ 
        width: "500px", 
        height: "500px",
        display: "block"
      }}
    >
      <ambientLight intensity={20} />
      <hemisphereLight
        intensity={20}
        groundColor={0xffffff}
        color={0xffffff}
        position={[0, 1, 0]}
      />
      <directionalLight
        intensity={20}
        position={[5, 5, 5]}
        color={0xffffff}
      />
      <directionalLight
        intensity={20}
        position={[-5, 5, -5]}
        color={0xffffff}
      />
      <pointLight
        intensity={20}
        position={[0, 10, 0]}
        color={0xffffff}
      />
      <spotLight
        intensity={20}
        position={[0, 15, 0]}
        angle={0.5}
        penumbra={0.5}
        color={0xffffff}
      />
      <Grid
        args={[25, 30]}
        cellColor={0xc1c1c1}
        sectionColor={0x8d8d8d}
        fadeDistance={40}
        fadeStrength={1}
        followCamera={false}
        infiniteGrid={true}
      />
      <RobotModel />
    </Canvas>
  );
};

export default RobotArmScene;
