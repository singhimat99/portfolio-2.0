import React from "react";
import Image from "next/image";
import portrait from "../public/profile-pic.png";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    pageInfo: PageInfo | undefined;
};
export default function About({ pageInfo }: Props) {
    // console.log(urlFor(pageInfo?.professionalImage).url());
    return (
        <div className="flex flex-col justify-center items-center md:gap-4">
            <h2 className="section-title">About</h2>
            <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 m-8 md:mt-2">
                <Image
                    src={urlFor(pageInfo?.professionalImage).url()}
                    width={225}
                    height={225}
                    alt="picture of Himat Singh"
                    className="w-56 aspect-auto rounded-full md:rounded-lg md:w-64 xl:w-96 mt-24 md:mt-0"
                />
                <div className="flex flex-col justify-center ">
                    <h3 className="text-3xl tracking-wider text-center">
                        A brief look at my Background
                    </h3>
                    <p className="text-center md:m-8">
                        {pageInfo?.backgroundInformation}
                    </p>
                </div>
            </div>
        </div>
    );
}
