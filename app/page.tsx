'use client';
import React, { useState } from 'react';

export default function Home() {
    const [showAboutMe, setShowAboutMe] = useState(false);

    const toggleAboutMe = () => {
        setShowAboutMe(!showAboutMe);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Nazar Viniarskyi</h2>
                <p className="text-xl mb-2">Numer albumu: 119762</p>
                <p className="text-xl">Uczelnia, w której studiuję: Społeczna Akademija Nauk</p>
                <button
                    className="about-me-button" // Використовуємо окремий клас для стилізації кнопки
                    onClick={toggleAboutMe}
                >
                    About me
                </button>
            </div>
            {showAboutMe && (
                <div className="mt-4 p-4 bg-gray-100 rounded about-me-text"> {/* Додано клас about-me-text */}
                    <p> Nazywam się Nazar Viniarskyi,
                        mam 18 lat i studiuję w Społecznej Akademii Nauk.
                        Pochodzę z Ukrainy, ale obecnie studiuję w Polsce.
                        W wolnym czasie zazwyczaj spędzam czas z przyjaciółmi,
                        gram w gry i chodzę na siłownię.  </p>
                </div>
            )}
        </main>
    );
}
