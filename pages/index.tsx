import { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import SocialsAside from "../components/SocialsAside";
import { Skills, PageInfo, Socials, Projects } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

type Props = {
    pageInfo?: PageInfo;
    projects?: Projects[];
    skills?: Skills[];
    socials?: Socials[];
};

export default function Home({ pageInfo, skills, projects, socials }: Props) {
    return (
        <main className="w-full flex justify-center scrollbar overflow-y-scroll scrollbar-track-gray-500/40 scrollbar-thumb-light-highlight/40 dark:scrollbar-thumb-dark-highlight">
            <div className="min-h-screen max-w-6xl md:snap-y md:snap-mandatory overflow-y-scroll">
                <Head>
                    <title>Himat Singh</title>
                </Head>

                <SocialsAside socials={socials} />
                <Hero socials={socials} pageInfo={pageInfo} />

                <section
                    id="about"
                    className="w-full snap-center h-screen min-h-[500px]"
                >
                    <About pageInfo={pageInfo} />
                </section>

                <section
                    id="projects"
                    className="w-full h-screen min-h-[900px] snap-start"
                >
                    <ProjectsSection projects={projects} />
                </section>

                <section id="skills" className="w-full h-screen snap-start">
                    <SkillsSection skills={skills} />
                </section>

                <section id="contact" className="w-full snap-start">
                    <Contact />
                </section>

                <Footer socials={socials} />
            </div>
        </main>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await sanityClient.fetch(
        groq`*[_type == "pageInfo"][0]`
    );
    const projects: Projects[] = await sanityClient.fetch(
        groq`*[_type == "projects"] {...,technologies[]->}`
    );
    const skills: Skills[] = await sanityClient.fetch(
        groq`*[_type == "skills"]`
    );
    const socials: Socials[] = await sanityClient.fetch(
        groq`*[_type == "socials"]`
    );

    return {
        props: {
            pageInfo,
            projects,
            skills,
            socials,
        },
        revalidate: 10,
    };
};
