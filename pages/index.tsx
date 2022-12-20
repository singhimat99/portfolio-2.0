import { useEffect } from "react";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
    return (
        <main className="h-screen max-w-6xl mx-auto md:snap-y md:snap-mandatory overflow-auto scrollbar scrollbar-track-gray-500/40 scrollbar-thumb-light-highlight/40 dark:scrollbar-thumb-dark-highlight">
            <Head>
                <title>Himat Singh</title>
            </Head>

            {/* Hero  */}
            <Hero />

            <section
                id="about"
                className="w-full snap-center border border-red-500"
            >
                <About />
            </section>
            <section
                id="projects"
                className="w-full h-screen snap-center border border-purple-500"
            >
                <Projects />
            </section>
            <section
                id="skills"
                className="w-full h-screen snap-start border border-green-500"
            >
                <Skills />
            </section>
            <section
                id="contact"
                className="w-full snap-start border border-blue-500"
            >
                <Contact />
            </section>
            <footer className="relative w-screen h-[30vh] snap-end bg-black text-white border border-red-500">
                <ul>
                    <li>Home</li>
                </ul>
            </footer>
        </main>
    );
}
