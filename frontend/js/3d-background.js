// 3D Background with Three.js - Headphones and Musical Notes

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    // Add some fog for depth
    scene.fog = new THREE.FogExp2(0x050814, 0.002);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create Headphones Group
    const headphones = new THREE.Group();

    // Material for headphones - Wireframe for tech/audio vibe
    const headphoneMaterial = new THREE.MeshBasicMaterial({
        color: 0x00F0FF, // Primary Cyan
        wireframe: true,
        transparent: true,
        opacity: 0.2
    });

    // Left ear cup (torus)
    const earCupGeometry = new THREE.TorusGeometry(3, 1, 16, 50);
    const leftEarCup = new THREE.Mesh(earCupGeometry, headphoneMaterial);
    leftEarCup.position.x = -5;
    leftEarCup.rotation.y = Math.PI / 2;
    headphones.add(leftEarCup);

    // Right ear cup (torus)
    const rightEarCup = new THREE.Mesh(earCupGeometry, headphoneMaterial);
    rightEarCup.position.x = 5;
    rightEarCup.rotation.y = Math.PI / 2;
    headphones.add(rightEarCup);

    // Headband - curved using multiple cylinders
    const headbandMaterial = new THREE.MeshBasicMaterial({
        color: 0x00F0FF,
        wireframe: true,
        transparent: true,
        opacity: 0.2
    });

    // Create curved headband using multiple segments
    const segments = 20;
    const radius = 7;
    for (let i = 0; i < segments; i++) {
        const angle = (Math.PI * i) / segments;
        const segmentGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1, 8);
        const segment = new THREE.Mesh(segmentGeometry, headbandMaterial);

        segment.position.x = Math.cos(angle + Math.PI) * radius;
        segment.position.y = Math.sin(angle + Math.PI) * radius + 3;
        segment.rotation.z = -angle;

        headphones.add(segment);
    }

    // Add connecting arms
    const armGeometry = new THREE.CylinderGeometry(0.3, 0.3, 5, 8);
    const leftArm = new THREE.Mesh(armGeometry, headbandMaterial);
    leftArm.position.set(-5, 2, 0);
    leftArm.rotation.z = Math.PI / 6;
    headphones.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, headbandMaterial);
    rightArm.position.set(5, 2, 0);
    rightArm.rotation.z = -Math.PI / 6;
    headphones.add(rightArm);

    scene.add(headphones);

    // Create Musical Note Particles
    function createNoteTexture(noteSymbol) {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#9D00FF';
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(noteSymbol, 32, 32);

        const texture = new THREE.CanvasTexture(canvas);
        return texture;
    }

    const noteSymbols = ['♪', '♫', '♬', '♩'];
    const musicalNotes = new THREE.Group();
    const noteCount = 100;

    for (let i = 0; i < noteCount; i++) {
        const noteSymbol = noteSymbols[Math.floor(Math.random() * noteSymbols.length)];
        const texture = createNoteTexture(noteSymbol);

        const noteMaterial = new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            opacity: 0.6 + Math.random() * 0.4
        });

        const note = new THREE.Sprite(noteMaterial);
        note.scale.set(2, 2, 1);

        // Random position
        note.position.x = (Math.random() - 0.5) * 80;
        note.position.y = (Math.random() - 0.5) * 80;
        note.position.z = (Math.random() - 0.5) * 80;

        // Store initial position and random velocity for animation
        note.userData = {
            initialY: note.position.y,
            velocity: Math.random() * 0.02 + 0.01,
            amplitude: Math.random() * 2 + 1
        };

        musicalNotes.add(note);
    }

    scene.add(musicalNotes);

    camera.position.z = 35;

    // Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    // Event Listeners
    document.addEventListener('mousemove', onDocumentMouseMove);
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('scroll', onDocumentScroll);

    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    }

    function onDocumentScroll() {
        const scrollY = window.scrollY;
        // Rotate based on scroll
        headphones.rotation.z = scrollY * 0.001;
        musicalNotes.rotation.y = scrollY * 0.0005;
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        // Constant rotation for headphones
        headphones.rotation.x += 0.001;
        headphones.rotation.y += 0.002;

        // Mouse interaction easing
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        headphones.rotation.y += 0.05 * (targetX - headphones.rotation.y);
        headphones.rotation.x += 0.05 * (targetY - headphones.rotation.x);

        // Gentle floating movement
        headphones.position.y = Math.sin(elapsedTime * 0.5) * 1;

        // Animate musical notes - floating upward and rotating
        musicalNotes.rotation.y += 0.0005;
        musicalNotes.children.forEach((note, index) => {
            // Floating animation
            note.position.y += note.userData.velocity;
            note.position.x += Math.sin(elapsedTime + index) * 0.01;

            // Reset position when note goes too high
            if (note.position.y > 40) {
                note.position.y = -40;
            }

            // Gentle rotation
            note.material.rotation += 0.01;
        });

        renderer.render(scene, camera);
    }

    animate();
});
