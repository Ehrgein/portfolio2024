import React from 'react'
import {fragment, vertex} from './shader'
import { useControls } from 'leva';
import { useFrame} from '@react-three/fiber';
import { Mesh } from 'three';
import { ShaderMaterial } from 'three';
import { Html, useTexture } from '@react-three/drei';
import { Vector2 } from 'three';

function Model() {

  const plane = React.useRef<Mesh>(null!)
  const texture = useTexture("/images/restaurant.jpg");
  texture.needsUpdate = true;
  

  const [mouse, setMouse] = React.useState(new Vector2(0.5, 0.5));
  const [prevMouse, setPrevMouse] = React.useState(new Vector2(0.5, 0.5));

  const easeFactor = React.useRef(0.02);
  const mouseRef = React.useRef(new Vector2(0.5, 0.5));
  const targetMouse = new Vector2(0.5, 0.5);
  const mouseStopTimeout = React.useRef(null);
  const prevMouseRef = React.useRef(new Vector2(0.5, 0.5));
  const lastMouseRef = React.useRef(new Vector2(0.5, 0.5));


  const { amplitude, waveLength } = useControls({
    uTime: {value: 0},
    amplitude: { value: 0.25, min: 0, max: 5, step: 0.05},
    waveLength: { value: 5, min: 0, max: 20, step: 1 },
  });

  

  const uniforms = React.useRef({
    
    // uAmplitude: {value: amplitude},
    // uWaveLength: {value:  waveLength},
    // uTime: {value: 0},
    // uTexture: {value: texture},
    u_texture: { value: texture },
    u_mouse: { value: new Vector2(0.5, 0.5) },
    u_prevMouse: { value: new Vector2(0.5, 0.5) },
    u_aberrationIntensity: { value: 0.0 }, // Initialize to 0.0
  })


  // useFrame(() => {

  //   const material = plane.current.material as ShaderMaterial

  //   material.uniforms.uTime.value += 0.03;
  //   material.uniforms.uAmplitude.value = amplitude;
  //   material.uniforms.uWaveLength.value = waveLength
  // })

  const isFirstMove = React.useRef(true); // Tracks the first mouse movement

  const handleMouseMove = (e) => {
    if (e.uv) {
      // On the first move, force immediate synchronization of all positions
      if (isFirstMove.current) {
        mouseRef.current.set(e.uv.x, e.uv.y);
        prevMouseRef.current.set(e.uv.x, e.uv.y);
        targetMouse.set(e.uv.x, e.uv.y);
        isFirstMove.current = false; // Mark as initialized
      }
  
      // Update previous and target mouse positions
      prevMouseRef.current.copy(targetMouse);
      targetMouse.set(e.uv.x, e.uv.y);
  
      uniforms.current.u_aberrationIntensity.value = 0.3; // Reset distortion intensity
    }
  };

  const handleMouseEnter = (e) => {
    if (e.uv) {
      const { x, y } = e.uv;
      targetMouse.set(x, y);
      mouseRef.current.set(x, y);
      prevMouseRef.current.set(x, y);
      easeFactor.current = 0.02; // Smooth re-entry
    }
  };

  const handleMouseLeave = () => {
    easeFactor.current = 0.05; // Slow easing on leave
    targetMouse.copy(prevMouseRef.current); // Reset target to previous position
    uniforms.current.u_aberrationIntensity.value = 0.0; // Optional: fade effect
  };

// useFrame(() => {
//   if (plane.current) {
//     const material = plane.current.material as ShaderMaterial;

//     if (material.uniforms) {
//       // Smoothly interpolate mouseRef toward targetMouse
//       mouseRef.current.x += (targetMouse.x - mouseRef.current.x) * easeFactor.current;
//       mouseRef.current.y += (targetMouse.y - mouseRef.current.y) * easeFactor.current;

//       // Update shader uniforms
//       material.uniforms.u_mouse.value.copy(mouseRef.current);
//       material.uniforms.u_prevMouse.value.copy(prevMouseRef.current);

//       // Gradually decay aberration intensity
//       material.uniforms.u_aberrationIntensity.value = Math.max(
//         0.0,
//         material.uniforms.u_aberrationIntensity.value - 0.05
//       );
//     }
//   }
// });

useFrame(() => {
  if (plane.current) {
    const material = plane.current.material as ShaderMaterial;

    if (material.uniforms) {
      mouseRef.current.x += (targetMouse.x - mouseRef.current.x) * easeFactor.current;
      mouseRef.current.y += (targetMouse.y - mouseRef.current.y) * easeFactor.current;

      material.uniforms.u_mouse.value.copy(mouseRef.current);
      material.uniforms.u_prevMouse.value.copy(prevMouseRef.current);

      material.uniforms.u_aberrationIntensity.value = Math.max(
        0.0,
        material.uniforms.u_aberrationIntensity.value - 0.05
      );
    }
  }
});


  return (

    <mesh ref={plane}      
    scale={[2, 2, 1]}
    onPointerMove={handleMouseMove} 
    onPointerLeave={handleMouseLeave}
    onPointerEnter={handleMouseEnter}
    >
        <planeGeometry args={[3, 3, 64, 64]}/>
        {/* <meshBasicMaterial color={"red"} wireframe={true}/> */}
        <shaderMaterial 
        // wireframe={true}
        uniforms={uniforms.current}
        vertexShader={vertex} fragmentShader={fragment} >
        </shaderMaterial>
        </mesh>

  )
}

export default Model