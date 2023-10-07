import React from 'react'
import { OrbitControls } from '@react-three/drei'
import SubwayCanvas from './canvas/Subway'

const About = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            {/* <ambientLight intensity={50} /> */}
            {/* <OrbitControls enableZoom={false} /> */}
            {/* <ScrollControls> */}
                <SubwayCanvas />
            {/* </ScrollControls> */}
            <h1>About</h1>
            <h2></h2>
        </section>
    )
}

export default About