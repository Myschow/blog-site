"use client";
import React, { useState, useEffect, useRef } from 'react';

interface SoundProps {
    isPlaying: boolean;
    userInteracted: boolean;
}

const Sound = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [userInteracted, setUserInteracted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleUserInteraction = () => {
        setUserInteracted(true);
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(error => console.error('Audio play failed:', error));
        }
    };

    const toggleSound = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(error => console.error('Audio play failed:', error));
            }
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

            

{!userInteracted && (
    <button 
        className="fixed bottom-4 right-4 bg-pixel-dark border-2 border-pixel-gray text-white w-10 h-10 sm:w-12 sm:h-12 cursor-pointer font-pixel z-50 hover:bg-pixel-darker active:bg-gray-900 active:border-gray-600 transition-all flex items-center justify-center rounded-full"
        title="Enable Sound"
        onClick={handleUserInteraction}
        style={{ imageRendering: 'pixelated' }}
    >
        <span className="text-xs sm:text-sm">yy</span>
    </button>
)}
        </div>
    );
};

export default Sound;