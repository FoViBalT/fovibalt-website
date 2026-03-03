'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
    words: string[];
    className?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

/**
 * Cycles through an array of words with a typewriter effect + blinking cursor.
 * Great for dynamic hero subtitles.
 */
export default function TypewriterText({
    words,
    className = '',
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 2000,
}: TypewriterTextProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setCurrentText(word.substring(0, currentText.length + 1));

                    if (currentText.length + 1 === word.length) {
                        setTimeout(() => setIsDeleting(true), pauseDuration);
                    }
                } else {
                    setCurrentText(word.substring(0, currentText.length - 1));

                    if (currentText.length === 0) {
                        setIsDeleting(false);
                        setCurrentWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={className}>
            {currentText}
            <span
                style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1em',
                    background: 'var(--Accent_1)',
                    marginLeft: '2px',
                    verticalAlign: 'text-bottom',
                    animation: 'cursorBlink 1s step-end infinite',
                }}
            />
        </span>
    );
}
