import React from "react";
import Image from "next/image";
import portrait from "../public/profile-pic.png";
import { Projects } from "../typings";
import { urlFor } from "../sanity";
import { useTheme } from "../pages/_app";

type Props = {
    projects: Projects[] | undefined;
};

export default function ProjectsSection({ projects }: Props) {
    const { isDark } = useTheme();
    const projectsTemp = [1, 2, 3, 4, 5];

    return (
        <div className="relative flex flex-col justify-center h-full max-w-full overflow-hidden overflow-y-none">
            <h2 className="section-title">Projects</h2>
            <div className="relative w-full flex flex-row overflow-x-scroll over-y-hidden snap-x snap-mandatory z-10">
                {projects ? (
                    projects.map((project) => {
                        let imageUrl = urlFor(project?.projectImage)?.url();
                        if (project.projectImageDark) {
                            imageUrl = isDark
                                ? urlFor(project?.projectImageDark)?.url()
                                : urlFor(project?.projectImage)?.url();
                        }
                        return (
                            <div
                                key={project._id}
                                className="w-screen h-full flex-shrink-0 snap-center flex flex-col justify-center items-center"
                            >
                                <div className="relative">
                                    <Image
                                        src={imageUrl}
                                        width={300}
                                        height={300}
                                        alt="project image"
                                        className="w-80 md:w-96"
                                    />
                                    <button className="absolute bottom-3 left-2/4 transform -translate-x-1/2 px-4 border border-light-secondary  dark:border-dark-secondary  bg-light-primary dark:bg-dark-primary">
                                        More Info
                                    </button>
                                </div>
                                <div className="mx-10 md:max-w-xl space-y-4">
                                    <h3 className="text-4xl font-semibold text-center">
                                        {project.title}
                                    </h3>
                                    <p className="text-center">
                                        {project.summary}
                                    </p>
                                </div>
                                <ul className="flex justify-center items-center gap-2">
                                    {project.technologies.map((skill) => {
                                        return (
                                            <li key={skill._id}>
                                                <Image
                                                    src={urlFor(
                                                        skill?.skillImage
                                                    )?.url()}
                                                    width={400}
                                                    height={400}
                                                    alt={`image of ${skill.title}`}
                                                    className={`w-10 md:w-16`}
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            {/* <div className="w-[1999px] h-[300px] lg:h-[400px] xl:hidden absolute top-64 left-0 right-0 bg-light-highlight/10 dark:bg-dark-highlight/10 -skew-y-12 " /> */}
        </div>
    );
}
