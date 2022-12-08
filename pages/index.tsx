import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Header from "../components/Header";

export default function Home() {
    return (
        <div className="text-light-secondary dark:text-dark-secondary h-screen max-w-7xl mx-auto">
            <Head>
                <title>Himat Singh</title>
            </Head>
            <Header />
            {/* Hero  */}
            <section id="hero">
                <Hero />
            </section>
            {/* About  */}
            {/* Skills  */}
            {/* Projects  */}
            {/* Contact Me  */}
        </div>
    );
}
