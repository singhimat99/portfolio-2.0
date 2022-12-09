import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Header from "../components/Header";

export default function Home() {
    return (
        <main className="h-screen max-w-7xl mx-auto snap-y snap-mandatory overflow-scroll">
            <Head>
                <title>Himat Singh</title>
            </Head>

            {/* Hero  */}
            <Hero />

            <section id="about" className="w-full h-screen snap-start">
                hey
            </section>
            {/* About  */}
            {/* Skills  */}
            {/* Projects  */}
            {/* Contact Me  */}
        </main>
    );
}
