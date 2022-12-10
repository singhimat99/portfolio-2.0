import React from "react";
import Image from "next/image";
import portrait from "../public/profile-pic.png";

type Props = {};

export default function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <div className="relative flex flex-col justify-center h-full max-w-full overflow-hidden ">
            <h2 className="section-title">Projects</h2>
            <div className="border border-red-500 relative w-full flex flex-row overflow-x-scroll over-y-hidden snap-x snap-mandatory z-10">
                {projects.map((project) => (
                    <div className="w-screen h-screen flex-shrink-0 snap-center flex flex-col justify-center items-center space-y-5">
                        <div className="relative">
                            <Image
                                src={portrait}
                                alt=""
                                className="w-60 md:w-80"
                            />
                            <button className="absolute bottom-3 left-2/4 transform -translate-x-1/2 px-4 border border-light-secondary  dark:border-dark-secondary  bg-light-primary dark:bg-dark-primary">
                                More Info
                            </button>
                        </div>
                        <div className="mx-10 md:max-w-xl space-y-4">
                            <h3 className="text-4xl font-semibold text-center">
                                Project Title
                            </h3>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Enim aspernatur voluptate
                                quibusdam officia iusto sequi architecto,
                                officiis sint maiores, magnam, aliquam ad!
                                Rerum, officiis aliquid. Quaerat facere
                                consectetur cupiditate quam.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-[1999px] h-[300px] lg:h-[400px] xl:hidden absolute top-64 left-0 right-0 bg-light-highlight/10 dark:bg-dark-highlight/10 -skew-y-12 " />
        </div>
    );
}
