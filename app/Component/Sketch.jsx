'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Box = () => {
    const meshRef = useRef()
    
    useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    
    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial />
        </mesh>
    )
}

const Sketch = () => {

  return (
    <Canvas className='bg-amber-400'>
        <Box />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
    </Canvas>
  )
}

export default Sketch