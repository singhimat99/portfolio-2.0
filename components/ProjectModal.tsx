import React from "react";

type Props = {
    open: boolean;
};

export default function ProjectModal({ open }: Props) {
    if (!open) return null;
    return (
        <div className="fixed bg-black/50 top-0 left-0 right-0 bottom-0 z-100"></div>
    );
}
