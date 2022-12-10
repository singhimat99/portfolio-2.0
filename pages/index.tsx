import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
    return (
        <main className="h-screen max-w-7xl mx-auto md:snap-y md:snap-mandatory overflow-auto">
            <Head>
                <title>Himat Singh</title>
            </Head>

            {/* Hero  */}
            <Hero />

            <section id="about" className="w-full h-screen snap-start">
                <About />
            </section>
            <section id="projects" className="w-full h-screen snap-start">
                <Projects />
            </section>
            <section id="skills" className="w-full h-screen snap-start">
                <Skills />
            </section>
            <section id="contact" className="w-full h-screen snap-start">
                <Contact />
            </section>
            <div className="md:h-[50vh] md:snap-end"></div>
            {/* About  */}
            {/* Skills  */}
            {/* Projects  */}
            {/* Contact Me  */}
        </main>
    );
}
