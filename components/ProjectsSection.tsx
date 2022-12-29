import React from "react";
import Image from "next/image";
// import portrait from "../public/profile-pic.png";
import { Projects } from "../typings";
import { urlFor } from "../sanity";
import { useTheme } from "../pages/_app";
import Link from "next/link";
import Project from "./Project";

type Props = {
    projects: Projects[] | undefined;
};

export default function ProjectsSection({ projects }: Props) {
    const { isDark } = useTheme();
    const projectsTemp = [1, 2, 3, 4, 5];

    return (
        <div className="relative flex flex-col justify-center h-full max-w-full overflow-hidden overflow-y-none mt-10">
            <h2 className="section-title">Projects</h2>
            <div className="relative w-full flex flex-row overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 py-8 scrollbar-thin scrollbar-track-gray-500/40 scrollbar-thumb-light-highlight dark:scrollbar-thumb-dark-highlight">
                {projects ? (
                    projects.map((project) => {
                        return <Project key={project._id} project={project} />;
                    })
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            {/* <div className="w-[1999px] h-[300px] lg:h-[400px] xl:hidden absolute top-64 left-0 right-0 bg-light-highlight/10 dark:bg-dark-highlight/10 -skew-y-12 " /> */}
        </div>
    );
}
