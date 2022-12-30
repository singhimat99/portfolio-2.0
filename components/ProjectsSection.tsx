import React from "react";
import { Projects } from "../typings";
import Project from "./Project";

type Props = {
    projects: Projects[] | undefined;
};

export default function ProjectsSection({ projects }: Props) {
    return (
        <div className="relative flex flex-col justify-center h-full max-w-full overflow-hidden overflow-y-none">
            <h2 className="section-title mb-4">Projects</h2>
            <div className="relative w-full flex flex-row overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 py-8 scrollbar-thin scrollbar-track-gray-500/40 scrollbar-thumb-light-highlight dark:scrollbar-thumb-dark-highlight">
                {projects ? (
                    projects
                        .sort((a, b) => a.priority - b.priority)
                        .map((project) => {
                            return (
                                <Project key={project._id} project={project} />
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
