import React from "react";
import Image from "next/image";
import { Projects } from "../typings";
import { urlFor } from "../sanity";
import { useTheme } from "../pages/_app";

type Props = {
    project: Projects;
};

export default function ProjectModal({ project }: Props) {
    const { isDark } = useTheme();
    let imageUrl = urlFor(project?.projectImage)?.url();
    if (project.projectImageDark) {
        imageUrl = isDark
            ? urlFor(project?.projectImageDark)?.url()
            : urlFor(project?.projectImage)?.url();
    }
    return (
        <div
            key={project._id}
            className="w-screen h-full flex-shrink-0 snap-center flex flex-col justify-center items-center gap-4"
        >
            <div className="relative w-80% md:w-[50%]">
                <Image
                    src={imageUrl}
                    width={1400}
                    height={800}
                    alt="project image"
                    className="w-full"
                />
                {/* <button className="absolute bottom-3 left-2/4 transform -translate-x-1/2 px-4 border border-light-secondary  dark:border-dark-secondary  bg-light-primary dark:bg-dark-primary">
                                        More Info
                                    </button> */}
            </div>
            <div className="mx-5 md:max-w-xl space-y-4">
                <h3 className="text-4xl font-semibold text-center">
                    {project.title}
                </h3>
                <div className="text-center text-sm">
                    {project.summary} <span>Read More...</span>
                </div>
            </div>
            <div className="flex gap-2">
                {project.linkToDemo && (
                    <a
                        href={project.linkToDemo}
                        target="_blank"
                        className="py-1 px-2 border-2 border-light-secondary dark:border-dark-secondary hover:bg-gray-500/50 active:bg-gray-500/50 rounded-md uppercase tracking-wider"
                    >
                        Demo
                    </a>
                )}
                {project.linkToGithub && (
                    <a
                        target="_blank"
                        href={project.linkToGithub}
                        className="py-1 px-2 border-2 border-light-secondary dark:border-dark-secondary hover:bg-gray-500/50 active:bg-gray-500/50 rounded-md uppercase tracking-wider"
                    >
                        Github
                    </a>
                )}
                {project.linkToBlog && (
                    <a
                        target="_blank"
                        href={project.linkToBlog}
                        className="py-1 px-2 border-2 border-light-secondary dark:border-dark-secondary hover:bg-gray-500/50 active:bg-gray-500/50 rounded-md uppercase tracking-wider"
                    >
                        Blog
                    </a>
                )}
            </div>
            <ul className="flex justify-center items-center gap-4">
                {project.technologies.map((skill) => {
                    return (
                        <li key={skill._id}>
                            <Image
                                src={urlFor(skill?.skillImage)?.url()}
                                width={400}
                                height={400}
                                alt={`image of ${skill.title}`}
                                className={`w-5 md:w-8`}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
