import React from 'react';
import { motion } from 'framer-motion';

const Block = ({ x, y, delay, text, size = 12 }: { x: number; y: number; delay: number; text?: string; size?: number }) => {
    return (
        <motion.g
            initial={{ opacity: 0, y: y - 20 }}
            animate={{ opacity: 1, y: y }}
            transition={{
                delay,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15
            }}
        >
            <rect
                x={x}
                y={0} // relative to motion.g translation
                width={size}
                height={size}
                rx={1}
                className="fill-slate-800 dark:fill-slate-200"
            />
            {text && (
                <text
                    x={x + size / 2}
                    y={size / 2 + 1}
                    fontSize="4"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-white dark:fill-black font-mono font-bold pointer-events-none"
                    style={{ fontSize: '3px' }}
                >
                    {text}
                </text>
            )}
        </motion.g>
    );
};

const AnimatedLogo = ({ className = '', size = 40 }: { className?: string; size?: number }) => {
    // Define positions for "xrtm"
    // This is a simplified representation based on the "lego" style
    const blocks = [
        // X
        { x: 0, y: 0, delay: 0.1 }, { x: 10, y: 0, delay: 0.2 },
        { x: 5, y: 5, delay: 0.3, text: '[1 0]' },
        { x: 0, y: 10, delay: 0.4 }, { x: 10, y: 10, delay: 0.5 },

        // R
        { x: 20, y: 0, delay: 0.6 }, { x: 25, y: 0, delay: 0.7 }, { x: 30, y: 0, delay: 0.8 },
        { x: 20, y: 5, delay: 0.9 }, { x: 30, y: 5, delay: 1.0 },
        { x: 20, y: 10, delay: 1.1 }, { x: 25, y: 10, delay: 1.2, text: 'r' },

        // T
        { x: 40, y: 0, delay: 1.3 }, { x: 45, y: 0, delay: 1.4 }, { x: 50, y: 0, delay: 1.5 },
        { x: 45, y: 5, delay: 1.6 },
        { x: 45, y: 10, delay: 1.7 },

        // M
        { x: 60, y: 0, delay: 1.8 }, { x: 75, y: 0, delay: 1.9 },
        { x: 60, y: 5, delay: 2.0 }, { x: 65, y: 5, delay: 2.1 }, { x: 70, y: 5, delay: 2.2 }, { x: 75, y: 5, delay: 2.3 },
        { x: 60, y: 10, delay: 2.4 }, { x: 75, y: 10, delay: 2.5, text: '0; 1' },
    ];

    return (
        <svg
            width={size * 2}
            height={size}
            viewBox="0 0 80 20"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            {blocks.map((b, i) => (
                <Block key={i} x={b.x} y={b.y} delay={b.delay} text={b.text} size={8} />
            ))}
        </svg>
    );
};

export default AnimatedLogo;
