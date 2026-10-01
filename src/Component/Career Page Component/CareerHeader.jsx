import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const NeuralNetworkCanvas = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Tech-inspired color palette
    const colors = [
      "#3a86ff", // Blue
      "#ff006e", // Pink
      "#8338ec", // Purple
      "#06d6a0", // Teal
      "#ffd166", // Yellow
    ];

    // Background gradient
    const bgGradient = ctx.createLinearGradient(0, 0, width, height);
    bgGradient.addColorStop(0, "#0f172a"); // Deep blue
    bgGradient.addColorStop(1, "#1e3a8a"); // Royal blue

    // Nodes for neural network
    const nodes = [];
    const nodeCount = 0;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 4 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Create initial connections
    nodes.forEach((node) => {
      const connectionCount = 3 + Math.floor(Math.random() * 4);
      for (let i = 0; i < connectionCount; i++) {
        const target = nodes[Math.floor(Math.random() * nodes.length)];
        if (target !== node && !node.connections.includes(target)) {
          node.connections.push(target);
        }
      }
    });

    // Particles
    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.2 + Math.random() * 0.5,
        baseSize: Math.random() * 3 + 1,
        frequency: Math.random() * 0.1 + 0.01,
      });
    }

    // Draw connections between nodes
    const drawConnections = (time) => {
      nodes.forEach((node) => {
        node.connections.forEach((target) => {
          const dx = node.x - target.x;
          const dy = node.y - target.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 300) {
            // Animate connection line
            const pulse = (Math.sin(time * 0.001 + node.pulse) + 1) / 2;
            const opacity = 0.1 + pulse * 0.2;

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);

            // Gradient for connection line
            const gradient = ctx.createLinearGradient(
              node.x,
              node.y,
              target.x,
              target.y
            );
            gradient.addColorStop(
              0,
              `${node.color}${Math.floor(opacity * 255)
                .toString(16)
                .padStart(2, "0")}`
            );
            gradient.addColorStop(
              1,
              `${target.color}${Math.floor(opacity * 255)
                .toString(16)
                .padStart(2, "0")}`
            );

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5 + pulse * 1.5;
            ctx.stroke();
          }
        });
      });
    };

    // Draw nodes
    const drawNodes = (time) => {
      nodes.forEach((node) => {
        // Add pulsing effect
        const pulse = (Math.sin(time * 0.001 + node.pulse) + 1) / 2;
        const currentSize = node.size + pulse * 3;

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentSize, 0, Math.PI * 2);

        // Radial gradient for glow
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          currentSize * 3
        );
        gradient.addColorStop(0, `${node.color}ff`);
        gradient.addColorStop(1, `${node.color}00`);

        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };

    // Draw particles
    const drawParticles = (time) => {
      particles.forEach((particle) => {
        const pulse = Math.sin(time * particle.frequency) * 0.5 + 1;
        const size = particle.baseSize * pulse;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);

        // Radial gradient for glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          size * 3
        );
        gradient.addColorStop(
          0,
          `${particle.color}${Math.floor(particle.alpha * 255)
            .toString(16)
            .padStart(2, "0")}`
        );
        gradient.addColorStop(1, `${particle.color}00`);

        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };

    // Animation loop
    const animate = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Draw background
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw elements
      drawConnections(time);
      drawNodes(time);
      drawParticles(time);

      // Update nodes
      nodes.forEach((node) => {
        node.x += node.speedX;
        node.y += node.speedY;
        node.pulse += 0.01;

        // Boundary with bounce
        if (node.x < 0 || node.x > width) node.speedX *= -1;
        if (node.y < 0 || node.y > height) node.speedY *= -1;

        // Mouse interaction
        const dx = node.x - mousePosition.x;
        const dy = node.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (1 - distance / 150) * 2;
          node.x += dx * force * 0.05;
          node.y += dy * force * 0.05;
        }
      });

      // Update particles
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Boundary with wrap-around
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Mouse move interaction
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10"
    />
  );
};

const TechCareerHeader = () => {
  return (
    <div className="relative sm:min-h-[500px] min-h-[400px] overflow-hidden  px-4 flex items-center justify-center py-32">
      <NeuralNetworkCanvas />

      <div className="relative max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h1 className="H1 font-extrabold capitalize text-white mb-2 leading-tight">
          Connect Your
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
            {" "}
            Future
          </span>
        </h1>

        <motion.p
          className="H6 text-center text-off_white  max-w-4xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Joining GDFX means becoming part of a dynamic, innovation-driven team
          where your skills and ideas are valued. We offer professional growth,
          cutting-edge technology, and meaningful projects in a collaborative,
          inclusive environment. With a strong focus on work-life balance,
          rewards, and impactful contributions, GDFX empowers you to thrive and
          succeed.
        </motion.p>

        <Link to={"/contact"} onclick={() => window.scrollTo(0, 0)}>
          {" "}
          <button className="px-8  py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 flex items-center gap-2 group">
            Contact Us
            <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TechCareerHeader;
