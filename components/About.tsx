import React from "react";
import Image from "next/image";
import portrait from "../public/profile-pic.png";
import { PageInfo } from "../typings";

type Props = {
    pageInfo: PageInfo | undefined;
};

export default function About({ pageInfo }: Props) {
    return (
        <div className="flex flex-col justify-center items-center md:gap-8">
            <h2 className="section-title">About</h2>
            <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 m-8">
                <Image
                    src={portrait}
                    alt="picture of Himat Singh"
                    className="w-56 aspect-auto rounded-full md:rounded-lg md:w-64 xl:w-96 mt-24 md:mt-0"
                />
                <div className="flex flex-col justify-center ">
                    <h3 className="text-3xl tracking-wider text-center">
                        A brief look at my Background
                    </h3>
                    <p className="text-center md:m-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto inventore dicta illo tempore mollitia dolores
                        dolorum dolor ex totam eveniet ut, ipsam maxime neque,
                        ducimus molestiae blanditiis odio laborum eaque!
                    </p>
                </div>
            </div>
        </div>
    );
}
