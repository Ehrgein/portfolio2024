export const vertex = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

export const fragment = `
    varying vec2 vUv;

    uniform float uTime;
    uniform vec2 u_resolution;

    void main() {
        // Normalize coordinates to [-1, 1] (no aspect ratio correction here)
        vec2 uv = vUv * 2.0 - 1.0;

        // Colors
        vec3 backgroundColor = vec3(0.93, 0.91, 0.87); // #EDE9DE
        vec3 sphereColor = vec3(0.173, 0.157, 0.157);     // #2C2828
        vec3 ringColor = vec3(0.118, 0.114, 0.114);       // #1E1D1D

        // Parameters
        float radius = 0.5;         // Radius of the main circle
        float sphereRadius = 0.05;  // Radius of orbiting spheres

        // Calculate orb positions
        vec2 sphere1 = radius * vec2(cos(uTime), sin(uTime));
        vec2 sphere2 = radius * vec2(cos(uTime + 3.14), sin(uTime + 3.14));

        // Render main circle (ring only)
        float distToCenter = length(uv);
        float mainCircle = smoothstep(0.005, 0.0, abs(distToCenter - radius));

        // Render orbiting spheres
        float sphere1Mask = smoothstep(sphereRadius, sphereRadius - 0.005, length(uv - sphere1));
        float sphere2Mask = smoothstep(sphereRadius, sphereRadius - 0.005, length(uv - sphere2));

        // Combine colors
        vec3 color = backgroundColor;
        color = mix(color, ringColor, mainCircle);      // Add ring
        color = mix(color, sphereColor, sphere1Mask);  // Add first orb
        color = mix(color, sphereColor, sphere2Mask);  // Add second orb

        gl_FragColor = vec4(color, 1.0);
    }`;
