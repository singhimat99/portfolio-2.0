import React from "react";

type Props = {};

export default function BackgroundAnimation({}: Props) {
    return (
        <>
            {/* <div className="w-full h-screen absolute bg-hero-background bg-cover bg-center opacity-5">
                <div className="w-full h-full backdrop-grayscale"></div>
            </div> */}
            <div className="relative h-[95%] -z-30 filter blur-md">
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
            </div>
        </>
    );
}
