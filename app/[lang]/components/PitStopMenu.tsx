"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

type Dictionary = typeof import('../../../dictionaries/en.json');

export default function PitStopMenu({ 
    isOpen, 
    onClose,
    dict,
}: { 
    isOpen: boolean; 
    onClose: () => void;
    dict: Dictionary
}) {
    const menuVariants: Variants = {
        closed: {
            clipPath: "circle(0px at 100% 0%)",
            transition: {
                type: "spring", 
                stiffness: 400,
                damping: 40,
            }
        },
        open: {
            clipPath: "circle(200% at 90% 10%)",
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
            }
        }
    };

    const listVariants: Variants = {
        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
        open: {
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const itemVariants: Variants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-accent text-slate-900"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 p-4 font-bold text-xl hover:scale-110 transition-transform"
                    >
                        {dict.navigation.close}
                    </button>

                    <motion.ul
                        variants={listVariants}
                        className="flex flex-col gap-8 text-center text-4xl font-bold"
                    >
                        <motion.li variants={itemVariants}>
                            <Link href="#about" onClick={onClose} className="hover:opacity-50 transition-opacity">
                                {dict.navigation.about}
                            </Link>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <Link href="#" onClick={onClose} className="hover:opacity-50 transition-opacity">
                                {dict.navigation.projects}
                            </Link>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <Link href="#" onClick={onClose} className="hover:opacity-50 transition-opacity">
                                {dict.navigation.contact}
                            </Link>
                        </motion.li>
                    </motion.ul>

                    <LanguageSwitcher/>
                </motion.div>
            )}
        </AnimatePresence>
    );
}