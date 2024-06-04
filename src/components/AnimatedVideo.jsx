import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedVideo = ({ videoSrc, threshold = 0.5 }) => {
    const controls = useAnimation();
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({ width: '80%' });
                } else {
                    controls.start({ width: '100%' });
                }
            },
            { threshold: threshold }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [controls, threshold]);

    return (
        <motion.div
            ref={videoRef}
            initial={{ width: '100%' }}
            animate={controls}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-8"
        >
            <video
                className="pointer-events-none"
                autoPlay
                muted
                playsInline
                loop
                src={videoSrc}
                width="100%"
            />
        </motion.div>
    );
};

export default AnimatedVideo;
