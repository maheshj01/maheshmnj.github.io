// src/components/Main.js
import React from "react";
import { useDarkMode } from "../contexts/AppThemeProvider";
import avatarImage from '../assets/img/public_profile.jpg';
import pdf from '../assets/docs/My_Resume.pdf';
import { Button } from "react-bootstrap";
function Main() {
    const { darkMode } = useDarkMode();

    const themeStyles = {
        light: {
            background: "bg-white",
            text: "text-gray-800",
            button: "bg-blue-500 hover:bg-blue-600 text-white",
            avatar: "border-slate-50"
        },
        dark: {
            background: "bg-gray-800",
            text: "text-gray-100",
            button: "bg-blue-600 hover:bg-blue-700 text-white",
            avatar: "border-indigo-950"
        }
    };

    const currentTheme = darkMode ? themeStyles.dark : themeStyles.light;

    return (
        <main className={`mx-auto flex-grow my-16 p-8${currentTheme.background}`}>
            <section className="flex flex-col md:flex-row items-center justify-between mb-16 px-4">
                <div className={`w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg animate-slide-left border-4 ${currentTheme.avatar} `}>
                    <img
                        src={avatarImage}
                        alt="Mahesh Jamdade"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 mb-8 mt-8 animate-slide-right flex flex-col items-center">
                    <h1 className={`text-4xl md:text-6xl font-bold ${currentTheme.text}`}>
                        Mahesh Jamdade
                    </h1>
                    <p className={`text-xl md:text-2xl mt-4 ${currentTheme.text}`}>
                        Full Stack Developer
                    </p>
                    <div className="mt-8 flex flex-row justify-center space-x-4 sm:space-y-0 sm:space-x-4">
                        <Button
                            href={pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${currentTheme.button} px-6 py-2 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105`}
                        >
                            Resume
                        </Button>

                        <Button
                            href="https://blog.maheshjamdade.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${currentTheme.button} px-6 py-2 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105`}
                        >
                            Blog
                        </Button>
                    </div>
                </div>
            </section>
            <div className="h-80" />
        </main >
    );
}

export default Main;