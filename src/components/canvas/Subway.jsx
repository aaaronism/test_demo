import React, { Suspense, useEffect, useState, useRef, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { OrbitControls, Preload, ScrollControls, useGLTF, useScroll, Scroll } from "@react-three/drei";

import CanvasLoader from "../Loader";

export const FLOOR_HEIGHT = 2.3
export const NB_FLOORS = 3;

const Subway = (props) => {
    const train = useGLTF("./subway/scene.gltf");
    const ref = useRef();
    const tl = useRef();
    const scroll = useScroll()

    useFrame((state, delta) => {
        tl.current.seek(scroll.offset * tl.current.duration())
    })

    useLayoutEffect(() => {
        console.log(ref.current)
        console.log("hi")
        tl.current = gsap.timeline({defaults: {duration:2}})

        tl.current.to(
            ref.current.position,
            {
                duration: 2,
                y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
            },
            0
        )

        tl.current.to(
            ref.current.rotation,
            { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
            0
          );
          tl.current.to(
            ref.current.rotation,
            { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
            1
          );
      
          // Office movement
          tl.current.to(
            ref.current.position,
            {
              duration: 1,
              x: -1,
              z: 2,
            },
            0
          );
          tl.current.to(
            ref.current.position,
            {
              duration: 1,
              x: 1,
              z: 2,
            },
            1
          );
        }, []);


    return(
        <group {...props} dispose={null} ref={ref}>
        <mesh>
            <hemisphereLight intensity={2} />
            <pointLight intensity={50} />
            <primitive
            object={train.scene}
            scale={2}
            position={[0, -5.25, -2.3]}
            rotation={[0.05, 1.07, -0.07]}
            />
        </mesh>
        </group>
    )
}

const SubwayCanvas = () => {
    return(
        <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [40, 3, 5], fov: 35 }}
        gl={{ preserveDrawingBuffer: true }}
        // style={{width: '100%', height: '100%'}}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
          />
          <ScrollControls
          damping={0.15}
          pages={3}
          >
            <Subway />
          </ScrollControls>
        </Suspense>
        <Preload all />
        </Canvas>
    )
}

export default SubwayCanvas