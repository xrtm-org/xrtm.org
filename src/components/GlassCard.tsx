import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const GlassCard = ({ children, className = '', onClick }: GlassCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`
        relative overflow-hidden
        rounded-2xl
        border border-black/5 dark:border-white/10
        bg-white/60 dark:bg-zinc-900/40
        backdrop-blur-xl
        p-8
        shadow-2xl shadow-black/5 dark:shadow-white/5
        transition-shadow duration-300
        ${className}
      `}
            onClick={onClick}
        >
            {/* Spotlight effect */}
            <div
                className="pointer-events-none absolute -inset-px transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
                }}
            />
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {children}
        </motion.div>
    );
};

export default GlassCard;
