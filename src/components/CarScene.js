import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CarScene(props) {
  const { nodes, materials } = useGLTF("/free_car_001.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_body.geometry}
        material={materials.MAIN}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.door_l.geometry}
          material={materials.MAIN}
          position={[0.91, 0.68, 0.64]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.win_door_l001.geometry}
            material={materials.WINDOW}
            position={[-0.15, 0.7, -0.73]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.door_r.geometry}
          material={materials.MAIN}
          position={[-0.91, 0.68, 0.64]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.win_door_r001.geometry}
            material={materials.WINDOW}
            position={[0.15, 0.7, -0.73]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.free_number.geometry}
          material={materials.MAIN}
          position={[0, 0.79, -1.77]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior.geometry}
          material={materials.MAIN}
          position={[0.94, 0.6, -0.07]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.44, 0.4, 0.4]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wheel_bl.geometry}
          material={materials.MAIN}
          position={[0.78, 0.33, -1.24]}
          rotation={[0, 1.57, 0]}
          scale={0.32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wheel_br.geometry}
          material={materials.MAIN}
          position={[-0.78, 0.33, -1.24]}
          rotation={[0, 1.57, 0]}
          scale={0.32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wheel_fl.geometry}
          material={materials.MAIN}
          position={[0.78, 0.33, 1.07]}
          rotation={[0, 1.57, 0]}
          scale={0.32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wheel_fr.geometry}
          material={materials.MAIN}
          position={[-0.78, 0.33, 1.07]}
          rotation={[0, 1.57, 0]}
          scale={0.32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.windows.geometry}
          material={materials.WINDOW}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/free_car_001.gltf");
