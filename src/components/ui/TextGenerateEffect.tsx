import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import cn from "classnames";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const animationControls = useAnimation(); // Corrected line
    let wordsArray = words.split(" ");
    useEffect(() => {
        console.log(wordsArray);
        animationControls.start("visible");
    }, []);

    const renderWords = () => {
        return (
            <motion.div animate={animationControls} initial="hidden">
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className={` ${idx > 3 ? "text-purple" : "text-black"
                                } opacity-0`}
                            variants={{
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        duration: 2,
                                        delay: idx * 0.2,
                                    },
                                },
                                hidden: { opacity: 0 },
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="my-4">
                <div className="leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
