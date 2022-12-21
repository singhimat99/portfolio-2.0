import { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import { Skills, PageInfo, Socials, Projects } from "../typings";
import {
    fetchPageInfo,
    fetchProjects,
    fetchSkills,
    fetchSocials,
} from "../utils/fetchData";

type Props = {
    pageInfo?: PageInfo | undefined;
    projects?: Projects[];
    skills?: Skills[];
    socials?: Socials[];
};

export default function Home({ pageInfo, skills, projects, socials }: Props) {
    return (
        <main className="h-screen max-w-6xl mx-auto md:snap-y md:snap-mandatory overflow-auto scrollbar scrollbar-track-gray-500/40 scrollbar-thumb-light-highlight/40 dark:scrollbar-thumb-dark-highlight">
            <Head>
                <title>Himat Singh</title>
            </Head>

            {/* Hero  */}
            <Hero socials={socials} />

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
                <ProjectsSection projects={projects} />
            </section>
            <section
                id="skills"
                className="w-full h-screen snap-start border border-green-500"
            >
                <SkillsSection skills={skills} />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const projects: Projects[] = await fetchProjects();
    const skills: Skills[] = await fetchSkills();
    const socials: Socials[] = await fetchSocials();

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
