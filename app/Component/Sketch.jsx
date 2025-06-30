'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'

const Sketch = () => {
  return (
    <Canvas className='bg-amber-400'>
        <mesh>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
    </Canvas>
  )
}

export default Sketch