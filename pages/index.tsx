import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Header from "../components/Header";

export default function Home() {
    return (
        <main className=" h-screen max-w-7xl mx-auto">
            <Head>
                <title>Himat Singh</title>
            </Head>

            {/* Hero  */}
            <section id="hero">
                <Hero />
            </section>
            {/* About  */}
            {/* Skills  */}
            {/* Projects  */}
            {/* Contact Me  */}
        </main>
    );
}
