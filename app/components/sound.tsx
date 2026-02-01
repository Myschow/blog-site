"use client";
import React, { useState, useEffect, useRef } from 'react';

const messages = (setCurrentMessage: React.Dispatch<React.SetStateAction<string | null>>) => {
    const messageTexts = [
        "Oh NO :)",
        "Now u will see...",
        "what it's like to have ",
        "Earworms!! :P",
        "There is no stop button!",
    ];

    let index = 0;

    const displayNext = () => {
        if (index < messageTexts.length) {
            setCurrentMessage(messageTexts[index]);
            const currentIndex = index;
            index++;
            
            // Last message stays longer (2500ms instead of 1500ms)
            const displayDuration = currentIndex === messageTexts.length - 1 ? 2500 : 1500;
            
            setTimeout(() => {
                setCurrentMessage(null);
                // Last message gets extra delay before appearing
                const delayBeforeNext = currentIndex === messageTexts.length - 2 ? 1000 : 300;
                setTimeout(displayNext, delayBeforeNext);
            }, displayDuration);
        }
    };

    displayNext();
};

const Sound = () => {
    const [userInteracted, setUserInteracted] = useState(false);
    const [currentMessage, setCurrentMessage] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleUserInteraction = () => {
        setUserInteracted(true);
        messages(setCurrentMessage);
        
        if (audioRef.current) {
            audioRef.current.play()
                .catch(error => console.error('Audio play failed:', error));
        }
    };

    // Debug: Check if audio loads
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('loadeddata', () => {
                console.log('Audio loaded successfully');
            });
            
            audioRef.current.addEventListener('error', (e) => {
                console.error('Audio loading error:', e);
                console.log('Audio source:', audioRef.current?.src);
            });
        }
    }, []);

    return (
        <div>
            <audio 
                ref={audioRef}
                loop 
                preload="auto"
            >
                <source src="/sounds/pixel_anime_relax.mp3" type="audio/mpeg" />
                <source src="/sounds/pixel_anime_relax.ogg" type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>

            {/* Message overlay */}
            {currentMessage && (
                <div className="fixed inset-0 flex items-center justify-center z-[60] pointer-events-none">
                    <div className="backdrop-blur-sm px-8 py-4 rounded-lg">
                        <p className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-center 
                                      drop-shadow-[0_0_15px_rgba(250,204,21,0.7)]">
                            {currentMessage}
                        </p>
                    </div>
                </div>
            )}

            {!userInteracted && (
                <button 
                    className="fixed bottom-4 right-4 bg-pixel-dark border-2 border-pixel-gray text-white w-10 h-10 sm:w-12 sm:h-12 cursor-pointer font-pixel z-50 hover:bg-pixel-darker active:bg-gray-900 active:border-gray-600 transition-all flex items-center justify-center rounded-full"
                    title="Enable Sound"
                    onClick={handleUserInteraction}
                    style={{ imageRendering: 'pixelated' }}
                >
                    <span className="text-[0.6rem] sm:text-[0.65rem]">Don't</span>
                </button>
            )}
        </div>
    );
};

export default Sound;
