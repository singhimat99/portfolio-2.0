import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <div className="bg-light-primary dark:bg-dark-primary text-light-secondary dark:text-dark-secondary h-screen">
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
        </div>
    );
}
